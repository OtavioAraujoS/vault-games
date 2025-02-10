import { LoginContext } from '@/context/LoginContext';
import { Angry, HeartCrack } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';

export const NotAllowedPage = () => {
  const { loginInfos, logout } = LoginContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate('/login');
  };

  const handleRedirectUser = () => {
    navigate('/dashboard');
  };

  return loginInfos ? (
    <div className="bg-[#dad8d8] flex flex-col justify-center items-center gap-4 w-full h-full min-h-screen">
      <HeartCrack className="text-red-600 w-fit h-[6rem] md:h-[8rem] lg:h-[10rem]" />
      <h1 className="text-[1.5rem] font-bold font-bebas text-center max-w-[60%] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        Página não encontrada! Clique no botão abaixo para ser redirecionado à
        página de Usuário
      </h1>
      <Button
        className="w-fit p-2 min-w-[8rem] md:min-w-[10rem] lg:min-w-[15rem] bg-red-600 hover:bg-red-700"
        onClick={handleRedirectUser}
      >
        Página de Usuário
      </Button>
    </div>
  ) : (
    <div className="bg-[#dad8d8] flex flex-col justify-center items-center gap-4 w-full h-full min-h-screen">
      <Angry className="text-red-600 w-fit h-[6rem] md:h-[8rem] lg:h-[10rem]" />
      <h1 className="text-[1.5rem] font-bold font-bebas text-center max-w-[60%] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        Você não está logado! Clique no botão abaixo para ir para a área de
        login
      </h1>
      <Button
        className="w-fit p-2 min-w-[8rem] md:min-w-[10rem] lg:min-w-[15rem] bg-red-600 hover:bg-red-700"
        onClick={handleLogOut}
      >
        Realizar Login
      </Button>
    </div>
  );
};
