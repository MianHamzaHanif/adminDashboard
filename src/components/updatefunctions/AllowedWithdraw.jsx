import React, { useState, useEffect } from 'react';
import { updateAllowedUser, getOwnerAddress, updateAllowedWithdraw } from '../../blockchain/instances/contract';
import { useAccount } from 'wagmi';

const AllowedWithdraw = () => {
    const [userAddress, setUserAddress] = useState('');
    const [status, setStatus] = useState(true); // true = Block, false = Unblock
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [owner, setOwner] = useState('');

    const { address, isConnected } = useAccount();
    

    useEffect(() => {
        // Get owner address from contract
        const fetchOwner = async () => {
            try {
                const ownerAddr = await getOwnerAddress();
                console.log("ownerAddr", ownerAddr);
                setOwner(ownerAddr?.toLowerCase());
            } catch (e) {
                setOwner('');
            }
        };
        fetchOwner();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');
        if (!isConnected) {
            setError('Please connect your wallet.');
            return;
        }
        if (!owner || address.toLowerCase() !== owner) {
            setError('Only the contract owner can call this function.');
            return;
        }
        setLoading(true);
        try {
            await updateAllowedWithdraw(userAddress, status);
            setSuccess('Transaction successful!');
        } catch (err) {
            setError('You cannot call this function. Only allowed user can call');
        } finally {
            setLoading(false);
        }
    };

    let buttonLabel = 'Update';
    let buttonDisabled = loading || !isConnected;
    if (!isConnected) {
        buttonLabel = 'Connect Wallet';
        buttonDisabled = true;
    } else if (isConnected && owner && address.toLowerCase() !== owner) {
        buttonLabel = 'You are not owner';
        buttonDisabled = true;
    }

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
                <h2 style={{ marginBottom: 0, color: '#2b2b2b' }}>Update Allowed Withdraw</h2>
                <input
                    className="all-customers-search-input p-2"
                    placeholder="User Address"
                    value={userAddress}
                    onChange={e => setUserAddress(e.target.value)}
                    style={{ width: '100%' }}
                    required
                />
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                    <span style={{ fontWeight: 500 }}>Status:</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <input
                                type="radio"
                                name="status"
                                checked={status === true}
                                onChange={() => setStatus(true)}
                            />
                            Block
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <input
                                type="radio"
                                name="status"
                                checked={status === false}
                                onChange={() => setStatus(false)}
                            />
                            Unblock
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', fontWeight: 600, fontSize: 18, backgroundColor: "#7B4FE2" }}
                    disabled={buttonDisabled}
                >
                    {buttonLabel}
                </button>
                {success && <div style={{ color: 'green', fontWeight: 500 }}>{success}</div>}
                {error && <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>}
                {isConnected && address && owner && (
                    <div style={{ fontSize: 12, color: '#888', marginTop: 8 }}>
                        Connected: {address.toLowerCase()}<br />
                        Contract Owner: {owner}
                    </div>
                )}
            </form>
        </div>
    );
};

export default AllowedWithdraw; 