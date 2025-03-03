import { useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext"; // ✅ Import the separated context

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add prop validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
