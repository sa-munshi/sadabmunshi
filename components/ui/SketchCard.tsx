interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'postit';
  decoration?: 'none' | 'tape' | 'tack';
  rotate?: string;
}

export default function SketchCard({
  children,
  className = '',
  variant = 'default',
  decoration = 'none',
  rotate,
}: SketchCardProps) {
  const baseClasses = [
    'relative p-6 border-2 border-pencil shadow-hard',
    'transition-all duration-100 ease-in-out',
    'hover:rotate-1 hover:shadow-hardLg',
    variant === 'postit' ? 'bg-postit' : 'bg-white',
    rotate ?? '',
    className,
  ].join(' ');

  return (
    <div
      className={baseClasses}
      style={{ borderRadius: '15px 225px 15px 255px / 225px 15px 255px 15px' }}
    >
      {decoration === 'tape' && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-20 bg-gray-300/50 rotate-2"
          aria-hidden="true"
        />
      )}
      {decoration === 'tack' && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sketch"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
