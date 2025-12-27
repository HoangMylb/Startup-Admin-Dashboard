
import React from 'react';
import { User } from '../types';
import { StatusBadge } from './StatusBadge';

interface UserTableProps {
  users: User[];
  isLoading: boolean;
  selectedUserIds: Set<string>;
  onSelectUser: (id: string) => void;
  onSelectAll: () => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onAddFirst: () => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  isLoading,
  selectedUserIds,
  onSelectUser,
  onSelectAll,
  onEdit,
  onDelete,
  onAddFirst
}) => {
  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-[1px] z-10 min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <div className="size-10 rounded-full border-[3px] border-slate-200 dark:border-slate-700 border-t-primary animate-spin"></div>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 animate-pulse">Loading data...</span>
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center min-h-[400px]">
        <div className="size-20 bg-slate-50 dark:bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-slate-300 dark:text-slate-500 text-[40px]">group_off</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No users found</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 text-sm leading-relaxed">There are no users to display at the moment. Try a different search or filter.</p>
        <button 
          onClick={onAddFirst}
          className="flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Create Your First User
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto relative flex-1">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <th className="p-4 w-12">
              <input 
                className="rounded border-slate-300 text-primary focus:ring-primary size-4 cursor-pointer" 
                type="checkbox"
                checked={selectedUserIds.size === users.length && users.length > 0}
                onChange={onSelectAll}
              />
            </th>
            <th className="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">User</th>
            <th className="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Role</th>
            <th className="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Status</th>
            <th className="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 hidden md:table-cell">Last Active</th>
            <th className="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
          {users.map(user => (
            <tr key={user.id} className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <td className="p-4 align-middle">
                <input 
                  className="rounded border-slate-300 text-primary focus:ring-primary size-4 cursor-pointer" 
                  type="checkbox"
                  checked={selectedUserIds.has(user.id)}
                  onChange={() => onSelectUser(user.id)}
                />
              </td>
              <td className="p-4 align-middle">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url('${user.avatarUrl || 'https://picsum.photos/100'}')` }}></div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{user.email}</span>
                  </div>
                </div>
              </td>
              <td className="p-4 align-middle text-sm text-slate-600 dark:text-slate-300">{user.role}</td>
              <td className="p-4 align-middle"><StatusBadge status={user.status} /></td>
              <td className="p-4 align-middle hidden md:table-cell text-sm text-slate-500 dark:text-slate-400">{user.lastActive}</td>
              <td className="p-4 align-middle text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => onEdit(user)} className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                  <button onClick={() => onDelete(user)} className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
