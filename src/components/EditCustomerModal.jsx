import React, { useState, useEffect } from 'react';
import './EditCustomerModal.css';
import EmailLetterheadModal from './EmailLetterheadModal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const EditCustomerModal = ({ open, onClose, customer }) => {
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [phone, setPhone] = useState(customer?.phone || '');

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    if (!open) return null;
    return (
        <div className="edit-modal-backdrop">
            <EmailLetterheadModal open={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
            <div className="edit-modal edit-modal-wide">
                <button className="edit-modal-back-btn" onClick={onClose}>⟵ Back</button>
                <div className="edit-modal-content">
                    {/* Left Column */}
                    <div className="edit-modal-left">
                        <div className="edit-modal-avatar">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" />
                        </div>
                        <div className="edit-modal-country">Pakistan</div>
                        <div className="edit-modal-actions">
                            <button className="edit-modal-action-btn email" title="Email" onClick={() => setEmailModalOpen(true)}><i className="fa fa-envelope"></i></button>
                            <button className="edit-modal-action-btn add" title="Add"><i className="fa fa-user-plus"></i></button>
                            <button className="edit-modal-action-btn wallet" title="Wallet"><i className="fa fa-wallet"></i></button>
                        </div>
                        <div className="edit-modal-wallets">
                            <div className="edit-modal-wallet main">
                                <div>Main Wallet</div>
                                <div className="edit-modal-wallet-balance">$0.00</div>
                            </div>
                            <div className="edit-modal-wallet profit">
                                <div>Profit Wallet</div>
                                <div className="edit-modal-wallet-balance">$0.00</div>
                            </div>
                        </div>
                        <div className="edit-modal-account-info">
                            <div className="edit-modal-account-title">Account Informations</div>
                            <div className="edit-modal-status-row">
                                <span className="edit-modal-status active">Active</span>
                                <span className="edit-modal-status disabled">Disabled</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="edit-modal-right">
                        <div className="edit-modal-tabs">
                            <button className="active">Informations</button>
                            <button>Investments</button>
                            <button>Earnings</button>
                            <button>Transactions</button>
                            <button>Referral Tree</button>
                            <button>Ticket</button>
                        </div>
                        <div className="edit-modal-card">
                            <div className="edit-modal-card-title">Basic Info</div>
                            <form className="edit-modal-form">
                                <div className="edit-modal-form-row">
                                    <div className="edit-modal-form-group">
                                        <label>User ID:</label>
                                        <input type="text" value={customer?.id || ''} readOnly className="edit-modal-input" />
                                    </div>
                                    <div className="edit-modal-form-group">
                                        <label>First Name:</label>
                                        <input type="text" placeholder="First Name" className="edit-modal-input" />
                                    </div>
                                    <div className="edit-modal-form-group">
                                        <label>Last Name:</label>
                                        <input type="text" placeholder="Last Name" className="edit-modal-input" />
                                    </div>
                                </div>
                                <div className="edit-modal-form-row">
                                    <div className="edit-modal-form-group">
                                        <label>Phone:</label>
                                        <PhoneInput
                                            country={'pk'}
                                            value={phone}
                                            onChange={phone => setPhone('+' + phone)}
                                            inputClass="edit-modal-input"
                                            placeholder="+92 3001234567"
                                            specialLabel=""
                                        />
                                    </div>
                                    <div className="edit-modal-form-group">
                                        <label>Address:</label>
                                        <input type="text" placeholder="Address" className="edit-modal-input" />
                                    </div>
                                    <div className="edit-modal-form-group">
                                        <label>Joining Date:</label>
                                        <input type="text" value={customer?.joiningDate || ''} readOnly className="edit-modal-input" />
                                    </div>
                                </div>
                                <button type="button" className="edit-modal-save">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCustomerModal; 