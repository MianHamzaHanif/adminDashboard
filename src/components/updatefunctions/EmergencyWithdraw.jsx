import React, { useState, useEffect } from 'react';
import { emergencyWithdraw, getOwnerAddress, getTokenBalance } from '../../blockchain/instances/contract';
import { useAccount } from 'wagmi';
import { formatEther } from 'viem';

const EmergencyWithdraw = () => {
    const [ownerAddress, setOwnerAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [owner, setOwner] = useState('');
    const [tokenBalance, setTokenBalance] = useState('');
    const [balanceLoading, setBalanceLoading] = useState(false);

    const { address, isConnected } = useAccount();

    useEffect(() => {
        // Get owner address from contract
        const fetchOwner = async () => {
            try {
                const ownerAddr = await getOwnerAddress();
                setOwner(ownerAddr?.toLowerCase());
            } catch (e) {
                setOwner('');
            }
        };
        fetchOwner();
    }, []);

    // Fetch token balance when ownerAddress changes and is valid
    useEffect(() => {
        const fetchBalance = async () => {
          
            setBalanceLoading(true);
            try {
                const bal = await getTokenBalance();
                const formatted = Number(formatEther(bal.toString())).toFixed(2);
                setTokenBalance(formatted);
            } catch (e) {
                setTokenBalance('Error');
            } finally {
                setBalanceLoading(false);
            }
        };
        fetchBalance();
    }, []); // or [ownerAddress] if you want to refetch on address change

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
            await emergencyWithdraw(ownerAddress, amount);
            setSuccess('Transaction successful!');
        } catch (err) {
            setError('You cannot call this function. Only allowed user can call');
        } finally {
            setLoading(false);
        }
    };

    let buttonLabel = 'Withdraw';
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
            <div style={{ width: '100%', maxWidth: 500 }}>
                <div style={{
                    background: '#f3f3fa',
                    borderRadius: 10,
                    padding: '1rem 1.5rem',
                    marginBottom: 24,
                    textAlign: 'center',
                    fontWeight: 500,
                    fontSize: 18,
                    color: '#7b4fe2',
                    border: '1px solid #e0e0e0',
                }}>
                    Contract Balance: {balanceLoading ? 'Loading...' : tokenBalance !== '' ? `${tokenBalance} TOKEN` : 'Enter owner address'}
                </div>
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
                    <h2 style={{ marginBottom: 0, color: '#2b2b2b' }}>Emergency Withdraw</h2>
                    <input
                        className="all-customers-search-input p-2"
                        placeholder="Owner Address"
                        value={ownerAddress}
                        onChange={e => setOwnerAddress(e.target.value)}
                        style={{ width: '100%' }}
                        required
                    />
                    <input
                        className="all-customers-search-input p-2"
                        placeholder="Amount (ETH)"
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        style={{ width: '100%' }}
                        required
                    />
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
        </div>
    );
};

export default EmergencyWithdraw; 