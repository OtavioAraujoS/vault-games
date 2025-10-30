import { Loader2 } from 'lucide-react';

export function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-500 dark:text-white gap-4">
      <Loader2 className="animate-spin size-10" />
      <p>Carregando informações do dashboard...</p>
    </div>
  );
}
