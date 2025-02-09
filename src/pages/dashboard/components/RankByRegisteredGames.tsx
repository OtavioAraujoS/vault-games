import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RankedUsersByRegisteredGames } from '@/types/Dashboard';
import { Crown } from 'lucide-react';
import 'tailwindcss/tailwind.css';

interface RankByRegisteredGamesProps {
  rankByRegisteredGames?: RankedUsersByRegisteredGames[];
}

export const RankByRegisteredGames = ({
  rankByRegisteredGames,
}: RankByRegisteredGamesProps) => {
  const topThree = rankByRegisteredGames?.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
      {topThree && (
        <>
          {topThree[1] && (
            <Card
              key={topThree[1].userName}
              className="w-full md:w-1/3 order-1 bg-yellow-600 dark:bg-yellow-600"
            >
              <CardHeader className="flex flex-col justify-center items-center text-center gap-2">
                <img
                  src={topThree[1].userImage}
                  alt={topThree[1].userName}
                  className="w-20 h-20 rounded-full"
                  loading="lazy"
                />
                <h2 className="text-3xl font-bold font-bebas tracking-wider text-white">
                  #2
                </h2>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white text-2xl font-bebas tracking-widest">
                  {topThree[1].userName}
                </p>
                <p className="text-md text-gray-200 tracking-wide">
                  {topThree[1].gameCount} games
                </p>
              </CardContent>
            </Card>
          )}
          {topThree[0] && (
            <Card
              key={topThree[0].userName}
              className="w-full md:w-1/3 order-2 bg-green-600 dark:bg-green-600"
            >
              <CardHeader className="flex flex-col justify-center items-center text-center gap-2 relative">
                <Crown className="absolute -top-1 size-10 text-yellow-400 dark:text-yellow-400 animate-pulse" />
                <img
                  src={topThree[0].userImage}
                  alt={topThree[0].userName}
                  className="w-20 h-20 rounded-full"
                  loading="lazy"
                />
                <h2 className="text-3xl font-bold font-bebas tracking-wider text-white">
                  #1
                </h2>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white text-2xl font-bebas tracking-widest">
                  {topThree[0].userName}
                </p>
                <p className="text-md text-gray-200 tracking-wide">
                  {topThree[0].gameCount} games
                </p>
              </CardContent>
            </Card>
          )}
          {topThree[2] && (
            <Card
              key={topThree[2].userName}
              className="w-full md:w-1/3 order-3 bg-red-600 dark:bg-red-600"
            >
              <CardHeader className="flex flex-col justify-center items-center text-center gap-2">
                <img
                  src={topThree[2].userImage}
                  alt={topThree[2].userName}
                  className="w-20 h-20 rounded-full"
                  loading="lazy"
                />
                <h2 className="text-3xl font-bold font-bebas tracking-wider text-white">
                  #3
                </h2>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white text-2xl font-bebas tracking-widest">
                  {topThree[2].userName}
                </p>
                <p className="text-md text-gray-200 tracking-wide">
                  {topThree[2].gameCount} games
                </p>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};
