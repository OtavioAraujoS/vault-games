import { GameStatus } from './Games';

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

export interface DashboardInfos {
  totalUsers: number;
  totalGames: number;
  gamesPerUser: GamesPerUser[];
  gameStatusDistribution: GameStatusDistribution[];
}
