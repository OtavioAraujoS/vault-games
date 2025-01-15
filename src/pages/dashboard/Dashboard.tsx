import { NotAllowedPage } from '@/components/NotAllowedPage';
import { LoginContext } from '@/context/LoginContext';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { loginInfos, logout } = LoginContext();

  const LogOut = () => {
    logout();
    navigate('/');
  };

  return loginInfos ? (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <h1 className="dark:text-white">Dashboard</h1>
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
