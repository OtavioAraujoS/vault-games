import { GamesPerUser } from '@/types/Dashboard';

interface GamesByStatusProps {
  gameStatusDistribution?: GamesPerUser[];
}

export const GamesRegisteredByUser = ({
  gameStatusDistribution,
}: GamesByStatusProps) => {
  const sortedGameStatusDistribution = gameStatusDistribution?.sort(
    (a, b) => b.timePlayed - a.timePlayed
  );

  return (
    <div className="flex flex-col gap-12 mt-5 w-full">
      {sortedGameStatusDistribution?.map((gameStatus) => {
        return (
          <div
            key={gameStatus.userId}
            className="flex flex-wrap flex-col md:justify-center lg:flex-row lg:justify-between gap-8 lg:gap-0 items-center w-full border-b-2 border-gray-300 dark:border-gray-700 py-6"
          >
            <div className="flex items-center gap-8">
              <img
                src={
                  gameStatus.userImage !== 'userPicture'
                    ? gameStatus.userImage
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2deTTpL5Z_Y-FBxr3DhfCdoDNHvUEmtvjQ&s'
                }
                alt="profile"
                className="rounded-full size-16"
              />
              <h3 className="text-[1.2rem] font-bebas tracking-wider">
                {gameStatus.userName}
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[1.5rem] font-bebas tracking-wider">
                Jogos Registrados:{' '}
                <strong className="text-yellow-500">
                  {gameStatus.gameCount} Jogos
                </strong>
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-[1.5rem] font-bebas">
                Horas Jogadas:{' '}
                <strong className="text-yellow-500">
                  {gameStatus.timePlayed} Horas
                </strong>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
