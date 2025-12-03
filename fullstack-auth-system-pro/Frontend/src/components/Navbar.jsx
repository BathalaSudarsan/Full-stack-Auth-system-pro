import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);         // 🔥 FIX: Remove user from state
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav-brand">Auth System Pro</div>

      <div className="nav-links">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/profile">Profile</Link>

        {user && (
          <span style={{ fontSize: "14px", color: "#555" }}>
            Hi, <b>{user.name}</b>
          </span>
        )}

        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
