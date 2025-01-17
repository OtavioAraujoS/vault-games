import { NotAllowedPage } from '@/components/NotAllowedPage';
import { TitlePage } from '@/components/TitlePage';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { dashboardService } from '@/services/dashboard';
import { mapError } from '@/utils/ErrosMap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const { loginInfos, logout } = LoginContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const LogOut = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleGetDashboardInfos = async () => {
      try {
        if (!loginInfos) {
          return;
        }

        const response = await dashboardService.getDashboardInfos();
        console.log(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast({
          title: 'Erro ao buscar informações do dashboard',
          description:
            mapError(error) ||
            'Não foi possível buscar as informações do dashboard',
          variant: 'destructive',
        });
      }
    };

    handleGetDashboardInfos();
  }, []);

  return loginInfos ? (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <TitlePage title="Dashboard" />
      <p className="dark:text-white">Bem-vindo ao painel de controle!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Estatísticas</h2>
        <ul className="dark:text-white">
          <li>ID: {loginInfos?.id}</li>
          <li>Usuário: {loginInfos?.name}</li>
          <li>
            <button onClick={LogOut}>LogOut</button>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <NotAllowedPage />
  );
};
