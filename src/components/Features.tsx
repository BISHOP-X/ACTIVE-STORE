import { ArrowRight, Facebook, Instagram, Twitter, Music, Phone, TrendingUp, Shield, Wallet } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: Facebook,
    title: 'Facebook Accounts',
    description: 'Authentic Facebook accounts for marketing and business growth',
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=300&fit=crop&q=80',
  },
  {
    icon: Instagram,
    title: 'Instagram Accounts',
    description: 'Verified Instagram profiles for influencers and brands',
    color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop&q=80',
  },
  {
    icon: Twitter,
    title: 'Twitter Accounts',
    description: 'Established Twitter accounts with real engagement',
    color: 'bg-sky-50 dark:bg-sky-900/20 text-sky-500 dark:text-sky-400',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop&q=80',
  },
  {
    icon: Music,
    title: 'TikTok Accounts',
    description: 'Trending TikTok accounts ready for content creation',
    color: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
    image: '/TIKTOK.jpg',
  },
  {
    icon: Phone,
    title: 'Foreign Numbers',
    description: 'International phone numbers for verification and business',
    color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    image: '/FOREIGN NUMBERS.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Follower Boosting',
    description: 'Organic growth strategies to increase your followers',
    color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400',
    image: '/BOOST.jpg',
  },
  {
    icon: Shield,
    title: 'VPN & Work Tools',
    description: 'Secure VPN services and professional work tools',
    color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    image: '/VPN TOOLS.jpg',
  },
  {
    icon: Wallet,
    title: 'Airtime & Bills',
    description: 'Convenient airtime top-up and bill payment services',
    color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
    image: '/AIRTIME AND BILLS.jpg',
  },
]

export default function Features() {
  const { ref: headingRef, isVisible: headingVis } = useScrollReveal()
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal(0.05)
  const { ref: ctaRef, isVisible: ctaVis } = useScrollReveal()

  return (
    <section id="features" className="py-16 sm:py-20 md:py-28 bg-gray-50/70 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div ref={headingRef} className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal ${headingVis ? 'visible' : ''}`}>
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wider uppercase">
            What we offer &bull; Our Key Features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Comprehensive solutions for all your digital account needs
          </h2>
        </div>

        {/* Features grid */}
        <div ref={gridRef} className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 reveal-scale ${gridVis ? 'visible' : ''}`}>
          {features.map((f, i) => {
            const iconColorBg = f.color.split(' ').slice(0, 2).join(' ')
            const iconColorText = f.color.split(' ').slice(2).join(' ')
            return (
              <div
                key={f.title}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group bg-white dark:bg-gray-900/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-500/30 shadow-sm hover:shadow-xl dark:shadow-primary-900/5 transition-all duration-300 flex flex-col card-3d gradient-border"
              >
                {/* Feature image */}
                <div className="relative h-24 sm:h-32 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 rounded-t-xl sm:rounded-t-2xl overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${iconColorBg} flex items-center justify-center shadow-lg`}>
                    <f.icon size={18} className={iconColorText} />
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 line-clamp-1">{f.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-2">{f.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 sm:gap-1.5 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-semibold mt-3 sm:mt-4 group-hover:gap-2 sm:group-hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div ref={ctaRef} className={`mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-700 p-6 sm:p-8 md:p-12 text-center text-white relative overflow-hidden reveal-scale ${ctaVis ? 'visible' : ''}`}>
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 particle-1" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/5 particle-2" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer pointer-events-none" />

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold relative z-10">Ready to get started?</h3>
          <p className="text-white/80 mt-2 mb-5 sm:mb-6 text-sm sm:text-base relative z-10">
            Join thousands of satisfied customers who trust Active Store
          </p>
          <a
            href="#"
            className="relative z-10 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-white text-primary-600 font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started Now
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
