import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function JoinCta() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          Your story starts{' '}
          <span className="bg-[#ff8700] bg-clip-text text-transparent">
            here
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Join our members and become part of the Henzo legacy. The
          ranks are open — all that&apos;s left is to step in.
        </p>
        <div className="mt-8 flex justify-center">
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
            Join Henzo on Roblox
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
