import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './EditCustomerModal.css';

// Dummy data for demonstration; replace with real data fetching as needed
const dummyCustomers = [
    { id: 5356, firstName: 'Muhammad', lastName: 'Hafiz', email: 'test@example.com', phone: '+923001234567', password: '', address: 'Lahore', joiningDate: '2023-06-30', },
    // ... add more as needed
];

const EditCustomer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const customer = dummyCustomers.find(c => String(c.id) === id) || {};

    const [firstName, setFirstName] = useState(customer.firstName || '');
    const [lastName, setLastName] = useState(customer.lastName || '');
    const [email] = useState(customer.email || '');
    const [phone, setPhone] = useState(customer.phone || '');
    const [password, setPassword] = useState('');

    return (
        <div style={{ background: '#f8f8fb', minHeight: '100vh', padding: '0 0 40px 0' }}>
            <div style={{ fontSize: 32, fontWeight: 700, margin: '0 0 24px 24px', paddingTop: 24 }}>Details of</div>
            <div className="edit-modal-content" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32 }}>
                {/* Sidebar */}
                <div className="edit-modal-left">
                    <div className="edit-modal-avatar">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" />
                    </div>
                    <div className="edit-modal-country">Pakistan</div>
                    <div className="edit-modal-actions">
                        <button className="edit-modal-action-btn email" title="Email"><i className="fa fa-envelope"></i></button>
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
                {/* Main Content */}
                <div className="edit-modal-right" style={{ flex: 1 }}>
                    <button onClick={() => navigate('/customers/all')} style={{ marginBottom: 18, background: '#6c47e6', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 24px', fontWeight: 500, fontSize: 16, cursor: 'pointer', float: 'right' }}>⟵ Back</button>
                    {/* Tabs */}
                    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #ececec', padding: '18px 24px 0 24px', marginBottom: 18, display: 'flex', gap: 24 }}>
                        <button style={{ background: '#6c47e6', color: '#fff', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 500, fontSize: 16 }}>Informations</button>
                        <button style={{ background: 'none', color: '#222', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 500, fontSize: 16 }}>Investments</button>
                        <button style={{ background: 'none', color: '#222', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 500, fontSize: 16 }}>Earnings</button>
                        <button style={{ background: 'none', color: '#222', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 500, fontSize: 16 }}>Transactions</button>
                        <button style={{ background: 'none', color: '#222', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 500, fontSize: 16 }}>Referral Tree</button>
                        <button style={{ background: 'none', color: '#222', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 500, fontSize: 16 }}>Ticket</button>
                    </div>
                    {/* Card with Form */}
                    <div className="edit-modal-card" style={{ padding: 24 }}>
                        <div className="edit-modal-card-title">Basic Info</div>
                        <form className="edit-modal-form">
                            <div className="edit-modal-form-row">
                                <div className="edit-modal-form-group">
                                    <label>User ID:</label>
                                    <input type="text" value={customer.id || ''} readOnly className="edit-modal-input" />
                                </div>
                                <div className="edit-modal-form-group">
                                    <label>First Name:</label>
                                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="edit-modal-input" />
                                </div>
                                <div className="edit-modal-form-group">
                                    <label>Last Name:</label>
                                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="edit-modal-input" />
                                </div>
                            </div>
                            <div className="edit-modal-form-row">
                                <div className="edit-modal-form-group">
                                    <label>Email:</label>
                                    <input type="email" value={email} readOnly className="edit-modal-input" />
                                </div>
                                <div className="edit-modal-form-group">
                                    <label>Phone Number:</label>
                                    <PhoneInput
                                        country={'pk'}
                                        value={phone}
                                        onChange={phone => setPhone('+' + phone)}
                                        inputClass="edit-modal-input phone-input-full"
                                        containerClass="phone-input-container"
                                        placeholder="+92 3001234567"
                                        specialLabel=""
                                    />
                                </div>
                                <div className="edit-modal-form-group">
                                    <label>Password:</label>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="edit-modal-input" />
                                </div>
                            </div>
                            <button type="button" className="edit-modal-save" style={{ width: '100%', background: '#6c47e6', color: '#fff', fontWeight: 600, fontSize: 18, marginTop: 18 }}>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCustomer; 