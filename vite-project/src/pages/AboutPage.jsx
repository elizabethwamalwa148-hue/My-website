import { useState } from 'react'
import ArrowIcon from '../components/icons/ArrowIcon.jsx'

const values = [
  {
    number: '01',
    title: 'Stay curious',
    description:
      'The best ideas come from asking better questions, listening closely, and looking at familiar things in a new way.',
  },
  {
    number: '02',
    title: 'Make it matter',
    description:
      'We believe good design should do more than look good. It should make a meaningful difference for the people it reaches.',
  },
  {
    number: '03',
    title: 'Keep it human',
    description:
      'The strongest partnerships are built on honesty, generosity, and making room for the people behind every project.',
  },
]

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf9f6] text-[#20231e]">
      <header className="relative z-10 border-b border-[#20231e]/10 bg-[#faf9f6]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-14"
        >
          <a
            aria-label="Forma Studio home"
            className="flex items-center gap-2.5"
            href="/"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c4f06a] text-sm font-bold">
              f.
            </span>
            <span className="text-sm font-semibold tracking-[-0.04em]">
              forma<span className="font-normal text-[#777a71]">studio</span>
            </span>
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#20231e]/15 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
          </button>

          <div
            className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-6 border-b border-[#20231e]/10 bg-[#faf9f6] px-6 py-6 text-sm md:static md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0`}
          >
            <a
              className="text-[#686b63] transition hover:text-[#20231e]"
              href="/#work"
            >
              Selected work
            </a>
            <a
              aria-current="page"
              className="font-medium text-[#20231e]"
              href="/about"
            >
              About
            </a>
            <a
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#20231e] px-5 py-3 font-medium text-white transition hover:bg-[#41463b] md:self-auto"
              href="/#contact"
            >
              Let&apos;s talk <ArrowIcon diagonal />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-14 lg:pb-28 lg:pt-24">
          <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#686b63]">
            <span className="h-2 w-2 rounded-full bg-[#9bd344]" />
            A little about us
          </p>
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.085em]">
              Good work
              <br />
              starts with
              <br />
              <span className="font-serif italic">good people.</span>
            </h1>
            <p className="max-w-lg pb-2 text-lg leading-8 text-[#686b63] sm:text-xl sm:leading-9">
              We&apos;re Forma—a small, independent creative studio partnering
              with good people to build brands and digital experiences with
              purpose.
            </p>
          </div>
        </section>

        <section className="px-6 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-[#e8e8dc] p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:p-14">
            <div className="aspect-[1.15] overflow-hidden rounded-2xl bg-[#d6ddcc]">
              <img
                alt="Warm, welcoming studio interior filled with natural light"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
              />
            </div>
            <div className="py-2 lg:py-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#777a71]">
                Thoughtfully independent
              </p>
              <h2 className="mb-6 text-4xl font-medium leading-[1.04] tracking-[-0.07em] sm:text-5xl">
                Small by design.
                <br />
                Big on <span className="font-serif italic">care.</span>
              </h2>
              <p className="mb-5 text-base leading-7 text-[#686b63]">
                Forma started with a simple belief: the most meaningful work
                happens when thoughtful people work closely together. So we
                built a studio that keeps things personal, collaborative, and
                refreshingly straightforward.
              </p>
              <p className="text-base leading-7 text-[#686b63]">
                Since 2018, we&apos;ve helped purpose-led teams find their
                voice, bring ideas to life, and connect with the people who
                matter most.
              </p>
              <div className="mt-8 flex gap-10 border-t border-[#20231e]/15 pt-6">
                <div>
                  <p className="text-3xl font-medium tracking-[-0.06em]">24</p>
                  <p className="mt-1 text-sm text-[#777a71]">Brands brought to life</p>
                </div>
                <div>
                  <p className="text-3xl font-medium tracking-[-0.06em]">8 yrs</p>
                  <p className="mt-1 text-sm text-[#777a71]">Making things matter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-32">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#777a71]">
              What guides us
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.07em] sm:text-6xl">
              A few things we believe<span className="text-[#9bd344]">.</span>
            </h2>
          </div>
          <div className="grid border-t border-[#20231e]/15 md:grid-cols-3">
            {values.map((value) => (
              <article
                className="border-b border-[#20231e]/15 py-7 md:border-b-0 md:border-r md:px-7 md:py-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                key={value.number}
              >
                <p className="mb-8 text-xs text-[#777a71]">{value.number}</p>
                <h3 className="mb-3 text-2xl font-medium tracking-[-0.05em]">
                  {value.title}
                </h3>
                <p className="max-w-sm text-sm leading-6 text-[#686b63]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-[#20231e] px-7 py-12 text-white sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Good things start somewhere
              </p>
              <h2 className="max-w-2xl text-5xl font-medium leading-[1.02] tracking-[-0.07em] sm:text-7xl">
                Maybe it starts
                <br />
                with <span className="font-serif italic text-[#c4f06a]">you.</span>
              </h2>
            </div>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-full bg-[#c4f06a] px-6 text-sm font-semibold text-[#20231e] transition hover:bg-white lg:self-auto"
              href="mailto:hello@formastudio.design"
            >
              Tell us what you&apos;re thinking <ArrowIcon diagonal />
            </a>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#20231e]/10 px-6 py-7 text-xs text-[#777a71] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <p>© 2026 Forma Studio. Made with intention.</p>
        <a className="transition hover:text-[#20231e]" href="/">
          Back to home ↑
        </a>
      </footer>
    </div>
  )
}

export default AboutPage
