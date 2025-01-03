import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { AuthContext } from '../../context/AuthContext';
import { loginSchemma } from './formSchemma';
import './index.css';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchemma>>({
    resolver: zodResolver(loginSchemma),
  });
  const authContext = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  // const { login } = authContext;

  const handleLogin: SubmitHandler<z.infer<typeof loginSchemma>> = (
    data: z.infer<typeof loginSchemma>
  ) => {
    setLoading(true);
    console.log(data);
    // login({ : data.username, password: data.password });
    navigate('/dashboard');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="login">
        <h1 className="title">Vault Games</h1>
        <div className="bg-[#FFF] flex flex-col items-center justify-center p-10 rounded shadow-md min-h-[35rem] min-w-[35rem] gap-5">
          <h1 className="subtitle">{isLogin ? 'Login' : 'Registrar'}</h1>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-black text-[1.2rem] font-bold font-sans">
              Usuário
            </label>
            <input
              placeholder="Usuário"
              className="mb-4 p-2 border rounded w-full"
              {...register('username')}
            />
            <p className="text-red-500 text-[0.8rem]">
              {errors.username?.message && (
                <span className="text-red-600 text-[0.8rem]">
                  {errors.username.message}
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="text-black text-[1.2rem] font-bold font-sans">
              Senha
            </label>
            <input
              type="password"
              placeholder="Senha"
              className="mb-4 p-2 border rounded w-full"
              {...register('password')}
            />
            <p className="text-red-500 text-[0.8rem]">
              {errors.password?.message && (
                <span className="text-red-600 text-[0.8rem]">
                  {errors.password.message}
                </span>
              )}
            </p>
          </div>

          <div className="w-full text-center">
            <button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded w-full"
              disabled={loading}
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
    </form>
  );
};
