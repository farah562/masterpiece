import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import "./App.css";

import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Auth/AuthPage";

// Dashboards for [Admin, Customer, Provider]
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLoginPage from "./pages/Admin/AdminLogin/AdminLoginPage";

import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import ProviderDashboard from "./pages/Provider/ProviderDashboard";

function App() {
  const { token, login, logout, userId, user } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/admin-auth" element={<AdminLoginPage />} exact />
        <Route path="/dashboard" element={<CustomerDashboard />} exact />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} exact />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/auth" element={<AuthPage />} exact />
        <Route path="/admin-auth" element={<AdminLoginPage />} exact />
        <Route path="/dashboard" element={<CustomerDashboard />} exact />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} exact />
      </Routes>
    );
  }

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          user: user,
          login: login,
          logout: logout,
        }}
      >
        <Router>{routes}</Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
