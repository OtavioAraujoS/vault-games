import { DashboardInfos } from '@/types/Dashboard';
import { api as apiService, ApiService, defaultUrl } from './api';

class DashboardService {
  constructor(private readonly api: ApiService) {}

  public getDashboardInfos = async (): Promise<DashboardInfos> => {
    const response = await this.api.get(`${defaultUrl}/dashboard/data`);
    return response as DashboardInfos;
  };
}
export const dashboardService = new DashboardService(apiService);
