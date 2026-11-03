import { ArrowUpRight } from 'lucide-react'

const PALE_BLUE = '#d6e6f8'

const CONTACTS = [
  {
    label: 'Email',
    value: 'delaneykiley@gmail.com',
    href: 'mailto:delaneykiley@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kiley-delaney',
    href: 'https://www.linkedin.com/in/kiley-delaney',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/delaneykiley',
    href: 'https://github.com/delaneykiley',
    external: true,
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
      {children}
    </h2>
  )
}

export function CallingCard() {
  return (
    <article
      aria-labelledby="name"
      className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.12)] grid-cols-1 md:grid-cols-5"
    >
      <header
        className="flex flex-col justify-between gap-16 p-8 sm:p-12 md:col-span-2"
        style={{ backgroundColor: PALE_BLUE }}
      >
        <div
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-full border border-slate-900/15 text-sm font-semibold tracking-wide text-slate-800"
        >
          KD
        </div>
        <div className="flex flex-col gap-3">
          <h1
            id="name"
            className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl"
          >
            Kiley
            <br />
            Delaney
          </h1>
          <p className="text-lg text-slate-600">Software engineer</p>
          <p className="text-sm text-slate-500">Chicago, IL</p>
        </div>
      </header>

      <div className="flex flex-col gap-12 p-8 sm:p-12 md:col-span-3">
        <section aria-labelledby="about" className="flex flex-col gap-5">
          <SectionLabel>
            <span id="about">About</span>
          </SectionLabel>
          <p className="text-pretty text-xl leading-relaxed text-slate-800">
            {"I have bachelor's and master's degrees in computer science. I've worked in technology consulting and as a backend engineer developing and maintaining enterprise software that supports tax compliance and payroll."}
          </p>
          <p className="text-pretty leading-relaxed text-slate-600">
            I love problem solving and learning new skills.
          </p>
        </section>

        <section aria-labelledby="contact" className="flex flex-col gap-2">
          <SectionLabel>
            <span id="contact">Contact</span>
          </SectionLabel>
          <ul className="flex flex-col">
            {CONTACTS.map((contact) => (
              <li key={contact.label} className="border-b border-slate-200 last:border-b-0">
                <a
                  href={contact.href}
                  {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-[#eef4fc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                >
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-4">
                    <span className="shrink-0 text-sm text-slate-500 sm:w-20">{contact.label}</span>
                    <span className="break-all font-medium text-slate-900">{contact.value}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700"
                  />
                  {contact.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
