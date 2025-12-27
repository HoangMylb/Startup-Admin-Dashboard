
import React from 'react';

interface PaginationProps {
  totalItems: number;
  filteredCount: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalItems, filteredCount }) => {
  return (
    <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <span>Rows per page:</span>
        <select className="h-8 pl-2 pr-6 rounded border-slate-200 dark:border-slate-700 bg-transparent text-sm font-medium focus:ring-primary">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span className="ml-2">Showing 1-{filteredCount} of {totalItems}</span>
      </div>
      <div className="flex items-center gap-1">
        <PageButton icon="chevron_left" disabled />
        <PageButton label="1" active />
        <PageButton label="2" />
        <PageButton label="3" />
        <span className="px-1 text-slate-400">...</span>
        <PageButton label="12" />
        <PageButton icon="chevron_right" />
      </div>
    </div>
  );
};

const PageButton: React.FC<{ icon?: string; label?: string; active?: boolean; disabled?: boolean }> = ({ icon, label, active, disabled }) => (
  <button 
    disabled={disabled}
    className={`size-8 flex items-center justify-center rounded-lg border transition-colors text-sm font-medium ${disabled ? 'opacity-50 cursor-not-allowed border-slate-200 dark:border-slate-700 text-slate-400' : active ? 'bg-primary border-primary text-white shadow-sm' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
  >
    {icon ? <span className="material-symbols-outlined text-[18px]">{icon}</span> : label}
  </button>
);
