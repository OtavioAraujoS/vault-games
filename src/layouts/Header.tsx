import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const Header: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <Sidebar />
        <div className="h-full w-full">
          <header className="bg-white dark:bg-gray-800 bg-gray border-b border-gray-400 text-black dark:text-white p-4 flex justify-between items-center">
            <SidebarTrigger />
            <ThemeToggle />
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <p>Dashboard Footer</p>
          </footer>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Header;
