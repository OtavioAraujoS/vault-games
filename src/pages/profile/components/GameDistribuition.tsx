import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { generateRandomColor } from '@/utils/GenerateRandomColor';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Pie, PieChart } from 'recharts';
import { chartConfig } from './ChartConfig';

interface GameDistributionFormated {
  title: string;
  quantidade: number;
  fill: string;
}

export default function GameDistribuition() {
  const [gameDistribution, setGameDistribution] =
    useState<GameDistributionFormated[]>();
  const { id } = useParams();
  const { toast } = useToast();
  const [resume, setResume] = useState<string>('');

  useEffect(() => {
    if (!id) return;

    const getLastUpdatedGames = async () => {
      try {
        const response = await gameService.getGameDistribuitionByUserId(id);
        const formattedResponse: GameDistributionFormated[] = Object.entries(
          response
        ).map(([key, value]) => ({
          title: key,
          quantidade: value as number,
          fill: generateRandomColor(),
        }));

        setGameDistribution(formattedResponse);

        const sortedGames = formattedResponse.sort(
          (a, b) => b.quantidade - a.quantidade
        );

        const mostPlayed = sortedGames[0];
        const leastPlayed = sortedGames[sortedGames.length - 1];

        let message = `Você tem jogado muito jogos na categoria: "${mostPlayed.title}". `;
        if (mostPlayed.title === 'Pendente') {
          message += 'Tente focar em completar mais jogos!';
        } else if (leastPlayed.title === 'Completo') {
          message += 'Parabéns por completar muitos jogos, mas continue assim!';
        } else {
          message += `Considere dar mais atenção a seus jogos que estão: "${leastPlayed.title}".`;
        }

        setResume(message);
      } catch (error) {
        toast({
          title: 'Erro',
          description: String(error) || 'Erro ao buscar os jogos atualizados',
          variant: 'destructive',
        });
      }
    };
    getLastUpdatedGames();
  }, [id, setGameDistribution]);
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="dark:text-white font-bebas text-center text-sm sm:text-lg md:text-xl lg:text-2xl">
        Distribuição De Jogos por Status
      </h1>

      <Card className="flex flex-col w-full h-full max-w-[10rem] sm:min-w-[11rem] sm:max-w-[12rem] md:min-w-[15rem] md:max-w-[18rem] lg:min-w-[22rem] lg:max-w-[30rem]">
        <CardHeader className="w-full max-w-[8rem] sm:max-w-[10rem] md:max-w-[16rem] lg:max-w-xs">
          <CardTitle>Distribuição de Jogos</CardTitle>
          <CardDescription>Filtro: Status</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-10">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[16rem] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={gameDistribution}
                dataKey="quantidade"
                label
                nameKey="title"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <h1 className="flex items-center text-center gap-2 font-medium leading-none">
            {resume}
          </h1>
        </CardFooter>
      </Card>
    </div>
  );
}
