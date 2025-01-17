import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { mapError } from '@/utils/ErrosMap';
import { Undo2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Form } from './compoents/Form';

export const EditarJogos = () => {
  const [gameInfos, setGameInfos] = useState<Game>({
    _id: '',
    nome: '',
    description: '',
    image: '',
    hours: 0,
    createdAt: '',
    status: 'Pendente',
    userId: '',
    review: '',
  });
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

  return id && gameInfos.nome ? (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-12 p-6 md:p-10 dark:bg-[#181818]">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="/jogos"
            className="flex items-center gap-2 font-medium dark:text-white"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Undo2 className="size-4 dark:text-white" />
            </div>
            Retornar
          </a>
        </div>
        <div className="flex w-full">
          <Form gameId={id} game={gameInfos} />
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/updateFormWallpaper.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-4 justify-center items-center h-full min-h-[100vh] dark:bg-[#181818]">
      <h1 className="text-2xl font-bold dark:text-white">
        Jogo não encontrado
      </h1>
      <Button className="w-1/4">
        <a href="/jogos">Retornar para aba de jogos</a>
      </Button>
    </div>
  );
};
