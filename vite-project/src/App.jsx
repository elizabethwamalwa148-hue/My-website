import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectCard from './components/ProjectCard.jsx';
import ArrowIcon from './components/icons/ArrowIcon.jsx';
import AboutPage from './pages/AboutPage.jsx';

const projects = [
  {
    number: '01',
    name: 'Goodkind',
    category: 'Brand identity · Packaging',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Thoughtfully arranged skincare products',
    color: 'bg-[#e9e5da]',
  },
  {
    number: '02',
    name: 'Fieldnotes',
    category: 'Digital experience · Strategy',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Golden light falling over a quiet landscape',
    color: 'bg-[#e8e8dc]',
  },
  {
    number: '03',
    name: 'Sunday Supply',
    category: 'Art direction · E-commerce',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A considered edit of everyday clothing',
    color: 'bg-[#e8e4df]',
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-canvas text-ink">
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-canvas/95 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-14"
        >
          <a
            aria-label="Forma Studio home"
            className="flex items-center gap-2.5"
            href="#home"
            onClick={closeMenu}
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
            aria-label={
              menuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="grid h-10 w-10 place-items-center rounded-full border border-[#20231e]/15 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span className="text-xl leading-none">
              {menuOpen ? '×' : '☰'}
            </span>
          </button>

          <div
            className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-6 border-b border-ink/10 bg-canvas px-6 py-6 text-sm md:static md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0`}
          >
            <a
              className="text-[#686b63] transition hover:text-[#20231e]"
              href="#work"
              onClick={closeMenu}
            >
              Selected work
            </a>
            <a
              className="text-[#686b63] transition hover:text-[#20231e]"
              href="/about"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#20231e] px-5 py-3 font-medium text-white transition hover:bg-[#41463b] md:self-auto"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s talk <ArrowIcon diagonal />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14 lg:pb-28 lg:pt-24"
          id="home"
        >
          <div className="max-w-2xl">
            <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#686b63]">
              <span className="h-2 w-2 rounded-full bg-[#9bd344]" />
              Independent creative studio · Est. 2018
            </p>
            <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.085em]">
              Make room
              <br />
              for <span className="font-serif italic">better</span>
              <br />
              ideas.
            </h1>
            <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-base leading-7 text-[#686b63] sm:text-lg sm:leading-8">
                We build thoughtful brands and digital experiences for people
                making a positive mark on the world.
              </p>
              <a
                className="group inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c4f06a] transition hover:-rotate-45"
                href="#work"
                aria-label="Explore selected work"
              >
                <ArrowIcon diagonal />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -left-5 -top-5 z-10 grid h-20 w-20 -rotate-12 place-items-center rounded-full bg-[#c4f06a] text-center text-[10px] font-semibold uppercase leading-4 tracking-widest sm:-left-8 sm:-top-7">
              Good ideas
              <br />
              grow here
            </div>
            <div className="aspect-[0.94] overflow-hidden rounded-[48%_48%_12px_12px] bg-[#d6ddcc]">
              <img
                alt="Sunlit modern architecture surrounded by greenery"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
              />
            </div>
            <div className="absolute -bottom-5 right-3 rounded-full border border-[#20231e]/15 bg-[#f3f1e9] px-4 py-2 text-xs text-[#686b63] sm:right-8">
              Thoughtful by nature{' '}
              <span className="ml-1 text-[#7b9d36]">✳</span>
            </div>
          </div>
        </section>

        <section
          className="bg-[#efeee8] px-6 py-20 sm:px-10 sm:py-24 lg:px-14"
          id="work"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#777a71]">
                  A few good things
                </p>
                <h2 className="text-4xl font-medium tracking-[-0.07em] sm:text-6xl">
                  Selected work<span className="text-[#9bd344]">.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#686b63]">
                A collection of collaborations made with care, curiosity, and
                the occasional very good cup of coffee.
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:px-14 lg:py-32"
          id="about"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#777a71]">
              Small team, open minds
            </p>
            <h2 className="max-w-xl text-5xl font-medium leading-[1.02] tracking-[-0.075em] sm:text-7xl">
              Good work starts with a good{' '}
              <span className="font-serif italic">why.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-lg leading-8 text-[#686b63]">
              We partner with ambitious people to turn big-hearted ideas into
              clear, lasting brands. No egos, no one-size-fits-all answers—just
              a close-knit team who care about getting it right.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#20231e]/15 pt-6">
              <div>
                <p className="text-3xl font-medium tracking-[-0.06em]">24</p>
                <p className="mt-1 text-sm text-[#777a71]">
                  Brands brought to life
                </p>
              </div>
              <div>
                <p className="text-3xl font-medium tracking-[-0.06em]">8 yrs</p>
                <p className="mt-1 text-sm text-[#777a71]">
                  Making things matter
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-14" id="contact">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-[#20231e] px-7 py-12 text-white sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Have a good one in mind?
              </p>
              <h2 className="max-w-2xl text-5xl font-medium leading-[1.02] tracking-[-0.07em] sm:text-7xl">
                Let&apos;s make
                <br />
                something{' '}
                <span className="font-serif italic text-[#c4f06a]">
                  matter.
                </span>
              </h2>
            </div>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-full bg-[#c4f06a] px-6 text-sm font-semibold text-[#20231e] transition hover:bg-white lg:self-auto"
              href="mailto:hello@formastudio.design"
            >
              hello@formastudio.design <ArrowIcon diagonal />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-[#eae8df]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-[#777a71] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p>© 2026 Forma Studio. Made with intention.</p>
          <a className="transition hover:text-ink" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
