'use client'

import Link from 'next/link'
import SketchButton from '@/components/ui/SketchButton'
import SketchCard from '@/components/ui/SketchCard'

const moods = [
  'Today feels like a good day to break something and fix it.',
  'Currently resisting the urge to rebuild everything from scratch.',
  'Some days I code. Some days I stare at the screen. Today is one of those days.',
  'Learning that good enough is better than perfect. Slowly.',
  'Coffee level: critical. Curiosity level: high.',
]

const blogPreviews = [
  {
    title: 'Spend Less Time Counting, More Time Living',
    date: '2026-03-22',
    excerpt:
      'Why I built a personal finance app that uses AI to handle the boring parts of tracking money.',
    slug: 'spend-less-time-counting',
  },
  {
    title: 'What I Think About AI',
    date: '2026-02-23',
    excerpt:
      'Artificial intelligence explained humanistically. A simple, honest take on what AI actually is.',
    slug: 'what-i-think-about-ai',
  },
  {
    title: 'Why I Started Making Things',
    date: '2025-12-15',
    excerpt: 'On curiosity, starting small, and creating for yourself.',
    slug: 'why-i-started-building-things',
  },
]

const rotations = ['rotate-1', '-rotate-2', 'rotate-1']

export default function Home() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const mood = moods[Math.floor(Math.random() * moods.length)]

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <p className="font-body text-muted uppercase tracking-wider text-sm">
          {today}
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-pencil mt-4 leading-tight">
          I learn by
          <br />
          building things
          <span style={{ display: 'inline-block', transform: 'rotate(15deg)' }}>!</span>
        </h1>

        <p className="font-body text-xl text-pencil/70 mt-4">
          Student. Indie developer. Building small tools from a small village.
        </p>

        <div className="flex gap-4 mt-8">
          <SketchButton href="/projects">See my work →</SketchButton>
          <SketchButton variant="secondary" href="/blog">
            Read the blog →
          </SketchButton>
        </div>

        {/* Hand-drawn arrow (desktop only) */}
        <div className="hidden md:block mt-8">
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            className="text-pencil"
            aria-hidden="true"
          >
            <path
              d="M30 5 C20 20, 40 35, 25 55 C20 63, 22 68, 30 75"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 68 L30 77 L35 65"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Decorative bouncing circle (desktop only) */}
        <div
          className="hidden md:block absolute right-4 top-24 w-16 h-16 border-2 border-pencil bg-sketch/20 animate-bounce3d"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          }}
          aria-hidden="true"
        />
      </section>

      {/* Random mood note */}
      <div
        className="my-12 border-2 border-dashed border-muted p-4 font-body italic text-pencil/60"
        style={{
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        }}
      >
        {mood}
      </div>

      {/* Blog preview */}
      <section className="my-16">
        <h2 className="font-heading text-3xl">Recent Writing</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {blogPreviews.map((post, i) => (
            <SketchCard
              key={post.slug}
              decoration="tape"
              rotate={rotations[i]}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h3 className="font-heading text-xl">{post.title}</h3>
                <time className="text-sm text-muted uppercase">{post.date}</time>
                <p className="font-body mt-2">{post.excerpt}</p>
              </Link>
            </SketchCard>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-block font-body text-ink hover:underline mt-4"
          style={{ textDecorationStyle: 'wavy' }}
        >
          View all posts →
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="my-16">
        <SketchCard variant="postit" className="text-center py-8">
          <p className="font-heading text-2xl">
            Got something interesting? Say hello.
          </p>
          <SketchButton href="/contact" className="mt-4">
            Write to me →
          </SketchButton>
        </SketchCard>
      </section>
    </>
  )
}
