import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { mapError } from '@/utils/ErrosMap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const EditarJogos = () => {
  const [gameInfos, setGameInfos] = useState<Game | object>({});
  const { id } = useParams();
  const { toast } = useToast();

  useEffect(() => {
    const getGameInfos = async () => {
      try {
        if (!id) {
          return;
        }
        const response = await gameService.getGameInfosById(id);
        setGameInfos(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast({
          title: 'Erro ao buscar informações do jogo',
          description: mapError(error.message),
          variant: 'destructive',
        });
      }
    };

    getGameInfos();
  }, [id]);

  console.log(gameInfos);

  return (
    <div className="w-full h-full min-h-[100vh] dark:text-white">
      <h1>Editar Jogos</h1>
      <p>Id do jogo: {id}</p>
    </div>
  );
};
