import React, { useState } from 'react';
import './style.css';

const dummyEarnings = [
    {
        id: 1,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'First payout',
    },
    {
        id: 2,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 3,
        date: 'Jul 07 202 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 4,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 5,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 6,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 7,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        status: 'Paid',
        remarks: 'Monthly profit',
    },
    {
        id: 8,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        status: 'Paid',
        remarks: 'Monthly profit',
    },
    {
        id: 9,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        status: 'Paid',
        remarks: 'Monthly profit',
    },
    {
        id: 10,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 11,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },
    {
        id: 12,
        date: 'Jul 01 2025 09:00',
        amount: 10,
        type: 'Referral Bonus',
        form: '--',
        remarks: 'Monthly profit',
    },

];

const CustomerEarnings = () => {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const filtered = dummyEarnings.filter(row =>
        row.date.toLowerCase().includes(search.toLowerCase())
        // ||
        // row.remarks.toLowerCase().includes(search.toLowerCase())
    );
    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const totalEarnings = dummyEarnings.reduce((sum, row) => sum + (Number(row.amount) || 0), 0);

    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="site-card">
                    <div className="site-card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h4 className="title" style={{ margin: 0, padding: '4px 5px' }}>Earnings</h4>
                        <span style={{ background: '#cde7e3', color: '#12706a', fontWeight: 500, borderRadius: 20, padding: '4px 15px', fontSize: 13 }}>
                            Total Earnings {totalEarnings} USD
                        </span>
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
                                                <th>Amount</th>
                                                <th>Type</th>
                                                <th>Profit Form</th>
                                                <th>Description</th>
                                                {/* <th>Remarks</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginated.length === 0 ? (
                                                <tr><td colSpan={6} style={{ textAlign: 'center' }}>No earnings found</td></tr>
                                            ) : paginated.map((row, idx) => (
                                                <tr key={row.id + '-' + idx}>
                                                    <td>{row.date}</td>
                                                    <td>${row.amount}</td>
                                                    <td>{row.type}</td>
                                                    <td>{row.form}</td>
                                                    <td>{row.remarks}</td>
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

export default CustomerEarnings; 