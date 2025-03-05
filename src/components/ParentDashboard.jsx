import { useNavigate } from "react-router-dom";
import "./ParentDashboard.css"; // Ensure you create this CSS file

const ParentDashboard = () => {
  const navigate = useNavigate();

  // Mock Parent Data (Replace with API call later)
  const parentName = "John Doe";
  const children = [
    { id: 1, name: "Michael Doe", age: 8, classGrade: "3", status: "Checked In" },
    { id: 2, name: "Sophia Doe", age: 10, classGrade: "5", status: "Checked Out" },
  ];

  // Mock Events Data (Replace with API call later)
  const events = [
    { id: 1, name: "Christmas Play", date: "2025-12-24", participation: "Participating" },
    { id: 2, name: "Bible Quiz", date: "2025-03-15", participation: "Not Registered" },
  ];

  // Mock Notifications
  const notifications = [
    "Next Sunday, children will have a special guest speaker.",
    "Reminder: Christmas Play rehearsal on Saturday at 10 AM.",
  ];

  const handleLogout = () => {
    navigate("/login/child"); // Redirect to login on logout
  };

  return (
    <div className="parent-dashboard-container">
      {/* Header */}
      <header>
        <h2>Welcome, {parentName}!</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      {/* Children Information */}
      <section className="children-info">
        <h3>My Children</h3>
        <ul>
          {children.map((child) => (
            <li key={child.id}>
              <span>{child.name}</span> - Age: {child.age}, Class: {child.classGrade}  
              <strong> ({child.status})</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h3>Upcoming Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <span>{event.name} - {event.date}</span>  
              <strong> ({event.participation})</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* Notifications */}
      <section className="notifications">
        <h3>Notifications</h3>
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ParentDashboard;
