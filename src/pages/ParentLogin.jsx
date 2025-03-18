import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../pages-styles/ParentLogin.css";

const ParentLogin = () => {
  const { login } = useContext(AuthContext);
  const [idNumber, setIdNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/parents/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_number: idNumber, phone_number: phone }),
      });

      const data = await response.json();
      if (response.ok) {
        login("parent", data);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="parent-login-container">
      <div className="parent-login-card">
        <h2>Parent Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin;
