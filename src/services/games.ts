import { CreateGame, Game } from '@/types/Games';
import { api as apiService, ApiService, defaultUrl } from './api';

class GameService {
  constructor(private readonly api: ApiService) { }

  public getGames = async (): Promise<Game[]> => {
    const response = await this.api.get(`${defaultUrl}/games`);
    return response as Game[];
  };

  public getGamesByUser = async (id: string): Promise<Game[]> => {
    const response = await this.api.get(`${defaultUrl}/games/user/${id}`);
    return response as Game[];
  };

  public getGameInfosById = async (id: string): Promise<Game> => {
    const response = await this.api.get(`${defaultUrl}/games/${id}`);
    return response as Game;
  };

  public createGame = async (game: CreateGame) => {
    await this.api.post(`${defaultUrl}/games`, game);
  };

  public updateGame = async (id: string, game: CreateGame) => {
    await this.api.put(`${defaultUrl}/games/${id}`, game);
  };

  public deleteGame = async (id: string) => {
    await this.api.delete(`${defaultUrl}/games/${id}`);
  };
}
export const gameService = new GameService(apiService);
