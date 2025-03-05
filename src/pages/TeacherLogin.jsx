import { useNavigate } from "react-router-dom";
import "../pages-styles/TeacherLogin.css"; // ✅ Import CSS

const TeacherLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate("/children-info"); // Instantly navigate to dashboard
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Teacher Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter Username" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
