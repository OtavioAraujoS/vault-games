import { User } from '@/types/User';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LoginState {
  loginInfos: User;
  setLoginInfos: (loginInfos: User) => void;
  logout: () => void;
  getLoginInfos: () => User;
}

export const LoginContext = create<LoginState, [['zustand/persist', unknown]]>(
  persist(
    (set, get) => ({
      loginInfos: {
        id: '',
        _id: '',
        name: '',
        image: '',
      },
      setLoginInfos: (loginInfos: User) => set({ loginInfos }),
      logout: () => set({ loginInfos: { id: '', name: '', image: '' } }),
      getLoginInfos: () => get().loginInfos,
    }),
    {
      name: 'login-infos',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
