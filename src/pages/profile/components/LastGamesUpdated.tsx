'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function LastGamesUpdated() {
  const [games, setGames] = useState<Game[]>();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const { toast } = useToast();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!id) return;

    const getLastUpdatedGames = async () => {
      try {
        const response = await gameService.getLastUpdatedGameByUserId(id);
        setGames(response);
        setCount(response.length);
      } catch (error) {
        toast({
          title: 'Erro',
          description: String(error) || 'Erro ao buscar os jogos atualizados',
          variant: 'destructive',
        });
      }
    };
    getLastUpdatedGames();
  }, [id]);
  return (
    <div className="flex flex-col items-center gap-4 md:ml-12">
      <h1 className="dark:text-white font-bebas text-center text-sm sm:text-lg md:text-xl lg:text-2xl">
        Últimos Jogos Atualizados Pelo Usuário
      </h1>
      <Carousel
        setApi={setApi}
        className="w-full max-w-[8rem] sm:max-w-[10rem] md:max-w-[16rem] lg:max-w-xs"
      >
        <CarouselContent>
          {games?.map((game, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
                  <img
                    src={game.image}
                    alt={game.nome}
                    className="object-fit"
                  />
                  <p className="font-bebas tracking-wide text-sm md:text-base lg:text-lg">
                    {game.nome}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="dark:text-white hidden md:flex" />
        <CarouselNext className="dark:text-white hidden md:flex" />
      </Carousel>
      <div className="py-2 text-center text-base lg:text-lg text-muted-foreground font-oswald dark:text-white">
        <h1>
          Jogo {current} de {count}
        </h1>
      </div>
    </div>
  );
}
