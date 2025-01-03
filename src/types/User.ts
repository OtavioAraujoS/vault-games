export interface User {
  id: string;
  name: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export interface UsersInfo {
  id: string;
  name: string;
  password: string;
  createdAt: string;
  __v: number;
}
