import { Card } from '@/components/Card';

export const Jogos = () => {
  return (
    <div className="flex flex-col h-full min-h-[100vh] w-full">
      <div className="flex flex-wrap gap-4">
        <Card title="Jogos Cadastrados" value="10" />
        <Card title="Jogos Não Iniciados" value="10" />
        <Card title="Jogos Pausados" value="10" />
        <Card title="Jogos Completos" value="10" />
      </div>
    </div>
  );
};
