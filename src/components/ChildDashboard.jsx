import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ChildDashboard.css"; // ✅ Import CSS

const ChildDashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const childUsername = queryParams.get("username"); // Get the logged-in child's username

  const [childData, setChildData] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching child's info (Replace with actual API later)
    const mockChildData = {
      name: childUsername || "John Doe",
      age: 10,
      class: "Grade 5",
      parent: "Jane Doe",
    };

    // Simulate fetching upcoming events (Replace with API call later)
    const mockEvents = [
      { id: 1, title: "Bible Study", date: "March 10, 2025", status: "Attending" },
      { id: 2, title: "Sunday Service", date: "March 17, 2025", status: "Not Registered" },
    ];

    setChildData(mockChildData);
    setEvents(mockEvents);
  }, [childUsername]);

  return (
    <div className="child-dashboard">
      <h2>Welcome, {childData?.name}!</h2>

      {/* Child Information */}
      <div className="child-info">
        <h3>Your Details</h3>
        <p><strong>Age:</strong> {childData?.age}</p>
        <p><strong>Class:</strong> {childData?.class}</p>
        <p><strong>Parent:</strong> {childData?.parent}</p>
      </div>

      {/* Events Section */}
      <div className="child-events">
        <h3>Upcoming Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong> - {event.date}  
              <span> ({event.status})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChildDashboard;
