export const Ideas = () => {
  return (
    <div className="h-full min-h-screen p-8 my-4 flex flex-wrap justify-center items-center bg-white lg:flex-row lg:justify-around">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-oswald tracking-wide text-center max-w-[50rem] text-3xl md:text-4xl lg:text-5xl">
          Gerencie, Descubra e Conecte-se ao Seu Mundo Gamer!
        </h1>
        <p className="font-oswald tracking-tight text-zinc-500 text-center max-w-[46rem] text-lg md:text-xl lg:text-2xl">
          Organize sua coleção de jogos, acompanhe seu tempo de gameplay e veja
          o que seus amigos estão jogando. Cadastre-se, compare rankings e
          compartilhe suas conquistas com a comunidade! 🚀🔥
        </p>
      </div>
      <div>
        <img
          src="/minecraft.webp"
          alt="minecraft"
          loading="lazy"
          className="h-full max-h-[15rem] md:max-h-[20rem] lg:max-h-[30rem] w-fit"
        />
      </div>
    </div>
  );
};
