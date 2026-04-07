import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import AuthPanel from '../../components/auth/AuthPanel'
import FormControl from '../../components/common/formik/FormControl'
import { useFormik } from 'formik'

const loginSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
          console.log('login submit', values)
    },
  })

  return (
    <AuthPanel title="Log in" subtitle="Welcome back. Please enter your details.">
      <form onSubmit={formik.handleSubmit} className="auth_form">
        <FormControl
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email ? (formik.errors.email as string | undefined) : undefined}
        />
        <FormControl
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password ? (formik.errors.password as string | undefined) : undefined}
        />

        <div className="auth_secondaryRow">
          <Link to="/forgot-password" className="auth_textLink auth_textLink--muted">
            Forgot password?
          </Link>
        </div>

        <div className="auth_submitRow">
          <button className="auth_primaryButton" type="submit" disabled={formik.isSubmitting}>
            Log in
          </button>
        </div>

        <div className="auth_switchRow">
          <span>New to MarketPlace?</span>
          <Link to="/signup" className="auth_switchLink">
            Create account
          </Link>
        </div>
      </form>
    </AuthPanel>
  )
}

