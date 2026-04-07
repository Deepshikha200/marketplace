import { Navigate, createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../components/common/layout/AuthLayout/AuthLayout'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import LoginPage from '../pages/auth/LoginPage'
import ResetPasswordPage from '../pages/auth/ResetPasswordPage'
import SignupPage from '../pages/auth/SignupPage'
import MainLayout from '../components/common/layout/MainLayout/MainLayout'
import Dashboard from '../pages/user/dashboard/Dashboard'
import ViewDetail from '../pages/user/viewDetail/ViewDetail'
import { ROUTES } from '../utils/routes'
import AboutUs from '../pages/user/aboutUs/AboutUs'

// Wrapper to keep your requested naming (`createBrowserRoutes`).
export function createBrowserRoutes() {
  return createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: ROUTES.LOGIN, element: <LoginPage /> },
        { path: ROUTES.SIGNUP, element: <SignupPage /> },
        { path: ROUTES.RESET_PASSWORD, element: <ForgotPasswordPage /> },
        { path: ROUTES.RESET_PASSWORD, element: <ResetPasswordPage /> },
      ],
    },
    {
      path: ROUTES.DASHBOARD,
      element: <MainLayout />,
      children: [
        { path: ROUTES.DASHBOARD, element: <Dashboard /> },
        { path: ROUTES.VIEW_DETAIL, element: <ViewDetail /> },
        { path: ROUTES.ABOUT_US, element: <AboutUs /> }
      ],
    }
  ])
}

