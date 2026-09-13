import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
]

const QUICK_LINKS = [
  { label: 'Discord', href: '/discord' },
  { label: 'Group', href: '/group' },
  { label: 'Staff Hub', href: '/staff' },
  { label: 'Appeal', href: '/appeal' },
  { label: 'Game', href: '/game' },
  { label: 'YouTube', href: '/youtube' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-heading text-lg font-bold text-primary-foreground">
            H
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">
            HENZO
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline" className="font-medium">
                Quick Links
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
              {QUICK_LINKS.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}