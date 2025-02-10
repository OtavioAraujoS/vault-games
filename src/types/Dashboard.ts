import { Game, GameStatus } from './Games';

export interface GamesPerUser {
  userId: string;
  userImage: string;
  userName: string;
  gameCount: number;
  timePlayed: number;
}

export interface GameStatusDistribution {
  status: GameStatus;
  count: number;
}

export interface RankedUsersByRegisteredGames {
  gameCount: number;
  userId: string;
  userName: string;
  userImage: string;
}

export interface CurrentPlayingGames {
  userId: string;
  userImage: string;
  userName: string;
  game: Game;
}

export interface DashboardInfos {
  totalUsers: number;
  totalGames: number;
  gamesPerUser: GamesPerUser[];
  gameStatusDistribution: GameStatusDistribution[];
  rankedUsersByRegisteredGames: RankedUsersByRegisteredGames[];
  currentPlayingGames: CurrentPlayingGames[];
}
