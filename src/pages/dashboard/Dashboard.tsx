import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

export const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { user, logout } = authContext;

  const LogOut = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao painel de controle!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Estatísticas</h2>
        <ul>
          <li>Usuário: {user?.name}</li>
          <li>
            <button onClick={LogOut}>LogOut</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
