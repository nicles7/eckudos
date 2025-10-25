
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';
import { DataProvider } from './context/DataContext.tsx';

import LoginPage from './pages/LoginPage.tsx';
import GiveKudosPage from './pages/GiveKudosPage.tsx';
import MyKudosPage from './pages/MyKudosPage.tsx';
import LeaderboardPage from './pages/LeaderboardPage.tsx';
import AdminDashboardPage from './pages/AdminDashboardPage.tsx';
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import { Role } from './types.ts';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <HashRouter>
          <Main />
        </HashRouter>
      </DataProvider>
    </AuthProvider>
  );
};

const Main: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          <Routes>
            <Route path="/give-kudos" element={<GiveKudosPage />} />
            <Route path="/my-kudos" element={<MyKudosPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            {user.role === Role.HR && <Route path="/admin" element={<AdminDashboardPage />} />}
            <Route path="*" element={<Navigate to="/give-kudos" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;