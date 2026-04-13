'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Now', href: '/now' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
      <Link href="/" className="font-heading text-2xl font-bold text-pencil -rotate-1">
        Sadab Munshi
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="font-body text-lg text-pencil hover:underline"
              style={{ textDecorationStyle: 'wavy' }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-pencil"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-20 left-0 right-0 bg-paper border-b-2 border-pencil shadow-hard z-50 flex flex-col items-center gap-4 py-6 md:hidden">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-body text-lg text-pencil hover:underline"
                style={{ textDecorationStyle: 'wavy' }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
