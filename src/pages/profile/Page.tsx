import { LoginContext } from '@/context/LoginContext';
import ProfileInfos from './components/ProfileInfos';

export default function Profile() {
  const { loginInfos } = LoginContext();
  return (
    <div className="flex flex-col h-full min-h-screen w-full p-12 gap-8">
      <h1 className="border-l-4 border-lime-600 p-3 text-2xl md:text-3xl lg:text-4xl dark:text-white tracking-wide font-bold font-bebas">
        Meu Perfil
      </h1>

      <div className="flex flex-col gap-4">
        <ProfileInfos
          name={loginInfos.name}
          picture={loginInfos.image}
          userId={loginInfos.id}
        />
      </div>
    </div>
  );
}
