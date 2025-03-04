import { useState } from "react";
import "../pages-styles/ChildInfo.css"; // Ensure you have this CSS file

const ChildInfo = () => {
  // States for child registration
  const [childName, setChildName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [classGrade, setClassGrade] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentAge, setParentAge] = useState("");
  const [parentID, setParentID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residence, setResidence] = useState("");

  // Check-In States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [cardNumber, setCardNumber] = useState("");

  // Handlers
  const handleAddChild = (e) => {
    e.preventDefault();
    console.log("Adding Child:", { childName, gender, age, classGrade, parentName, parentAge, parentID, phoneNumber, residence });
    // Send data to backend API
  };

  const handleSearchChild = async () => {
    console.log("Searching for:", searchQuery);
    // Simulate API call to fetch similar names
    const dummyResults = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Johnny Doe" },
      { id: 3, name: "Jane Doe" },
    ];
    setSearchResults(dummyResults);
  };

  const handleCheckIn = () => {
    console.log("Checking in:", selectedChild.name, "Card:", cardNumber);
    // Send check-in data to backend API
  };

  return (
    <div className="child-info-container">
      <h2>Child Information Management</h2>

      {/* Add New Child Section */}
      <section className="add-child">
        <h3>Add New Child</h3>
        <form onSubmit={handleAddChild}>
          <input type="text" placeholder="Child Name" value={childName} onChange={(e) => setChildName(e.target.value)} required />
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
          <select value={classGrade} onChange={(e) => setClassGrade(e.target.value)} required>
            <option value="">Select Class</option>
            <option value="2-5">2-5</option>
            <option value="6-7">6-7</option>
            <option value="8-11">8-11</option>
            <option value="12-13">12-13</option>
          </select>
          <input type="text" placeholder="Parent Name" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
          <input type="number" placeholder="Parent Age" value={parentAge} onChange={(e) => setParentAge(e.target.value)} required />
          <input type="text" placeholder="Parent ID Number" value={parentID} onChange={(e) => setParentID(e.target.value)} required />
          <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          <input type="text" placeholder="Residence" value={residence} onChange={(e) => setResidence(e.target.value)} required />
          <button type="submit">Add Child</button>
        </form>
      </section>

      {/* Check-In Section */}
      <section className="check-in">
        <h3>Check-In</h3>
        <input type="text" placeholder="Search Child by Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleSearchChild}>Search</button>

        {/* Display search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h4>Select a Child:</h4>
            <ul>
              {searchResults.map((child) => (
                <li key={child.id} onClick={() => setSelectedChild(child)}>
                  {child.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Show card assignment when a child is selected */}
        {selectedChild && (
          <div className="assign-card">
            <h4>Assign Card Number</h4>
            <input type="text" placeholder="Enter Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <button onClick={handleCheckIn}>Check In</button>
          </div>
        )}
      </section>

      {/* Summary Section */}
      <section className="summary">
        <h3>Summary</h3>
        <p>Total Children: 120</p>
        <p>Checked-In: 45</p>
        <p>Checked-Out: 30</p>
      </section>

      {/* Pending Check-Outs Section */}
      <section className="pending-checkout">
        <h3>Children Not Checked Out</h3>
        <ul>
          <li>John Doe - Parent: Mr. Smith</li>
          <li>Jane Doe - Parent: Mrs. Johnson</li>
        </ul>
      </section>

      {/* List of All Children */}
      <section className="child-list">
        <h3>All Children</h3>
        <ul>
          <li>Michael Adams - Parent: Sarah Adams</li>
          <li>Lucy Brown - Parent: David Brown</li>
        </ul>
      </section>
    </div>
  );
};

export default ChildInfo;
