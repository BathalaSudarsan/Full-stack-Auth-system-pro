export default function Home({ user }) {
  return (
    <div className="center-container">
      <div className="card" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", color: "#2563eb", marginBottom: "10px" }}>
          Welcome to Home
        </h1>

        {user && (
          <p style={{ color: "#444" }}>
            Logged in as <b>{user.name}</b>
          </p>
        )}
      </div>
    </div>
  );
}
