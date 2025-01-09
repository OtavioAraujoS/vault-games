export type GameStatus =
  | 'Concluido'
  | 'Em Andamento'
  | 'Pausado'
  | 'Não Iniciado';

export interface Game {
  _id: string;
  userId: string;
  status: GameStatus;
  nome: string;
  image: string;
  description: string;
  createdAt: string;
}
