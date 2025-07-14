import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './style.css';
import CustomerInvestments from '../CustomerInvestments';
import CustomerEarnings from '../CustomerEarnings';
import CustomerTransactions from '../CustomerTransactions';
import CustomerReferral from '../CustomerReferral';
import CustomerTickets from '../CustomerTickets';
import UserPackageHistory from './UserPackageHistory';
import WalletLog from './WalletLog';
import ReferralTree from './ReferralTree';
import { getUserIdP20 } from '../../blockchain/instances/contract';
import { formatEther } from 'viem';

// Dummy data for demonstration; replace with real data fetching as needed
const dummyCustomers = [
    { id: 5356, firstName: 'Muhammad', lastName: 'Hafiz', email: 'sufyanmaviya400', phone: '+923001234567', address: 'Lahore' },
    { id: 1481, firstName: '', lastName: '', email: 'sufyanmaviya400@gmail.com', phone: '+92', address: '' },
    // ... add more as needed
];

const EditCustomer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    // const address = query.get('address');
    const deposit = query.get('deposit');
    const withdraw = query.get('withdraw');
    console.log("deposit", deposit);
    console.log("withdraw", withdraw);
    const customer = dummyCustomers.find(c => String(c.id) === id) || {};

    const [firstName, setFirstName] = useState(customer.firstName || '');
    const [lastName, setLastName] = useState(customer.lastName || '');
    const [email] = useState(customer.email || '');
    const [phone, setPhone] = useState(customer.phone || '');
    const [Country, setCountry] = useState(customer.Country || '');
    // const [address, setAddress] = useState(customer.address || '');
    const [accountStatus, setAccountStatus] = useState('active');
    const [depositStatus, setDepositStatus] = useState('active');
    const [withdrawStatus, setWithdrawStatus] = useState('active');
    const [emailVerified, setEmailVerified] = useState(true);
    const [activeTab, setActiveTab] = useState('informations');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userId, setUserId] = useState('');
    const [totalTeam, setTotalTeam] = useState('');


    useEffect(() => {
        async function fetchUserId() {
            if (id) {
                try {
                    const result = await getUserIdP20(id);
                    setUserId(result[0]);
                    setTotalTeam(result[4]);
                } catch (e) {
                    setUserId('');
                }
            }
        }
        fetchUserId();
    }, [id]);

    const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;
    const showPasswordMessage = newPassword && confirmPassword;

    return (
        <div className="edit-customer-bg mt-3">
            {/* <div className="edit-customer-header-row">
                <div className="edit-customer-header-title">Details of Customer</div>
                <button onClick={() => navigate('/customers/all')} className="edit-customer-back-btn">⟵ Back</button>
            </div> */}

            <div className="edit-modal-content edit-customer-content">
                {/* Sidebar */}
                <div className="edit-modal-left">
                    <div className="edit-modal-avatar">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" />
                    </div>
                    {/* <div className="edit-modal-country">Pakistan</div> */}
                    <div className="edit-modal-actions">
                        User ID:  {userId}
                        {/* <button className="edit-modal-action-btn email" title="Send Email"><i className="fa fa-envelope"></i></button>
                        <button className="edit-modal-action-btn add" title="Login As User"><i className="fa fa-user-plus"></i></button>
                        <button className="edit-modal-action-btn wallet" title="Fund Add or Subtract"><i className="fa fa-wallet"></i></button> */}
                    </div>
                    {/* <div className="edit-modal-wallets">
                        <div className="edit-modal-wallet main">
                            <div>Main Wallet</div>
                            <div className="edit-modal-wallet-balance">$0.00</div>
                        </div>
                        <div className="edit-modal-wallet profit">
                            <div>Profit Wallet</div>
                            <div className="edit-modal-wallet-balance">$0.00</div>
                        </div>
                    </div> */}
                    {/* <div className="edit-modal-account-info">
                        <div className="edit-modal-account-title">Account Informations</div>
                        <div className="edit-modal-account-subtitle">
                            <div className="edit-modal-account-subtitle-title">Account Verification</div>
                            <div className="edit-modal-status-row">
                                <button
                                    type="button"
                                    className={`edit-status-btn ${accountStatus === 'active' ? 'active' : ''}`}
                                    onClick={() => setAccountStatus('active')}
                                >
                                    Active
                                </button>
                                <button
                                    type="button"
                                    className={`edit-status-btn ${accountStatus === 'disabled' ? 'disabled' : ''}`}
                                    onClick={() => setAccountStatus('disabled')}
                                >
                                    Disabled
                                </button>
                            </div>
                        </div>
                        <div className="edit-modal-account-subtitle">
                            <div className="edit-modal-account-subtitle-title">Deposit Status</div>
                            <div className="edit-modal-status-row">
                                <button
                                    type="button"
                                    className={`edit-status-btn ${depositStatus === 'active' ? 'active' : ''}`}
                                    onClick={() => setDepositStatus('active')}
                                >
                                    Active
                                </button>
                                <button
                                    type="button"
                                    className={`edit-status-btn ${depositStatus === 'disabled' ? 'disabled' : ''}`}
                                    onClick={() => setDepositStatus('disabled')}
                                >
                                    Disabled
                                </button>
                            </div>
                        </div>
                        <div className="edit-modal-account-subtitle">
                            <div className="edit-modal-account-subtitle-title">Withdraw Status</div>
                            <div className="edit-modal-status-row">
                                <button
                                    type="button"
                                    className={`edit-status-btn ${withdrawStatus === 'active' ? 'active' : ''}`}
                                    onClick={() => setWithdrawStatus('active')}
                                >
                                    Active
                                </button>
                                <button
                                    type="button"
                                    className={`edit-status-btn ${withdrawStatus === 'disabled' ? 'disabled' : ''}`}
                                    onClick={() => setWithdrawStatus('disabled')}
                                >
                                    Disabled
                                </button>
                            </div>
                        </div>
                        <div className="edit-modal-account-subtitle">
                            <div className="edit-modal-account-subtitle-title">Email Verification</div>
                            <div className="edit-modal-status-row">
                                <button
                                    type="button"
                                    className={`edit-status-btn ${emailVerified ? 'active' : ''}`}
                                    onClick={() => setEmailVerified(true)}
                                >
                                    Verified
                                </button>
                                <button
                                    type="button"
                                    className={`edit-status-btn ${!emailVerified ? 'disabled' : ''}`}
                                    onClick={() => setEmailVerified(false)}
                                >
                                    Unverified
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* Main Content */}
                <div className="edit-modal-right">
                    {/* Tabs */}
                    <div className="edit-customer-tabs">
                        <button className={`edit-customer-tab${activeTab === 'informations' ? ' active' : ''}`} onClick={() => setActiveTab('informations')}>
                            <span className="tab-icon"><i className="fa-solid fa-user"></i></span>
                            <span>Informations</span>
                        </button>
                        <button className={`edit-customer-tab${activeTab === 'investments' ? ' active' : ''}`} onClick={() => setActiveTab('investments')}>
                            <span className="tab-icon"><i className="fa-solid fa-anchor"></i></span>
                            <span>Deposit History</span>
                        </button>
                        {/* <button className={`edit-customer-tab${activeTab === 'earnings' ? ' active' : ''}`} onClick={() => setActiveTab('earnings')}>
                            <span className="tab-icon"><i className="fa-solid fa-credit-card"></i></span>
                            <span>Earnings</span>
                        </button> */}
                        <button className={`edit-customer-tab${activeTab === 'transactions' ? ' active' : ''}`} onClick={() => setActiveTab('transactions')}>
                            <span className="tab-icon"><i className="fa-solid fa-right-left"></i></span>
                            <span>Withdraw History</span>
                        </button>
                        <button className={`edit-customer-tab${activeTab === 'referral' ? ' active' : ''}`} onClick={() => setActiveTab('referral')}>
                            <span className="tab-icon"><i className="fa-solid fa-sitemap"></i></span>
                            <span>Referral Tree</span>
                        </button>
                        {/* <button className={`edit-customer-tab${activeTab === 'ticket' ? ' active' : ''}`} onClick={() => setActiveTab('ticket')}>
                            <span className="tab-icon"><i className="fa-solid fa-ticket"></i></span>
                            <span>Ticket</span>
                        </button> */}
                    </div>
                    {/* Card with Form */}
                    <div className="edit-modal-card edit-customer-card">
                        {activeTab === 'informations' && (
                            <>
                                <div className="edit-modal-card-title" >Basic Information</div>
                                <form className="container">
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="edit-modal-form-group">
                                                <label>Customer Address:</label>
                                                <p>{id}</p>
                                                {/* <input type="text" value={customer.id || ''} readOnly className="edit-modal-input" /> */}
                                            </div>
                                            <div className="edit-modal-form-group">
                                                <label>User Deposit:</label>
                                                <p>{formatEther(deposit)}</p>
                                                {/* <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="edit-modal-input" /> */}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                        <div className="edit-modal-form-group">
                                                <label>Total Team</label>
                                                <p>{totalTeam}</p>
                                                {/* <input type="text" value={customer.id || ''} readOnly className="edit-modal-input" /> */}
                                            </div>
                                           
                                            <div className="edit-modal-form-group">
                                                <label>Withdraw:</label>
                                                <p>{formatEther(withdraw)}</p>
                                                {/* <input type="email" value={email} readOnly className="edit-modal-input" /> */}
                                            </div>

                                        </div>

                                        {/* <div className="edit-modal-form-group">
                                            <label>Country:</label>
                                            <input type="text" value={Country} onChange={e => setAddress(e.target.value)} placeholder="Country" className="edit-modal-input" />
                                        </div> */}
                                        {/* <div className="edit-modal-form-group">
                                            <label>Phone:</label>
                                            <PhoneInput
                                                country={'pk'}
                                                value={phone}
                                                onChange={phone => setPhone('+' + phone)}
                                                inputClass="edit-modal-input phone-input-full"
                                                // containerClass="phone-input-container"
                                                placeholder="+92 3001234567"
                                                specialLabel=""
                                            />
                                        </div> */}
                                    </div>
                                    <div className="edit-modal-form-row">
                                        {/* <div className="edit-modal-form-group">
                                            <label>Address:</label>
                                            <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" className="edit-modal-input" />
                                        </div> */}
                                    </div>
                                    {/* <button type="button" className="edit-modal-save edit-customer-save-btn">Save Changes</button> */}
                                </form>
                                {/* Change Password Card */}
                                {/* <div className="site-card" style={{ marginTop: '24px' }}>
                                    <div className="site-card-header">
                                        <h3 className="edit-modal-card-title">Change Password</h3>
                                    </div>
                                    <div className="site-card-body">
                                        <form onSubmit={e => {
                                            e.preventDefault();
                                            if (newPassword !== confirmPassword) {
                                                setPasswordError('Passwords do not match.');
                                                return;
                                            }
                                            setPasswordError('');
                                            // Password change logic here
                                        }} className="change-password-form">
                                            <div className="edit-modal-form-row">
                                                <div className="edit-modal-form-group">
                                                    <label className="box-input-label">New Password:</label>
                                                    <input
                                                        type="password"
                                                        name="new_password"
                                                        className="box-input edit-modal-input"
                                                        required
                                                        value={newPassword}
                                                        onChange={e => {
                                                            setNewPassword(e.target.value);
                                                            setPasswordError('');
                                                        }}
                                                    />
                                                </div>
                                                <div className="edit-modal-form-group">
                                                    <label className="box-input-label">Confirm Password:</label>
                                                    <input
                                                        type="password"
                                                        name="new_confirm_password"
                                                        className="box-input edit-modal-input"
                                                        required
                                                        value={confirmPassword}
                                                        onChange={e => {
                                                            setConfirmPassword(e.target.value);
                                                            setPasswordError('');
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            {showPasswordMessage && (
                                                passwordsMatch ? (
                                                    <div style={{ color: 'green', marginBottom: '10px', marginTop: '8px', fontSize: '15px' }}>Passwords match</div>
                                                ) : (
                                                    <div style={{ color: 'red', marginBottom: '10px', marginTop: '8px', fontSize: '15px' }}>Passwords do not match</div>
                                                )
                                            )}
                                            {passwordError && (
                                                <div style={{ color: 'red', marginBottom: '10px', marginTop: '8px', fontSize: '15px' }}>{passwordError}</div>
                                            )}
                                            <button type="submit" className="edit-modal-save edit-customer-save-btn">Change Password</button>
                                        </form>
                                    </div>
                                </div> */}
                            </>
                        )}
                        {activeTab === 'investments' && (
                            <UserPackageHistory address={id} />
                        )}
                        {activeTab === 'earnings' && (
                            <CustomerEarnings />
                        )}
                        {activeTab === 'transactions' && (
                            <WalletLog address={id} />
                        )}
                        {activeTab === 'referral' && (
                            <ReferralTree address={id} />
                        )}
                        {activeTab === 'ticket' && (
                            <CustomerTickets />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCustomer; 