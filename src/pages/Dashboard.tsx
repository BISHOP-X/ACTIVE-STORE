import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Eye, EyeOff, Phone, Globe, Heart, ChevronRight, ChevronDown, ChevronUp,
  TrendingUp, ArrowDownRight, ShoppingCart,
} from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'

/* ─── Platform Icons (SVG) ─── */
const FacebookIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path d="M16.5 12.05h-2.7v7.95h-3.3v-7.95H8.5V9.3h2v-1.6c0-2.7 1.1-4.2 3.8-4.2h2.3v2.8h-1.4c-1.1 0-1.4.5-1.4 1.3V9.3h2.8l-.6 2.75z" fill="white" />
  </svg>
)

const InstagramIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig-dash" x1="0" y1="24" x2="24" y2="0">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-dash)" />
    <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
    <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" />
  </svg>
)

const TwitterIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#000" />
    <path d="M13.3 10.8L18.2 5h-1.2l-4.2 4.9L9.3 5H5l5.1 7.4L5 19h1.2l4.5-5.2 3.5 5.2H19l-5.3-7.8.6-.4zm-1.5 1.8l-.5-.7L7 6h1.8l3.4 4.8.5.7L17 18.1H15.2l-3.4-5.1v-.4z" fill="white" />
  </svg>
)

const TikTokIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#010101" />
    <path d="M16.6 8.2c-.9-.6-1.5-1.6-1.6-2.7h-2.5v10.3c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3 1-2.3 2.3-2.3c.2 0 .5 0 .7.1v-2.6c-.2 0-.5-.1-.7-.1-2.7 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8V10c.9.7 2 1 3.2 1V8.5c-.6 0-1.1-.1-1.6-.3z" fill="#25F4EE" />
    <path d="M17.2 8.2c-.9-.6-1.5-1.6-1.6-2.7h-2v10.3c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3 1-2.3 2.3-2.3c.2 0 .5 0 .7.1v-2.6c-.2 0-.5-.1-.7-.1-2.7 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8V10c.9.7 2 1 3.2 1V8.5c-.6 0-1.2-.1-1.7-.3z" fill="#FE2C55" />
  </svg>
)

const VpnIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#6366F1" />
    <path d="M12 5C8.7 5 6 7.7 6 11v2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2v-2c0-3.3-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4v2H8v-2c0-2.2 1.8-4 4-4zm0 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="white" />
  </svg>
)

const MailIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#EA4335" />
    <path d="M5 8l7 5 7-5v8c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V8zm0-1c0-.6.4-1 1-1h12c.6 0 1 .4 1 1l-7 5-7-5z" fill="white" />
  </svg>
)

const platformIcons: Record<string, React.FC<{ className?: string }>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  tiktok: TikTokIcon,
  vpn: VpnIcon,
  mails: MailIcon,
}

/* ─── Country Flags ─── */
function CountryFlags({ countries }: { countries: string[] }) {
  if (!countries.length) return null
  return (
    <span className="inline-flex items-center gap-0.5 mx-0.5 align-middle">
      {countries.map((code, i) => (
        <ReactCountryFlag key={i} countryCode={code} svg style={{ width: '1.1em', height: '1.1em' }} title={code} />
      ))}
    </span>
  )
}

/* ─── Mock Data ─── */
const popularLogs = [
  {
    platform: 'facebook',
    countries: ['EU'],
    description: 'Aged EUROPE Facebook with 100–5,000 friends nice profile 60% has create profile and Active marketplace 🌟🌟 majority of the account has post {USE VPN TO LOGIN}(6 months old)',
    stock: 166,
    price: 2980,
    sales: 45,
  },
  {
    platform: 'twitter',
    countries: ['US'],
    description: '17–20 YEARS OLDEST TWITTER WITH 0-50 FOLLOWERS, VERY STRONG 💪 ACCOUNTS 🚀🚀🚀 (login mail on FIRSTMAIL.LTD)',
    stock: 258,
    price: 2480,
    sales: 127,
  },
  {
    platform: 'instagram',
    countries: ['US'],
    description: '6–10 YEARS LOW FOLLOWER 🌸 Instagram account MOST ACCOUNTS HAS POST 🌆🌆 VERY STRONG 💪 <USE 2FA KEY 🔑 TO LOGIN> LOGIN MAIL ON GMX.NET',
    stock: 351,
    price: 2490,
    sales: 89,
  },
  {
    platform: 'facebook',
    countries: ['US'],
    description: '1–5 YEARS FACEBOOK WITH 200+ FRIENDS has marketplace, contains post and good profile 🥶❄️❄️ (suitable for Celeb work)',
    stock: 333,
    price: 3980,
    sales: 203,
  },
  {
    platform: 'tiktok',
    countries: ['GB', 'US'],
    description: 'PREMIUM TIKTOK 1,000–5,000 followers 🎵 VERIFIED ACCOUNTS with posts and engagement 💎 (LOGIN MAIL ON OUTLOOK.COM)',
    stock: 89,
    price: 5980,
    sales: 156,
  },
  {
    platform: 'instagram',
    countries: ['US', 'CA'],
    description: '3–7 YEARS Instagram 500–2,000 followers 📸 ACTIVE ACCOUNTS with profile picture and bio ✨ <USE 2FA KEY 🔑> LOGIN MAIL ON HOTMAIL.COM',
    stock: 412,
    price: 3250,
    sales: 234,
  },
]

