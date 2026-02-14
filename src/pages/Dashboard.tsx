import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Home, MessageSquare, ShoppingBag, Wallet, HelpCircle, BookOpen,
  HeadphonesIcon, UserCircle, LogOut, Menu, X, Sun, Moon,
  Eye, EyeOff, Phone, Globe, Heart, ChevronRight, ChevronDown, ChevronUp,
  TrendingUp, ArrowDownRight, ShoppingCart,
} from 'lucide-react'
import Logo from '../components/Logo'
import { useTheme } from '../hooks/useTheme'

/* ─── Mock Data ─── */
const popularLogs = [
  {
    platform: 'facebook',
    icon: '🔵',
    color: 'bg-blue-500',
    description: 'Aged EUROPE 🇪🇺🌍 Facebook with 100–5,000 friends nice profile 60% has create profile and Active marketplace 🌟🌟 majority of the account has post {USE VPN TO LOGIN}(6 months old)',
    stock: 166,
    price: 2980,
  },
  {
    platform: 'twitter',
    icon: '🐦',
    color: 'bg-sky-500',
    description: '17–20 YEARS OLDEST USA 🇺🇸🇺🇸 TWITTER WITH 0-50 FOLLOWERS, VERY STRONG 💪 ACCOUNTS 🚀🚀🚀 (login mail on FIRSTMAIL.LTD)',
    stock: 258,
    price: 2480,
  },
  {
    platform: 'instagram',
    icon: '📸',
    color: 'bg-pink-500',
    description: '6–10 YEARS LOW FOLLOWER 🌸 🇺🇸 Instagram account MOST ACCOUNTS HAS POST 🌆🌆 VERY STRONG 💪 <USE 2FA KEY 🔑 TO LOGIN> LOGIN MAIL ON GMX.NET',
    stock: 351,
    price: 2490,
  },
  {
    platform: 'facebook',
    icon: '🔵',
    color: 'bg-blue-500',
    description: '1–5 YEARS USA 🇺🇸🇺🇸 FACEBOOK WITH 200+ FRIENDS has marketplace, contains post and good profile 🇺🇸🇺🇸🥶❄️❄️ (suitable for Celeb work)',
    stock: 333,
    price: 3980,
  },
]

const categories = [
  {
    title: 'FACEBOOK',
    emoji: '',
    items: [
      { description: '8-15 years USA 🇺🇸🇺🇸 Facebook with 100+ friends & Active marketplace 85% have create profile very strong accounts 💪', stock: 30, price: 11300 },
      { description: '8-15 years GERMANY 🇩🇪🇩🇪 Facebook with 0–50 friends & Active marketplace 60% have create profile', stock: 11, price: 6900 },
      { description: '2–5 year 🇬🇧🇺🇦🇫🇷🇩🇪 Facebook with 0-50 friends & Active marketplace 85% have create profile CHEAPEST OLD ACCOUNT', stock: 78, price: 4980 },
    ],
  },
  {
    title: 'INSTAGRAM',
    emoji: '',
    items: [
      { description: '6–10 YEARS 200+ FOLLOWER 🌸 🇺🇸 Instagram MOST ACCOUNTS HAS POST VERY STRONG 💪 <USE 2FA KEY 🔑> LOG IN MAIL ON YOPMAIL.COM', stock: 0, price: 4450 },
      { description: '6–10 YEARS 1,000+ FOLLOWER 🌸 🇺🇸 Instagram MOST ACCOUNTS HAS POST VERY STRONG 💪 <USE 2FA KEY 🔑> LOG IN MAIL ON YOPMAIL.COM', stock: 0, price: 6450 },
    ],
  },
  {
    title: 'TIKTOK',
    emoji: '',
    items: [
      { description: 'AGED UK 🇬🇧🇬🇧 with 0–20 followers TIKTOK (LOGIN MAIL ON OUTLOOK.LIVE.COM) USE UK 🇬🇧 VPN TO LOGIN ⭐️⭐️⭐️', stock: 297, price: 999 },
      { description: 'AGED UK 🇬🇧🇬🇧 200–500 followers TIKTOK (LOGIN MAIL ON OUTLOOK.LIVE.COM) USE UK 🇬🇧 VPN TO LOGIN 🌻🌻✅', stock: 0, price: 1999 },
    ],
  },
  {
    title: 'TWITTER',
    emoji: '',
    items: [
      { description: '10–20 years old 🇪🇺🇫🇷 EUROPE TWITTER with 30–100 followers and nice profile <LOGIN MAIL ON FIRSTMAIL.LTD>', stock: 362, price: 3480 },
      { description: '11–20 years old 🇪🇺🇵🇱🇮🇪 EUROPE TWITTER with 45—100 followers and nice profile <LOGIN MAIL ON FIRSTMAIL.LTD> 🌸💐', stock: 129, price: 3690 },
    ],
  },
  {
    title: 'VPN',
    emoji: '',
    items: [
      { description: 'HMA VPN: This is the best vpn for Everything you can use it for fb dating and any app (one user per log) 1 month 💯💯', stock: 49, price: 3450 },
    ],
  },
  {
    title: 'MAILS 📫',
    emoji: '',
    items: [
      { description: 'HOTMAIL/OUTLOOK MAIL: 🇺🇸 USA Aged Hotmail account', stock: 294, price: 250 },
      { description: 'GMX MAIL: USA 🇺🇸 Gmxmail.com email 📧 easy login just login here on GMX MAIL APP', stock: 811, price: 198 },
    ],
  },
]

