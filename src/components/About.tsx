import {
  Facebook,
  Instagram,
  Twitter,
  Smartphone,
  Globe,
  Rocket,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Award,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { icon: Facebook, label: 'Facebook & Meta Accounts', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
  { icon: Instagram, label: 'Instagram Profiles', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' },
  { icon: Twitter, label: 'Twitter / X Accounts', color: 'bg-sky-100 dark:bg-sky-900/30 text-sky-500 dark:text-sky-400' },
  { icon: Rocket, label: 'Follower Boosting', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
  { icon: Globe, label: 'Web & App Development', color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400' },
  { icon: Smartphone, label: 'Foreign Numbers', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
]

const whyUs = [
  { icon: ShieldCheck, label: '100% Authentic Accounts', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
  { icon: HeartHandshake, label: '24/7 Customer Support', color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' },
  { icon: Award, label: 'Secure Transactions', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
  { icon: Clock, label: 'Instant Delivery', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' },
]

export default function About() {
  const { ref: headingRef, isVisible: headingVis } = useScrollReveal()
  const { ref: leftRef, isVisible: leftVis } = useScrollReveal()
  const { ref: rightRef, isVisible: rightVis } = useScrollReveal()

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div ref={headingRef} className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal ${headingVis ? 'visible' : ''}`}>
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wider uppercase">
            Who we are &bull; About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Your trusted partner for authentic digital accounts and services
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — about card with image */}
          <div ref={leftRef} className={`relative reveal-left ${leftVis ? 'visible' : ''}`}>
            {/* Image above card on mobile, beside on desktop */}
            <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=700&h=400&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-indigo-700 p-6 sm:p-8 md:p-10 text-white overflow-hidden relative">
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

              <h3 className="text-xl sm:text-2xl font-bold mb-4 relative z-10">About Active Store</h3>

              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-5 sm:mb-6 relative z-10">
                <span className="text-xl sm:text-2xl font-bold">5+</span>
                <span className="text-sm opacity-90">Years Experience</span>
              </div>

              <p className="text-white/85 leading-relaxed text-sm sm:text-base relative z-10">
                At Activestore, we specialize in providing a diverse array of accounts suited for multiple
                purposes, including marketing, brand promotion, newsletters, and more. We pride ourselves on
                delivering quality, security, and exceptional customer service.
              </p>
            </div>
          </div>

          {/* Right — services + why us */}
          <div ref={rightRef} className={`space-y-8 sm:space-y-10 reveal-right ${rightVis ? 'visible' : ''}`}>
            {/* Services grid */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {services.map((s, i) => (
                  <div
                    key={s.label}
                    style={{ '--i': i } as React.CSSProperties}
                    className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md transition-all group card-3d"
                  >
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${s.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                      <s.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {whyUs.map((w) => (
                  <div
                    key={w.label}
                    className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 border border-primary-100 dark:border-primary-500/20 hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${w.color} flex items-center justify-center shrink-0`}>
                      <w.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{w.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20 hover:-translate-y-0.5 btn-glow"
            >
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
