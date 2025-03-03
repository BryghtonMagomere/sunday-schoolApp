import { Link } from "react-router-dom";
import "./TeacherDashboard.css"; // ✅ Make sure this CSS file exists

const TeacherDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Teacher Dashboard</h2>
      <div className="dashboard-sections">
        <Link to="/children-info" className="dashboard-card children">
          <span>👶</span> Children Info
        </Link>
        <Link to="/teachers-info" className="dashboard-card teachers">
          <span>👨‍🏫</span> Teachers Info
        </Link>
        <Link to="/parents-info" className="dashboard-card parents">
          <span>👨‍👩‍👧‍👦</span> Parents Info
        </Link>
        <Link to="/events-info" className="dashboard-card events">
          <span>📅</span> Events Info
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
