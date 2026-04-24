import Navbar from "../components/Navbar";
import { useCounter } from "../hooks/useCounter";
import { useAuth } from "../features/auth/useAuth";
import InfoCard from "../components/InfoCard";

export default function Dashboard() {
  const { count, increment } = useCounter();
  const { role } = useAuth();

  return (
    <>
      <Navbar title="User Dashboard" />

      <div style={{ padding: "20px" }}>
        <h2>Welcome to dashboard</h2>
        <p>You are logged in as <strong>{role}</strong>.</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <InfoCard label="Total Projects" value={12} />
          <InfoCard label="Pending Tasks" value={5} />
          <InfoCard label="Messages" value={3} />
        </div>

        <h3 style={{ marginTop: "30px" }}>Activity</h3>
        <button onClick={increment}>Increase Activity</button>

        <InfoCard label="Activity Score" value={count} />
      </div>
    </>
  );
}
