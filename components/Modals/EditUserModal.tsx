
import React, { useState } from 'react';
import { User, UserRole, UserStatus } from '../../types';
import { generateSmartBio } from '../../geminiService';

interface EditUserModalProps {
  user: Partial<User>;
  onClose: () => void;
  onSave: (user: Partial<User>) => void;
  isEdit: boolean;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave, isEdit }) => {
  const [formData, setFormData] = useState<Partial<User>>(user);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);

  const handleGenerateBio = async () => {
    if (!formData.name || !formData.role) return;
    setIsGeneratingBio(true);
    const bio = await generateSmartBio(formData.name, formData.role);
    setFormData(prev => ({ ...prev, bio }));
    setIsGeneratingBio(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-white dark:bg-background-dark rounded-xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 flex flex-col max-h-[90vh] overflow-hidden animate-fadeInScale">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{isEdit ? 'Edit User' : 'Create New User'}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{isEdit ? 'Update user information and permissions.' : 'Add a new user to the organization.'}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-5">
          {isEdit && (
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div 
                  className="size-16 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white dark:ring-slate-700" 
                  style={{ backgroundImage: `url('${formData.avatarUrl || 'https://picsum.photos/200'}')` }}
                ></div>
                <button className="absolute bottom-0 right-0 size-6 bg-white dark:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary shadow-sm transition-colors">
                  <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                </button>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Profile Photo</label>
                <div className="flex gap-2 mt-1">
                  <button className="text-xs font-semibold text-primary hover:text-blue-600">Change</button>
                  <span className="text-slate-300">|</span>
                  <button className="text-xs font-semibold text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name <span className="text-red-500">*</span></label>
            <input 
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              value={formData.name || ''}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Jane Doe"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
            <input 
              type="email"
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              value={formData.email || ''}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. jane@company.com"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
              <select 
                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value as UserRole })}
              >
                {Object.values(UserRole).map(role => <option key={role} value={role}>{role}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
              <select 
                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value as UserStatus })}
              >
                {Object.values(UserStatus).map(status => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Bio / Notes</label>
              <button 
                onClick={handleGenerateBio}
                disabled={isGeneratingBio || !formData.name}
                className="text-[11px] uppercase tracking-wider font-bold text-primary hover:opacity-80 disabled:opacity-30 flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                {isGeneratingBio ? 'Thinking...' : 'AI Generate'}
              </button>
            </div>
            <textarea 
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm resize-none"
              rows={3}
              value={formData.bio || ''}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Add internal notes or generate using AI..."
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700">
            Cancel
          </button>
          <button onClick={() => onSave(formData)} className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-blue-600 shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">save</span>
            {isEdit ? 'Save Changes' : 'Save User'}
          </button>
        </div>
      </div>
    </div>
  );
};
