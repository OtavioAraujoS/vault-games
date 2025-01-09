import { GameStatus } from '@/types/Games';

interface statusChipProps {
  status: GameStatus;
}

export function StatusChip({ status }: statusChipProps) {
  let className: string;
  let statusTitle: string;

  switch (status) {
    case 'Concluido':
      className =
        'pl-4 pr-4 text-white bg-green-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Concluído';
      break;
    case 'Não Iniciado':
      className =
        'pl-4 pr-4 text-white bg-purple-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Não Iniciado';
      break;
    case 'Em Andamento':
      className =
        'pl-4 pr-4 text-white bg-yellow-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Em Andamento';
      break;
    case 'Pausado':
      className =
        'pl-4 pr-4 text-white bg-red-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Pausado';
      break;
    default:
      className =
        'text-white bg-slate-700-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Pendente';
  }

  return (
    <div className={className}>
      <h1 className="text-[0.7rem]">{statusTitle || 'Pendente'}</h1>
    </div>
  );
}
