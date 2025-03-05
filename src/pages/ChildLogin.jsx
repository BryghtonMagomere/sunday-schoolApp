import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages-styles/ChildLogin.css"; // ✅ Import CSS

const ChildLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // In the future, we will verify the username from the database before navigating
    navigate(`/child-dashboard?username=${username}`); // Redirect with username
  };

  return (
    <div className="child-login-container">
      <div className="child-login-card">
        <h2>Child Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ChildLogin;
