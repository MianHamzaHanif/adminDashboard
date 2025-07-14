import React, { useState, useEffect } from 'react';
import { getWithdrawLength, userAllWithdrawInfo } from '../../blockchain/instances/contract';

const columns = [
    { label: '#', key: 'index' },
    { label: 'Amount', key: 'amount' },
    { label: 'Time', key: 'time' },
];

const PAGE_SIZE = 10;

export default function WalletLog({ address }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchWithdrawals = async () => {
            if (!address) return;
            setLoading(true);
            try {
                const lengthResult = await getWithdrawLength(address);
                const length = Number(lengthResult?._length || lengthResult[0] || 0);
                const withdraws = [];
                for (let i = 0; i < length; i++) {
                    const info = await userAllWithdrawInfo(address, i);
                    let rawTime = info?._time?.toString?.() || info[1]?.toString?.() || '';
                    let formattedTime = rawTime ? new Date(Number(rawTime) * 1000).toLocaleString() : '';
                    withdraws.push({
                        index: i + 1,
                        amount: info?._amount?.toString?.() || info[0]?.toString?.() || '',
                        time: formattedTime,
                    });
                }
                setData(withdraws);
                setCurrentPage(1); // Reset to first page on data change
            } catch (e) {
                setData([]);
            } finally {
                setLoading(false);
            }
        };
        fetchWithdrawals();
    }, [address]);

    // Pagination logic
    const totalPages = Math.ceil(data.length / PAGE_SIZE);
    const paginatedData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <div style={{ margin: '24px 0' }}>
            <h4>User Withdraw History</h4>
            <table className="all-customers-table">
                <thead>
                    <tr>
                        {columns.map(col => <th key={col.key}>{col.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr><td colSpan={columns.length}>Loading...</td></tr>
                    ) : paginatedData.length === 0 ? (
                        <tr><td colSpan={columns.length}>No Data Found</td></tr>
                    ) : paginatedData.map((row, idx) => (
                        <tr key={idx}>
                            {columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
            {data.length > PAGE_SIZE && (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-4">
                        <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i + 1} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
} 