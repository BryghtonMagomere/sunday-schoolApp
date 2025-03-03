import { useNavigate } from "react-router-dom";
import "../pages-styles/ParentLogin.css"; // ✅ Import CSS

const ParentLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/parent-dashboard"); // ✅ Instantly redirect to Parent Dashboard
  };

  return (
    <div className="parent-login-container">
      <div className="parent-login-card">
        <h2>Parent Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter Username" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin;
