import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Header } from './components/Header';

export const Home = () => {
  const navigate = useNavigate();
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div ref={homeRef} className="flex flex-col items-center gap-8 h-full">
        <Header
          aboutRef={aboutRef}
          contactRef={contactRef}
          homeRef={homeRef}
          redirectToLogin={redirectToLogin}
        />
        <div className="flex flex-col justify-center items-center gap-2 min-h-[90vh]">
          <h1 className="max-w-[80rem] text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.8rem] font-bold text-center">
            Vault Games, o melhor site para gerenciar seus jogos com maestria
          </h1>
          <p className="max-w-[70rem] text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-zinc-500 text-center">
            Controle suas coleções, acompanhe seu progresso e descubra o que
            seus amigos estão jogando — tudo em um só lugar!
          </p>

          <button
            className="w-[8rem] h-[2.4rem] lg:w-[10rem] lg:h-[2.8rem] bg-black text-white text-[0.8rem] lg:text-[1rem] rounded-3xl mt-4"
            onClick={redirectToLogin}
          >
            Comece agora
          </button>
        </div>
      </div>

      <div
        ref={aboutRef}
        className="h-full min-h-screen flex flex-col bg-black"
      >
        About
      </div>
      <div
        ref={contactRef}
        className="h-full min-h-screen flex flex-col bg-white"
      >
        Contact
      </div>
    </div>
  );
};
