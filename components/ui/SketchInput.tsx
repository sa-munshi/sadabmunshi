'use client';

interface SketchInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

export default function SketchInput({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
}: SketchInputProps) {
  const sharedClasses = [
    'w-full font-body text-lg text-pencil bg-white',
    'border-2 border-pencil px-4 py-3',
    'focus:border-ink focus:outline-none focus:ring-[3px] focus:ring-ink/20',
    'transition-colors duration-150',
  ].join(' ');

  const inlineStyle = {
    borderRadius: '120px 8px 110px 8px / 8px 110px 8px 120px',
  };

  return (
    <div>
      <label htmlFor={name} className="block font-body text-pencil text-lg mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          className={sharedClasses}
          style={inlineStyle}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={sharedClasses}
          style={inlineStyle}
        />
      )}
    </div>
  );
}
