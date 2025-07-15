import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';
import DashboardNavbar from './components/DashboardNavbar';
import DashboardCards from './components/DashboardCards';
import AllCustomers from './components/AllCustomers';
import EditCustomer from './components/EditCustomer';
import './App.css';
import logo from './assets/apollo-logo.png';
import BuyRecord from './components/updatefunctions/BuyRecord';
import WithdrawRecord from './components/updatefunctions/WithdrawRecord';
import AllowedUsers from './components/updatefunctions/AllowedUsers';
import AllowedWithdraw from './components/updatefunctions/AllowedWithdraw';
import EmergencyWithdraw from './components/updatefunctions/EmergencyWithdraw';

const Dashboard = () => (
  <>
    <div className="container-fluid mt-4">

      {/* <div className="fee-row mb-3">
        <div className="fee-card">$37.275000000 Transition Gas Source fee</div>
        <div className="fee-card">$10.525000000 Transition Gas Source fee</div>
      </div> */}
      <DashboardCards />
    </div>
  </>
);

const ActiveCustomers = () => <div className="container mt-4"><h2>Active Customers</h2></div>;
const DisabledCustomers = () => <div className="container mt-4"><h2>Disabled Customers</h2></div>;
const Notifications = () => <div className="container mt-4"><h2>Notifications</h2></div>;
const SendEmail = () => <div className="container mt-4"><h2>Send Email to All</h2></div>;
const KYCManagement = () => <div className="container mt-4"><h2>KYC Management</h2></div>;
const ManageRoles = () => <div className="container mt-4"><h2>Manage Roles</h2></div>;
const ManageStaffs = () => <div className="container mt-4"><h2>Manage Staffs</h2></div>;
const ManageSchema = () => <div className="container mt-4"><h2>Manage Schema</h2></div>;
const Transactions = () => <div className="container mt-4"><h2>Transactions</h2></div>;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <DashboardNavbar toggleSidebar={toggleSidebar} />
      <div className="d-flex app-main-bg main-content-with-navbar">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-grow-1 dashboard-title-center">
          <Routes>
            <Route path="/" element={<Navigate to="/customers/all" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/buy-record" element={<BuyRecord />} />
            <Route path="/withdraw-record" element={<WithdrawRecord />} />
            <Route path="/allowed-users" element={<AllowedUsers />} />
            <Route path="/allowed-withdraw" element={<AllowedWithdraw />} />
            <Route path="/emergency-withdraw" element={<EmergencyWithdraw />} />
            <Route path="/customers/all" element={<AllCustomers />} />
            <Route path="/customers/edit/:id" element={<EditCustomer />} />
            <Route path="/customers/active" element={<ActiveCustomers />} />
            <Route path="/customers/disabled" element={<DisabledCustomers />} />
            <Route path="/customers/notifications" element={<Notifications />} />
            <Route path="/customers/send-email" element={<SendEmail />} />
            <Route path="/kyc-management" element={<KYCManagement />} />
            <Route path="/manage-roles" element={<ManageRoles />} />
            <Route path="/manage-staffs" element={<ManageStaffs />} />
            <Route path="/manage-schema" element={<ManageSchema />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
