import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-full w-full">
        <header className="bg-white dark:bg-gray-800 bg-gray border border-gray-800 text-black dark:text-white p-4 flex justify-between items-center">
          <h1 className="font-bebas text-[1.6rem] tracking-wider">
            VAULT GAMES
          </h1>
          <ThemeToggle />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Dashboard Footer</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Header;
