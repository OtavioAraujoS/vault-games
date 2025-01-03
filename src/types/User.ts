export interface User {
  id: string;
  name: string;
}

export interface UserLogin {
  nome: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export interface UsersInfo {
  _id: string;
  nome: string;
  password: string;
  createdAt: string;
  __v: number;
}
