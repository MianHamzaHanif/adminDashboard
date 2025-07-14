import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';

const Sidebar = ({ isOpen }) => {
    const [openCustomers, setOpenCustomers] = useState(true);
    const [openKYC, setOpenKYC] = useState(false);
    const [openSchema, setOpenSchema] = useState(false);

    const linkStyle = ({ isActive }) => ({
        color: isActive ? '#7b4fe2' : '#fff',
        textDecoration: 'none',
        fontWeight: 500,
        background: isActive ? '#232b45' : 'none',
        borderRadius: 6,
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 6,
        fontSize: 16,
    });

    // Helper to show/hide text
    const sidebarTextClass = isOpen ? 'sidebar-text' : 'sidebar-text sidebar-text-hidden';
    const sidebarClass = `sidebar${!isOpen ? ' sidebar-collapsed' : ''}`;

    return (
        <div className={sidebarClass} style={{ width: isOpen ? 210 : 60 }}>
            <div className="p-2" style={{ width: isOpen ? 210 : 60, paddingLeft: 100 }}>
                <NavLink to="/dashboard" style={linkStyle} className="btn w-100 mb-3">
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Dashboard</span>
                </NavLink>
                <div className="text-success mb-1 mt-4" >
                    <span className={sidebarTextClass} style={{ fontSize: 10, fontWeight: 600 }}>CUSTOMER MANAGEMENT</span>
                </div>
                <button
                    className="btn w-100 d-flex align-items-center justify-content-between mb-1"
                    style={{ background: '#7b4fe2', color: '#fff', fontWeight: 500, fontSize: 17 }}
                    onClick={() => setOpenCustomers(!openCustomers)}
                    aria-controls="customers-collapse"
                    aria-expanded={openCustomers}
                >
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-5.784 6A2.238 2.238 0 0 1 0 12c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 0 12c0 1.12.367 2.16.216 3.032H1.216ZM4.5 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Customers</span>
                    <span>{openCustomers ? '▾' : '▸'}</span>
                </button>
                <Collapse in={openCustomers}>
                    <div id="customers-collapse" className="mb-2" style={{ borderRadius: 8 }}>

                        <ul className="list-unstyled mb-0 p-2 sidebar_bd">
                            <li>
                                <NavLink to="/customers/all" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-5.784 6A2.238 2.238 0 0 1 0 12c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 0 12c0 1.12.367 2.16.216 3.032H1.216ZM4.5 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>All Customers</span>
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/customers/active" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.125-.483.31-.662A4.934 4.934 0 0 1 8 13c.946 0 1.823-.138 2.616-.383A4.474 4.474 0 0 1 8.256 14Z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Active Customers</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/customers/disabled" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Disabled Customers</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/customers/notifications" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Notifications</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/customers/send-email" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Send Email to all</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </Collapse>
                {/* <button
                    className="btn w-100 d-flex align-items-center justify-content-between mb-1"
                    style={{ background: 'none', color: '#fff', fontWeight: 500, fontSize: 17 }}
                    onClick={() => setOpenKYC(!openKYC)}
                    aria-controls="kyc-collapse"
                    aria-expanded={openKYC}
                >
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>KYC Management</span>
                    <span>{openKYC ? '▾' : '▸'}</span>
                </button>
                <Collapse in={openKYC}>
                    <div id="kyc-collapse" className="mb-2" style={{ background: '#232b45', borderRadius: 8 }}>
                        <ul className="list-unstyled mb-0 p-2">
                            <li>
                                <NavLink to="/kyc-management" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>KYC Management</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Collapse>
                <div className="text-success mb-1 mt-4" style={{ fontSize: 13, fontWeight: 600 }}>
                    <span className={sidebarTextClass}>STAFF MANAGEMENT</span>
                </div>
                <NavLink to="/manage-roles" style={linkStyle} className="d-flex align-items-center mb-2">
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Manage Roles</span>
                </NavLink>
                <NavLink to="/manage-staffs" style={linkStyle} className="d-flex align-items-center mb-2">
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-5.784 6A2.238 2.238 0 0 1 0 12c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 0 12c0 1.12.367 2.16.216 3.032H1.216ZM4.5 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Manage Staffs</span>
                </NavLink>
                <div className="text-success mb-1 mt-4" style={{ fontSize: 13, fontWeight: 600 }}>
                    <span className={sidebarTextClass}>PLANS</span>
                </div>
                <button
                    className="btn w-100 d-flex align-items-center justify-content-between mb-1"
                    style={{ background: 'none', color: '#fff', fontWeight: 500, fontSize: 17 }}
                    onClick={() => setOpenSchema(!openSchema)}
                    aria-controls="schema-collapse"
                    aria-expanded={openSchema}
                >
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Manage Schema</span>
                    <span>{openSchema ? '▾' : '▸'}</span>
                </button>
                <Collapse in={openSchema}>
                    <div id="schema-collapse" className="mb-2" style={{ background: '#232b45', borderRadius: 8 }}>
                        <ul className="list-unstyled mb-0 p-2">
                            <li>
                                <NavLink to="/manage-schema" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Manage Schema</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Collapse>
                <div className="text-success mb-1 mt-4" style={{ fontSize: 13, fontWeight: 600 }}>
                    <span className={sidebarTextClass}>TRANSACTIONS</span>
                </div>
                <NavLink to="/transactions" style={linkStyle} className="d-flex align-items-center mb-2">
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Transactions</span>
                </NavLink> */}
            </div>
        </div>
    );
};

export default Sidebar; 