import { Card } from '@/components/Card';
import { DataTable } from '@/components/DataTable';
import { NotAllowedPage } from '@/components/NotAllowedPage';
import { TitlePage } from '@/components/TitlePage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const itemsPerPage = 10;
  const { loginInfos } = LoginContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegisterGame = () => {
    navigate('/cadastrar-jogos');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredGames = gamesInfos.filter((game) => {
    return (
      game.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter ? game.status === statusFilter : true)
    );
  });

  const paginatedGames = filteredGames.slice(
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
        <div className="flex flex-wrap justify-between items-center gap-4 sm:gap-0">
          <TitlePage title="Jogos Cadastrados " />
          <Button
            onClick={handleRegisterGame}
            className="flex items-center gap-2 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded"
          >
            <Plus />
            Cadastrar Novo Jogo
          </Button>
        </div>

        <div className="flex flex-wrap justify-between mb-4 gap-4 lg:gap-0">
          <Input
            type="text"
            placeholder="Buscar pelo nome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full min-h-[3rem] border p-3 rounded  dark:text-white lg:w-[50%]"
          />

          <Select onValueChange={(value) => setStatusFilter(value)}>
            <SelectTrigger className="w-full min-h-[3rem] dark:text-white lg:w-[20%]">
              <SelectValue
                placeholder="Todos os Status"
                className="dark:text-white"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="dark:text-white">
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Progresso">Progresso</SelectItem>
                <SelectItem value="Pausado">Pausado</SelectItem>
                <SelectItem value="Completo">Completo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DataTable data={paginatedGames} columns={GamesColumns()} />

        <Pagination className="dark:text-white">
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious
                onClick={() => {
                  if (currentPage !== 1) handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from(
              { length: Math.ceil(filteredGames.length / itemsPerPage) },
              (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem className="cursor-pointer">
              <PaginationNext
                onClick={() => {
                  if (
                    currentPage !==
                    Math.ceil(filteredGames.length / itemsPerPage)
                  )
                    handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ) : (
    <NotAllowedPage />
  );
};
