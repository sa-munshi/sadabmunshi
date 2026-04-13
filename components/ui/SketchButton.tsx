'use client';

import Link from 'next/link';

interface SketchButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  download?: boolean;
}

export default function SketchButton({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
  download,
}: SketchButtonProps) {
  const baseClasses = [
    'inline-block font-body text-lg text-pencil border-[3px] border-pencil',
    'px-6 py-3',
    'transition-all duration-150 ease-in-out',
    'hover:text-white hover:shadow-hardSm hover:translate-x-[2px] hover:translate-y-[2px]',
    'active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    variant === 'primary'
      ? 'bg-white shadow-hard hover:bg-sketch'
      : 'bg-muted shadow-hard hover:bg-ink',
    className,
  ].join(' ');

  const inlineStyle = {
    borderRadius: '120px 8px 110px 8px / 8px 110px 8px 120px',
  };

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        style={inlineStyle}
        aria-label={ariaLabel}
        download={download || undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      style={inlineStyle}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
