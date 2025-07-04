import { api } from '@/api';
import type { User } from '@/lib/types';
import type { LoginPayload } from '@/features/auth/components/login-form';
import type { RegisterPayload } from '@/features/auth/components/register-form';

export const login = async (payload: LoginPayload) => {
  const {
    data: { user, token },
  } = await api.post<{ user: User; token: string }>('/auth/login', payload);

  return {
    user,
    token,
  };
};

export const register = async (payload: RegisterPayload) => {
  const {
    data: { user, token },
  } = await api.post<{ user: User; token: string }>('/auth/register', payload);

  return {
    user,
    token,
  };
};

export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await api.get<{ user: User }>('/auth/current-user');

  return {
    user,
  };
};
