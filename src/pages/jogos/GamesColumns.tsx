import { Dialog } from '@/components/Dialog';
import { StatusChip } from '@/components/StatusChip';
import { Button } from '@/components/ui/button';
import { UnlinkMessage } from '@/components/UnlinkMessage';
import { useToast } from '@/hooks/use-toast';
import { gameService } from '@/services/games';
import { Game } from '@/types/Games';
import type { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';
import { useNavigate } from 'react-router';

export const GamesColumns = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleDeleteGame = async (id: string) => {
    try {
      await gameService.deleteGame(id);

      setTimeout(() => {
        navigate(0);
      }, 4000);

      return toast.toast({
        title: 'Sucesso',
        description: 'Jogo deletado com sucesso',
        variant: 'default',
      });
    } catch {
      toast.toast({
        title: 'Erro',
        description: 'Erro ao deletar jogo',
        variant: 'destructive',
      });
    }
  }

  const GamesColumns: ColumnDef<Game>[] = [
    {
      accessorKey: 'Poster',
      header: () => {
        return <div className="ml-9 dark:text-white">Poster</div>;
      },
      cell: ({ row }) => {
        return (
          <img
            src={row.original.image}
            alt="Poster"
            className="w-fit max-w-[7.5rem] h-44"
          />
        );
      },
    },
    {
      accessorKey: 'Identificador',
      header: () => {
        return (
          <div className="flex justify-center dark:text-white">Identificador</div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex justify-center dark:text-white tracking-wider text-[0.9rem]">
            {row.original._id}
          </div>
        );
      },
    },
    {
      accessorKey: 'Nome',
      header: () => {
        return <div className="flex justify-center dark:text-white">Nome</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="flex justify-center dark:text-white tracking-wider text-[0.9rem]">
            {row.original.nome}
          </div>
        );
      },
    },
    {
      accessorKey: 'Tempo',
      header: () => {
        return <div className="text-center dark:text-white">Horas de Jogo</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center dark:text-white tracking-wider text-[0.9rem]">
            {row.original.hours !== 0 ? `${row.original.hours} Horas` : 'N/A'}
          </div>
        );
      },
    },
    {
      accessorKey: 'Status',
      header: () => {
        return <div className="flex justify-center dark:text-white">Status</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <StatusChip status={row.original.status} />
          </div>
        );
      },
    },
    {
      accessorKey: 'Editar',
      header: () => {
        return <div className="flex justify-center dark:text-white">Editar</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <a
              href={`/jogos/${row.original._id}`}
              className="dark:text-white hover:underline"
            >
              <Button
                variant="outline"
                className="rounded-full size-12 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700"
              >
                <Pencil color="white" />
              </Button>
            </a>
          </div>
        );
      },
    },
    {
      accessorKey: 'options',
      header: () => {
        return <div className="dark:text-white">Apagar</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="dark:text-white">
            <Dialog
              buttonTitle={<Trash color="white" />}
              title="Apagar Game"
              description="Você tem certeza de que deseja apagar esse game?"
              className="size-12 rounded-full bg-red-600 dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-700"
              buttonActionTitle="Apagar"
              buttonSubmitClassname="w-full text-white bg-red-600 hover:bg-red-700 md:w-fit"
              onClose={() => handleDeleteGame(row.original._id)}
            >
              <UnlinkMessage>
                <p className="dark:text-white max-w-[50rem] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]">
                  Você tem certeza de que deseja apagar o game{' '}
                  <strong>{row.original?.nome || 'Game'} </strong> ? Todas as
                  incrições cadastradas nesse game serão apagadas
                </p>
              </UnlinkMessage>
            </Dialog>
          </div>
        );
      },
    },
  ];

  return GamesColumns;
}