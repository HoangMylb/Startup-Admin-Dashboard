
export enum UserRole {
  ADMIN = 'Administrator',
  EDITOR = 'Editor',
  VIEWER = 'Viewer'
}

export enum UserStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  INACTIVE = 'Inactive'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
  avatarUrl?: string;
  bio?: string;
}

export type ModalType = 'create' | 'edit' | 'delete' | null;
