
import React, { useState, useMemo, useEffect } from 'react';
import { User, UserRole, UserStatus, ModalType } from './types';
import { MOCK_USERS } from './constants';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { UserTable } from './components/UserTable';
import { Pagination } from './components/Pagination';
import { EditUserModal } from './components/Modals/EditUserModal';
import { DeleteConfirmModal } from './components/Modals/DeleteConfirmModal';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(new Set());
  const [modalType, setModalType] = useState<ModalType>(null);
  const [activeUser, setActiveUser] = useState<Partial<User> | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(MOCK_USERS);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All Status' || user.status === statusFilter;
      const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter;
      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [users, searchQuery, statusFilter, roleFilter]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSelectUser = (id: string) => {
    setSelectedUserIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedUserIds.size === filteredUsers.length) {
      setSelectedUserIds(new Set());
    } else {
      setSelectedUserIds(new Set(filteredUsers.map(u => u.id)));
    }
  };

  const handleDeleteSelected = () => {
    setUsers(prev => prev.filter(u => !selectedUserIds.has(u.id)));
    setSelectedUserIds(new Set());
  };

  const handleSaveUser = (data: Partial<User>) => {
    if (modalType === 'create') {
      const newUser: User = {
        ...data as User,
        id: Math.random().toString(36).substr(2, 9),
        lastActive: 'Just now'
      };
      setUsers([newUser, ...users]);
    } else if (modalType === 'edit' && activeUser?.id) {
      setUsers(users.map(u => u.id === activeUser.id ? { ...u, ...data } as User : u));
    }
    setModalType(null);
    setActiveUser(null);
  };

  const handleOpenCreate = () => {
    setActiveUser({ role: UserRole.VIEWER, status: UserStatus.ACTIVE });
    setModalType('create');
  };

  return (
    <div className={`flex h-screen w-full relative transition-colors ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar />

      <main className={`flex-1 flex flex-col h-full relative overflow-hidden z-0 ${modalType ? 'blur-[2px] pointer-events-none transition-all duration-300' : ''}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Users Directory</h2>
                <p className="text-slate-500 dark:text-slate-400">Manage access and view all registered system users.</p>
              </div>
              <div className="flex items-center gap-3">
                {selectedUserIds.size > 0 && (
                  <button onClick={handleDeleteSelected} className="flex items-center justify-center gap-2 px-4 h-10 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-100 transition-colors animate-fadeInScale">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                    Delete Selected ({selectedUserIds.size})
                  </button>
                )}
                <button className="hidden sm:flex items-center justify-center gap-2 px-4 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  Export
                </button>
                <button onClick={handleOpenCreate} className="flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-all">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  Create New
                </button>
              </div>
            </div>

            <Filters 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              roleFilter={roleFilter}
              setRoleFilter={setRoleFilter}
            />

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col min-h-[400px]">
              <UserTable 
                users={filteredUsers}
                isLoading={isLoading}
                selectedUserIds={selectedUserIds}
                onSelectUser={handleSelectUser}
                onSelectAll={handleSelectAll}
                onEdit={(u) => { setActiveUser(u); setModalType('edit'); }}
                onDelete={(u) => { setActiveUser(u); setModalType('delete'); }}
                onAddFirst={handleOpenCreate}
              />
              {!isLoading && filteredUsers.length > 0 && (
                <Pagination totalItems={users.length} filteredCount={filteredUsers.length} />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Modals Rendering */}
      {(modalType === 'create' || modalType === 'edit') && activeUser && (
        <EditUserModal 
          user={activeUser}
          isEdit={modalType === 'edit'}
          onClose={() => setModalType(null)}
          onSave={handleSaveUser}
        />
      )}
      {modalType === 'delete' && activeUser && (
        <DeleteConfirmModal 
          user={activeUser as User}
          onClose={() => setModalType(null)}
          onConfirm={() => {
            setUsers(users.filter(u => u.id !== activeUser.id));
            setModalType(null);
          }}
        />
      )}
    </div>
  );
}
