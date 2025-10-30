import { UserLogin, UsersInfo } from '../types/User';
import { api as apiService, ApiService, defaultUrl } from './api';

class UserService {
  constructor(private readonly api: ApiService) {}

  public getAllUsers = async (): Promise<UsersInfo[]> => {
    const response = await this.api.get(`${defaultUrl}/user/all`);
    return response as UsersInfo[];
  };

  public getUserById = async (
    id: string,
    userWhoRequested: string
  ): Promise<UsersInfo> => {
    const response = await this.api.get(`${defaultUrl}/user/${id}`, {
      headers: { userwhorequest: userWhoRequested },
    });
    return response as UsersInfo;
  };

  public login = async (data: UserLogin): Promise<UsersInfo> => {
    const response = await this.api.post(`${defaultUrl}/user/login`, {
      ...data,
    });
    return response as UsersInfo;
  };

  public register = async (data: UserLogin): Promise<UsersInfo> => {
    const response = await this.api.post(`${defaultUrl}/user/create`, {
      ...data,
    });
    return response as UsersInfo;
  };

  public updateUserInfos = async (
    id: string,
    data: Partial<UsersInfo>
  ): Promise<UsersInfo> => {
    const response = await this.api.put(
      `${defaultUrl}/user/update-infos/${id}`,
      {
        ...data,
      }
    );
    return response as UsersInfo;
  };
}
export const userService = new UserService(apiService);
