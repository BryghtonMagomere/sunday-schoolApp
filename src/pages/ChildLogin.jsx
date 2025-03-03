import { useNavigate } from "react-router-dom";
import "../pages-styles/ChildLogin.css"; // ✅ Import CSS

const ChildLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/child-dashboard"); // ✅ Instantly redirect to Child Dashboard
  };

  return (
    <div className="child-login-container">
      <div className="child-login-card">
        <h2>Child Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter Username" required />
          <input type="text" placeholder="Enter Class" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ChildLogin;
