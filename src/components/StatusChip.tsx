import { GameStatus } from '@/types/Games';

interface statusChipProps {
  status: GameStatus;
}

export function StatusChip({ status }: statusChipProps) {
  let className: string;
  let statusTitle: string;

  switch (status) {
    case 'Completo':
      className =
        'pl-4 pr-4 text-white bg-green-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Completo';
      break;
    case 'Pendente':
      className =
        'pl-4 pr-4 text-white bg-purple-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Pendente';
      break;
    case 'Progresso':
      className =
        'pl-4 pr-4 text-white bg-yellow-500 w-full max-w-40 min-w-28 max-h-8 flex items-center justify-center text-center h-10 rounded-full text-wrap overflow-hidden overflow-ellipsis';
      statusTitle = 'Progresso';
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
