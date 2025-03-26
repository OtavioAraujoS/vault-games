import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

export interface ProfileInfosProps {
  picture: string;
  name: string;
}

export default function ProfileInfos({ name, picture }: ProfileInfosProps) {
  return (
    <div className="flex justify-between items-center gap-4 p-9 rounded-lg border-2 border-lime-600 bg-[#FAFAFA] dark:bg-[#212121]">
      <div className="flex items-center gap-8">
        <img
          src={picture}
          alt="Foto de perfil"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl dark:text-white tracking-wide font-bold font-bebas">
            {name}
          </h2>
        </div>
      </div>
      <Button className="w-fit h-10 p-4 rounded-2xl bg-lime-600 hover:bg-lime-700 text-white dark:text-zinc-900 border-2 border-lime-600 dark:border-zinc-900">
        Editar Perfil <Pencil />
      </Button>
    </div>
  );
}
