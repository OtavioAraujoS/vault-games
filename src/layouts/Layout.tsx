import { Avatar } from '@/components/Avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { LoginContext } from '@/context/LoginContext';
import { LogOut, User } from 'lucide-react';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const Layout: React.FC = () => {
  const { loginInfos, logout } = LoginContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <SidebarProvider>
      <Sidebar />
      <div className="h-full w-full dark:bg-[#181818]">
        <header className="bg-[#FAFAFA] dark:bg-[#212121] bg-gray border-b border-gray-400 text-black dark:text-white p-4 flex justify-between items-center">
          <SidebarTrigger className="size-10 dark:bg-[#212121] border border-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-500" />
          <div className="flex gap-10">
            <Popover>
              <PopoverTrigger>
                <Avatar
                  src={
                    loginInfos.image !== 'userPicture'
                      ? loginInfos.image
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2deTTpL5Z_Y-FBxr3DhfCdoDNHvUEmtvjQ&s'
                  }
                  alt={loginInfos.name}
                />
              </PopoverTrigger>
              <PopoverContent className="w-fit min-w-[10rem] dark:bg-[#212121] dark:border dark:border-gray-600">
                <div className="grid gap-4 text-center">
                  <h2 className="text-lg font-bold font-bebas tracking-widest">
                    Opções
                  </h2>
                  <ul className="flex flex-col gap-2">
                    <a
                      href={`/profile/${loginInfos.id}`}
                      className="flex gap-4 hover:text-blue-500"
                    >
                      <User size={20} />
                      <li>Conta</li>
                    </a>
                    <hr />
                    <li
                      onClick={handleLogOut}
                      className="flex gap-4 hover:text-blue-500 cursor-pointer"
                    >
                      <LogOut size={20} /> Logout
                    </li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>

            <ThemeToggle />
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
