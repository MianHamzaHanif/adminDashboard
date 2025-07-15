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
                {/* <NavLink to="/dashboard" style={linkStyle} className="btn w-100 mb-3">
                    <span className="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" />
                        </svg>
                    </span>
                    <span className={sidebarTextClass}>Dashboard</span>
                </NavLink> */}
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
                                        {/* Users/People icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M13 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H13Zm-6-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-5.784 6A2.238 2.238 0 0 1 0 12c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 0 12c0 1.12.367 2.16.216 3.032H1.216ZM4.5 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>All Customers</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/buy-record" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        {/* Shopping cart icon for Buy Record */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.25A.5.5 0 0 0 4.87 12h7.26a.5.5 0 0 0 .48-.75L12.86 5H3.14z"/>
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Buy Record</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/withdraw-record" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        {/* Arrow up from box for Withdraw Record */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M8 1.5a.5.5 0 0 1 .5.5v7.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 9.793V2a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M14.5 14a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v1z"/>
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Withdraw Record</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/allowed-users" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        {/* User check icon for Allowed Users */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4.285 6.567A7.001 7.001 0 0 0 8 15a7.001 7.001 0 0 0-4.285-6.433C3.5 7.5 5.5 6 8 6s4.5 1.5 4.285 6.567z"/>
                                            <path d="M13.854 10.146a.5.5 0 0 1 .146.354v.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .146-.354l.854-.854a.5.5 0 0 1 .708 0l.854.854z"/>
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Allowed Users</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/allowed-withdraw" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        {/* Lock open icon for Allowed Withdraw */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M8 1a4 4 0 0 1 4 4v2h1.5A1.5 1.5 0 0 1 15 8.5v5A1.5 1.5 0 0 1 13.5 15h-11A1.5 1.5 0 0 1 1 13.5v-5A1.5 1.5 0 0 1 2.5 7H4V5a4 4 0 0 1 4-4zm3 6V5a3 3 0 0 0-6 0v2h6z"/>
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Allowed Withdraw</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/emergency-withdraw" style={linkStyle}>
                                    <span className="sidebar-icon">
                                        {/* Exclamation triangle for Emergency Withdraw */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                            <path d="M7.938 2.016a.13.13 0 0 1 .125 0l6.857 11.856c.06.104.06.232 0 .336a.13.13 0 0 1-.125.068H1.205a.13.13 0 0 1-.125-.068.258.258 0 0 1 0-.336L7.938 2.016zm.82 12.484a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-.82-2.484a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 1 0v4.5a.5.5 0 0 1-.5.5z"/>
                                        </svg>
                                    </span>
                                    <span className={sidebarTextClass}>Emergency Withdraw</span>
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