const categories = [
  {
    title: 'FACEBOOK',
    platform: 'facebook',
    items: [
      { description: '8-15 years Facebook with 100+ friends & Active marketplace 85% have create profile very strong accounts 💪', stock: 30, price: 11300, sales: 56, countries: ['US'] },
      { description: '8-15 years Facebook with 0–50 friends & Active marketplace 60% have create profile', stock: 11, price: 6900, sales: 23, countries: ['DE'] },
      { description: '2–5 year Facebook with 0-50 friends & Active marketplace 85% have create profile CHEAPEST OLD ACCOUNT', stock: 78, price: 4980, sales: 178, countries: ['GB', 'UA', 'FR', 'DE'] },
    ],
  },
  {
    title: 'INSTAGRAM',
    platform: 'instagram',
    items: [
      { description: '6–10 YEARS 200+ FOLLOWER 🌸 Instagram MOST ACCOUNTS HAS POST VERY STRONG 💪 <USE 2FA KEY 🔑> LOG IN MAIL ON YOPMAIL.COM', stock: 0, price: 4450, sales: 312, countries: ['US'] },
      { description: '6–10 YEARS 1,000+ FOLLOWER 🌸 Instagram MOST ACCOUNTS HAS POST VERY STRONG 💪 <USE 2FA KEY 🔑> LOG IN MAIL ON YOPMAIL.COM', stock: 0, price: 6450, sales: 198, countries: ['US'] },
    ],
  },
  {
    title: 'TIKTOK',
    platform: 'tiktok',
    items: [
      { description: 'AGED with 0–20 followers TIKTOK (LOGIN MAIL ON OUTLOOK.LIVE.COM) USE VPN TO LOGIN ⭐️⭐️⭐️', stock: 297, price: 999, sales: 342, countries: ['GB'] },
      { description: 'AGED 200–500 followers TIKTOK (LOGIN MAIL ON OUTLOOK.LIVE.COM) USE VPN TO LOGIN 🌻🌻✅', stock: 0, price: 1999, sales: 156, countries: ['GB'] },
    ],
  },
  {
    title: 'TWITTER',
    platform: 'twitter',
    items: [
      { description: '10–20 years old EUROPE TWITTER with 30–100 followers and nice profile <LOGIN MAIL ON FIRSTMAIL.LTD>', stock: 362, price: 3480, sales: 87, countries: ['EU', 'FR'] },
      { description: '11–20 years old EUROPE TWITTER with 45—100 followers and nice profile <LOGIN MAIL ON FIRSTMAIL.LTD> 🌸💐', stock: 129, price: 3690, sales: 45, countries: ['EU', 'PL', 'IE'] },
    ],
  },
  {
    title: 'VPN',
    platform: 'vpn',
    items: [
      { description: 'HMA VPN: This is the best vpn for Everything you can use it for fb dating and any app (one user per log) 1 month 💯💯', stock: 49, price: 3450, sales: 156, countries: [] },
    ],
  },
  {
    title: 'MAILS 📫',
    platform: 'mails',
    items: [
      { description: 'HOTMAIL/OUTLOOK MAIL: Aged Hotmail account', stock: 294, price: 250, sales: 1024, countries: ['US'] },
      { description: 'GMX MAIL: Gmxmail.com email 📧 easy login just login here on GMX MAIL APP', stock: 811, price: 198, sales: 567, countries: ['US'] },
    ],
  },
]

