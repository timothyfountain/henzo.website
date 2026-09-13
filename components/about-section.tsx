import { Shield, Swords, Sparkles } from 'lucide-react'

const PILLARS = [
  {
    icon: Shield,
    title: 'Discipline',
    description:
      'A structured chain of command keeps every operation sharp, fair, and organized.',
  },
  {
    icon: Swords,
    title: 'Immersion',
    description:
      'Detailed lore and active roleplay scenarios make every session feel alive.',
  },
  {
    icon: Sparkles,
    title: 'Community',
    description:
      'A welcoming, active member base where friendships and rivalries are forged.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8700]">
              About Henzo
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              More than a group. A living world.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Henzo started as a small circle of friends who wanted roleplay to
              feel real — with stakes, structure, and story. Months later,
              we&apos;ve grown into one of Roblox&apos;s most active roleplay
              communities, running regular operations, ceremonies, and events.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Whether you&apos;re here to lead, to serve, or just to be part of
              the story, there&apos;s a place for you in the ranks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:first:col-span-2"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-[#ff8700]">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
