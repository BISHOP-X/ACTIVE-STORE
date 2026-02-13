import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, Zap, Star, ArrowLeft } from 'lucide-react'
import Logo from '../components/Logo'

const stats = [
  { icon: Shield, label: 'Secure Payments', value: '256-bit SSL' },
  { icon: Zap, label: 'Instant Delivery', value: '<5 minutes' },
  { icon: Star, label: 'Customer Rating', value: '4.9/5.0' },
]

export default function SignIn() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Supabase auth
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900">
      {/* Back button - visible on all screens */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-md"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back</span>
      </Link>

      {/* Left panel — form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 auth-fade-in">
            <Link to="/">
              <Logo size="default" />
            </Link>
          </div>

          <div className="auth-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Sign in to access your Active Store account
            </p>
          </div>

          {/* Social login buttons */}
          <div className="mt-6 grid grid-cols-3 gap-3 auth-slide-up" style={{ animationDelay: '0.15s' }}>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:shadow-md hover:-translate-y-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:shadow-md hover:-translate-y-0.5">
              <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">Apple</span>
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:shadow-md hover:-translate-y-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.218.682-.483 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" className="text-gray-900 dark:text-white" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6 auth-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">or continue with email</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="auth-slide-up" style={{ animationDelay: '0.25s' }}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="auth-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <a href="#" className="text-xs text-primary-600 dark:text-primary-400 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={show ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="auth-slide-up" style={{ animationDelay: '0.35s' }}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Keep me signed in</span>
              </label>
            </div>

            <button
              type="submit"
              className="auth-slide-up w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5 btn-glow text-sm"
              style={{ animationDelay: '0.4s' }}
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 auth-fade-in" style={{ animationDelay: '0.55s' }}>
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>

      {/* Right panel — image + branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=1600&fit=crop&q=80"
          alt="Modern workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/90 via-primary-700/85 to-primary-600/90" />

        {/* Floating shapes */}
        <div className="absolute top-32 right-16 w-28 h-28 rounded-full bg-white/10 animate-float-slow" />
        <div className="absolute bottom-40 left-14 w-20 h-20 rounded-full bg-white/5 animate-float-delayed" />
        <div className="absolute top-1/3 right-10 w-14 h-14 rounded-lg bg-white/10 rotate-12 animate-float-slow" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 text-white w-full">
          <div className="auth-slide-up">
            <Link to="/">
              <Logo variant="full" size="lg" className="[&_span]:!text-white" />
            </Link>
          </div>

          <div className="auth-slide-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-3xl xl:text-4xl font-bold leading-tight mb-4">
              Your digital growth<br />
              <span className="text-blue-200">starts here</span>
            </h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Access premium social media accounts, growing tools, and digital services trusted by thousands worldwide.
            </p>
          </div>

          {/* Stats cards */}
          <div className="space-y-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass-auth rounded-xl p-4 flex items-center gap-4 auth-slide-up"
                style={{ animationDelay: `${0.5 + i * 0.12}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <s.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
