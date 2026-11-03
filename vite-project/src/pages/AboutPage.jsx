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

      
    </div>
  )
}

export default AboutPage
