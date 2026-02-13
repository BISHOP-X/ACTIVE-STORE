import { Search, MessageCircle, CreditCard, PartyPopper, Shield, Zap, Headphones, BadgeCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Explore',
    description: 'Dive into our store and discover a world of unique products tailored to your needs.',
    icon: Search,
    tag: 'Quick & Easy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
  },
  {
    num: '02',
    title: 'Connect',
    description: 'Communicate directly with sellers to ask questions or discuss customization options.',
    icon: MessageCircle,
    tag: 'Quick & Easy',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=80',
  },
  {
    num: '03',
    title: 'Secure Checkout',
    description: 'Proceed to our secure checkout process with protected payment and purchase protection.',
    icon: CreditCard,
    tag: 'Quick & Easy',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&q=80',
  },
  {
    num: '04',
    title: 'Enjoy',
    description: 'Sit back and relax as your chosen item makes its way to you with instant delivery.',
    icon: PartyPopper,
    tag: 'Quick & Easy',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&q=80',
  },
]

const bottomFeatures = [
  { icon: Shield, title: 'Secure', label: '100% Protected' },
  { icon: Zap, title: 'Fast', label: 'Instant Delivery' },
  { icon: Headphones, title: 'Support', label: '24/7 Available' },
  { icon: BadgeCheck, title: 'Quality', label: 'Verified Accounts' },
]

export default function HowItWorks() {
  const { ref: headingRef, isVisible: headingVis } = useScrollReveal()
  const { ref: stepsRef, isVisible: stepsVis } = useScrollReveal(0.05)
  const { ref: featuresRef, isVisible: featuresVis } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div ref={headingRef} className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal ${headingVis ? 'visible' : ''}`}>
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wider uppercase">
            Simple Process &bull; How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Get started with Active Store in four simple steps
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 reveal-scale ${stepsVis ? 'visible' : ''}`}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="relative bg-white dark:bg-gray-800/80 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl dark:shadow-primary-900/5 transition-all duration-300 group card-3d overflow-hidden"
            >
              {/* Step image */}
              <div className="relative h-24 sm:h-32 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Step number */}
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-3xl sm:text-4xl font-extrabold text-white/30 select-none">
                  {step.num}
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors -mt-8 sm:-mt-10 relative z-10 shadow-lg border-2 border-white dark:border-gray-800">
                  <step.icon size={20} className="text-primary-600 dark:text-primary-400 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">{step.description}</p>

                <span className="inline-block text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 sm:px-3 py-1 rounded-full">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom features bar */}
        <div ref={featuresRef} className={`mt-10 sm:mt-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-700 p-4 sm:p-6 md:p-8 relative overflow-hidden reveal-scale ${featuresVis ? 'visible' : ''}`}>
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {bottomFeatures.map((f, i) => (
              <div 
                key={f.title} 
                style={{ transitionDelay: `${i * 80}ms` }}
                className="flex items-center gap-2 sm:gap-3 text-white group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                  <f.icon size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm">{f.title}</p>
                  <p className="text-white/70 text-[10px] sm:text-xs">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
