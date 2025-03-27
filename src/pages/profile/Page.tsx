import { Separator } from '@/components/ui/separator';
import { LoginContext } from '@/context/LoginContext';
import GameDistribuition from './components/GameDistribuition';
import LastGamesUpdated from './components/LastGamesUpdated';
import ProfileInfos from './components/ProfileInfos';

export default function Profile() {
  const { loginInfos } = LoginContext();
  return (
    <div className="flex flex-col h-full min-h-screen w-full p-12 gap-8">
      <h1 className="border-l-4 border-lime-600 p-3 text-2xl md:text-3xl lg:text-4xl dark:text-white tracking-wide font-bold font-bebas">
        Meu Perfil
      </h1>

      <div className="flex flex-col p-4 gap-6 rounded-lg border-2 border-lime-600 bg-[#FAFAFA] dark:bg-[#212121]">
        <ProfileInfos
          name={loginInfos.name}
          picture={loginInfos.image}
          userId={loginInfos.id}
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
