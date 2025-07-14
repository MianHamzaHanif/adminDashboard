import React, { useEffect, useState } from 'react';
import './style.css';

const SendMailModal = ({ show, onClose, userName, userId, onSubmit }) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    useEffect(() => {
        if (!show) {
            setSubject('');
            setMessage('');
            setError('');
        }
    }, [show]);

    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!subject.trim() || !message.trim()) {
            setError('Please enter subject and email details.');
            return;
        }
        setError('');
        onSubmit({ subject, message, userId });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content bg-white site-table-modal">
                <div className="modal-body popup-body">
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    <div className="popup-body-text">
                        <h3 className="title mb-4">
                            Send Mail to
                            {/* <span id="name">{userName}</span> */}
                        </h3>
                        <form onSubmit={handleSubmit} id="send-mail-form">
                            <input type="hidden" name="id" value={userId} />
                            <div className="site-input-groups">
                                <label className="box-input-label">Subject:</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="box-input mb-0"
                                    required
                                    value={subject}
                                    onChange={e => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="site-input-groups">
                                <label className="box-input-label">Email Details</label>
                                <textarea
                                    name="message"
                                    className="form-textarea mb-0"
                                    required
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </div>
                            {error && <div style={{ color: 'red', marginBottom: '10px', marginTop: '8px', fontSize: '15px' }}>{error}</div>}
                            <div className="action-btns">
                                <button type="submit" className="site-btn-sm primary-btn me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send" style={{ width: '20px', height: '20px', marginRight: '5px' }}><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    Send Email
                                </button>
                                <button type="button" className="site-btn-sm red-btn" onClick={onClose} aria-label="Close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x" style={{ width: '20px', height: '20px', marginRight: '5px' }}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMailModal; 