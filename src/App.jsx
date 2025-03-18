import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { AuthProvider } from "./context/AuthContext"; // Ensure this import is correct
import RoleSelection from "./components/RoleSelection";
import TeacherLogin from "./pages/TeacherLogin";
import ParentLogin from "./pages/ParentLogin";
import ChildLogin from "./pages/ChildLogin";
import TeacherDashboard from "./components/TeacherDashboard";
import ChildDashboard from "./components/ChildDashboard";
import ParentDashboard from "./components/ParentDashboard";
import ChildInfo from "./pages/ChildInfo";

function App() {
  return (
    <Router>
      <AuthProvider> {/* Ensure AuthProvider is wrapped inside Router */}
        <MainApp />
      </AuthProvider>
    </Router>
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
        <Route path="/login/parent" element={<ParentLogin />} />
        <Route path="/login/child" element={<ChildLogin />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/children-info" element={<ChildInfo />} />
      </Routes>
    </>
  );
}

export default App;
