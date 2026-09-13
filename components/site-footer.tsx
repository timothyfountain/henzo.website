export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground">
            H
          </span>
          <span className="font-heading font-bold tracking-tight">HENZO</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Henzo. Not affiliated with Roblox
          Corporation.
        </p>
      </div>
    </footer>
  )
}
