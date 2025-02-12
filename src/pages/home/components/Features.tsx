import { CircleGauge, Contact, Trophy } from 'lucide-react';

const feature = [
  {
    id: 1,
    title: 'Gerencie suas coleções',
    description:
      'Adicione jogos à sua lista de desejos e veja quais amigos possuem os mesmos jogos que você.',
    icon: <CircleGauge className="text-white size-10 md:size-14 lg:size-20" />,
  },
  {
    id: 2,
    title: 'Descubra o que seus amigos jogam!',
    description:
      'Veja o que seus amigos estão jogando e compartilhe sua biblioteca de jogos com eles.',
    icon: <Contact className="text-white size-10 md:size-14 lg:size-20" />,
  },
  {
    id: 3,
    title: 'Dispute com seus amigos',
    description:
      'Desafie seus amigos para ver quem possui mais jogos ou quem jogou por mais tempo.',
    icon: <Trophy className="text-white size-10 md:size-14 lg:size-20" />,
  },
];

export const Features = () => {
  return (
    <div className="bg-black h-full min-h-[110vh] flex flex-col justify-center items-center px-4 gap-28 lg:p-0">
      <div className="flex flex-col items-center gap-4 mt-8">
        <h1 className="font-oswald text-white tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
          Explore nossas ferramentas
        </h1>
        <p className="text-zinc-400 text-center max-w-[41rem] text-base tracking-tight md:text-lg lg:text-xl">
          <span className="text-white">Gerencie suas coleções</span> com
          facilidade, adicione jogos à sua lista de desejos e veja quais amigos
          possuem os mesmos jogos que você.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {feature.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-4 rounded-lg p-4 bg-zinc-800 h-full min-h-[26rem] max-w-[25rem] shadow-lg hover:shadow-xl hover:bg-zinc-900 transition-all"
          >
            <div className="mb-4 h-16 flex items-center justify-center">
              {item.icon}
            </div>
            <h2 className="text-white text-2xl font-oswald text-center">
              {item.title}
            </h2>
            <p className="text-zinc-400 text-center max-w-[20rem] text-sm md:text-base lg:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
