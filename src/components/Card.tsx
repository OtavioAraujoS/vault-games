import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardProps {
  title: string;
  value: string | number;
}

export const Card = ({ title, value }: CardProps) => {
  return (
    <ShadcnCard className="bg-[#FAFAFA] dark:bg-[#212121] rounded border border-gray-500 shadow-md w-1/6 min-w-[12rem] m-4">
      <CardHeader>
        <CardTitle className="text-[#7E7E7E] font-sans font-semibold tracking-wide text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="dark:text-white text-[2.5rem] font-bebas tracking-widest">
          {value}
        </p>
      </CardContent>
    </ShadcnCard>
  );
};
