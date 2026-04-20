import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './Dashboard/Sidebar';
import Header from './Dashboard/Header';
import Login from "./login/login";
import Billing from "./billing";
import EmployeeTable from "./Employees/EmployeeTable";
import OtpPage from "./login/Otppage";
import Register from "./login/Register";
import GmailMenu from "./login/GmailMenu";
import ResetPassword from "./login/reset_password";
import TableList from "./Table/TableList";
import VendorTable from "./purchase/VendorTable";
import Home from "./Dashboard/Home";
import ForgotPassword from "./login/forgotpassword";
// import { useEffect } from "react";

// Layout component for authenticated pages
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="w-64 bg-white shadow-md fixed h-full">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        <Header />
        <div className="p-6 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/gmailmenu" element={<GmailMenu />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<DashboardLayout><Home /></DashboardLayout>} />
        <Route path="/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
        <Route path="/employees" element={<DashboardLayout><EmployeeTable /></DashboardLayout>} />
        <Route path="/table" element={<DashboardLayout><TableList /></DashboardLayout>} />
        <Route path="/vendor" element={<DashboardLayout><VendorTable vendors={[]} /></DashboardLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
