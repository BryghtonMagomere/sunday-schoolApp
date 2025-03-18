import { useState, useEffect } from "react";
import "../pages-styles/ChildInfo.css";

const ChildInfo = () => {
  // ✅ Child Info States
  const [childName, setChildName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [classGrade, setClassGrade] = useState("");

  // ✅ Parent Info States
  const [parentName, setParentName] = useState("");
  const [parentAge, setParentAge] = useState("");
  const [parentIDNumber, setParentIDNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residence, setResidence] = useState("");

  // ✅ Check-In & Check-Out States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [checkOutCardNumber, setCheckOutCardNumber] = useState("");

  // ✅ Summary & All Children
  const [totalChildren, setTotalChildren] = useState(0);
  const [checkedInCount, setCheckedInCount] = useState(0);
  const [notCheckedOut, setNotCheckedOut] = useState([]);
  const [childrenList, setChildrenList] = useState([]);

  // ✅ Fetch children on page load
  useEffect(() => {
    fetchChildren();
  }, []);

  // ✅ Fetch all children with parent details
  const fetchChildren = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/children");
      const data = await response.json();
      setChildrenList(data);

      // ✅ Calculate summary data
      setTotalChildren(data.length);
      setCheckedInCount(data.filter((child) => child.card_number).length);
      setNotCheckedOut(data.filter((child) => child.card_number !== null));
    } catch (error) {
      console.error("Error fetching children:", error);
    }
  };

  // ✅ Add a new child and parent together
  const handleAddChild = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/children/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          child: { name: childName, gender, age, classGrade },
          parent: { name: parentName, age: parentAge, id_number: parentIDNumber, phone_number: phoneNumber, residence },
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Child added successfully!");
        fetchChildren();

        // ✅ Clear input fields after submission
        setChildName("");
        setGender("");
        setAge("");
        setClassGrade("");
        setParentName("");
        setParentAge("");
        setParentIDNumber("");
        setPhoneNumber("");
        setResidence("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error adding child:", error);
    }
  };

  // ✅ Search for a child by name
  const handleSearchChild = async () => {
    if (!searchQuery) {
      alert("Please enter a child name to search");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/children/search?name=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching for child:", error);
    }
  };

  // ✅ Check-in a child with a card number
  const handleCheckIn = async () => {
    if (!selectedChild) {
      alert("Please select a child to check in");
      return;
    }

    if (!cardNumber) {
      alert("Please enter a card number");
      return;
    }

    if (selectedChild.card_number) {
      alert("Child already has a card assigned and is not checked out!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/children/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ child_id: selectedChild.child_id, card_number: cardNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Child checked in successfully!");
        fetchChildren();
        setCardNumber("");
        setSelectedChild(null);
        setSearchResults([]);
        setSearchQuery("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error checking in child:", error);
    }
  };

  // ✅ Check-out a child by removing card number
  const handleCheckOut = async () => {
    if (!checkOutCardNumber) {
      alert("Please enter a card number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/children/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ card_number: checkOutCardNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Child checked out successfully!");
        fetchChildren();
        setCheckOutCardNumber(""); // ✅ Clear input field after submission
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error checking out child:", error);
    }
  };

  return (
    <div className="child-info-container">
      <h2>Child Information Management</h2>

      {/* ✅ Add New Child Section (Divided into Child & Parent Info) */}
      <section className="add-child">
        <h3>Add New Child</h3>
        <form onSubmit={handleAddChild}>
          <div className="child-section">
            <h4>Child Info</h4>
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
          </div>

          <div className="parent-section">
            <h4>Parent Info</h4>
            <input type="text" placeholder="Parent Name" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
            <input type="number" placeholder="Parent Age" value={parentAge} onChange={(e) => setParentAge(e.target.value)} required />
            <input type="text" placeholder="Parent ID Number" value={parentIDNumber} onChange={(e) => setParentIDNumber(e.target.value)} required />
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <input type="text" placeholder="Residence" value={residence} onChange={(e) => setResidence(e.target.value)} required />
          </div>

          <button type="submit">Add Child</button>
        </form>
      </section>

      {/* ✅ Check-In Section */}
      <section className="check-in">
        <h3>Check-In</h3>
        <input type="text" placeholder="Search Child by Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleSearchChild}>Search</button>

        {/* ✅ Display search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h4>Select a Child:</h4>
            <ul>
              {searchResults.map((child) => (
                <li key={child.child_id} onClick={() => setSelectedChild(child)}>
                  {child.name} {child.card_number ? "(Already Checked-In)" : ""}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ✅ Show card assignment when a child is selected */}
        {selectedChild && !selectedChild.card_number && (
          <div className="assign-card">
            <h4>Assign Card Number</h4>
            <input type="text" placeholder="Enter Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <button onClick={handleCheckIn}>Check In</button>
          </div>
        )}
      </section>

      {/* ✅ Check-Out Section */}
      <section className="check-out">
        <h3>Check-Out</h3>
        <input
          type="text"
          placeholder="Enter Card Number"
          value={checkOutCardNumber}
          onChange={(e) => setCheckOutCardNumber(e.target.value)}
        />
        <button onClick={handleCheckOut}>Check Out</button>
      </section>

      {/* ✅ Summary Section */}
      <section className="summary">
        <h3>Summary</h3>
        <p>Total Children: {totalChildren}</p>
        <p>Checked-In: {checkedInCount}</p>
      </section>

      {/* ✅ Pending Check-Outs */}
      <section className="pending-checkout">
        <h3>Children Not Checked Out</h3>
        <ul>
          {notCheckedOut.map((child) => (
            <li key={child.child_id}>{child.name} - Parent: {child.parent_name}</li>
          ))}
        </ul>
      </section>

      {/* ✅ List of All Children */}
      <section className="child-list">
        <h3>All Children</h3>
        <ul>
          {childrenList.map((child) => (
            <li key={child.child_id}>{child.name} - Parent: {child.parent_name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ChildInfo;
