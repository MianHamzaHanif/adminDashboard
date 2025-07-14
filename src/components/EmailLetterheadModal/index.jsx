import React from 'react';
import './style.css';
// import vtLogo from '../assets/vt-logo.png'; // You may need to add this logo file

const EmailLetterheadModal = ({ open, onClose }) => {
    if (!open) return null;
    const today = new Date().toLocaleDateString();
    return (
        <div className="email-modal-backdrop">
            <div className="email-modal">
                <button className="email-modal-close" onClick={onClose}>×</button>
                <div className="email-letterhead">
                    <div className="email-letterhead-header">
                        <div className="email-letterhead-logo">
                            {/* If you have a logo file, use <img src={vtLogo} ... /> */}
                            <span className="vt-logo-text">VT</span>
                            <span className="vt-brand">VIRTUAL <span>TECH</span></span>
                        </div>
                        <div className="email-letterhead-date">
                            Date: <span className="email-date-line">{today}</span>
                        </div>
                    </div>
                    {/* You can add more content here if needed */}
                </div>
            </div>
        </div>
    );
};

export default EmailLetterheadModal; 