const recentActivity = [
  { type: 'deposit', user: 'jul***', action: 'Deposited', amount: '₦130', time: '1m ago' },
  { type: 'order', user: 'joj***', action: 'Bought', platform: 'instagram', amount: '₦2,490', time: '2m ago' },
  { type: 'order', user: 'lin***', action: 'Bought', platform: 'twitter', amount: '₦4,980', time: '2m ago' },
  { type: 'deposit', user: 'joj***', action: 'Deposited', amount: '₦4,500', time: '2m ago' },
  { type: 'deposit', user: 'Slo***', action: 'Deposited', amount: '₦2,000', time: '2m ago' },
  { type: 'order', user: 'Mub***', action: 'Bought', platform: 'facebook', amount: '₦2,980', time: '5m ago' },
]



/* ─── Components ─── */
function ProductRow({ description, stock, price, sales, platform, countries, delay = 0 }: {
  description: string; stock: number; price: number; sales: number; platform?: string; countries?: string[]; delay?: number
}) {
  const PlatformIcon = platform ? platformIcons[platform] : null

  return (
    <div
      className="group flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-all duration-200 animate-[fadeSlideUp_0.3s_ease-out_both]"
      style={{ animationDelay: `${delay * 0.05}s` }}
    >
      {PlatformIcon && (
        <div className="shrink-0">
          <PlatformIcon className="w-8 h-8 rounded-lg shadow-sm" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
          {countries && countries.length > 0 && <CountryFlags countries={countries} />}{' '}
          {description}
        </p>
        {/* Mobile stats */}
        <div className="flex sm:hidden items-center gap-2 mt-1.5">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${stock > 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400'}`}>
            {stock} in stock
          </span>
          <span className="text-[10px] font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700/80 px-2 py-0.5 rounded-full">
            ₦{price.toLocaleString()}
          </span>
        </div>
      </div>
      {/* Desktop stats */}
      <div className="hidden sm:flex items-center gap-3 shrink-0">
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full min-w-[3rem] text-center ${stock > 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' : 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400'}`}>
          {stock}
        </span>
        <span className="text-[11px] font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700/80 px-2.5 py-1 rounded-full min-w-[4.5rem] text-center">
          ₦{price.toLocaleString()}
        </span>
        <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full min-w-[3rem] text-center">
          {sales}
        </span>
      </div>
      {/* Buy button */}
      <button
        className={`shrink-0 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 transition-all duration-200 ${
          stock > 0
            ? 'bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg active:scale-95'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
        disabled={stock === 0}
      >
        {stock > 0 ? <>Buy <ChevronRight size={12} /></> : 'Sold'}
      </button>
    </div>
  )
}

function CategorySection({ title, items, platform }: {
  title: string; items: { description: string; stock: number; price: number; sales: number; countries: string[] }[]; platform: string
}) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? items : items.slice(0, 5)
  const PlatformIcon = platformIcons[platform]

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/40 shadow-sm">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-primary-600 to-indigo-600 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {PlatformIcon ? (
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <PlatformIcon className="w-6 h-6" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm">📦</div>
            )}
            <h3 className="font-bold text-white text-sm uppercase tracking-wide">{title}</h3>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[11px] text-white/70 font-medium uppercase tracking-wider">
            <span>In stock</span>
            <span>Price per unit</span>
            <span>Sales</span>
          </div>
        </div>
      </div>

      {/* Product Rows */}
      <div className="divide-y divide-gray-100 dark:divide-gray-700/30 bg-white dark:bg-gray-800/60">
        {shown.map((item, i) => (
          <ProductRow key={i} {...item} platform={platform} delay={i} />
        ))}
      </div>

      {/* Load More */}
      {items.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-3 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all flex items-center justify-center gap-1.5 border-t border-gray-100 dark:border-gray-700/30 bg-white dark:bg-gray-800/60"
        >
          {expanded ? (
            <>Show less <ChevronUp size={14} /></>
          ) : (
            <>Load more products <ChevronDown size={14} /></>
          )}
        </button>
      )}
    </div>
  )
}

/* ─── Marquee Ticker ─── */
function MarqueeTicker() {
  const announcements = [
    '🔥 New stock added: Facebook Aged accounts now available!',
    '⚡ Lightning fast delivery on all orders',
    '🎉 Welcome offer: Get 5% bonus on first deposit',
    '📢 Join our Telegram for latest updates and announcements',
    '✅ Over 30,000+ satisfied customers worldwide',
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-indigo-600 rounded-xl py-2.5 shadow-md animate-[fadeSlideUp_0.3s_ease-out]">
      <div className="marquee-track">
        <span className="marquee-content text-xs font-medium text-white/90">
          {announcements.join('   •   ')}
        </span>
        <span className="marquee-content text-xs font-medium text-white/90" aria-hidden="true">
          {announcements.join('   •   ')}
        </span>
      </div>
    </div>
  )
}

