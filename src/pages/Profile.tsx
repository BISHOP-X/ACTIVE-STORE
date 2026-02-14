import { UserCircle, Wallet, Shield, LogOut, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()
  const userName = 'bishop'
  const userEmail = 'wisdomthedev@gmail.com'

  const items = [
    {
      icon: Wallet,
      label: 'Account Balance',
      desc: 'NGN 0.00',
      color: 'from-primary-100 to-indigo-100 dark:from-primary-900/30 dark:to-indigo-900/30',
      iconColor: 'text-primary-600 dark:text-primary-400',
    },
    {
      icon: Shield,
      label: 'Change Password',
      desc: 'Click to change your password',
      color: 'from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: LogOut,
      label: 'Log Out',
      desc: 'Click Here to Log Out',
      color: 'from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30',
      iconColor: 'text-red-500 dark:text-red-400',
      action: () => navigate('/'),
    },
  ]

  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      {/* Avatar & Info */}
      <div className="flex flex-col items-center pt-6 pb-2">
        <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 ring-4 ring-primary-100 dark:ring-primary-900/30 shadow-lg">
          <UserCircle size={56} className="text-gray-400 dark:text-gray-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{userName}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</p>
      </div>

      {/* Account Items */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-700/30">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={item.action}
            className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors group"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
              <item.icon size={20} className={item.iconColor} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
            <ChevronRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-gray-400 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  )
}
