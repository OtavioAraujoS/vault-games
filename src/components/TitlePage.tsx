interface TitlePageProps {
  title: string;
}

export const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <h1 className="my-4 text-[1.6rem] text-black font-bebas tracking-wide md:text-[1.8rem] lg:text-[2rem] dark:text-white">
      <strong className="text-yellow-500">|</strong> {title}
    </h1>
  );
};
