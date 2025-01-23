import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { userService } from '@/services/user';
import { UsersInfo } from '@/types/User';
import { mapError } from '@/utils/ErrosMap';
import { Undo2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Form } from './compoents/Form';

export const EditarUsuario = () => {
  const [userInfos, setUserInfos] = useState<UsersInfo>({
    _id: '',
    nome: '',
    picture: '',
    createdAt: '',
    password: '',
    __v: 0,
  });
  const { id } = useParams();
  const { toast } = useToast();

  const getUserInfos = async () => {
    try {
      if (!id) {
        return;
      }
      const response = await userService.getUserById(id);
      setUserInfos(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: 'Erro ao buscar informações do usuário',
        description: mapError(error.message),
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    getUserInfos();
  }, [id]);

  return id && userInfos.nome ? (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-12 p-6 md:p-10 dark:bg-[#181818]">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            to="/usuarios"
            className="flex items-center gap-2 font-medium dark:text-white"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Undo2 className="size-4 dark:text-white" />
            </div>
            Retornar
          </Link>
        </div>
        <div className="flex w-full">
          <Form userId={id} user={userInfos} />
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/updateUserFormWallpaper.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
          loading='lazy'
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-4 justify-center items-center h-screen dark:bg-[#181818]">
      <h1 className="text-2xl font-bold dark:text-white">
        Usuário não encontrado
      </h1>
      <Button className="w-1/4">
        <Link to="/usuarios">Retornar para aba de usuários</Link>
      </Button>
    </div>
  );
};
