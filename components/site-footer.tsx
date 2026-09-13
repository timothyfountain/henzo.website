export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
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
