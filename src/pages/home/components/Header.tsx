interface HeaderProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  redirectToLogin: () => void;
}

export const Header = ({
  aboutRef,
  contactRef,
  homeRef,
  redirectToLogin,
}: HeaderProps) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-[80%] min-h-[8vh] flex justify-between items-center p-4 mt-4">
      <div className="flex items-center mx-auto lg:mx-0">
        <h1 className="font-bebas tracking-wider text-zinc-900 text-3xl">
          Vault Games
        </h1>
      </div>

      <div className="items-center hidden lg:flex">
        <ul className="flex gap-6">
          <li
            className="text-base lg:text-lg font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
            onClick={() => scrollToSection(homeRef)}
          >
            Início
          </li>
          <li
            className="text-base lg:text-lg font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
            onClick={() => scrollToSection(aboutRef)}
          >
            Ferramentas
          </li>
          <li
            className="text-base lg:text-lg font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
            onClick={() => scrollToSection(contactRef)}
          >
            Descubra
          </li>
          <li
            className="text-base lg:text-lg font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
            onClick={() => scrollToSection(aboutRef)}
          >
            Sobre Nós
          </li>
        </ul>
      </div>

      <div className="hidden lg:block">
        <button
          className="w-[7rem] h-[2rem] lg:w-[8rem] lg:h-[2.5rem] bg-black text-white text-[0.8rem] lg:text-[1rem] rounded-3xl"
          onClick={redirectToLogin}
        >
          Login
        </button>
      </div>
    </header>
  );
};
