# Startup Admin Dashboard

A modern, feature-rich admin dashboard built with React and TypeScript for managing users, roles, and permissions. This application provides a comprehensive interface for startup and enterprise user management with advanced filtering, real-time updates, and a professional UI.

## 🎯 Features

- **User Management**: Create, read, update, and delete user accounts
- **Advanced Filtering**: Filter users by search query, status (Active/Pending/Inactive), and role (Administrator/Editor/Viewer)
- **Bulk Operations**: Select multiple users and perform batch actions
- **Real-time Updates**: Instant user data updates with modal-based editing
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **User Status Tracking**: Monitor user activity and last login information
- **Role-Based Access**: Manage three tiers of user roles with different permissions
- **Search Functionality**: Quick search by user name or email address
- **Pagination**: Efficiently navigate through large user lists
- **User Profiles**: View detailed user information with avatars and metadata

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: CSS 3 with Dark Mode support
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)

## 🚀 How to Run

### 1. Clone or Download the Repository
```bash
cd Startup-Admin-Dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables (Optional)
If you're using the Gemini API integration for AI features:
- Create a `.env.local` file in the root directory
- Add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

### 4. Start Development Server
```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:5173`

### 5. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 6. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
Startup-Admin-Dashboard/
├── components/
│   ├── Filters.tsx           # Filter controls
│   ├── Header.tsx            # Top header with profile
│   ├── Pagination.tsx        # Pagination controls
│   ├── Sidebar.tsx           # Left navigation sidebar
│   ├── StatusBadge.tsx       # Status display component
│   ├── UserTable.tsx         # Main users table
│   └── Modals/
│       ├── DeleteConfirmModal.tsx   # Delete confirmation
│       └── EditUserModal.tsx        # User edit form
├── App.tsx                   # Main application component
├── types.ts                  # TypeScript type definitions
├── constants.tsx             # Mock data and constants
├── geminiService.ts          # Gemini API integration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
├── index.html                # HTML entry point
├── index.tsx                 # React entry point
└── README.md                 # This file
```

## 📸 Screenshots

See demo screenshots in the `/screenshots` folder

## 🔑 Key Components

### User Management
- View all users in a clean, organized table
- Edit user details including name, email, role, and status
- Delete users with confirmation modal
- Bulk selection for future batch operations

### Filtering System
- **Search**: Real-time search across user names and emails
- **Status Filter**: View users by Active, Pending, or Inactive status
- **Role Filter**: Filter by Administrator, Editor, or Viewer roles
- **Combined Filtering**: Use multiple filters together

### User Roles

| Role | Description |
|------|-------------|
| Administrator | Full access to all features and user management |
| Editor | Can edit content and manage some users |
| Viewer | Read-only access to user data |

### User Status

| Status | Description |
|--------|-------------|
| Active | User account is active and in use |
| Pending | User invitation is pending acceptance |
| Inactive | User account is inactive |

## 🌙 Dark Mode

Toggle dark mode using the theme button in the header. Your preference is preserved during the session.

## 🔄 Responsive Design

The dashboard is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 💡 Future Enhancements

- User role and permission management
- API integration for real backend data
- Advanced user analytics
- Batch user import/export
- Activity logging and audit trails
- User profile customization

## 📝 Notes

- This is a **demo/template version** with mock data
- No data is persisted between sessions (refresh resets data)
- To integrate with a real backend, modify the API calls in `geminiService.ts`
- Customize styling by editing component CSS files

## 🤝 Support

For issues or questions, please create an issue in the repository or contact the development team.

## 📄 License

This project is part of the Startup Admin Suite and is maintained by the development team.

---

**Last Updated**: December 2025
