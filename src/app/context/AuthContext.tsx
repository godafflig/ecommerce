import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string) => {
    // utilisateur "en dur" pour commencer
    if (username === "admin" && password === "password") {
      setUser(username);
      return true; // login réussi
    }
    return false; // login échoué
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};