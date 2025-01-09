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
        <div className="h-full w-full dark:bg-[#181818]">
          <header className="bg-white dark:bg-[#212121] bg-gray border-b border-gray-400 text-black dark:text-white p-4 flex justify-between items-center">
            <SidebarTrigger className="size-10 dark:bg-[#212121] border border-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-500" />
            <ThemeToggle />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
