import Image from 'next/image'
import { MessageCircle, Gamepad2, Mail } from 'lucide-react'

type Leader = {
  name: string
  role: string
  image: string
  alt: string
  discord: string
  roblox: string
  email: string
}

const LEADERS: Leader[] = [
  {
    name: 'Timothy',
    role: 'Founder',
    image: '/timothy-avatar.webp',
    alt: 'Timothy :)',
    discord: 'timothy.f.',
    roblox: 'timfount or timothyplaysmc',
    email: 'timothy@henzo.lol',
  },
  {
    name: 'Pooh',
    role: 'Co-Founder',
    image: '/pooh-avatar.webp',
    alt: 'Pooh :)',
    discord: 'poohesdffaltonroblox',
    roblox: 'poohesdffalt',
    email: 'pooh@henzo.lol',
  },
  {
    name: 'Nate',
    role: 'Department Officer',
    image: '/nate-avatar.webp',
    alt: 'Nate :)',
    discord: 'natefmsfounder',
    roblox: 'MeCookieMonsterYum',
    email: 'nate@henzo.lol',
  },
]

function LeaderCard({ person }: { person: Leader }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/15 to-transparent"
      />

      <div className="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-primary/40 bg-secondary">
        <Image
          src={person.image || '/placeholder.svg'}
          alt={person.alt}
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="relative mt-6 font-heading text-3xl font-bold tracking-tight">
        {person.name}
      </h3>
      <p className="relative mt-1 text-sm font-medium uppercase tracking-wider text-primary">
        {person.role}
      </p>

      <dl className="relative mt-8 space-y-3 text-left">
        <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
          <MessageCircle className="size-5 shrink-0 text-[#ff8700]" />
          <div className="min-w-0">
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              Discord
            </dt>
            <dd className="truncate font-medium">{person.discord}</dd>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
          <Gamepad2 className="size-5 shrink-0 text-[#ff8700]" />
          <div className="min-w-0">
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              Roblox
            </dt>
            <dd className="truncate font-medium">{person.roblox}</dd>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
          <Mail className="size-5 shrink-0 text-[#ff8700]" />
          <div className="min-w-0">
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              Contact
            </dt>
            <dd className="truncate font-medium">
              <a
                href={`mailto:${person.email}`}
                className="transition-colors hover:text-primary"
              >
                {person.email}
              </a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  )
}

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8700]">
            Leadership
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Meet the team behind Henzo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            The founders who built the community, host the events, and shape the
            story every day.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {LEADERS.map((person) => (
            <LeaderCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
