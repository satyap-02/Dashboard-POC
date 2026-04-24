import Navbar from "../components/Navbar";
import { useAuth } from "../features/auth/useAuth";

export default function Home() {
  const { login, isAuthenticated, role, logout } = useAuth();

  return (
    <>
      <Navbar title="Home" />

      <div style={{ padding: 20 }}>
        <h2>Welcome</h2>
        <p>This is a simple role-based demo app.</p>

        {!isAuthenticated ? (
          <>
            <button onClick={() => login("user")}>Login as User</button>
            <button onClick={() => login("admin")} style={{ marginLeft: 10 }}>
              Login as Admin
            </button>
          </>
        ) : (
          <>
            <p>
              Logged in as <strong>{role}</strong>
            </p>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </>
  );
}