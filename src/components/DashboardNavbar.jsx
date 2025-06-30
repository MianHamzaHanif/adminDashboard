import React from 'react';
import './DashboardNavbar.css';
import logo from '../assets/apollo-logo.png';

const DashboardNavbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light dashboard-navbar">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* <img src={logo} alt="Logo" style={{ width: 60, height: 40, borderRadius: '50%', position: 'absolute', left: 10 }} /> */}
                <div className="d-flex align-items-center gap-3 ms-auto">
                    <select className="form-select form-select-sm" style={{ width: 100 }}>
                        <option>English</option>
                        {/* <option>Urdu</option> */}
                    </select>
                    <div className="position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 12 }}>
                            79
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 1.5H7.5V5H4.847zM8.5 5v1.5h2.99a12.495 12.495 0 0 0-.337-1.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 1.5H7.5V8.5H4.51zm3.99 0V10h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 0-.312 2.5h2.49c.118-.877.202-1.756.242-2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM14.326 11a6.958 6.958 0 0 0 .656-2.5h-2.49a13.65 13.65 0 0 0-.242 2.5h2.076zm.656-4H13.18c-.04-.744-.124-1.623-.242-2.5h-2.49c.118.877.202 1.756.242 2.5h2.49zM11.91 4a9.267 9.267 0 0 1-.64-1.539A6.7 6.7 0 0 1 10.673 2H12.5V1.077C11.83 1.281 11.164 1.897 10.673 2.932A7.97 7.97 0 0 0 11.91 4zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar; 