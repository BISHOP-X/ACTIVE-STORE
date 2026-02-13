/**
 * Active Store Logo — uses the real transparent PNG logo
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
    sm: { h: 'h-7 sm:h-8' },
    default: { h: 'h-8 sm:h-10' },
    lg: { h: 'h-10 sm:h-12' },
    xl: { h: 'h-14 sm:h-16' },
  }

  const s = sizes[size]

  if (variant === 'icon') {
    return (
      <span className={className}>
        <img
          src="/ACTIVE_STORE_LOGO-removebg-preview.png"
          alt="Active Store"
          className={`${s.h} w-auto object-contain`}
        />
      </span>
    )
  }

  // 'full' and 'text' both just show the logo image since it contains both icon + text
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/ACTIVE_STORE_LOGO-removebg-preview.png"
        alt="Active Store"
        className={`${s.h} w-auto object-contain`}
      />
    </span>
  )
}
