import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { userService } from '@/services/user';
import { UsersInfo } from '@/types/User';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameDistribuition from './components/GameDistribuition';
import LastGamesUpdated from './components/LastGamesUpdated';
import ProfileInfos from './components/ProfileInfos';

export default function Profile() {
  const [userInfos, setUserInfos] = useState<UsersInfo>();
  const { id } = useParams();
  const { toast } = useToast();

  useEffect(() => {
    if (!id) return;

    const getUserInfos = async () => {
      try {
        const response = await userService.getUserById(id);
        setUserInfos(response);
      } catch {
        toast({
          title: 'Erro ao buscar informações do usuário',
          description: 'Tente novamente mais tarde',
        });
      }
    };
    getUserInfos();
  }, [id]);
  return (
    <div className="flex flex-col h-full min-h-screen w-full p-12 gap-8">
      <h1 className="border-l-4 border-lime-600 p-3 text-2xl md:text-3xl lg:text-4xl dark:text-white tracking-wide font-bold font-bebas">
        Meu Perfil
      </h1>

      <div className="flex flex-col p-4 gap-6 rounded-lg border-2 border-lime-600 bg-[#FAFAFA] dark:bg-[#212121]">
        <ProfileInfos
          name={userInfos?.nome || ''}
          picture={userInfos?.picture || ''}
          userId={userInfos?._id || ''}
          password={userInfos?.password || ''}
        />

        <Separator className="bg-lime-600 dark:bg-lime-600" />

        <div className="w-full flex flex-wrap justify-evenly items-center gap-4">
          <LastGamesUpdated />

          <GameDistribuition />
        </div>
      </div>
    </div>
  );
}
