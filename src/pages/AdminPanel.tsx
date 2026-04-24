import Navbar from "../components/Navbar";
import { useAuthorization } from "../hooks/useAuthorization";
import InfoCard from "../components/InfoCard";

export default function AdminPanel() {
  const allowed = useAuthorization(["admin"]);

  if (!allowed) {
    return (
      <>
        <Navbar title="Admin Panel" />
        <h3 style={{ padding: 20 }}>Access Denied — Admins Only</h3>
      </>
    );
  }

  return (
    <>
      <Navbar title="Admin Panel" />

      <div style={{ padding: 20 }}>
        <h2>Admin Controls</h2>
        <p>You have elevated access to system settings.</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <InfoCard label="Total Users" value={134} />
          <InfoCard label="Active Sessions" value={17} />
          <InfoCard label="Pending Reports" value={4} />
        </div>
      </div>
    </>
  );
}