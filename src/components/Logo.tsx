/**
 * Active Store SVG Logo — matches the brand: blue 3D "A" + ACTIVE STORE text
 */
export default function Logo({
  className = '',
  size = 'default',
  variant = 'full',
}: {
  className?: string
  size?: 'sm' | 'default' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
}) {
  const sizes = {
    sm: { icon: 28, text: 'text-base' },
    default: { icon: 36, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
    xl: { icon: 64, text: 'text-3xl' },
  }

  const s = sizes[size]

  const AIcon = (
    <svg
      width={s.icon}
      height={s.icon}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* 3D blue "A" letter matching the brand */}
      <defs>
        <linearGradient id="aGrad1" x1="20" y1="0" x2="60" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="aGrad2" x1="60" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="aGrad3" x1="30" y1="50" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      {/* Left face of A */}
      <path d="M60 8L15 105H45L60 65L60 8Z" fill="url(#aGrad1)" />
      {/* Right face of A (darker for 3D effect) */}
      <path d="M60 8L105 105H75L60 65L60 8Z" fill="url(#aGrad2)" />
      {/* Crossbar of A */}
      <path d="M35 78L50 55H70L85 78H35Z" fill="url(#aGrad3)" opacity="0.9" />
      {/* Highlight on left edge for 3D pop */}
      <path d="M60 8L15 105H22L60 18L60 8Z" fill="white" opacity="0.25" />
    </svg>
  )

  if (variant === 'icon') {
    return <span className={className}>{AIcon}</span>
  }

  if (variant === 'text') {
    return (
      <span className={`font-extrabold tracking-tight ${s.text} ${className}`}>
        <span className="text-gray-900 dark:text-white">ACTIVE</span>
        <span className="text-primary-600 dark:text-primary-400">STORE</span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-1.5 sm:gap-2 ${className}`}>
      {AIcon}
      <span className={`font-extrabold tracking-tight ${s.text}`}>
        <span className="text-gray-900 dark:text-white">ACTIVE</span>
        <span className="text-primary-600 dark:text-primary-400">STORE</span>
      </span>
    </span>
  )
}
