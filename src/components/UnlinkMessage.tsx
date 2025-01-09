import { CircleAlert } from 'lucide-react';
import type { ReactNode } from 'react';

interface UnlinkMessageProps {
  title?: string;
  children?: ReactNode;
}

export const UnlinkMessage = ({ title, children }: UnlinkMessageProps) => {
  return (
    <div className="my-4 flex flex-col items-center justify-center gap-2 text-center">
      <CircleAlert color="red" size={100} />
      <h1 className="text-[1.8rem] dark:text-white tracking-wide md:text-[2rem] lg:text-[2.4rem]">
        Atenção
      </h1>
      {title ? (
        <p className="max-w-[52rem] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]">
          {title}
        </p>
      ) : (
        children
      )}
    </div>
  );
};
