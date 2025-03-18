import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../pages-styles/ChildLogin.css";

const ChildLogin = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [childClass, setChildClass] = useState(""); // ✅ Renamed for clarity
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/children/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, class: childClass }), // ✅ Corrected key
      });

      const data = await response.json();
      if (response.ok) {
        login("child", data);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="child-login-container">
      <div className="child-login-card">
        <h2>Child Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Class"
            value={childClass}
            onChange={(e) => setChildClass(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ChildLogin;
