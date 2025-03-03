import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { AuthProvider } from "./context/AuthProvider";
import RoleSelection from "./components/RoleSelection";
import TeacherLogin from "./pages/TeacherLogin";
import ParentLogin from "./pages/ParentLogin"; // ✅ Parent Login Import
import ChildLogin from "./pages/ChildLogin"; // ✅ Child Login Import
import TeacherDashboard from "./components/TeacherDashboard";
import ChildDashboard from "./components/ChildDashboard"; // ✅ Import Child Dashboard
import ParentDashboard from "./components/ParentDashboard"; // ✅ Import Parent Dashboard

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainApp />
      </Router>
    </AuthProvider>
  );
}

function MainApp() {
  const location = useLocation();
  const hideNavbarPages = ["/", "/role-selection", "/login/teacher", "/login/parent", "/login/child"];

  return (
    <>
      {!hideNavbarPages.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/login/teacher" element={<TeacherLogin />} />
        <Route path="/login/parent" element={<ParentLogin />} /> {/* ✅ Parent Login Route */}
        <Route path="/login/child" element={<ChildLogin />} />   {/* ✅ Child Login Route */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
      </Routes>
    </>
  );
}

export default App;
