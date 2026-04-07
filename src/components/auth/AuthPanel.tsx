import type { ReactNode } from 'react'

type AuthPanelProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function AuthPanel({ title, subtitle, children }: AuthPanelProps) {
  return (
    <section className="auth_section">
      <div className="auth_panel">
        <div className="auth_panel_header">
          <h2 className="auth_panel_title">{title}</h2>
          {subtitle ? <p className="auth_panel_subtitle">{subtitle}</p> : null}
        </div>

        {children}
      </div>
    </section>
  )
}

