import SketchCard from '@/components/ui/SketchCard'
import SketchButton from '@/components/ui/SketchButton'

const posts = [
  'spend-less-time-counting',
  'what-i-think-about-ai',
  'why-i-started-building-things',
  'slow-growth',
  'debugging-my-brain',
  'the-art-of-finishing',
  'notes-on-simplicity',
  'learning-in-public',
]

export function generateStaticParams() {
  return posts.map((slug) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  void (await params)

  return (
    <div className="py-12 max-w-2xl mx-auto text-center">
      <SketchCard className="py-12">
        <h1 className="font-heading text-4xl font-bold text-pencil mb-4">
          Coming Soon
        </h1>
        <p className="font-body text-xl text-pencil/70 mb-6">
          This post is being written. Check back later.
        </p>
        <SketchButton href="/blog">← Back to Blog</SketchButton>
      </SketchCard>
    </div>
  )
}
