'use client';

import { Suspense, useEffect, useState, useTransition } from 'react';
import { NotAllowedPage } from '@/components/NotAllowedPage';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { dashboardService } from '@/services/dashboard';
import { DashboardInfos } from '@/types/Dashboard';
import { mapError } from '@/utils/ErrosMap';
import { GamesByStatus } from './components/GamesByStatus';
import { RankByHours } from './components/RankByHours';
import { RankByRegisteredGames } from './components/RankByRegisteredGames';
import { UsersPlaying } from './components/UsersPlaying';
import { Loader2 } from 'lucide-react';
import { LoadingComponent } from '@/components/LoadingComponent';

export const Dashboard = () => {
  const [isPending, startTransition] = useTransition();
  const [dashboardInfos, setDashboardInfos] = useState<DashboardInfos>();
  const { loginInfos } = LoginContext();
  const { toast } = useToast();

  const handleGetDashboardInfos = async () => {
    try {
      if (!loginInfos) return;

      const response = await dashboardService.getDashboardInfos();
      setDashboardInfos(response);
    } catch (error) {
      toast({
        title: 'Erro ao buscar informações do dashboard',
        description:
          mapError(String(error)) ||
          'Não foi possível buscar as informações do dashboard',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    startTransition(() => {
      handleGetDashboardInfos();
    });
  }, []);

  if (!loginInfos) return <NotAllowedPage />;

  return (
    <Suspense fallback={<LoadingComponent />}>
      {isPending || !dashboardInfos ? (
        <div className="flex flex-col items-center justify-center h-screen text-gray-500 dark:text-gray-400 gap-4 transition-opacity duration-300">
          <Loader2 className="animate-spin size-10" />
          <p>Carregando informações...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-16 dark:text-white h-full min-h-screen p-14 transition-opacity duration-500">
          <div className="flex flex-wrap-reverse justify-center items-center gap-6 pt-6 lg:justify-between lg:gap-0">
            <div>
              <h1 className="font-bold font-bebas text-[2.5rem] text-center lg:text-left">
                Seja bem-vindo(a), {loginInfos.name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center lg:text-left">
                Aqui você pode ver algumas informações sobre o seu perfil e
                sobre o sistema.
              </p>
            </div>

            <div>
              <img
                src={
                  loginInfos.image !== 'userPicture'
                    ? loginInfos.image
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2deTTpL5Z_Y-FBxr3DhfCdoDNHvUEmtvjQ&s'
                }
                alt="profile"
                className="rounded-full size-28 shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col text-center gap-6 w-full border-y-2 pb-16 border-gray-300 dark:border-gray-700 py-6 lg:text-left">
            <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
              Status dos Jogos Cadastrados no Sistema
            </h2>
            <GamesByStatus
              gameStatusDistribution={dashboardInfos.gameStatusDistribution}
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
              Ranking de horas jogadas
            </h2>
            <RankByHours gameStatusDistribution={dashboardInfos.gamesPerUser} />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
              Usuários com mais jogos cadastrados
            </h2>
            <RankByRegisteredGames
              rankByRegisteredGames={
                dashboardInfos.rankedUsersByRegisteredGames
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
              Usuários estão jogando
            </h2>
            <UsersPlaying
              currentPlayingGames={dashboardInfos.currentPlayingGames}
            />
          </div>
        </div>
      )}
    </Suspense>
  );
};
