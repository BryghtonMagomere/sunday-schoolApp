import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../pages-styles/TeacherLogin.css";

const TeacherLogin = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/teachers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone_number: phone }),
      });

      const data = await response.json();
      if (response.ok) {
        login("teacher", data); // ✅ Store token & redirect
      } else {
        setError(data.message);
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="teacher-login-container">
      <div className="teacher-login-card">
        <h2>Teacher Login</h2>
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

export default TeacherLogin;
