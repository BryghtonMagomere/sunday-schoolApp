import { Link } from "react-router-dom";
import "./RoleSelection.css"; // Ensure the styles are updated

const RoleSelection = () => {
  return (
    <div className="role-selection-container">
      <div className="role-selection-card">
        <h2>Select Your Role</h2>
        <p>Choose your role to continue:</p>
        <div className="role-buttons">
          <Link to="/login/teacher" className="role-button teacher">
            👨‍🏫 Teacher
          </Link>
          <Link to="/login/parent" className="role-button parent">
            👨‍👩‍👧 Parent
          </Link>
          <Link to="/login/child" className="role-button child">
            🧒 Child
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
