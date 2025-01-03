import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import './index.css';

export const Login = () => {
  const authContext = useContext(AuthContext);
  const [userInfos, setUserInfos] = useState({ userName: '', password: '' });
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { login } = authContext;

  const handleLogin = () => {
    if (!userInfos.userName || !userInfos.password) {
      return alert('Preencha todos os campos');
    }

    const userData = { id: '1', name: userInfos.userName };
    login(userData);
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <h1 className="title">Vault Games</h1>
      <div className="bg-[#FFF] flex flex-col items-center justify-center p-10 rounded shadow-md min-h-[35rem] min-w-[35rem] gap-5">
        <h1 className="subtitle">{isLogin ? 'Login' : 'Registrar'}</h1>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-black text-[1.2rem] font-bold font-sans">
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
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-black text-[1.2rem] font-bold font-sans">
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

        <div className="w-full text-center">
          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white p-2 rounded w-full"
          >
            {isLogin ? 'Entrar' : 'Registrar'}
          </button>
          <p className="mt-4">
            Não tem uma conta?{' '}
            <span
              className="text-blue-700 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              Registrar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
