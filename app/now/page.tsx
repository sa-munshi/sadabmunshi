import SketchCard from '@/components/ui/SketchCard';

export default function NowPage() {
  return (
    <div className="py-12">
      <h1 className="font-heading text-5xl font-bold text-pencil mb-2">Now</h1>
      <p className="font-body text-xl text-pencil/70">What I&apos;m doing right now</p>
      <p className="font-body text-sm text-muted mt-1 mb-8">
        Based in my corner of the world (West Bengal, India)
      </p>

      <p className="font-body text-lg text-pencil max-w-2xl leading-relaxed mb-8">
        This is a /now page. It&apos;s a snapshot of what I&apos;m focused on at this point in my
        life. No endless feeds, just what matters now.
      </p>

      <SketchCard decoration="tack" rotate="rotate-1" className="max-w-xl mb-8">
        <h2 className="font-heading text-2xl mb-3">Currently</h2>
        <ul className="font-body text-lg space-y-2 list-disc list-inside">
          <li>Working on FinFlow — a personal finance tracker</li>
          <li>Learning more about how systems work (finance, technology, life)</li>
          <li>Writing about ideas, simplicity, and the process of building</li>
          <li>Trying to read more and scroll less</li>
        </ul>
      </SketchCard>

      <SketchCard className="max-w-xl bg-muted/30 mb-8" rotate="-rotate-1">
        <h2 className="font-heading text-2xl mb-3">Not Doing</h2>
        <ul className="font-body text-lg space-y-2 list-disc list-inside">
          <li>Chasing every new trend</li>
          <li>Building things I wouldn&apos;t use myself</li>
          <li>Trying to optimize everything</li>
        </ul>
      </SketchCard>

      <p className="font-body text-sm text-muted italic">Last updated: April 2026</p>
    </div>
  );
}
