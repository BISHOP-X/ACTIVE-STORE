import { Send, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Logo from './Logo'

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
]

const serviceLinks = [
  { label: 'Facebook Accounts', href: '#features' },
  { label: 'Instagram Accounts', href: '#features' },
  { label: 'Twitter Accounts', href: '#features' },
  { label: 'TikTok Accounts', href: '#features' },
]

export default function Footer() {
  const { ref: footerRef, isVisible: footerVis } = useScrollReveal(0.1)

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={footerRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative reveal ${footerVis ? 'visible' : ''}`}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo size="default" className="[&_img]:brightness-0 [&_img]:invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted marketplace for authentic social media accounts and digital services. Quality,
              security, and customer satisfaction guaranteed.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-gray-300">Company</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-gray-300">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-gray-300">Support</h4>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#229ED9] hover:bg-[#1a8ac2] text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#229ED9]/25 hover:-translate-y-0.5"
            >
              <Send size={16} />
              Telegram
            </a>
            <p className="text-gray-500 text-xs mt-3">24/7 Customer Support</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
            &copy; 2026 Active Store. Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> All Rights Reserved
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
