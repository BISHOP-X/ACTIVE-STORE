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
    sm: { h: 'h-24 sm:h-28' },
    default: { h: 'h-28 sm:h-32' },
    lg: { h: 'h-32 sm:h-36' },
    xl: { h: 'h-36 sm:h-40' },
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
