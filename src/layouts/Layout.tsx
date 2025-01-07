import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const Layout: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <Sidebar />
        <div className="h-full min-h-[100vh] w-full">
          <header className="bg-white dark:bg-gray-800 bg-gray border-b border-gray-400 text-black dark:text-white p-4 flex justify-between items-center">
            <SidebarTrigger className="size-10 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-500" />
            <ThemeToggle />
          </header>
          <main>
            <Outlet />
          </main>
          <footer className="flex justify-center text-center bg-white dark:bg-gray-800 bg-gray border-t border-gray-400 text-black dark:text-white p-4 absolute bottom-0 w-full">
            <p>
              &copy; {new Date().getFullYear()} Built by{' '}
              <a
                href="https://github.com/otavioaraujo08"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                Otávio Araujo.
              </a>{' '}
              The source code is available on{' '}
              <a
                href="https://github.com/otavioaraujo08/vault-games"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                GitHub.
              </a>
            </p>
          </footer>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
