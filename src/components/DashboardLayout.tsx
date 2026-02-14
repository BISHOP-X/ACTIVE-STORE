import { useState } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  Home, MessageSquare, ShoppingBag, Wallet, HelpCircle, BookOpen,
  HeadphonesIcon, UserCircle, LogOut, Menu, X, Sun, Moon,
  ChevronDown, Smartphone, Globe, Clock, Send,
} from 'lucide-react'
import Logo from './Logo'
import { useTheme } from '../hooks/useTheme'

const smsSubLinks = [
  { icon: Smartphone, label: 'USA Numbers', path: '/dashboard' },
  { icon: Globe, label: 'All Countries', path: '/dashboard' },
  { icon: Clock, label: 'SMS History', path: '/dashboard' },
]

const HOW_TO_LOGIN_URL = 'https://drive.google.com/drive/folders/1fuS7l45QWGCzp7CIqHPofiy4L28lsEua'

export default function DashboardLayout() {
  const { dark, toggle } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [smsExpanded, setSmsExpanded] = useState(false)

  const sidebarMainLinks = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: MessageSquare, label: 'SMS Services', expandable: true, path: '' },
    { icon: ShoppingBag, label: 'My Orders', path: '/dashboard/orders' },
    { icon: Wallet, label: 'Add Funds', path: '/dashboard/funds' },
    { icon: HelpCircle, label: 'How to Login', path: '', external: HOW_TO_LOGIN_URL },
    { icon: BookOpen, label: 'Rules', path: '/dashboard/rules' },
    { icon: HeadphonesIcon, label: 'Customer Care', path: '/dashboard' },
  ]

  const accountLinks = [
    { icon: UserCircle, label: 'Profile', path: '/dashboard/profile' },
    { icon: LogOut, label: 'Sign Out', path: '/', danger: true },
  ]

  function isActive(path: string) {
    if (!path) return false
    if (path === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  function handleNavClick(link: typeof sidebarMainLinks[0]) {
    if (link.external) {
      window.open(link.external, '_blank', 'noopener,noreferrer')
      return
    }
    if (link.expandable) {
      setSmsExpanded(!smsExpanded)
      return
    }
    if (link.path) {
      navigate(link.path)
      setSidebarOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0c0f1a] flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-[fadeIn_0.2s_ease-out]" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72
        bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
        border-r border-gray-200/80 dark:border-gray-700/30
        transform transition-transform duration-300 ease-in-out
        scrollbar-hide overflow-y-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Sidebar background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-500/5 dark:bg-primary-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-500/5 dark:bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <Link to="/">
                <Logo size="sm" />
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 p-3 space-y-0.5">
            {sidebarMainLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 text-primary-700 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg transition-colors ${isActive(link.path) ? 'bg-primary-100 dark:bg-primary-900/40' : 'bg-gray-100 dark:bg-gray-800'}`}>
                    <link.icon size={16} />
                  </div>
                  {link.label}
                  {link.expandable && (
                    <ChevronDown size={14} className={`ml-auto transition-transform duration-300 ${smsExpanded ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* SMS Sub-menu */}
                {link.expandable && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${smsExpanded ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 pl-4 border-l-2 border-primary-200 dark:border-primary-800/50 space-y-0.5">
                      {smsSubLinks.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => { navigate(sub.path); setSidebarOpen(false) }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-all"
                        >
                          <sub.icon size={14} />
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Account Section */}
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2 px-3">Account</p>
              {accountLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => { navigate(link.path); setSidebarOpen(false) }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    link.danger
                      ? 'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10'
                      : isActive(link.path)
                        ? 'bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 text-primary-700 dark:text-primary-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${link.danger ? 'bg-red-50 dark:bg-red-900/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                    <link.icon size={16} />
                  </div>
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 scrollbar-hide overflow-y-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/70 dark:bg-[#0c0f1a]/70 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-700/20">
          <div className="flex items-center justify-between px-4 sm:px-6 h-16">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
                <Menu size={20} />
              </button>
              <div className="lg:hidden">
                <Logo size="sm" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={toggle} className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:rotate-12">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="hidden sm:flex items-center gap-2 text-sm bg-gray-100/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30">
                <span className="text-gray-500 dark:text-gray-400">Balance:</span>
                <span className="font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">NGN 0.00</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content (child routes render here) */}
        <main className="p-4 sm:p-6 max-w-6xl mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Telegram Floating Button */}
      <a
        href="https://t.me/activestoresupport"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <Send size={22} className="text-white -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
      </a>
    </div>
  )
}
