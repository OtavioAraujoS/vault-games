import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const EditarJogos = () => {
  const [gameInfos, setGameInfos] = useState<Game | object>({});
  const { id } = useParams();

  useEffect(() => {
    const getGameInfos = async () => {
      try {
        if (!id) {
          return;
        }
        const response = await gameService.getGameInfosById(id);
        setGameInfos(response);
      } catch (error) {
        console.log(error);
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
