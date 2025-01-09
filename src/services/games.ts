import { Game } from '@/types/Games';
import { api as apiService, ApiService, defaultUrl } from './api';

class GameService {
  constructor(private readonly api: ApiService) {}

  public getGamesByUser = async (id: string): Promise<Game[]> => {
    const response = await this.api.get(`${defaultUrl}/games/user/${id}`);
    return response as Game[];
  };
}
export const gameService = new GameService(apiService);
