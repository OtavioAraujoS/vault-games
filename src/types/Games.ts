export type GameStatus = 'Completo' | 'Progresso' | 'Pausado' | 'Pendente';

export interface Game {
  _id: string;
  userId: string;
  status: GameStatus;
  nome: string;
  image: string;
  description: string;
  createdAt: string;
  review?: string;
  hours: number | string;
}

export interface CreateGame {
  nome: string;
  description: string;
  image: string;
  hours: number;
  review: string;
  status: GameStatus;
  userId: string;
}
