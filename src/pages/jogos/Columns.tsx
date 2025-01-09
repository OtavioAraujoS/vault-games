import { AlignDiv } from '@/components/AlignDiv';
import { Dialog } from '@/components/Dialog';
import { StatusChip } from '@/components/StatusChip';
import { UnlinkMessage } from '@/components/UnlinkMessage';
import { Game } from '@/types/Games';
import type { ColumnDef } from '@tanstack/react-table';
import { Trash } from 'lucide-react';

export function GetColumns(): ColumnDef<Game>[] {
  return [
    {
      accessorKey: 'id',
      header: () => {
        return <AlignDiv>ID</AlignDiv>;
      },
      cell: ({ row }) => {
        return <AlignDiv>{row.original._id}</AlignDiv>;
      },
    },
    {
      accessorKey: 'nome',
      header: () => {
        return <AlignDiv>Nome</AlignDiv>;
      },
      cell: ({ row }) => {
        return <AlignDiv>{row.original.nome}</AlignDiv>;
      },
    },
    {
      accessorKey: 'status',
      header: () => {
        return <AlignDiv>Status</AlignDiv>;
      },
      cell: ({ row }) => {
        return (
          <AlignDiv>
            <StatusChip status={row.original.status} />
          </AlignDiv>
        );
      },
    },
    {
      accessorKey: 'options',
      header: () => {
        return <AlignDiv>Opções</AlignDiv>;
      },
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center gap-6">
            <Dialog
              buttonTitle={<Trash color="white" />}
              title="Apagar Game"
              description="Você tem certeza de que deseja apagar esse game?"
              className="size-12 rounded-full bg-red-600 hover:bg-red-700"
              buttonActionTitle="Apagar"
              buttonSubmitClassname="w-full text-white bg-red-600 hover:bg-red-700 md:w-fit"
              onClose={() => console.log("I'm closing")}
            >
              <UnlinkMessage>
                <p className="max-w-[50rem] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]">
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
}
