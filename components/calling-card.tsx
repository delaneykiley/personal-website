import { ArrowUpRight, Mail } from 'lucide-react'

const EMAIL = 'delaneykiley@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/kiley-delaney'

export function CallingCard() {
  return (
    <article
      className="w-full max-w-xl rounded-2xl bg-white p-8 text-slate-800 shadow-sm ring-1 sm:p-12"
      style={{ ['--tw-ring-color' as string]: '#cfe0f5' }}
      aria-labelledby="name"
    >
      <header className="flex flex-col gap-3">
        <div
          className="flex size-14 items-center justify-center rounded-full text-lg font-semibold text-slate-700"
          style={{ backgroundColor: '#cfe2f7' }}
          aria-hidden="true"
        >
          KD
        </div>
        <h1 id="name" className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Kiley Delaney
        </h1>
        <p className="text-lg text-slate-500">Software engineer</p>
      </header>

      <div className="my-8 h-px" style={{ backgroundColor: '#cfe2f7' }} />

      <section aria-label="About" className="flex flex-col gap-4 text-pretty leading-relaxed text-slate-600">
        <p>
          {"I have bachelor's and master's degrees in computer science. I've worked in technology consulting and as a backend engineer developing and maintaining enterprise software that supports tax compliance and payroll."}
        </p>
        <p>I love problem solving and learning new skills.</p>
      </section>

      <nav aria-label="Contact" className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          style={{ backgroundColor: '#cfe2f7' }}
        >
          <Mail className="size-4" aria-hidden="true" />
          {EMAIL}
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-slate-800 ring-1 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          style={{ ['--tw-ring-color' as string]: '#cfe2f7' }}
        >
          LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </nav>
    </article>
  )
}
