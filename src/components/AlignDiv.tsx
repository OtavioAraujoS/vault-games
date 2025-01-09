import type { ReactNode } from 'react';

interface AlignDivProps {
  children: ReactNode;
}

export const AlignDiv = ({ children }: AlignDivProps) => {
  return (
    <div className="flex items-center justify-center text-center">
      {children}
    </div>
  );
};
