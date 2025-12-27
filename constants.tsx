
import { User, UserRole, UserStatus } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Sarah Smith',
    email: 'sarah.smith@example.com',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    lastActive: '2 mins ago',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOMxwADRJTos6pdpH842wIogmYonjYWMxJWlyivId4MXjIYjbJn7OtQDfHpsH3VxLD_WCFJ_4HsbTnQEh-O3z8jDroQrJCrvs8hE9UXZYw5RvJX13PNcNuNMPYflu-igUYO9OuM_2UlOOGN9FZaSpCg3D0JQ-0tgayiy6VPIaMATB_WAp7p-dPwFNHpDmVlKKh9-t9d9b7mpHveNIfddYeJ3PJok6FbjzysNlfV5sEA-P3w78wKj5siT6QxHTxrO389tBE6hKOEv8'
  },
  {
    id: '2',
    name: 'Michael Johnson',
    email: 'm.johnson@corp.org',
    role: UserRole.EDITOR,
    status: UserStatus.PENDING,
    lastActive: '1 day ago',
  },
  {
    id: '3',
    name: 'Alex Chen',
    email: 'alex.c@design.io',
    role: UserRole.VIEWER,
    status: UserStatus.INACTIVE,
    lastActive: '2 weeks ago',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0RuR2cDKJHnLyzlCw7O0NObgMbaaZZSxDZlaTolcRaXbqU2nQ93rclQod-iwbPkD179zqzdr74Bndg-zl9P2ah2pXNHVRL4zemYD-966Dt74lLSQIFCN9KxnFrdofvTx9ZDx9DJCCfTr0GNbumtSoInW70movpohciFi_Gf9laon0qffPDLhIsHJNjG4ySZKx0ml8H1NQ3yBUFHTDzaFChZEJ9bzSzK8-XowzIJrbDQQr1m7snb2nvUrji05ItXUEwyvMMlLTOYI'
  },
  {
    id: '4',
    name: 'Jessica Davis',
    email: 'jessica.davis@tech.com',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    lastActive: '5 hours ago',
  },
  {
    id: '5',
    name: 'Kevin Brown',
    email: 'kevin.brown@sales.io',
    role: UserRole.EDITOR,
    status: UserStatus.ACTIVE,
    lastActive: 'Yesterday',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL4X1lMHPxo_wRupXMAXy6t8ox8x9gg2-A3G1KHT8GzP9UZs5VCc8VVLme0kLgYAjy3bDSfoajYHzqrqpmA5pTBw9S6cU8d3-HwZCz-mb4ECC5cm95CDPAq-QdMDlHgAwIgwaVFnFujRP8IAVepEASNCih_JqscHDZfbFkagEzIErswsgdf1rQSWzTaVdMpNLY5Z4eqQfqJ3h9q31umbzvf6BxyrFJwXWUQZou2crgiCv2hZOcdYI6NjomqhkYOfiX4MjNWFZFMcE'
  }
];

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCsviQkONxGxa4hGX_99f4hI8Kpl04ql9o9_5FuUq67-AK6MAqniEWtJ379Hadxm89LsZbQhatv7FvtODL66pZXHX4ohgOojtVnJI-kTb9ZS4D5jZWFoJAPB4eDzwkrfc_uk9w8wkZrp5iJjcuu9Ulu50N-NFNWJKDZnGV4ep5j9RtWFXaanowHFrFU31Vnoa0oDn1xBjGs9opObA3g42ilOtP_qkodt-FCzsoTKuNW2ALKUxGQUpMsqcu_FPESr-D_az2SLFdtS0A";
export const PROFILE_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuD8B7JA_LImVZB8BcZ_ghYvYGkl1-x5aAwa7Xcxq3no0KdKgeIjU1TKTHWK65Ick65ZeIdKt0w9TOTZI6Uve7dWMeCnzM1Jrg3PW1Z2aslDVHyIkEUR18CH_wCZcpk1xaY3V06w27ibFJ-6UZyVmQ4Ks7OZfVGK3e1Z6UTdaATQoN_CzdrSXjNU-YST2tEkQq-UFMa93jfvcfVqTNWj-yGh3A5i_3MU-qC8S15vCFlrbowFfTpK7vwOhl5GLkq0dA8xeAeTf5MafOY";
