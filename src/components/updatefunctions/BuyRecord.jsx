import React, { useState } from 'react';
import { updatePreviousBuyRecord, getAddressFromUniqueId } from '../../blockchain/instances/contract';
import { ethers } from 'ethers';

const BuyRecord = () => {
    const [userAddress, setUserAddress] = useState('');
    const [inviter, setInviter] = useState('');
    const [packageNo, setPackageNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');
        try {
            let inviterAddress = inviter;
            if (!ethers.isAddress(inviterAddress)) {
                // If not an address, treat as ID and convert
                inviterAddress = await getAddressFromUniqueId(inviterAddress);
            }
            console.log("inviterAddress",inviterAddress)
            await updatePreviousBuyRecord(userAddress, inviterAddress, packageNo);
            setSuccess('Transaction successful!');
        } catch (err) {
            setError('You are not owner. You cannot call this function');
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
                <h2 style={{ marginBottom: 0, color: '#2b2b2b' }}>Update Buy Record</h2>
                <input
                    className="all-customers-search-input p-2"
                    placeholder="User Address"
                    value={userAddress}
                    onChange={e => setUserAddress(e.target.value)}
                    style={{ width: '100%' }}
                    required
                />
                <input
                    className="all-customers-search-input p-2"
                    placeholder="Inviter Address or User ID"
                    value={inviter}
                    onChange={e => setInviter(e.target.value)}
                    style={{ width: '100%' }}
                    required
                />
                <input
                    className="all-customers-search-input p-2"
                    placeholder="Package No (uint256)"
                    type="number"
                    value={packageNo}
                    onChange={e => setPackageNo(e.target.value)}
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

export default BuyRecord; 