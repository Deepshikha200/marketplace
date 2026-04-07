import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import AuthPanel from '../../components/auth/AuthPanel'
import FormControl from '../../components/common/formik/FormControl'
import { useFormik } from 'formik'

const resetPasswordSchema = Yup.object({
  newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword')], 'Passwords must match').required('Confirm your password'),
})

export default function ResetPasswordPage() {
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('reset password submit', values)
    },
  })

  return (
    <AuthPanel title="Set a new password" subtitle="Your new password must be at least 8 characters.">
      <form onSubmit={formik.handleSubmit} className="auth_form">
        <FormControl
          label="New password"
          name="newPassword"
          type="password"
          placeholder="Enter a new password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newPassword ? (formik.errors.newPassword as string | undefined) : undefined}
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
            Update password
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

