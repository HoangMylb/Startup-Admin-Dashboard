
import React from 'react';
import { PROFILE_AVATAR } from '../constants';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark z-20">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-1 text-slate-500 hover:text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <nav className="hidden sm:flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
          <a href="#" className="hover:text-primary">Home</a>
          <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
          <a href="#" className="hover:text-primary">Dashboard</a>
          <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-white">Entities</span>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <HeaderIcon onClick={toggleDarkMode} icon={isDarkMode ? 'light_mode' : 'dark_mode'} />
          <HeaderIcon icon="notifications" hasBadge />
          <HeaderIcon icon="chat_bubble" />
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
        <button className="flex items-center gap-2 group">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 ring-2 ring-transparent group-hover:ring-primary/20 transition-all" style={{ backgroundImage: `url("${PROFILE_AVATAR}")` }}></div>
          <span className="hidden lg:block text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary">Jane Doe</span>
          <span className="material-symbols-outlined text-slate-400 text-[16px]">expand_more</span>
        </button>
      </div>
    </header>
  );
};

const HeaderIcon: React.FC<{ icon: string; onClick?: () => void; hasBadge?: boolean }> = ({ icon, onClick, hasBadge }) => (
  <button onClick={onClick} className="flex items-center justify-center size-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors relative">
    <span className="material-symbols-outlined text-[20px]">{icon}</span>
    {hasBadge && <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>}
  </button>
);
