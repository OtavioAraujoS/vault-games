import React, { useRef } from 'react';

export const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div ref={homeRef} className="flex flex-col h-full min-h-screen">
        <header className="w-full flex justify-between items-center p-4">
          <div className="flex items-center">
            <h1 className="font-bebas tracking-wider lg:text-2xl text-xl text-zinc-900">
              Vault Games
            </h1>
          </div>

          <div className="flex items-center">
            <ul className="flex gap-6">
              <li
                className="font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
                onClick={() => scrollToSection(homeRef)}
              >
                Home
              </li>
              <li
                className="font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </li>
              <li
                className="font-bold text-zinc-400 tracking-tight cursor-pointer hover:text-zinc-600 transition duration-300"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </li>
            </ul>
          </div>

          <div>
            <button className="w-[8rem] h-[2.5rem] bg-black text-white rounded-3xl">
              Login
            </button>
          </div>
        </header>
        <div>Home</div>
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
