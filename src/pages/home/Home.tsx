import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { Ideas } from './components/Ideas';
import Footer from './components/Footer';

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

        <div className="flex flex-col justify-center items-center gap-2 min-h-[90vh] p-4 sm:p-8">
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

          <div className="flex flex-wrap gap-4 mt-8 mb-8">
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] h-[15rem] flex items-center justify-center bg-yellow-500 rounded-3xl p-8">
              <img
                src="/falloutGuy2.webp"
                alt="Steam"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] h-[15rem] flex items-center justify-center bg-green-500 rounded-3xl p-8">
              <img
                src="/falloutGuy1.webp"
                alt="Steam"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] h-[15rem] flex items-center justify-center bg-red-500 rounded-3xl p-8">
              <img
                src="/falloutGuy3.webp"
                alt="Steam"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={aboutRef}>
        <Features />
      </div>
      <div ref={contactRef}>
        <Ideas />
      </div>
      <div ref={aboutRef}>
        <Footer />
      </div>
    </div>
  );
};
