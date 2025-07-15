import React, { useState } from 'react';
import { updatePreviousWithdrawRecord } from '../../blockchain/instances/contract';

const WithdrawRecord = () => {
    const [userAddress, setUserAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');
        try {
            await updatePreviousWithdrawRecord(userAddress);
            setSuccess('Transaction successful!');
        } catch (err) {
            setError('You cannot call this function. Only allowed user can call');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
            <form onSubmit={handleSubmit} style={{
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                padding: '2.5rem 2rem',
                minWidth: 350,
                maxWidth: 500,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
            }}>
                <h2 style={{ marginBottom: 0, color: '#2b2b2b' }}>Update Withdraw Record</h2>
                <input
                    className="all-customers-search-input p-2"
                    placeholder="User Address"
                    value={userAddress}
                    onChange={e => setUserAddress(e.target.value)}
                    style={{ width: '100%' }}
                    required
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', fontWeight: 600, fontSize: 18, backgroundColor: "#7B4FE2" }}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Update'}
                </button>
                {success && <div style={{ color: 'green', fontWeight: 500 }}>{success}</div>}
                {error && <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>}
            </form>
        </div>
    );
};

export default WithdrawRecord; 