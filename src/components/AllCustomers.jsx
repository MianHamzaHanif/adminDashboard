import React, { useState, useEffect } from 'react';
import './AllCustomers.css';
import EditCustomerModal from './EditCustomerModal';
import EmailLetterheadModal from './EmailLetterheadModal';
import { useNavigate } from 'react-router-dom';

const dummyData = [
    {
        id: 5356,
        email: 'MuhammdHafizmh2342494@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1481,
        email: 'sufyanmaviya400@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 2791,
        email: 'muhammadrafiqkhan850@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 3080,
        email: 'saleemprince27@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 3917,
        email: 'naeemattri818@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 2806,
        email: 'muneerahmed0044@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 5086,
        email: 'hfzsns@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimuss1@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimussa2@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimussa3@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimussa4@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimussa5@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimussa6@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    },
    {
        id: 1320,
        email: 'alimussa7@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa8@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa9@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa10@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa11@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa12@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa13@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa14@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa15@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }, {
        id: 1320,
        email: 'alimussa16@gmail.com',
        balance: '0.00 USD',
        profit: '0 USD',
        status: 'Active',
        kyc: 'Unverified',
    }
];

const AllCustomers = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editCustomer, setEditCustomer] = useState(null);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const navigate = useNavigate();

    const filtered = dummyData.filter(row =>
        row.email.toLowerCase().includes(search.toLowerCase()) ||
        String(row.id).includes(search)
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
            <EmailLetterheadModal open={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
            <EditCustomerModal open={editModalOpen} onClose={() => setEditModalOpen(false)} customer={editCustomer} />
            <h2 className="all-customers-heading">All Customers</h2>
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
                            <th>USER</th>
                            <th>EMAIL</th>
                            <th>BALANCE</th>
                            <th>PROFIT</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.map((row, idx) => (
                            <tr key={row.id + '-' + idx}>
                                <td><img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" className="all-customers-avatar" /></td>
                                <td>{row.id}</td>
                                <td>{row.email}</td>
                                <td>{row.balance}</td>
                                <td>{row.profit}</td>
                                <td><span className={row.status === 'Active' ? 'status-badge active' : 'status-badge inactive'}>{row.status}</span></td>
                                <td>
                                    <button className="action-btn edit-btn" title="Edit" onClick={() => navigate(`/customers/edit/${row.id}`)}>
                                        <svg width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a1.5 1.5 0 0 1 0 2.12l-1.439 1.439-2.12-2.12 1.439-1.44a1.5 1.5 0 0 1 2.12 0zm-2.56 3.18-2.12-2.12L2 11.44V13.5a.5.5 0 0 0 .5.5h2.06l8.44-8.44z" />
                                        </svg>
                                    </button>
                                    <button className="action-btn email-btn" title="Email" onClick={() => setEmailModalOpen(true)}>
                                        <svg width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.118V5.383zm-.034 6.876-5.64-3.388L8 9.583l-1.326-.712-5.64 3.388A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 5.383v5.735l4.708-2.91L1 5.383z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
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
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>&laquo;</button>
                    <span>Page {page} of {totalPages}</span>
                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>&raquo;</button>
                </div>
            </div>
        </div>
    );
};

export default AllCustomers; 