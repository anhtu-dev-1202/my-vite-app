import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../redux/modules/user/types';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface DecodedToken {
  id: string;
  name: string;
  email: string;
  exp: number;
}

const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      const isTokenExpired = decodedToken.exp * 1000 < Date.now();

      if (isTokenExpired) {
        logout();
      } else {
        setUser({
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email
        });
      }
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;

      localStorage.setItem('token', token);
      setToken(token);

      const decodedToken = jwtDecode<DecodedToken>(token);
      setUser({
        id: decodedToken.id,
        name: decodedToken.name,
        email: decodedToken.email
      });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!user
  };
};

export default useAuth;
