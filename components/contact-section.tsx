export function ContactSection() {
  return (
    <section id="contact" className="flex gap-4">
      <a
        href="mailto:support.team@henzo.lol"
        className="rounded-md bg-black px-5 py-3 text-white transition-opacity hover:opacity-80"
      >
        Contact Support
      </a>

      <a
        href="mailto:leadership.team@henzo.lol"
        className="rounded-md border border-black px-5 py-3 text-black transition-opacity hover:opacity-80"
      >
        Contact Leadership
      </a>
    </section>
  )
}
