import { StatusChip } from '@/components/StatusChip';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { useEffect, useState } from 'react';

interface GamesByUserProps {
  userId: string;
}

export const GamesByUser = ({ userId }: GamesByUserProps) => {
  const [gamesByUser, setGamesByUser] = useState<Game[] | []>([]);
  const { toast } = useToast();

  useEffect(() => {
    const getGamesByUser = async () => {
      try {
        if (!userId) {
          return;
        }

        const response = await gameService.getGamesByUser(userId);
        setGamesByUser(response);
      } catch {
        toast({
          title: 'Erro ao buscar informações do dashboard',
          description: 'Não foi possível buscar as informações do dashboard',
        });
      }
    };

    getGamesByUser();
  }, []);

  return gamesByUser ? (
    <div className="flex flex-wrap gap-6 mt-5">
      {gamesByUser.map((item: Game) => (
        <div
          className="flex flex-col gap-2 h-fit min-h-[25rem] w-full max-w-64 max-h-[26rem] overflow-hidden bg-transparent border border-gray-300 rounded-md p-4"
          key={item._id}
        >
          <img src={item.image} alt={item.nome} className="size-48" loading='lazy' />
          <h1 className="text-[1.8rem] font-bebas tracking-wider">
            {item.nome}
          </h1>
          <h2 className="text-[0.8rem] text-wrap text-ellipsis whitespace-nowrap h-[3.5rem] truncate ...">
            {item.description}
          </h2>
          <div className="mt-4">
            <StatusChip status={item.status} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
};
