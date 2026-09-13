import { Button } from '@/components/ui/button'
import { ArrowRight, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/henzo-hero.png)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-32 sm:px-6">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff8700]" />
            </span>
            Now recruiting new members
          </div>

          <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl">
            Welcome to{' '}
            <span className="bg-[#ff8700] bg-clip-text text-transparent">
              Henzo
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            A premium Roblox roleplay community built on discipline, story, and
            brotherhood. Rise through the ranks, shape the narrative, and become
            part of something bigger.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group bg-[#ff8700] font-medium"
              nativeButton={false}
              render={
                <a
                  href="https://www.roblox.com/groups/99592843"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Join the Group
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card/40 font-medium backdrop-blur-sm"
              nativeButton={false}
              render={<a href="#about" />}
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#ff8700]" />
              <span>
                <span className="font-semibold text-foreground"></span>{' '}
                
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>
              <span className="font-semibold text-foreground">Est. June 2026</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
