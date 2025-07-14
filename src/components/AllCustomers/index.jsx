import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import SendMailModal from '../SendMailModal';
import { getUserDepositWithdraw } from '../../blockchain/instances/contract';
import { Contract, ethers } from 'ethers';
import { APOLLOMASS_ADDRESS } from '../../blockchain/addresses/addresses';
import appolomassAbi from '../../blockchain/abis/appolomass.json';
import { formatEther } from 'viem';

const ROOT_ADDRESS = '0x892fB6220119677Cbaf64ed7F1E3A394e6155C56';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

async function traverseReferralTree(root, onAddress, cancelledRef) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new Contract(APOLLOMASS_ADDRESS, appolomassAbi, provider);
    const visited = new Set();
    async function visit(address) {
        if (!address || visited.has(address) || cancelledRef.current) return;
        visited.add(address);
        await onAddress(address);
        for (let idx = 1; idx <= 2; idx++) {
            const child = await contract.referralNodeAddress(address, 1, idx);
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
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cancelledRef = { current: false };
        setLoading(true);
        setUsers([]);
        let idx = 1;
        traverseReferralTree(ROOT_ADDRESS, async (address) => {
            if (cancelledRef.current) return;
            try {
                const { deposit, withdraw } = await getUserDepositWithdraw(address);
                setUsers(prev => [
                    ...prev,
                    {
                        id: idx++,
                        address,
                        deposit,
                        withdraw,
                    },
                ]);
            } catch (e) {
                // skip on error
            }
        }, cancelledRef).then(() => setLoading(false));
        return () => { cancelledRef.current = true; };
    }, []);

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