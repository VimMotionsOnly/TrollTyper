import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import DocumentEditorPage from './pages/DocumentEditorPage';
import LobbyListPage from './pages/LobbyListPage';
import LobbyPage from './pages/LobbyPage';
import LoginPage from './pages/LoginPage';
import PasswordResetPage from './pages/PasswortReset';
import RegistrationPage from './pages/RegistrationPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/404Page';
import Navbar from "./customWidget/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/document-editor',
    element: <DocumentEditorPage />,
  },
  {
    path: '/lobby-list',
    element: <LobbyListPage />,
  },
  {
    path: '/lobby/:lobbyId',
    element: <LobbyPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/password-reset',
    element: <PasswordResetPage />,
  },
  {
    path: '/register',
    element: <RegistrationPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router}/>

    <App />

  </StrictMode>,
)
