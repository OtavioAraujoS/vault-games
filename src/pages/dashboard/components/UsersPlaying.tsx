import { CurrentPlayingGames } from '@/types/Dashboard';

interface UserPlayingProps {
  currentPlayingGames?: CurrentPlayingGames[];
}
export const UsersPlaying = ({ currentPlayingGames }: UserPlayingProps) => {
  return (
    <div className="flex gap-4">
      {currentPlayingGames?.map((user) => (
        <div className="relative">
          <img
            src={user.userImage}
            alt={user.userName}
            className="w-14 h-14 rounded-full shadow-lg absolute bottom-2 right-1 border-2 border-white"
            loading="lazy"
          />
          <img
            src={user.game.image}
            alt={user.game.nome}
            loading="lazy"
            className="w-fit max-h-80 rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};
