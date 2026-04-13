'use client';

import { useState } from 'react';
import SketchButton from '@/components/ui/SketchButton';
import SketchCard from '@/components/ui/SketchCard';
import SketchInput from '@/components/ui/SketchInput';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const res = await fetch('https://contact.sadabmunshi.online/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-12 max-w-xl mx-auto">
      <h1 className="font-heading text-5xl font-bold text-pencil mb-2">Get in Touch</h1>
      <p className="font-body text-xl text-pencil/70 mb-8">
        Have a question or just want to say hello? I&apos;d love to hear from you.
      </p>

      <div className="space-y-4">
        <SketchInput
          label="Your Name"
          name="name"
          placeholder="John Doe"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SketchInput
          label="Email Address"
          name="email"
          placeholder="john@example.com"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SketchInput
          label="Your Message"
          name="message"
          placeholder="Tell me what's on your mind..."
          type="textarea"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <SketchButton
          onClick={handleSubmit}
          className={status === 'sending' ? 'opacity-50 pointer-events-none' : ''}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message →'}
        </SketchButton>
      </div>

      {status === 'success' && (
        <SketchCard variant="postit" className="mt-6 text-center">
          <p className="font-body text-lg text-pencil">
            Message sent! I&apos;ll get back to you soon.
          </p>
        </SketchCard>
      )}

      {status === 'error' && (
        <SketchCard className="mt-6 text-center bg-red-50 border-sketch">
          <p className="font-body text-lg text-pencil">
            Something went wrong. Please try again or email me directly.
          </p>
        </SketchCard>
      )}

      <div className="mt-8 text-center">
        <p className="font-body text-muted">or</p>
        <a
          href="mailto:contact@sadabmunshi.online"
          className="font-body text-ink text-lg hover:underline"
          style={{ textDecorationStyle: 'wavy' }}
        >
          contact@sadabmunshi.online
        </a>
      </div>
    </div>
  );
}
