import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [token]);

  // 🔑 Login function
  const login = (role, data) => {
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data);

    // Redirect based on role
    if (role === "teacher") navigate("/teacher-dashboard");
    if (role === "parent") navigate("/parent-dashboard");
    if (role === "child") navigate("/child-dashboard");
  };

  // 🚪 Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    navigate("/");
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

export { AuthContext };
