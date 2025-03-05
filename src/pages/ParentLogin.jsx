import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages-styles/ParentLogin.css"; // Ensure you have this CSS file

const ParentLogin = () => {
  const [parentName, setParentName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!parentName.trim()) {
      setError("Please enter your name.");
      return;
    }

    // Store the name temporarily (this will be removed once database connection is added)
    localStorage.setItem("parentName", parentName);

    navigate("/parent-dashboard"); // Redirect to Parent Dashboard
  };

  return (
    <div className="parent-login-container">
      <div className="parent-login-card">
        <h2>Parent Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin;
