import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import './index.css';

export const Login = () => {
  const authContext = useContext(AuthContext);
  const [userInfos, setUserInfos] = useState({ userName: '', password: '' });
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { login } = authContext;

  const handleLogin = () => {
    const userData = { id: '1', name: userInfos.userName };
    login(userData);
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className="flex flex-col items-center justify-center p-8 rounded shadow-md min-h-[30rem] gap-7">
        <h1 className="title">Vault Games</h1>
        <div>
          <label className="text-white text-[1.2rem] font-bold font-sans">
            Usuário
          </label>
          <input
            type="email"
            placeholder="Usuário"
            value={userInfos.userName}
            onChange={(e) =>
              setUserInfos({ ...userInfos, userName: e.target.value })
            }
            className="mb-4 p-2 border rounded w-full"
          />

          <label className="text-white text-[1.2rem] font-bold font-sans">
            Senha
          </label>
          <input
            type="password"
            placeholder="Senha"
            value={userInfos.password}
            onChange={(e) =>
              setUserInfos({ ...userInfos, password: e.target.value })
            }
            className="mb-4 p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-700 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};
