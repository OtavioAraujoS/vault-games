import { Game } from "@/types/Games";

export function removeDuplicateGamesByName(games: Game[]): Game[] {
  const uniqueNames = new Set<string>();
  const uniqueGames: Game[] = [];

  for (const game of games) {
    const normalized = game.nome.trim().toLowerCase();
    if (!uniqueNames.has(normalized)) {
      uniqueNames.add(normalized);
      uniqueGames.push(game);
    }
  }

  return uniqueGames;
}