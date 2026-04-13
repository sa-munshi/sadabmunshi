import Link from 'next/link';
import { Code, MessageCircle, Camera, Briefcase } from 'lucide-react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/sa-munshi', Icon: Code },
  { label: 'Twitter', href: 'https://twitter.com/SadabMunshi', Icon: MessageCircle },
  { label: 'Instagram', href: 'https://instagram.com/heysadab', Icon: Camera },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sadab-munshi', Icon: Briefcase },
];

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t-2 border-muted">
      <p className="font-body text-muted">
        © 2025 Sadab Munshi. Built with curiosity.
      </p>

      <div className="flex items-center gap-3">
        {socials.map(({ label, href, Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="border-2 border-pencil shadow-hard p-2 text-pencil hover:bg-muted transition-colors duration-150"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            }}
          >
            <Icon size={20} strokeWidth={2.5} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
