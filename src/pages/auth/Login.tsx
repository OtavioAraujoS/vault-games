import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { UsersInfo } from '@/types/User';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { userService } from '../../services/user';
import { mapError } from '../../utils/ErrosMap';
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
  const { setLoginInfos } = LoginContext();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin: SubmitHandler<z.infer<typeof loginSchemma>> = async (
    data: z.infer<typeof loginSchemma>
  ) => {
    try {
      setLoading(true);
      const response: UsersInfo = isLogin
        ? await userService.login(data)
        : await userService.register(data);

      setLoginInfos({ name: response.nome, id: response._id });

      navigate('/dashboard');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: mapError(error.message),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="login">
        <h1 className="title">Vault Games</h1>
        <Card className="flex flex-col items-center justify-center p-10 gap-3 md:min-h-[30rem] lg:min-h-[35rem] min-w-full sm:min-w-[20rem] md:min-w-[25rem] lg:min-w-[30rem] xl:min-w-[35rem] dark:bg-[#212121]">
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-medium text-black font-bebas tracking-wide mb-4 dark:text-white">
            {isLogin ? 'Login' : 'Registrar'}
          </h1>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-black text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold font-sans dark:text-white">
              Usuário
            </label>
            <Input
              placeholder="Usuário"
              className="mb-4 p-2 border dark:border-white rounded w-full"
              {...register('nome')}
            />
            <p className="text-red-500 text-[0.8rem]">
              {errors.nome?.message && (
                <span className="text-red-600 text-[0.8rem]">
                  {errors.nome.message}
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="text-black text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold font-sans dark:text-white">
              Senha
            </label>
            <Input
              type="password"
              placeholder="Senha"
              className="mb-4 p-2 border dark:border-white rounded w-full"
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
            <Button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded w-full hover:bg-blue-800"
              disabled={loading}
            >
              {loading ? 'Carregando' : isLogin ? 'Entrar' : 'Registrar'}
            </Button>
          </div>

          {isLogin ? (
            <p className="mt-4 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]">
              Não tem uma conta?{' '}
              <span
                className="text-blue-700 dark:text-blue-500 cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                Registrar
              </span>
            </p>
          ) : (
            <p className="mt-4 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]">
              Já tem uma conta?{' '}
              <span
                className="text-blue-700 dark:text-blue-500 cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                Login
              </span>
            </p>
          )}
        </Card>
      </div>
    </form>
  );
};
