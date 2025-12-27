
import React from 'react';
import { UserRole, UserStatus } from '../types';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  roleFilter: string;
  setRoleFilter: (role: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  roleFilter,
  setRoleFilter
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-5 lg:col-span-4">
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </span>
          <input 
            className="w-full h-11 pl-10 pr-4 rounded-lg bg-white dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm transition-shadow" 
            placeholder="Search by name, email, or ID..." 
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="md:col-span-7 lg:col-span-8 flex flex-wrap items-center gap-3 justify-start md:justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Status:</span>
          <FilterSelect value={statusFilter} onChange={setStatusFilter} options={['All Status', ...Object.values(UserStatus)]} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Role:</span>
          <FilterSelect value={roleFilter} onChange={setRoleFilter} options={['All Roles', ...Object.values(UserRole)]} />
        </div>
        <button className="size-11 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-primary transition-colors shadow-sm">
          <span className="material-symbols-outlined">filter_list</span>
        </button>
      </div>
    </div>
  );
};

const FilterSelect: React.FC<{ value: string; onChange: (v: string) => void; options: string[] }> = ({ value, onChange, options }) => (
  <select 
    className="h-11 pl-3 pr-8 rounded-lg bg-white dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary/50 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm cursor-pointer"
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {options.map(opt => <option key={opt}>{opt}</option>)}
  </select>
);
