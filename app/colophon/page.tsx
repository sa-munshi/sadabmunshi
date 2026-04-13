import SketchCard from '@/components/ui/SketchCard';

export default function ColophonPage() {
  return (
    <div className="py-12">
      <h1 className="font-heading text-5xl font-bold text-pencil mb-2">Colophon</h1>
      <p className="font-body text-xl text-pencil/70 mb-8">How this site was made.</p>

      <p className="font-body text-lg text-pencil max-w-2xl leading-relaxed mb-8">
        This site is intentionally simple. No heavy frameworks, minimal build process, no
        unnecessary complexity.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <SketchCard rotate="rotate-1">
          <h2 className="font-heading text-xl mb-3">Typography</h2>
          <ul className="font-body text-lg space-y-2">
            <li>
              Headings: Kalam{' '}
              <span className="text-muted">— A handwritten font. Felt-tip marker energy.</span>
            </li>
            <li>
              Body: Patrick Hand{' '}
              <span className="text-muted">— Legible but distinctly human.</span>
            </li>
          </ul>
        </SketchCard>

        <SketchCard rotate="-rotate-1">
          <h2 className="font-heading text-xl mb-3">Technology</h2>
          <ul className="font-body text-lg space-y-2">
            <li>Next.js 14 (App Router) — Static export</li>
            <li>Tailwind CSS — Utility-first styling</li>
            <li>MDX — Blog posts as markdown files</li>
            <li>Cloudflare Pages — Static hosting, zero cost</li>
          </ul>
        </SketchCard>

        <SketchCard variant="postit" rotate="rotate-1">
          <h2 className="font-heading text-xl mb-3">Design</h2>
          <ul className="font-body text-lg space-y-2">
            <li>
              Colors: Warm Paper palette — pencil black, correction marker red, ballpoint blue
            </li>
            <li>
              Style: Hand-drawn sketch system — wobbly borders, hard shadows, paper texture
            </li>
            <li>Fonts: Kalam + Patrick Hand — handwritten personality</li>
          </ul>
        </SketchCard>

        <SketchCard decoration="tack" rotate="-rotate-1">
          <h2 className="font-heading text-xl mb-3">Hosting</h2>
          <ul className="font-body text-lg space-y-2">
            <li>Domain: sadabmunshi.online</li>
            <li>Hosting: Cloudflare Pages (free tier)</li>
            <li>Contact form: Cloudflare Worker + Resend</li>
            <li>Code editor: VS Code + GitHub Copilot</li>
            <li>
              Source:{' '}
              <a
                href="https://github.com/sa-munshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:underline"
              >
                github.com/sa-munshi
              </a>
            </li>
          </ul>
        </SketchCard>
      </div>
    </div>
  );
}
