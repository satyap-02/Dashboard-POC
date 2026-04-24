import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import { useAuth } from "../features/auth/useAuth";

export default function AppRouter() {
  const { isAuthenticated, login } = useAuth();

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/admin"
          element={isAuthenticated ? <AdminPanel /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}