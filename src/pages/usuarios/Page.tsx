import { useCallback, useEffect, useState, useTransition } from 'react';
import { Link, useNavigate } from 'react-router';
import dayjs from 'dayjs';
import { Pencil, Plus } from 'lucide-react';
import { TitlePage } from '@/components/TitlePage';
import { Button } from '@/components/ui/button';
import { LoginContext } from '@/context/LoginContext';
import { useToast } from '@/hooks/use-toast';
import { userService } from '@/services/user';
import type { UsersInfo } from '@/types/User';
import { LoadingComponent } from '@/components/LoadingComponent';

export const Usuarios = () => {
  const [users, setUsers] = useState<UsersInfo[]>([]);
  const [isPending, startTransition] = useTransition();
  const { loginInfos } = LoginContext();
  const { toast } = useToast();
  const navigate = useNavigate();

  const buttonClasses =
    'w-full text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] h-10 bg-blue-600 text-white dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-700';

  const getSystemUsers = useCallback(async () => {
    try {
      const response = await userService.getAllUsers();
      setUsers(response);
    } catch {
      toast({
        title: 'Erro ao buscar usuários',
        description: 'Ocorreu um erro ao buscar os usuários do sistema',
        variant: 'destructive',
      });
    }
  }, [toast]);

  const redirectUserToEditPage = useCallback(
    (id: string) => navigate(`/usuarios/${id}`),
    [navigate]
  );

  const redirectUserToUserPage = useCallback(
    (id: string) => navigate(`/profile/${id}`),
    [navigate]
  );

  useEffect(() => {
    const controller = new AbortController();

    startTransition(() => {
      getSystemUsers();
    });

    return () => controller.abort();
  }, [getSystemUsers]);

  if (isPending && users.length === 0) {
    return <LoadingComponent />;
  }

  if (!users.length) {
    return (
      <div className="flex flex-col h-full min-h-screen justify-center items-center p-12">
        <TitlePage title="Usuários Cadastrados no Sistema" />
        <p className="dark:text-white text-gray-600 mt-8">
          Nenhum usuário cadastrado
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full min-h-screen p-12 gap-8">
      <div className="flex flex-wrap justify-between items-center">
        <TitlePage title="Usuários Cadastrados no Sistema" />
        <Link to="/cadastrar-usuario">
          <Button className={buttonClasses}>
            <Plus /> Cadastrar Usuário
          </Button>
        </Link>
      </div>

      <div
        className={`flex flex-wrap gap-4 justify-start transition-opacity duration-300 ${
          isPending ? 'opacity-60 pointer-events-none' : 'opacity-100'
        }`}
      >
        {users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col gap-6 p-8 justify-center items-center bg-[#FAFAFA] dark:bg-[#212121] rounded border border-gray-300 dark:border-white transition-transform hover:scale-105 duration-200"
          >
            <img
              src={
                user.picture !== 'userPicture'
                  ? user.picture
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2deTTpL5Z_Y-FBxr3DhfCdoDNHvUEmtvjQ&s'
              }
              alt={user.nome}
              onClick={() => redirectUserToUserPage(user._id)}
              className="size-14 md:size-20 lg:size-24 rounded-full cursor-pointer hover:opacity-80 transition"
            />
            <div className="flex flex-col gap-1 items-center text-center">
              <h2 className="lg:text-[1.4rem] tracking-wider font-bebas dark:text-white">
                {user.nome}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 lg:text-[1.2rem] font-bebas">
                Usuário desde: {dayjs(user.createdAt).format('DD/MM/YYYY')}
              </p>
            </div>
            <Button
              disabled={loginInfos.id !== user._id}
              className={buttonClasses}
              onClick={() => redirectUserToEditPage(user._id)}
            >
              <Pencil /> Editar Usuário
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
