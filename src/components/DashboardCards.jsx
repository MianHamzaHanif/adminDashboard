import React from 'react';
import './DashboardCards.css';

const DashboardCards = () => {
    const cards = [
        {
            color: '#f14668',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-5.784 6A2.238 2.238 0 0 1 0 12c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 0 12c0 1.12.367 2.16.216 3.032H1.216ZM4.5 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                </svg>
            ),
            value: 97,
            label: 'Registered User'
        },
        {
            color: '#7b4fe2',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.125-.483.31-.662A4.934 4.934 0 0 1 8 13c.946 0 1.823-.138 2.616-.383A4.474 4.474 0 0 1 8.256 14Z" />
                </svg>
            ),
            value: 97,
            label: 'Active Users'
        },
        {
            color: '#20bfa9',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
            ),
            value: 1,
            label: 'Site Staff'
        },
        {
            color: '#2176ae',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                </svg>
            ),
            value: '$52070',
            label: 'Total Deposits'
        },
        {
            color: '#142850',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                </svg>
            ),
            value: '$412',
            label: 'Total Withdraw'
        },
        {
            color: '#8d9440',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.854-2.5H12a3 3 0 0 0 0-6h-1.646A3 3 0 0 0 9 2.5H6.354ZM9 3.5a2 2 0 0 1 1.646 1.5H12a2 2 0 0 1 0 4h-1.354A2 2 0 0 1 9 9.5H6a2 2 0 0 1 0-4h3Z" />
                </svg>
            ),
            value: 168,
            label: 'Total Referral'
        },
        {
            color: '#f76d3c',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
            ),
            value: '$0',
            label: 'Total Send'
        },
        {
            color: '#6c547b',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                </svg>
            ),
            value: '$52050',
            label: 'Total Investment'
        },
        {
            color: '#363a3d',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm7.5.5a.5.5 0 0 0-1 0v1.5H9a.5.5 0 0 0 0 1h.5V6a.5.5 0 0 0 1 0V4.5H12a.5.5 0 0 0 0-1h-.5V3z" />
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
            ),
            value: '$0',
            label: 'Deposit Bonus'
        },
        {
            color: '#20bfa9',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h1.5V3.5A.5.5 0 0 1 7 3zm3 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1 0-1h1.5V3.5A.5.5 0 0 1 10 3zM7 6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h1.5V6.5A.5.5 0 0 1 7 6zm3 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1 0-1h1.5V6.5A.5.5 0 0 1 10 6zM7 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h1.5V9.5A.5.5 0 0 1 7 9zm3 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1 0-1h1.5V9.5A.5.5 0 0 1 10 9z" />
                </svg>
            ),
            value: '$0',
            label: 'Investment Bonus'
        },
        {
            color: '#7b4fe2',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                </svg>
            ),
            value: 25,
            label: 'Total Automatic Gateway'
        },
        {
            color: '#363a3d',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
            ),
            value: 0,
            label: 'Total Ticket'
        },
    ];

    return (
        <div className="dashboard-cards-container container-fluid">
            <div className="row g-3">
                {cards.map((card, idx) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                        <div className="card shadow-sm h-100 dashboard-card" style={{ background: card.color }}>
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="fs-2 bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                                        {card.icon}
                                    </span>
                                    <div>
                                        <div className="fs-3 fw-bold">{card.value}</div>
                                        <div className="small">{card.label}</div>
                                    </div>
                                </div>
                                <a href="#" className="text-white-50 fs-5" title="Details">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6.364 13.657a.5.5 0 0 1-.708 0l-5.657-5.657a.5.5 0 0 1 0-.708l5.657-5.657a.5.5 0 0 1 .708.708L1.707 7.5H15.5a.5.5 0 0 1 0 1H1.707l4.657 4.657a.5.5 0 0 1 0 .708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardCards; 