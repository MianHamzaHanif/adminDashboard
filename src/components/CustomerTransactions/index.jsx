import React, { useState } from 'react';
import './style.css';

const dummyTransactions = [
    {
        id: 1,
        date: 'Jun 24 2025 11:24',
        transactionId: 'TRXOBYSKM3SQS',
        type: 'Investment',
        amount: 20,
        gateway: 'System',
        status: 'Success',
    },
    {
        id: 2,
        date: 'Jun 24 2025 11:23',
        transactionId: 'TRXQMNW7JUWOG',
        type: 'Deposit',
        amount: 20,
        gateway: 'MetaMask',
        status: 'Success',
    },
];

const CustomerTransactions = () => {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const filtered = dummyTransactions.filter(row =>
        row.transactionId.toLowerCase().includes(search.toLowerCase()) ||
        row.type.toLowerCase().includes(search.toLowerCase()) ||
        row.gateway.toLowerCase().includes(search.toLowerCase())
    );
    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="site-card">
                    <div className="site-card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h4 className="title" style={{ margin: 0, padding: '4px 5px' }}>Transactions</h4>
                    </div>
                    <div className="site-card-body table-responsive">
                        <div className="site-datatable">
                            <div className="row mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className="col-sm-12 col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className='all-customers-entries'>Show Records</span>{' '}
                                    <select
                                        className="all-customers-select"
                                        value={rowsPerPage}
                                        onChange={e => { setRowsPerPage(Number(e.target.value)); setPage(1); }}
                                    >
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 col-md-6" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <span className='all-customers-entries'>Search: </span>
                                    <input
                                        className="all-customers-search-input"
                                        value={search}
                                        onChange={e => { setSearch(e.target.value); setPage(1); }}
                                        style={{ marginLeft: 8 }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="display data-table dataTable no-footer" style={{ width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Transaction ID</th>
                                                <th>Type</th>
                                                <th>Amount</th>
                                                <th>Gateway</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginated.length === 0 ? (
                                                <tr><td colSpan={6} style={{ textAlign: 'center' }}>No transactions found</td></tr>
                                            ) : paginated.map((row, idx) => (
                                                <tr key={row.id + '-' + idx}>
                                                    <td>{row.date}</td>
                                                    <td>{row.transactionId}</td>
                                                    <td>
                                                        <span className={
                                                            row.type === 'Investment'
                                                                ? 'type-badge investment'
                                                                : row.type === 'Deposit'
                                                                    ? 'type-badge deposit'
                                                                    : 'type-badge'
                                                        }>
                                                            {row.type}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span style={{ color: '#1ca77a', fontWeight: 600 }}>+{row.amount} USD</span>
                                                    </td>
                                                    <td>{row.gateway}</td>
                                                    <td>
                                                        <span className="status-badge success">Success</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row mt-2 align-items-center">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info all-customers-entries" style={{ fontSize: '15px', fontWeight: '500px' }} role="status" aria-live="polite">
                                        {filtered.length === 0
                                            ? 'No entries found'
                                            : `Showing ${(page - 1) * rowsPerPage + 1} to ${Math.min(page * rowsPerPage, filtered.length)} of ${filtered.length} entries`}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers all-customers-entries" style={{ float: 'right' }}>
                                        <ul className="pagination" style={{ marginBottom: 0 }}>
                                            <li className={`paginate_button page-item previous${page === 1 ? ' disabled' : ''}`}> <a href="#" className="page-link" style={{ color: '#000000' }} onClick={e => { e.preventDefault(); if (page > 1) setPage(page - 1); }}>Previous</a></li>
                                            <li className="paginate_button page-item active"><a href="#" className="page-link">{page}</a></li>
                                            <li className={`paginate_button page-item next${page === totalPages ? ' disabled' : ''}`}> <a href="#" className="page-link" style={{ color: '#000000' }} onClick={e => { e.preventDefault(); if (page < totalPages) setPage(page + 1); }}>Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTransactions; 