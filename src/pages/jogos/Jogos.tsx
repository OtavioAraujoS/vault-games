import { Card } from '@/components/Card';
import { NotAllowedPage } from '@/components/NotAllowedPage';
import { LoginContext } from '@/context/LoginContext';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { useEffect, useState } from 'react';

export const Jogos = () => {
  const [gamesInfos, setGamesInfos] = useState<Game[] | []>([]);
  const { loginInfos } = LoginContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loginInfos.id) return;
        const response = await gameService.getGamesByUser(loginInfos.id);
        setGamesInfos(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [loginInfos.id]);

  return loginInfos ? (
    <div className="flex flex-col h-full min-h-[100vh] w-full">
      <div className="flex flex-wrap gap-4">
        <Card title="Jogos Cadastrados" value={gamesInfos.length || 0} />
        <Card
          title="Jogos Não Iniciados"
          value={
            gamesInfos.filter((item) => item.status === 'Não Iniciado')
              ?.length || 0
          }
        />
        <Card
          title="Em Andamento"
          value={
            gamesInfos.filter((item) => item.status === 'Em Andamento')
              ?.length || 0
          }
        />
        <Card
          title="Jogos Pausados"
          value={
            gamesInfos.filter((item) => item.status === 'Pausado')?.length || 0
          }
        />
        <Card
          title="Jogos Completos"
          value={
            gamesInfos.filter((item) => item.status === 'Concluido')?.length ||
            0
          }
        />
      </div>
    </div>
  ) : (
    <NotAllowedPage />
  );
};
