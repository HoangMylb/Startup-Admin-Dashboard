
import React from 'react';
import { LOGO_URL } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark z-0 transition-all">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-sm" style={{ backgroundImage: `url("${LOGO_URL}")` }}></div>
        <div className="flex flex-col">
          <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none">EntityMgr</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">v2.0.1</p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-4 py-2 overflow-y-auto">
        <NavItem icon="dashboard" label="Dashboard" />
        <NavItem icon="group" label="Entities" active />
        <NavItem icon="analytics" label="Reports" />
        <NavItem icon="settings" label="Settings" />
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <NavItem icon="help" label="Help Center" />
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${active ? 'bg-primary/10 text-primary dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
    <span className={`material-symbols-outlined ${active ? 'text-primary fill-1' : 'text-slate-400 group-hover:text-primary'}`}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);
