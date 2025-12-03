import { useState, useEffect } from "react";
import { api, authApi } from "../api";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (location.state?.email) {
      setForm({
        email: location.state.email,
        password: location.state.password,
      });
    }
  }, []);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const login = async () => {
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);

      const me = await authApi().get("/auth/me");
      setUser(me.data);

      navigate("/home");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="center-container">
      <div className="card">
        <h2 className="title">Login</h2>

        <input className="input-box" name="email" placeholder="Email" value={form.email} onChange={change} />

        <div className="pass-wrapper">
          <input
            className="input-box"
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={change}
          />
          <span className="eye-icon" onClick={() => setShowPass(!showPass)}>
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="btn-primary" onClick={login}>Login</button>

        <p className="text-center">
          Don’t have an account?{" "}
          <Link className="text-link" to="/register">Register</Link>
        </p>

        {msg && <p className="text-center" style={{ color: "red" }}>{msg}</p>}
      </div>
    </div>
  );
}
