import { Card } from '@/components/Card';
import { DataTable } from '@/components/DataTable';
import { NotAllowedPage } from '@/components/NotAllowedPage';
import { TitlePage } from '@/components/TitlePage';
import { Button } from '@/components/ui/button';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { mapError } from '@/utils/ErrosMap';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { GamesColumns } from './GamesColumns';

export const Jogos = () => {
  const [gamesInfos, setGamesInfos] = useState<Game[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loginInfos } = LoginContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  const itemsPerPage = 10;

  const handleRegisterGame = () => {
    navigate('/cadastrar-jogos');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedGames = gamesInfos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loginInfos.id) return;
        const response = await gameService.getGamesByUser(loginInfos.id);
        setGamesInfos(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast({
          title: 'Erro',
          description: mapError(error.message),
          variant: 'destructive',
        });
      }
    };
    fetchData();
  }, [loginInfos.id]);

  return loginInfos ? (
    <div className="flex flex-col h-full min-h-screen w-full p-12 gap-4">
      <div className="flex flex-wrap gap-4">
        <Card title="Jogos Cadastrados" value={gamesInfos.length || 0} />
        <Card
          title="Jogos Não Iniciados"
          value={
            gamesInfos.filter((item) => item.status === 'Pendente')?.length || 0
          }
        />
        <Card
          title="Em Andamento"
          value={
            gamesInfos.filter((item) => item.status === 'Progresso')?.length ||
            0
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
            gamesInfos.filter((item) => item.status === 'Completo')?.length || 0
          }
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <TitlePage title="Jogos Cadastrados " />

          <Button
            onClick={handleRegisterGame}
            className="flex items-center gap-2 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded"
          >
            <Plus /> Cadastrar Jogo
          </Button>
        </div>

        <DataTable data={paginatedGames} columns={GamesColumns()} />
        {}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from(
            { length: Math.ceil(gamesInfos.length / itemsPerPage) },
            (_, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                variant={currentPage === index + 1 ? 'default' : 'secondary'}
              >
                {index + 1}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  ) : (
    <NotAllowedPage />
  );
};
