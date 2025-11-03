import { SafeImage } from '@/components/SafeImage';
import { CurrentPlayingGames } from '@/types/Dashboard';
import { ImageHandling } from '@/utils/ImageHandling';

interface UserPlayingProps {
  currentPlayingGames?: CurrentPlayingGames[];
}
export const UsersPlaying = ({ currentPlayingGames }: UserPlayingProps) => {
  return (
    <div className="flex gap-4">
      {currentPlayingGames?.map((user) => (
        <div
          className="relative"
          key={`${user?.game?.nome} - ${user?.userName}`}
        >
          <SafeImage
            src={user?.userImage}
            alt={user?.userName}
            className="w-14 h-14 rounded-full shadow-lg absolute bottom-2 right-1 border-2 border-white"
            loading="lazy"
          />

          <SafeImage
            src={ImageHandling(user?.game.image)}
            alt={user?.game.nome}
            className="w-fit max-w-[16rem] max-h-80 rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
