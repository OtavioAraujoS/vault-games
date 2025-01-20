import { GamesPerUser } from '@/types/Dashboard';

interface GamesByStatusProps {
  gameStatusDistribution?: GamesPerUser[];
}

export const GamesRegisteredByUser = ({
  gameStatusDistribution,
}: GamesByStatusProps) => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4">
      {gameStatusDistribution?.map((gameStatus) => {
        return (
          <div
            key={gameStatus.userId}
            className="w-full grid grid-cols-3 items-center gap-4"
          >
            <div className="flex justify-start items-center text-center rounded-full bg-[#F2F2F2] dark:bg-[#212121] size-16">
              <h3 className="text-center">{gameStatus.userName}</h3>
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
