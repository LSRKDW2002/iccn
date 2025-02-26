import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import MemberDashboard from "./pages/MemberDashboard";
import MembershipRegistration from "./pages/MembershipRegistration";
import Invoice from "./pages/Invoice";
import Payment from "./pages/Payment";
import PaymentStatus from "./pages/PaymentStatus";
import Upload from "./pages/Upload";
import LoggedInPage from "./pages/LoggedInPage";


function App() {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Simpan role: "admin" atau "member"

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* Private Routes */}
        <Route
          path="/home"
          element={token ? <LoggedInPage /> : <Navigate to="/login" replace />}
        // element={<LoggedInPage />}
        />
        <Route
          path="/member"
          element={token ? <MemberDashboard /> : <Navigate to="/login" replace />}
        // element={<MemberDashboard />}
        />
        <Route
          path="/membership-registration"
          element={token ? <MembershipRegistration /> : <Navigate to="/login" replace />}
        // element={<MembershipRegistration />}
        />
        <Route
          path="/invoice"
          // element={token ? <Invoice /> : <Navigate to="/login" replace />}
          element={<Invoice />}
        />
        <Route
          path="/payment"
          // element={token ? <Payment /> : <Navigate to="/login" replace />}
          element={<Payment />}
        />
        <Route
          path="/payment-status"
          // element={token ? <PaymentStatus /> : <Navigate to="/login" replace />}
          element={<PaymentStatus />}
        />
        <Route
          path="/upload"
          // element={token ? <Upload /> : <Navigate to="/login" replace />}
          element={<Upload />}
        />

        {/* Admin Route */}
        <Route
          path="/admin" element={<AdminPanel />}
        // element={token && userRole === "admin" ? <AdminPanel /> : <Navigate to="/home" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
