import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import AuthPanel from '../../components/auth/AuthPanel'
import FormControl from '../../components/common/formik/FormControl'
import { useFormik } from 'formik'

const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
})

export default function ForgotPasswordPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('forgot password submit', values)
    },
  })

  return (
    <AuthPanel title="Reset your password" subtitle="Enter your email and we’ll send you a reset link.">
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

        <div className="auth_submitRow">
          <button className="auth_primaryButton" type="submit" disabled={formik.isSubmitting}>
            Send reset link
          </button>
        </div>

        <div className="auth_switchRow">
          <span>Remembered it?</span>
          <Link to="/login" className="auth_switchLink">
            Back to log in
          </Link>
        </div>
      </form>
    </AuthPanel>
  )
}

