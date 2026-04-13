import SketchCard from '@/components/ui/SketchCard'
import SketchButton from '@/components/ui/SketchButton'

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h1 className="font-heading text-5xl font-bold text-pencil mb-8">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <SketchCard decoration="tack" rotate="rotate-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-heading text-2xl font-bold">FinFlow</h2>
            <span className="flex items-center gap-1 text-sm font-body">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
          </div>
          <p className="font-body text-lg mb-3">
            Personal finance tracker with automated categorization, AI receipt
            parsing, and spending forecasts.
          </p>
          <p className="font-body text-sm text-muted mb-4">
            Next.js · TypeScript · Supabase · Node.js
          </p>
          <SketchButton
            href="https://app.sadabmunshi.online"
            ariaLabel="Visit FinFlow app"
          >
            Live ↗
          </SketchButton>
        </SketchCard>

        <SketchCard rotate="-rotate-1" className="opacity-60">
          <h2 className="font-heading text-2xl font-bold mb-2">
            Next Project
          </h2>
          <p className="font-body text-sm text-muted mb-2">In Progress</p>
          <p className="font-body text-lg">
            Currently building. Details soon.
          </p>
        </SketchCard>
      </div>
    </div>
  )
}
