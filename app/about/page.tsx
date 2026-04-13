import Link from 'next/link'
import SketchCard from '@/components/ui/SketchCard'
import SketchButton from '@/components/ui/SketchButton'

export default function AboutPage() {
  return (
    <div className="py-12">
      <h1 className="font-heading text-5xl font-bold text-pencil mb-8">About</h1>

      <div className="font-body text-xl text-pencil leading-relaxed max-w-2xl space-y-4">
        <p>Hello, I am Sadab.</p>
        <p>
          I am a student who likes building things on the internet. I spend most
          of my time learning how stuff works, breaking things, and figuring out
          how to fix them.
        </p>
        <p>
          I don&apos;t have it all figured out. I just build small things, write
          about what I learn, and share it here. If you want to know what
          I&apos;m up to right now, check the{' '}
          <Link
            href="/now"
            className="text-ink hover:underline"
            style={{ textDecorationStyle: 'wavy' }}
          >
            now page
          </Link>
          .
        </p>
      </div>

      <SketchCard decoration="tack" className="mt-12 max-w-xl rotate-1">
        <h2 className="font-heading text-2xl mb-2">About this site</h2>
        <p className="font-body text-lg">
          This site is built to be fast and simple. No clutter. Just a clean
          space where I share what I&apos;m working on.
        </p>
      </SketchCard>

      <SketchCard variant="postit" className="mt-8 max-w-xl -rotate-1">
        <h2 className="font-heading text-2xl mb-3">My Digital Co-Pilots</h2>
        <ul className="font-body text-lg space-y-2">
          <li>
            Kimi by Moonshot AI — Day-to-day code, building features, fixing
            errors.
          </li>
          <li>
            Claude by Anthropic — Deep debugging, untangling messy code, complex
            bugs.
          </li>
        </ul>
      </SketchCard>

      <div className="mt-8">
        <SketchButton
          variant="secondary"
          href="/resume/Sadab-Munshi-Resume.pdf"
          download={true}
        >
          ↓ Download Resume
        </SketchButton>
      </div>
    </div>
  )
}