const recentActivity = [
  { type: 'deposit', user: 'jul***', action: 'Deposited', amount: '₦130', time: '1m ago' },
  { type: 'order', user: 'joj***', action: 'Bought', platform: 'instagram', amount: '₦2490', time: '2m ago' },
  { type: 'order', user: 'lin***', action: 'Bought', platform: 'twitter', amount: '₦4980', time: '2m ago' },
  { type: 'deposit', user: 'joj***', action: 'Deposited', amount: '₦4500', time: '2m ago' },
  { type: 'deposit', user: 'Slo***', action: 'Deposited', amount: '₦2000', time: '2m ago' },
  { type: 'order', user: 'Mub***', action: 'Bought', platform: 'facebook', amount: '₦2980', time: '5m ago' },
]

/* ─── Sidebar Links ─── */
const sidebarLinks = [
  { icon: Home, label: 'Home', active: true },
  { icon: MessageSquare, label: 'SMS Services', expandable: true },
  { icon: ShoppingBag, label: 'My Orders' },
  { icon: Wallet, label: 'Add Funds' },
  { icon: HelpCircle, label: 'How to Login' },
  { icon: BookOpen, label: 'Rules' },
  { icon: HeadphonesIcon, label: 'Customer Care' },
]

const accountLinks = [
  { icon: UserCircle, label: 'Profile' },
  { icon: LogOut, label: 'Sign Out', danger: true },
]

/* ─── Components ─── */
function ProductCard({ description, stock, price, platform }: { description: string; stock: number; price: number; platform?: string }) {
  const platformColors: Record<string, string> = {
    facebook: 'border-l-blue-500',
    instagram: 'border-l-pink-500',
    twitter: 'border-l-sky-500',
    tiktok: 'border-l-gray-900 dark:border-l-white',
  }

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-0.5 border-l-4 ${platform ? platformColors[platform] || 'border-l-primary-500' : 'border-l-primary-500'}`}>
      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${stock > 0 ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400'}`}>
          Stock: {stock}
        </span>
        <span className="text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
          NGN {price.toLocaleString()}.00
        </span>
        <button className={`ml-auto text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${stock > 0 ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'}`} disabled={stock === 0}>
          {stock > 0 ? 'BUY' : 'OUT'}
        </button>
      </div>
    </div>
  )
}

function CategorySection({ title, items }: { title: string; items: { description: string; stock: number; price: number }[] }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? items : items.slice(0, 2)

  const platformKey = title.toLowerCase().replace(/[^a-z]/g, '') as string
  const iconMap: Record<string, string> = {
    facebook: '🔵', instagram: '📸', tiktok: '🎵', twitter: '🐦', vpn: '🔒', mails: '📫',
  }

  return (
    <div className="auth-fade-in">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-sm">
            {iconMap[platformKey] || '📦'}
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base uppercase">{title}</h3>
        </div>
        <button className="text-xs text-primary-600 dark:text-primary-400 hover:underline font-semibold flex items-center gap-1">
          See More <ChevronRight size={14} />
        </button>
      </div>
      <div className="grid gap-3">
        {shown.map((item, i) => (
          <ProductCard key={i} {...item} platform={platformKey} />
        ))}
      </div>
      {items.length > 2 && (
        <button onClick={() => setExpanded(!expanded)} className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mx-auto">
          {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> Show {items.length - 2} more</>}
        </button>
      )}
    </div>
  )
}

