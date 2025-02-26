export interface User {
  id: string;
  _id?: string;
  name: string;
  image: string;
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
  id: string;
  nome: string;
  password: string;
  createdAt: string;
  picture: string;
  __v: number;
}
