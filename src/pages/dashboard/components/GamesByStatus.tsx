import { GameStatusDistribution } from '@/types/Dashboard';
import { GameStatus } from '@/types/Games';
import { Ellipsis, Loader, TimerOff, Trophy } from 'lucide-react';

export interface CustomClass {
  iconClass: string;
  statusClass: string;
  labelClass: string;
  valueClass: string;
}

interface GamesByStatusProps {
  gameStatusDistribution?: GameStatusDistribution[];
  customClass?: CustomClass;
}

const gamesStatusDistributionIcon = (
  status: GameStatus,
  iconClass?: string
) => {
  switch (status) {
    case 'Completo':
      return <Trophy size={22} className={iconClass || 'text-yellow-500'} />;
    case 'Progresso':
      return <Loader size={22} className={iconClass || 'text-yellow-500'} />;
    case 'Pausado':
      return <TimerOff size={22} className={iconClass || 'text-yellow-500'} />;
    case 'Pendente':
      return <Ellipsis size={22} className={iconClass || 'text-yellow-500'} />;
    default:
      return '❓';
  }
};

export const GamesByStatus = ({
  gameStatusDistribution,
  customClass,
}: GamesByStatusProps) => {
  return gameStatusDistribution ? (
    <div className="flex flex-wrap justify-between items-center">
      {gameStatusDistribution.map((gameStatus, index) => {
        return (
          <div
            key={gameStatus.status}
            className={`w-full lg:w-[28rem] flex flex-wrap items-center justify-around gap-4 border-gray-300 dark:border-gray-700 p-2 ${
              index === 0 ? '' : 'border-0 md:border-l-2'
            }`}
          >
            <div
              className={
                customClass?.statusClass ||
                'flex justify-center items-center rounded-full bg-[#F2F2F2] dark:bg-[#212121] size-16 p-2'
              }
            >
              {gamesStatusDistributionIcon(
                gameStatus.status,
                customClass?.iconClass
              )}
            </div>

            <div className="flex flex-col">
              <h3
                className={
                  customClass?.labelClass ||
                  'text-[1.2rem] font-semibold tracking-wider'
                }
              >
                {gameStatus.status}
              </h3>
              <span
                className={
                  customClass?.valueClass ||
                  'text-center text-[1.5rem] text-yellow-500 font-bebas'
                }
              >
                {gameStatus.count}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};
