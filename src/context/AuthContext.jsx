import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // 🚪 Logout function
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    navigate("/login/teacher"); // Redirect to login page
  }, [navigate]);

  // Check token validity on app load
  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        setUser(payload);
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    }
  }, [token, logout]); // Include 'logout' in the dependency array

  // 🔑 Login function
  const login = (role, data) => {
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);

    // Redirect based on role
    if (role === "teacher") navigate("/teacher-dashboard");
    if (role === "parent") navigate("/parent-dashboard");
    if (role === "child") navigate("/child-dashboard");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