/* ─── Dashboard ─── */
export default function Dashboard() {
  const { dark, toggle } = useTheme()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [balanceVisible, setBalanceVisible] = useState(true)

  const userName = 'bishop'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700/50
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Sidebar background image overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=30)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-5 border-b border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <Logo size="sm" />
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  link.active
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <link.icon size={18} />
                {link.label}
                {link.expandable && <ChevronDown size={14} className="ml-auto" />}
              </button>
            ))}

            {/* Account Section */}
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700/50">
              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-3">Account</p>
              {accountLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.danger ? () => navigate('/') : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    link.danger
                      ? 'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <link.icon size={18} />
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700/50">
          <div className="flex items-center justify-between px-4 sm:px-6 h-16">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                <Menu size={20} />
              </button>
              <div className="lg:hidden">
                <Logo size="sm" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={toggle} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-gray-500 dark:text-gray-400">Balance:</span>
                <span className="font-bold text-gray-900 dark:text-white">NGN 0.00</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
          {/* Welcome Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-800 p-5 sm:p-6 text-white shadow-xl shadow-primary-600/20">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-1/2 w-24 h-24 rounded-full bg-white/5 translate-y-8" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold uppercase">
                  {userName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-bold">{userName}</h2>
                    <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-white/70 text-sm">Welcome back! 👋</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-white/70 text-xs font-medium">Available Balance</p>
                  <button onClick={() => setBalanceVisible(!balanceVisible)} className="text-white/50 hover:text-white/80 transition-colors">
                    {balanceVisible ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-xl sm:text-2xl font-bold">{balanceVisible ? 'NGN 0.00' : '***'}</p>
                  <button className="text-xs bg-white text-primary-700 font-semibold px-3 py-1.5 rounded-full hover:bg-white/90 transition-all shadow-sm">
                    + Add Money
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <button className="flex flex-col items-center gap-2 p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5 group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={22} className="text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">US Numbers</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5 group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe size={22} className="text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Other Countries</span>
            </button>
            <button className="relative flex flex-col items-center gap-2 p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5 group">
              <span className="absolute top-2 right-2 text-[9px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-full">Coming Soon</span>
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart size={22} className="text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Boost Followers</span>
            </button>
          </div>

          {/* Popular Logs */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-sm">⭐</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">POPULAR LOGS 🔥</h3>
              </div>
              <button className="text-xs text-primary-600 dark:text-primary-400 hover:underline font-semibold flex items-center gap-1">
                See More <ChevronRight size={14} />
              </button>
            </div>
            <div className="grid gap-3">
              {popularLogs.map((item, i) => (
                <ProductCard key={i} description={item.description} stock={item.stock} price={item.price} platform={item.platform} />
              ))}
            </div>
          </div>

          {/* Category Sections */}
          <div className="space-y-8">
            {categories.map((cat) => (
              <CategorySection key={cat.title} title={cat.title} items={cat.items} />
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={18} className="text-primary-600 dark:text-primary-400" />
              <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">📊 Recent Activity</h3>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Latest orders and deposits</p>
            <div className="space-y-2.5">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-700/30 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${a.type === 'deposit' ? 'bg-green-50 dark:bg-green-900/30' : 'bg-blue-50 dark:bg-blue-900/30'}`}>
                      {a.type === 'deposit'
                        ? <ArrowDownRight size={14} className="text-green-500" />
                        : <ShoppingCart size={14} className="text-blue-500" />}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                        <span className="text-gray-500 dark:text-gray-400">{a.user}</span>{' '}
                        {a.action}{' '}
                        {a.platform && <span className="text-primary-600 dark:text-primary-400 font-semibold">{a.platform}</span>}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{a.amount}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
