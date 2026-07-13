import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAdmin = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await getProfile(token);
        setAdmin(data.admin);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setAdmin(null);
      }

      setLoading(false);
    };

    loadAdmin();
  }, [token]);

  const login = (adminData, jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
    setAdmin(adminData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);