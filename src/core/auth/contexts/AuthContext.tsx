import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface AuthContextType {
  user: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(jwtDecode<JwtPayload>(token));
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setUser(jwtDecode<JwtPayload>(token));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
