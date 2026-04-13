import Link from 'next/link'
import SketchCard from '@/components/ui/SketchCard'

const posts = [
  {
    title: 'Spend Less Time Counting, More Time Living',
    slug: 'spend-less-time-counting',
    excerpt:
      'Why I built a personal finance app that uses AI to handle the boring parts of tracking money.',
    date: '2026-03-22',
    readingTime: '4 min read',
  },
  {
    title: 'What I Think About AI',
    slug: 'what-i-think-about-ai',
    excerpt:
      'Artificial intelligence explained humanistically. A simple, honest take on what AI actually is.',
    date: '2026-02-23',
    readingTime: '3 min read',
  },
  {
    title: 'Why I Started Making Things',
    slug: 'why-i-started-building-things',
    excerpt: 'On curiosity, starting small, and creating for yourself.',
    date: '2025-12-15',
    readingTime: '4 min read',
  },
  {
    title: 'Slow Growth',
    slug: 'slow-growth',
    excerpt:
      'Embracing the long, unglamorous path of gradual improvement.',
    date: '2025-11-08',
    readingTime: '5 min read',
  },
  {
    title: 'Debugging My Brain',
    slug: 'debugging-my-brain',
    excerpt: 'What coding taught me about my own thought patterns.',
    date: '2025-08-03',
    readingTime: '6 min read',
  },
  {
    title: 'The Art of Finishing',
    slug: 'the-art-of-finishing',
    excerpt: 'Why starting is easy and finishing is everything.',
    date: '2025-06-14',
    readingTime: '5 min read',
  },
  {
    title: 'Notes on Simplicity',
    slug: 'notes-on-simplicity',
    excerpt:
      'Less is usually better. Some thoughts on keeping things simple.',
    date: '2025-05-20',
    readingTime: '3 min read',
  },
  {
    title: 'Learning in Public',
    slug: 'learning-in-public',
    excerpt:
      'The fear, the vulnerability, and the unexpected benefits of sharing while you learn.',
    date: '2025-03-28',
    readingTime: '4 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="py-12">
      <h1 className="font-heading text-5xl font-bold text-pencil">
        Blog — 8 posts
      </h1>
      <p className="font-body text-xl text-pencil/70 mt-2 max-w-xl">
        Short essays on things I&apos;m thinking about. No fixed schedule — I
        write when I have something worth saying.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {posts.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <SketchCard rotate={index % 2 === 0 ? 'rotate-1' : '-rotate-1'}>
              <h2 className="font-heading text-xl">{post.title}</h2>
              <p className="text-sm text-muted uppercase tracking-wider mt-1">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="font-body text-lg mt-2">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="text-muted">{post.readingTime}</span>
                <span className="text-ink font-body">Read →</span>
              </div>
            </SketchCard>
          </Link>
        ))}
      </div>
    </div>
  )
}
