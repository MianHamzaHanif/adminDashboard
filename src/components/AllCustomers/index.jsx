/* global BigInt */
// BigInt global
import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import SendMailModal from '../SendMailModal';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, resetUsers } from '../../features/customers/customersSlice';
import { getUserDepositWithdraw } from '../../blockchain/instances/contract';
import { Contract, ethers } from 'ethers';
import { APOLLOMASS_ADDRESS } from '../../blockchain/addresses/addresses';
import appolomassAbi from '../../blockchain/abis/appolomass.json';
import { formatEther } from 'viem';

// const toBigInt = globalThis.BigInt || window.BigInt;

const ROOT_ADDRESS = '0x892fB6220119677Cbaf64ed7F1E3A394e6155C56';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const BSC_MAINNET_RPC = 'https://bsc-dataseed1.binance.org/';

function getReadProvider() {
    return new ethers.JsonRpcProvider(BSC_MAINNET_RPC);
}

async function traverseReferralTree(root, onUser) {
    const provider = getReadProvider();
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const visited = new Set();
    let idx = 1;
    async function visit(address) {
        if (!address || visited.has(address)) return;
        visited.add(address);
        try {
            const { deposit, withdraw } = await getUserDepositWithdraw(address);
            onUser({
                id: idx++,
                address,
                deposit,
                withdraw,
            });
        } catch (e) {
            // skip on error
        }
        for (let i = 1; i <= 2; i++) {
            const child = await contract.referralNodeAddress(address, 1, i);
            if (child && child !== ZERO_ADDRESS) {
                await visit(child);
            }
        }
    }
    await visit(root);
}

const AllCustomers = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({ name: '', id: '' });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector(state => state.customers.users);
    const navigate = useNavigate();

    // Fetch only if users are empty
    useEffect(() => {
        if (users && users.length > 0) return;
        setLoading(true);
        const loadedUsers = [];
        traverseReferralTree(ROOT_ADDRESS, (user) => {
            loadedUsers.push(user);
            dispatch(setUsers([...loadedUsers]));
        }).then(() => setLoading(false));
    }, [dispatch, users]);

    // Manual refresh
    const handleRefresh = () => {
        setLoading(true);
        dispatch(resetUsers());
        const loadedUsers = [];
        traverseReferralTree(ROOT_ADDRESS, (user) => {
            loadedUsers.push(user);
            dispatch(setUsers([...loadedUsers]));
        }).then(() => setLoading(false));
    };

    // Calculate total deposit and withdraw using BigInt
    const totalDeposit = users.reduce((sum, user) => sum + BigInt(user.deposit), 0n);
    const totalWithdraw = users.reduce((sum, user) => sum + BigInt(user.withdraw), 0n);
    const totalDepositEth = Number(formatEther(totalDeposit.toString())).toFixed(2);
    const totalWithdrawEth = Number(formatEther(totalWithdraw.toString())).toFixed(2);

    const filtered = users.filter(row =>
        row.address.toLowerCase().includes(search.toLowerCase())
    );
    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    useEffect(() => {
        if (page > totalPages) {
            setPage(totalPages === 0 ? 1 : totalPages);
        }
    }, [filtered.length, rowsPerPage, totalPages, page]);

    return (
        <div className="all-customers-container">
            <h6 className="all-customers-heading">All Customers</h6>

            <div style={{
                display: 'flex',
                gap: 24,
                marginBottom: 10,
                justifyContent: 'between',
                alignItems: 'center'
            }}>
                <div>
                    <span style={{ fontWeight: 500, color: '#222', fontSize: 15 }}>
                        Contract Address:&nbsp;
                        <span style={{ color: '#7b4fe2', fontFamily: 'monospace', fontSize: 15 }}>{APOLLOMASS_ADDRESS}</span>
                    </span>
                </div>
                <div style={{
                    background: '#f3f3fa',
                    borderRadius: 10,
                    padding: '0.3rem 1rem',
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#7b4fe2',
                    border: '1px solid #e0e0e0',
                }}>
                    Total Deposit: {totalDepositEth}
                </div>
                <div style={{
                    background: '#f3f3fa',
                    borderRadius: 10,
                    padding: '0.3rem 1rem',
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#f24b6a',
                    border: '1px solid #e0e0e0',
                }}>
                    Total Withdraw: {totalWithdrawEth}
                </div>
            </div>
            <div className="all-customers-controls">
                <div>
                    <span className='all-customers-entries'>Show Records</span>
                    <select
                        className="all-customers-select"
                        value={rowsPerPage}
                        onChange={e => {
                            setRowsPerPage(Number(e.target.value));
                            setPage(1);
                        }}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <div>
                    <span className='all-customers-entries'>Search: </span> <input className="all-customers-search-input" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} />
                </div>
                <button className="all-customers-reload px-3 text-white rounded border-0 outline-0" style={{ backgroundColor: "#7b4fe2" }} onClick={handleRefresh} disabled={loading}>
                    Refresh
                </button>
            </div>
            <div className="all-customers-table-wrapper">
                <table className="all-customers-table">
                    <thead>
                        <tr>
                            <th>AVATAR</th>
                            {/* <th>ID</th> */}
                            <th>ADDRESS</th>
                            <th>DEPOSIT</th>
                            <th>WITHDRAW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && users.length === 0 ? (
                            <tr><td colSpan="6">Loading...</td></tr>
                        ) : paginated.length === 0 ? (
                            <tr><td colSpan="6">No entries found</td></tr>
                        ) : paginated.map((row, idx) => (
                            <tr
                                key={row.address + '-' + idx}
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(`/customers/edit/${row.address}?deposit=${row.deposit}&withdraw=${row.withdraw}`)}
                            >
                                <td><img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" className="all-customers-avatar" /></td>
                                {/* <td>{row.id}</td> */}
                                <td>{row.address}</td>
                                <td>{formatEther(row.deposit)}</td>
                                <td>{formatEther(row.withdraw)}</td>
                            </tr>
                        ))}
                        {loading && users.length > 0 && (
                            <tr><td colSpan="6">Loading more...</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="all-customers-footer-row">
                <div className="all-customers-summary">
                    {filtered.length === 0
                        ? "No entries found"
                        : `Showing ${((page - 1) * rowsPerPage) + 1} to ${Math.min(page * rowsPerPage, filtered.length)} of ${filtered.length} entries`}
                </div>
                <div className="all-customers-pagination">
                    <button disabled={page === 1} onClick={() => setPage(1)}>First</button>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>&laquo;</button>
                    <span>Page {page} of {totalPages}</span>
                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>&raquo;</button>
                    <button disabled={page === totalPages} onClick={() => setPage(totalPages)}>Last</button>
                </div>
            </div>
            <SendMailModal
                show={emailModalOpen}
                onClose={() => setEmailModalOpen(false)}
                userName={selectedUser.name}
                userId={selectedUser.id}
                onSubmit={e => {
                    e.preventDefault();
                    setEmailModalOpen(false);
                }}
            />
        </div>
    );
};

export default AllCustomers; 
