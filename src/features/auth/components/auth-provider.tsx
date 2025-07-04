import * as React from 'react';
import type { AxiosError } from 'axios';
import type { User } from '@/lib/types';
import * as authApi from '@/api/auth';
import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
} from '@/helpers/auth-helpers';
import type { LoginPayload } from '@/features/auth/components/login-form';
import type { RegisterPayload } from '@/features/auth/components/register-form';

export type AuthContext = {
  user: User | null | undefined;
  isAuthenticated: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>();
  const isAuthenticated = !!user;

  async function login(payload: LoginPayload) {
    const { user, token } = await authApi.login(payload);

    setAuthToken(token);
    setUser(user);
  }

  async function register(payload: RegisterPayload) {
    const { user, token } = await authApi.register(payload);

    setAuthToken(token);
    setUser(user);
  }

  function logout() {
    removeAuthToken();
    setUser(null);
  }

  async function getCurrentUser() {
    try {
      const token = getAuthToken();
      if (!token) {
        setUser(null);
        return;
      }

      const { user } = await authApi.getCurrentUser();
      setUser(user);
    } catch (error) {
      if (`${(error as AxiosError).status}`.startsWith('4')) {
        removeAuthToken();
      }
      setUser(null);
    }
  }

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error('useAuth must be used within <AuthProvider /> component');
  return context;
}
