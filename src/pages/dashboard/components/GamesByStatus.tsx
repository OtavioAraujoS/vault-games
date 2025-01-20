import { GameStatusDistribution } from '@/types/Dashboard';
import { GameStatus } from '@/types/Games';
import { Ellipsis, Loader, TimerOff, Trophy } from 'lucide-react';

interface GamesByStatusProps {
  gameStatusDistribution?: GameStatusDistribution[];
}

const gamesStatusDistributionIcon = (status: GameStatus) => {
  switch (status) {
    case 'Completo':
      return <Trophy size={22} className="text-yellow-500" />;
    case 'Progresso':
      return <Loader size={22} className="text-yellow-500" />;
    case 'Pausado':
      return <TimerOff size={22} className="text-yellow-500" />;
    case 'Pendente':
      return <Ellipsis size={22} className="text-yellow-500" />;
    default:
      return '❓';
  }
};

export const GamesByStatus = ({
  gameStatusDistribution,
}: GamesByStatusProps) => {
  return gameStatusDistribution ? (
    <div className="flex flex-wrap justify-between items-center gap-4">
      {gameStatusDistribution.map((gameStatus, index) => {
        return (
          <div
            key={gameStatus.status}
            className={`w-full lg:w-[20rem] flex flex-wrap items-center justify-around gap-4 lg:border-r-2 border-gray-300 dark:border-gray-700 p-2 ${
              index === gameStatusDistribution.length - 1 ? 'border-r-0' : ''
            }`}
          >
            <div className="flex justify-center items-center rounded-full bg-[#F2F2F2] dark:bg-[#212121] size-16 p-2">
              {gamesStatusDistributionIcon(gameStatus.status)}
            </div>

            <div className="flex flex-col">
              <h3 className="text-[1.2rem] font-semibold tracking-wider">
                {gameStatus.status}
              </h3>
              <span className="text-center text-[1.5rem] text-yellow-500 font-bebas">
                {gameStatus.count}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};
