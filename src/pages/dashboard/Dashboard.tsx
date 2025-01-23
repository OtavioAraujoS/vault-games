import { NotAllowedPage } from '@/components/NotAllowedPage';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { dashboardService } from '@/services/dashboard';
import { DashboardInfos } from '@/types/Dashboard';
import { mapError } from '@/utils/ErrosMap';
import { useEffect, useState } from 'react';
import { GamesByStatus } from './components/GamesByStatus';
import { GamesByUser } from './components/GamesByUser';
import { RankByHours } from './components/RankByHours';

export const Dashboard = () => {
  const [dashboardInfos, setDashboardInfos] = useState<DashboardInfos>();
  const { loginInfos } = LoginContext();
  const { toast } = useToast();

  useEffect(() => {
    const handleGetDashboardInfos = async () => {
      try {
        if (!loginInfos) {
          return;
        }

        const response = await dashboardService.getDashboardInfos();
        setDashboardInfos(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast({
          title: 'Erro ao buscar informações do dashboard',
          description:
            mapError(error) ||
            'Não foi possível buscar as informações do dashboard',
          variant: 'destructive',
        });
      }
    };

    handleGetDashboardInfos();
  }, []);

  return loginInfos ? (
    <div className="flex flex-col gap-8 dark:text-white h-screen p-12">
      <div className="flex flex-wrap-reverse justify-center items-center gap-6 pb-4 lg:justify-between lg:gap-0">
        <div>
          <h1 className="font-bold font-bebas text-[2.5rem] text-center lg:text-left">
            Seja bem vindo(a), {loginInfos.name}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center lg:text-left">
            Aqui você pode ver algumas informações sobre o seu perfil e sobre o
            sistema.
          </p>
        </div>

        <div>
          <img
            src={loginInfos.image !== "userPicture" ?
              loginInfos.image :
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2deTTpL5Z_Y-FBxr3DhfCdoDNHvUEmtvjQ&s'
            }
            alt="profile"
            className="rounded-full size-28 shadow-lg"
            loading='lazy'
          />
        </div>
      </div>

      <div className="flex flex-col text-center gap-6 w-full border-y-2 border-gray-300 dark:border-gray-700 py-6 lg:text-left">
        <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
          Informações de status de jogos no sistema
        </h2>

        <GamesByStatus
          gameStatusDistribution={dashboardInfos?.gameStatusDistribution}
        />
      </div>

      <div className="flex flex-col w-full">
        <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
          Ranking de horas jogadas
        </h2>

        <div>
          <RankByHours gameStatusDistribution={dashboardInfos?.gamesPerUser} />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="font-bold font-bebas text-[2rem] text-center lg:text-left">
          Jogos cadastrados por você
        </h2>

        <GamesByUser userId={loginInfos.id} />
      </div>
    </div>
  ) : (
    <NotAllowedPage />
  );
};
