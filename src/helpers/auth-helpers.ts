const STORAGE_KEY = 'auth_token';

export const setAuthToken = (token: string) => {
  localStorage.setItem(STORAGE_KEY, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(STORAGE_KEY);
};

export const removeAuthToken = () => {
  localStorage.removeItem(STORAGE_KEY);
};
