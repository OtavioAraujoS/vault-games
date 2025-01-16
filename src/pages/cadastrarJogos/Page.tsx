import { Undo2 } from 'lucide-react';
import { Form } from './components/Form';

export const CadastrarJogos = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-12 p-6 md:p-10 dark:bg-[#181818]">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="/jogos"
            className="flex items-center gap-2 font-medium dark:text-white"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Undo2 className="size-4 dark:text-white" />
            </div>
            Retornar
          </a>
        </div>
        <div className="flex w-full">
          <Form />
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/formWallpaper.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
