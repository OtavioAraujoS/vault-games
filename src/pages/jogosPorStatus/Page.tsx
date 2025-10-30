'use client';

import dayjs from 'dayjs';
import { Suspense, useEffect, useState, useTransition } from 'react';
import { StatusChip } from '@/components/StatusChip';
import { TitlePage } from '@/components/TitlePage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { GamesByStatus } from '@/types/Games';
import { Loader2 } from 'lucide-react';
import { LoadingComponent } from '@/components/LoadingComponent';

export const JogosPorStatus = () => {
  const [isPending, startTransition] = useTransition();
  const [gamesByStatus, setGamesByStatus] = useState<GamesByStatus>({
    Completo: [],
    Progresso: [],
    Pausado: [],
    Pendente: [],
  });
  const { loginInfos } = LoginContext();
  const { toast } = useToast();

  useEffect(() => {
    startTransition(() => {
      void (async () => {
        try {
          if (!loginInfos?.id) return;

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
            title: 'Erro ao buscar informações dos jogos',
            description: 'Não foi possível buscar as informações do dashboard',
            variant: 'destructive',
          });
        }
      })();
    });
  }, [loginInfos]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {isPending ? (
        <div className="flex flex-col items-center justify-center h-screen text-gray-500 dark:text-gray-400 gap-4 transition-opacity duration-300">
          <Loader2 className="animate-spin size-10" />
          <p>Buscando jogos por status...</p>
        </div>
      ) : (
        <div className="flex flex-col h-full min-h-screen w-full p-12 gap-4 transition-opacity duration-500">
          <TitlePage title="Jogos Por Status" />

          {Object.values(gamesByStatus).some((arr) => arr.length > 0) ? (
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
                      <h2 className="text-2xl font-bold mb-4 border-l-red-500 border-l-4 p-2 dark:text-white">
                        {status}
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4">
                        {gamesByStatus[status as keyof GamesByStatus].map(
                          (game) => (
                            <Dialog key={game._id}>
                              <DialogTrigger>
                                <div className="bg-zinc-100 dark:bg-[#212121] p-4 rounded-md shadow-md overflow-hidden h-full max-w-[18rem] cursor-pointer hover:scale-[1.02] transition-transform">
                                  <img
                                    src={game.image}
                                    alt={game.nome}
                                    className="w-fit h-fit object-cover rounded-md"
                                  />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="h-fit min-w-[70rem] bg-white dark:bg-[#212121]">
                                <DialogHeader>
                                  <DialogTitle className="text-black dark:text-white">
                                    Informações do Jogo
                                  </DialogTitle>
                                  <DialogDescription className="text-gray-800 dark:text-gray-400">
                                    Aqui você encontra informações sobre o jogo
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-col gap-6">
                                  <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex justify-between items-center">
                                      <h1 className="text-black dark:text-white text-2xl font-bold">
                                        Título: {game.nome}
                                      </h1>
                                      <h1 className="text-black dark:text-white text-xl font-bold">
                                        Criado em:{' '}
                                        <strong className="text-yellow-600 dark:text-yellow-500">
                                          {dayjs(game.createdAt).format(
                                            'DD/MM/YYYY'
                                          )}
                                        </strong>
                                      </h1>
                                    </div>
                                    <h1 className="text-gray-800 dark:text-gray-300 text-xl font-bold">
                                      Descrição: {game.description}
                                    </h1>
                                  </div>

                                  <div className="flex justify-between items-center">
                                    <h1 className="text-black dark:text-white text-xl font-bold">
                                      Tempo de jogo:{' '}
                                      <strong className="text-yellow-600 dark:text-yellow-500">
                                        {game.hours} horas
                                      </strong>
                                    </h1>
                                    <StatusChip status={game.status} />
                                  </div>

                                  <h1 className="text-black dark:text-gray-300 text-xl font-bold">
                                    Review:{' '}
                                    <strong className="text-yellow-600 dark:text-yellow-500 tracking-wider text-2xl">
                                      &ldquo;{game.review}&rdquo;
                                    </strong>
                                    🤔💭💡🧠
                                  </h1>
                                </div>
                              </DialogContent>
                            </Dialog>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          ) : (
            <p className="text-sm text-gray-500 text-center mt-10">
              Nenhum jogo encontrado.
            </p>
          )}
        </div>
      )}
    </Suspense>
  );
};
