import Link from 'next/link';
import SketchCard from '@/components/ui/SketchCard';

export default function WatchingPage() {
  return (
    <div className="py-12">
      <h1 className="font-heading text-5xl font-bold text-pencil mb-2">Watching</h1>
      <p className="font-body text-xl text-pencil/70 mb-8">Movies and shows.</p>

      <p className="font-body text-lg text-pencil max-w-2xl leading-relaxed mb-8">
        I don&apos;t watch a lot, but when I do, I prefer things that make me think or feel
        something. No particular genre — just good storytelling.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <SketchCard rotate="rotate-1">
          <h2 className="font-heading text-xl mb-3">Recently Watched</h2>
          <ul className="font-body text-lg space-y-2">
            <li>
              The Social Network (2010){' '}
              <span className="text-muted italic">
                — A classic. Makes you want to build something.
              </span>
            </li>
          </ul>
        </SketchCard>

        <SketchCard rotate="-rotate-1">
          <h2 className="font-heading text-xl mb-3">Currently Watching</h2>
          <ul className="font-body text-lg space-y-2">
            <li>
              Severance (2022–){' '}
              <span className="text-muted italic">
                — Work-life balance taken to the extreme.
              </span>
            </li>
          </ul>
        </SketchCard>

        <SketchCard variant="postit" rotate="rotate-1">
          <h2 className="font-heading text-xl mb-3">Want to Watch</h2>
          <ul className="font-body text-lg space-y-2">
            <li>
              Dune: Part Two (2024){' '}
              <span className="text-muted italic">— Heard it is incredible.</span>
            </li>
            <li>
              The Bear (2022–){' '}
              <span className="text-muted italic">— Everyone keeps recommending this.</span>
            </li>
          </ul>
        </SketchCard>

        <SketchCard decoration="tack" rotate="-rotate-1">
          <h2 className="font-heading text-xl mb-3">All-Time Favorites</h2>
          <ul className="font-body text-lg space-y-2">
            <li>
              Good Will Hunting (1997){' '}
              <span className="text-muted italic">— It&apos;s not your fault.</span>
            </li>
            <li>
              The Prestige (2006){' '}
              <span className="text-muted italic">— Nolan at his best.</span>
            </li>
            <li>
              Whiplash (2014){' '}
              <span className="text-muted italic">— Obsession and excellence.</span>
            </li>
          </ul>
        </SketchCard>
      </div>

      <div className="mt-8">
        <Link
          href="/contact"
          className="font-body text-ink hover:underline"
          style={{ textDecorationStyle: 'wavy' }}
        >
          Have a recommendation? Let me know →
        </Link>
      </div>
    </div>
  );
}
