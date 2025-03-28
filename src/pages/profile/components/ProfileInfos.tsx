'use client';
import { Button } from '@/components/ui/button';
import { LoginContext } from '@/context/LoginContext';
import { Eye, EyeOff, Pencil } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export interface ProfileInfosProps {
  picture: string;
  name: string;
  userId: string;
  password: string;
}

export default function ProfileInfos({
  name,
  picture,
  userId,
  password,
}: ProfileInfosProps) {
  const [hidePassword, setHidePassword] = useState(true);
  const { loginInfos } = LoginContext();
  const router = useNavigate();
  const sameUser = loginInfos.id === userId;

  const handleEditProfile = () => {
    router(`/usuarios/${userId}`);
  };

  const handleShowPassword = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <div className="flex justify-between items-center gap-4 p-9">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
        <img
          src={picture}
          alt="Foto de perfil"
          className="size-fit max-h-24 md:size-24 rounded-full"
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl dark:text-white tracking-wide font-bold font-bebas">
            {name}
          </h2>
          {sameUser ? (
            <span className="flex items-center gap-6 dark:text-sidebar-foreground font-bold tracking-wide text-sm lg:text-base">
              Senha: {hidePassword ? '*********' : password}{' '}
              <Button
                onClick={handleShowPassword}
                variant="ghost"
                className="size-10 text-black dark:text-white rounded-full border-2 border-black dark:border-white"
              >
                {hidePassword ? <Eye /> : <EyeOff />}
              </Button>
            </span>
          ) : null}
        </div>
      </div>
      {sameUser ? (
        <Button
          className="w-fit h-10 p-4 rounded-2xl bg-lime-600 hover:bg-lime-700 text-white dark:text-zinc-900 border-2 border-lime-600 dark:border-zinc-900 hidden md:flex"
          disabled={loginInfos.id !== userId}
          onClick={handleEditProfile}
        >
          Editar Perfil <Pencil />
        </Button>
      ) : null}
    </div>
  );
}
