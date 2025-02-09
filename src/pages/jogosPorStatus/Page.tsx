import { TitlePage } from '@/components/TitlePage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { GamesByStatus } from '@/types/Games';
import { useEffect, useState } from 'react';

export const JogosPorStatus = () => {
  const [gamesByStatus, setGamesByStatus] = useState<GamesByStatus>({
    Completo: [],
    Progresso: [],
    Pausado: [],
    Pendente: [],
  });
  const { loginInfos } = LoginContext();
  const { toast } = useToast();

  useEffect(() => {
    const getGamesByUser = async () => {
      try {
        if (!loginInfos.id) {
          return;
        }

        const response = await gameService.getGamesByUser(loginInfos.id);
        setGamesByStatus(
          response.reduce(
            (acc: GamesByStatus, game) => {
              acc[game.status].push(game);
              return acc;
            },
            {
              Completo: [],
              Progresso: [],
              Pausado: [],
              Pendente: [],
            }
          )
        );
      } catch {
        toast({
          title: 'Erro ao buscar informações do dashboard',
          description: 'Não foi possível buscar as informações do dashboard',
        });
      }
    };

    getGamesByUser();
  }, []);

  return (
    <div className="flex flex-col h-full min-h-screen w-full p-12 gap-4">
      <TitlePage title="Jogos Por Status" />

      {Object.keys(gamesByStatus).length > 0 ? (
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={['Completo', 'Progresso', 'Pausado', 'Pendente']}
        >
          {Object.keys(gamesByStatus)
            .filter(
              (status) =>
                gamesByStatus[status as keyof GamesByStatus].length > 0
            )
            .map((status) => (
              <AccordionItem key={status} value={status}>
                <AccordionTrigger>
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">
                    {status}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gamesByStatus[status as keyof GamesByStatus].map(
                      (game) => (
                        <div
                          key={game._id}
                          className="bg-white p-4 rounded-md shadow-md"
                        >
                          <img
                            src={game.image}
                            alt={game.nome}
                            className="w-full h-48 object-cover rounded-md"
                          />
                          <h3 className="text-lg font-bold mt-4">
                            {game.nome}
                          </h3>
                          <p className="text-sm text-gray-500 mt-2">
                            {game.description}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            {game.hours} horas jogadas
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            {game.review}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      ) : (
        <p className="text-sm text-gray-500">Nenhum jogo encontrado.</p>
      )}
    </div>
  );
};
