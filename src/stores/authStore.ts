import {create} from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  login: (email, password) => {
    // Add login logic here
    console.log('Logging in with:', email, password);
    set({isAuthenticated: true});
  },
  logout: () => {
    // Add logout logic here
    console.log('Logging out');
    set({isAuthenticated: false});
  },
}));
