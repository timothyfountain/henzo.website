export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto mt-10 w-full max-w-5xl rounded-2xl bg-blue-600 px-6 py-8"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:support.team@henzo.lol"
          className="rounded-md bg-white px-5 py-3 font-medium text-blue-700 shadow transition hover:bg-blue-50"
        >
          Contact Support
        </a>

        <a
          href="mailto:leadership.team@henzo.lol"
          className="rounded-md border border-white bg-blue-700 px-5 py-3 font-medium text-white shadow transition hover:bg-blue-800"
        >
          Contact Leadership
        </a>
      </div>
    </section>
  )
}
