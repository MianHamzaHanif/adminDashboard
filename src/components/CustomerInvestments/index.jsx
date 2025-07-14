import React, { useState } from 'react';
import './style.css';

const dummyInvestments = [
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    }, {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    }, {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 20',
        amount: 20,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
    {
        id: 1,
        icon: 'https://apollomass.com/assets/global/images/qHO0xXvfRTXFj3ZiLTq5.png',
        schema: 'Opera Mass 50',
        amount: 50,
        date: 'Jun 24 2025 11:24',
        roi: '0%',
        profit: '0 x 0 = 0 USD',
        capitalBack: 'No',
        timeline: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            percent: 100,
            progress: 100
        }
    },
];

const CustomerInvestments = () => {
    const [search, setSearch] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const filtered = dummyInvestments.filter(row =>
        row.schema.toLowerCase().includes(search.toLowerCase())
    );
    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="site-card">
                    <div className="site-card-header">Investments</div>
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
                                                <th>Icon</th>
                                                <th>Schema</th>
                                                <th>ROI</th>
                                                <th>Profit</th>
                                                <th>Capital Back</th>
                                                <th>Timeline</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginated.length === 0 ? (
                                                <tr><td colSpan={6} style={{ textAlign: 'center' }}>No investments found</td></tr>
                                            ) : paginated.map((row, idx) => (
                                                <tr key={row.id + '-' + idx}>
                                                    <td><img className="avatar-icon" src={row.icon} alt="" /></td>
                                                    <td>
                                                        <strong>
                                                            {row.schema} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-right"><path d="M6 9h6V5l7 7-7 7v-4H6V9z"></path></svg> ${row.amount}
                                                            <span className="invested-amount" style={{ display: 'block' }}>{row.date}</span>
                                                        </strong>
                                                    </td>
                                                    <td><strong>{row.roi}</strong></td>
                                                    <td><strong>{row.profit}</strong></td>
                                                    <td><div className="site-badge pending">{row.capitalBack}</div></td>
                                                    <td>
                                                        <div>
                                                            <strong>
                                                                <span>{row.timeline.days}</span>D : <span>{row.timeline.hours}</span>H : <span>{row.timeline.minutes}</span>M : <span>{row.timeline.seconds}</span>S
                                                            </strong>
                                                            <span className="site-badge primary-bg ms-2">{row.timeline.percent}%</span>
                                                        </div>
                                                        <div className="progress investment-timeline">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={row.timeline.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: row.timeline.progress + '%' }}></div>
                                                        </div>
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
                                            <li className={`paginate_button page-item next${page === totalPages ? ' disabled' : ''}`}> <a href="#" className="page-link" onClick={e => { e.preventDefault(); if (page < totalPages) setPage(page + 1); }}>Next</a></li>
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

export default CustomerInvestments; 