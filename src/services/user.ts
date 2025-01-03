import { UserLogin, UsersInfo } from '../types/User';
import { api as apiService, ApiService, defaultUrl } from './api';

class UserService {
  constructor(private readonly api: ApiService) {}

  public getAllUsers = async (): Promise<UsersInfo[]> => {
    const response = await this.api.get(`${defaultUrl}/user/all`);
    return response as UsersInfo[];
  };

  public login = async (data: UserLogin) => {
    return this.api.post(`${defaultUrl}/login`, {
      ...data,
    });
  };

  public register = async (data: UserLogin) => {
    return this.api.post(`${defaultUrl}/create`, {
      ...data,
    });
  };
}
export const userService = new UserService(apiService);
