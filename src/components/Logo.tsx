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
    sm: { h: 'h-32 sm:h-36' },
    default: { h: 'h-36 sm:h-40' },
    lg: { h: 'h-40 sm:h-44' },
    xl: { h: 'h-44 sm:h-48' },
  }

  const s = sizes[size]

  if (variant === 'icon') {
    return (
      <span className={className}>
        <img
          src="/ACTIVE_STORE_LOGO-removebg-preview.png"
          alt="Active Store"
          className={`${s.h} w-auto object-contain dark:brightness-0 dark:invert`}
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
        className={`${s.h} w-auto object-contain dark:brightness-0 dark:invert`}
      />
    </span>
  )
}
