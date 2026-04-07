
import { Outlet } from 'react-router-dom'
import './AuthLayout.scss'

const AuthLayout = () => {
  return (
    <div className="auth_layout">
      <div className="auth_layout_content">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout