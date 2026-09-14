'use client'

import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
]

const QUICK_LINKS = [
  { label: 'Discord', href: 'https://go.henzo.lol/discord' },
  { label: 'Group', href: 'https://go.henzo.lol/group' },
  { label: 'Staff Hub', href: 'https://go.henzo.lol/staff' },
  { label: 'Appeal', href: 'https://go.henzo.lol/appeal' },
  { label: 'Game', href: 'https://go.henzo.lol/game' },
  { label: 'YouTube', href: 'https://go.henzo.lol/youtube' },
]

export function SiteHeader( ) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#top"
          aria-label="HENZO home"
          className="flex items-center gap-2"
        >
          <img
            src="/henzo-logo.png"
            alt="HENZO logo"
            className="h-9 w-auto object-contain"
          />

          <span className="font-heading text-lg font-bold tracking-tight">
            HENZO
          </span>
        </a>

        {/* Primary navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
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

        {/* Quick links */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Quick Links

            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`ml-2 h-4 w-4 transition-transform ${
                menuOpen ? 'rotate-180' : ''
              }`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-background p-1 shadow-lg"
            >
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}