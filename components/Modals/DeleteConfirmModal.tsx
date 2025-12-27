
import React from 'react';
import { User } from '../../types';

interface DeleteConfirmModalProps {
  user: User;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ user, onClose, onConfirm }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
    <div className="w-full max-w-md bg-white dark:bg-background-dark rounded-xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 flex flex-col overflow-hidden animate-fadeInScale">
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-red-600 text-[24px]">warning</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Confirm User Deletion</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Are you sure you want to delete <span className="font-semibold text-slate-700 dark:text-slate-200">{user.name}</span>? This action cannot be undone.
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-3">
        <button onClick={onClose} className="w-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700">
          Cancel
        </button>
        <button onClick={onConfirm} className="w-full px-4 py-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-sm">
          Delete User
        </button>
      </div>
    </div>
  </div>
);