/* ─── Dashboard Home ─── */
export default function Dashboard() {
  const navigate = useNavigate()
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [popularExpanded, setPopularExpanded] = useState(false)
  const userName = 'bishop'

  return (
    <div className="space-y-6">
          {/* Scrolling Announcement Ticker */}
          <MarqueeTicker />

          {/* Welcome Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 p-6 sm:p-8 text-white shadow-2xl shadow-primary-600/20 animate-[fadeSlideUp_0.5s_ease-out]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-white/5 translate-y-10" />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-indigo-400/10 animate-float-slow" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold uppercase shadow-lg border border-white/10">
                  {userName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold">{userName}</h2>
                    <svg className="w-5 h-5 text-blue-300 drop-shadow" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-white/60 text-sm mt-0.5">Welcome back! 👋</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10 shadow-inner">
                <div className="flex items-center gap-2 mb-1.5">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Available Balance</p>
                  <button onClick={() => setBalanceVisible(!balanceVisible)} className="text-white/40 hover:text-white/80 transition-colors">
                    {balanceVisible ? <Eye size={13} /> : <EyeOff size={13} />}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight">{balanceVisible ? 'NGN 0.00' : '••••••'}</p>
                  <button onClick={() => navigate('/dashboard/funds')} className="text-xs bg-white text-primary-700 font-bold px-4 py-2 rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                    + Add Money
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 animate-[fadeSlideUp_0.5s_ease-out_0.1s_both]">
            {[
              { icon: Phone, label: 'US Numbers', color: 'from-blue-500 to-blue-600' },
              { icon: Globe, label: 'Other Countries', color: 'from-emerald-500 to-teal-600' },
              { icon: Heart, label: 'Boost Followers', color: 'from-pink-500 to-rose-600', badge: 'Coming Soon' },
            ].map((action, i) => (
              <button key={i} className="relative flex flex-col items-center gap-2.5 p-4 sm:p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group overflow-hidden">
                {action.badge && (
                  <span className="absolute top-2 right-2 text-[8px] font-bold bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full shadow-sm">{action.badge}</span>
                )}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <action.icon size={22} className="text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">{action.label}</span>
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              </button>
            ))}
          </div>

          {/* Popular Logs */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/40 shadow-sm animate-[fadeSlideUp_0.5s_ease-out_0.2s_both]">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm">⭐</div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">POPULAR LOGS 🔥</h3>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-[11px] text-white/70 font-medium uppercase tracking-wider">
                  <span>In stock</span>
                  <span>Price per unit</span>
                  <span>Sales</span>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700/30 bg-white dark:bg-gray-800/60">
              {(popularExpanded ? popularLogs : popularLogs.slice(0, 5)).map((item, i) => (
                <ProductRow key={i} {...item} delay={i} />
              ))}
            </div>
            {popularLogs.length > 5 && (
              <button
                onClick={() => setPopularExpanded(!popularExpanded)}
                className="w-full py-3 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all flex items-center justify-center gap-1.5 border-t border-gray-100 dark:border-gray-700/30 bg-white dark:bg-gray-800/60"
              >
                {popularExpanded ? (
                  <>Show less <ChevronUp size={14} /></>
                ) : (
                  <>See More <ChevronRight size={14} /></>
                )}
              </button>
            )}
          </div>

          {/* Category Sections */}
          <div className="space-y-8">
            {categories.map((cat) => (
              <CategorySection key={cat.title} title={cat.title} items={cat.items} platform={cat.platform} />
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 rounded-3xl p-5 sm:p-6 shadow-sm animate-[fadeSlideUp_0.5s_ease-out_0.3s_both]">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shadow-md">
                <TrendingUp size={15} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">📊 Recent Activity</h3>
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4 ml-10">Latest orders and deposits</p>
            <div className="space-y-1">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${a.type === 'deposit' ? 'bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30' : 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30'}`}>
                      {a.type === 'deposit'
                        ? <ArrowDownRight size={15} className="text-emerald-600 dark:text-emerald-400" />
                        : <ShoppingCart size={15} className="text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                        <span className="text-gray-400 dark:text-gray-500">{a.user}</span>{' '}
                        {a.action}{' '}
                        {a.platform && <span className="font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent capitalize">{a.platform}</span>}
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

      <div className="h-4" />
    </div>
  )
}
