import { ArrowRight, BadgeCheck, Zap, Users, ShoppingBag, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCountUp } from '../hooks/useCountUp'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AnimatedStat({
  icon: Icon,
  end,
  suffix,
  label,
  delay,
}: {
  icon: React.ElementType
  end: number
  suffix: string
  label: string
  delay: number
}) {
  const { ref, display } = useCountUp({ end, suffix, duration: 2200 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal visible flex flex-col items-center p-5 sm:p-6 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg dark:shadow-primary-900/10 transition-all card-3d"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-3 sm:mb-4">
        <Icon size={26} className="text-primary-600 dark:text-primary-400" />
      </div>
      <span className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">{display}</span>
      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">{label}</span>
    </div>
  )
}

export default function Hero() {
  const { ref: heroRef, isVisible } = useScrollReveal(0.1)

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle-1 absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary-200/20 dark:bg-primary-500/5 blur-3xl" />
        <div className="particle-2 absolute bottom-10 right-[5%] w-80 h-80 rounded-full bg-violet-200/20 dark:bg-violet-500/5 blur-3xl" />
        <div className="particle-1 absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-cyan-200/15 dark:bg-cyan-500/5 blur-2xl" />
      </div>

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-5 sm:space-y-6 md:space-y-8 reveal-left ${isVisible ? 'visible' : ''}`}>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Welcome to ActiveStore</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-3">
                Discover unique social accounts in active store
              </h2>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Boost your online presence by browsing, authenticating, and obtaining genuine accounts on active store.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5 btn-glow"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <a
                href="#about"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 text-gray-700 dark:text-gray-300 font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right — hero visual with real image */}
          <div className={`relative reveal-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary-600/20 dark:shadow-primary-500/10">
              {/* Hero image */}
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&q=80"
                alt="Social media on phone"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/40 to-transparent" />

              {/* Content overlay - pushed to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-white text-sm sm:text-lg md:text-xl font-bold leading-snug drop-shadow-lg">
                  We sell strong social media accounts<br className="hidden sm:block" />
                  including boosting and more
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="text-white/90 font-semibold text-xs sm:text-sm drop-shadow">ActiveStore</span>
                </div>
              </div>
            </div>

            {/* Floating badges - positioned OUTSIDE image on mobile for no clash */}
            <div className="flex flex-wrap gap-2 mt-3 sm:hidden">
              <div className="glass rounded-full px-3 py-1.5 shadow-md flex items-center gap-2">
                <BadgeCheck size={14} className="text-primary-600 dark:text-primary-400" />
                <span className="text-xs font-semibold text-gray-800 dark:text-white">100% Verified</span>
              </div>
              <div className="glass rounded-full px-3 py-1.5 shadow-md flex items-center gap-2">
                <Zap size={14} className="text-primary-600 dark:text-primary-400" />
                <span className="text-xs font-semibold text-gray-800 dark:text-white">Instant Delivery</span>
              </div>
            </div>

            {/* Floating badges - INSIDE image on desktop only */}
            <div className="hidden sm:block absolute top-4 right-4 sm:top-6 sm:right-6 animate-float-slow glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg z-10">
              <div className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-primary-600 dark:text-primary-400" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">100% Verified</span>
              </div>
            </div>

            <div className="hidden sm:block absolute top-4 left-4 sm:top-6 sm:left-6 animate-float-delayed glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg z-10">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary-600 dark:text-primary-400" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">Instant Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row — animated counters */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 md:mt-16">
          <AnimatedStat icon={Users} end={30} suffix="K+" label="Active Users" delay={0} />
          <AnimatedStat icon={ShoppingBag} end={250} suffix="K+" label="Accounts Sold" delay={150} />
          <AnimatedStat icon={ThumbsUp} end={99} suffix="%" label="Satisfaction" delay={300} />
        </div>
      </div>
    </section>
  )
}
