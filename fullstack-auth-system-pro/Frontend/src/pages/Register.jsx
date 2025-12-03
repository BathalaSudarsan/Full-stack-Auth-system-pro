import { useState } from "react";
import { api } from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const register = async () => {
    try {
      const res = await api.post("/auth/register", form);
      setMsg(res.data.message);

      navigate("/login", {
        state: {
          email: form.email,
          password: form.password,
        },
      });
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="center-container">
      <div className="card">
        <h2 className="title">Register</h2>

        <input className="input-box" name="name" placeholder="Name" onChange={handleChange} />

        <input className="input-box" name="email" placeholder="Email" onChange={handleChange} />

        <div className="pass-wrapper">
          <input
            className="input-box"
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <span className="eye-icon" onClick={() => setShowPass(!showPass)}>
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="btn-primary" onClick={register}>Register</button>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-link" to="/login">Login</Link>
        </p>

        {msg && <p className="text-center" style={{ color: "green" }}>{msg}</p>}
      </div>
    </div>
  );
}
