
import React from 'react';
import { UserStatus } from '../types';

interface StatusBadgeProps {
  status: UserStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    [UserStatus.ACTIVE]: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    [UserStatus.PENDING]: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    [UserStatus.INACTIVE]: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-600',
  };
  const dots = {
    [UserStatus.ACTIVE]: 'bg-emerald-500',
    [UserStatus.PENDING]: 'bg-amber-500',
    [UserStatus.INACTIVE]: 'bg-slate-400',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <span className={`size-1.5 rounded-full ${dots[status]}`}></span>
      {status}
    </span>
  );
};
