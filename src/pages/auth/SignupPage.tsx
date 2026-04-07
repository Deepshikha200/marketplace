import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import AuthPanel from '../../components/auth/AuthPanel'
import FormControl from '../../components/common/formik/FormControl'
import { useFormik } from 'formik'

const signupSchema = Yup.object({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm your password'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms').required('You must accept the terms'),
})

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      // Replace with real API call.
      // eslint-disable-next-line no-console
      console.log('signup submit', values)
    },
  })

  return (
    <AuthPanel title="Create account" subtitle="Join MarketPlace and start shopping smarter.">
      <form onSubmit={formik.handleSubmit} className="auth_form">
        <FormControl
          label="Full name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name ? (formik.errors.name as string | undefined) : undefined}
        />
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
          placeholder="Create a password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password ? (formik.errors.password as string | undefined) : undefined}
        />
        <FormControl
          label="Confirm password"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword ? (formik.errors.confirmPassword as string | undefined) : undefined
          }
        />

        <div className="auth_submitRow">
          <button className="auth_primaryButton" type="submit" disabled={formik.isSubmitting}>
            Create account
          </button>
        </div>

        <div className="auth_switchRow">
          <span>Already have an account?</span>
          <Link to="/login" className="auth_switchLink">
            Log in
          </Link>
        </div>
      </form>
    </AuthPanel>
  )
}

