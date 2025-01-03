import { AuthContext } from '@/context/AuthContext';
import { Angry } from 'lucide-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';

export const NotAllowedPage = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { logout } = authContext;

  const LogOut = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-[#dad8d8] flex flex-col justify-center items-center gap-4 w-full h-full min-h-[100vh]">
      <Angry className="text-red-600 w-fit h-[6rem] md:h-[8rem] lg:h-[10rem]" />
      <h1 className="text-[1.5rem] font-bold font-bebas text-center max-w-[60%] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        Você não está logado! Clique no botão abaixo para ir para a área de
        login
      </h1>
      <Button
        className="w-fit p-2 min-w-[8rem] md:min-w-[10rem] lg:min-w-[15rem] bg-red-600 hover:bg-red-700"
        onClick={LogOut}
      >
        Realizar Login
      </Button>
    </div>
  );
};
