import { useEffect, useState } from "react";
import { authApi } from "../api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await authApi().get("/auth/me");
        setUser(res.data);
      } catch {
        setUser("error");
      }
    };
    load();
  }, []);

  if (!user) {
    return <div className="center-container"><p>Loading...</p></div>;
  }

  if (user === "error") {
    return <div className="center-container"><p>Cannot fetch profile</p></div>;
  }

  return (
    <div className="center-container">
      <div className="profile-box">
        <h2 className="title">Profile</h2>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
    </div>
  );
}
