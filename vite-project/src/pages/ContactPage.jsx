import { useState } from 'react';
import ArrowIcon from '../components/icons/ArrowIcon.jsx';

function ContactPage() {
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
            href="/"
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
              href="/#work"
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
              aria-current="page"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#20231e] px-5 py-3 font-medium text-white transition hover:bg-[#41463b] md:self-auto"
              href="/contact"
              onClick={closeMenu}
            >
              Contact <ArrowIcon diagonal />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-14 lg:pb-32 lg:pt-24">
          <div>
            <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#686b63]">
              <span className="h-2 w-2 rounded-full bg-[#9bd344]" />
              A good place to start
            </p>
            <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.085em]">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="font-serif italic">matter.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-[#686b63] sm:text-xl sm:leading-9">
              Have a thoughtful idea, a big question, or just want to say hello?
              We&apos;d love to hear what you&apos;re working on.
            </p>
          </div>

          <aside className="flex flex-col justify-end rounded-3xl bg-[#e8e8dc] p-7 sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#777a71]">
              Start a conversation
            </p>
            <h2 className="mb-6 text-3xl font-medium tracking-[-0.06em] sm:text-4xl">
              Tell us what you&apos;re thinking.
            </h2>
            <p className="mb-8 text-base leading-7 text-[#686b63]">
              Share a little about your project and we&apos;ll get back to you
              soon.
            </p>
            <a
              className="inline-flex min-h-14 items-center justify-between gap-3 rounded-full bg-[#c4f06a] px-6 text-sm font-semibold text-[#20231e] transition hover:bg-white"
              href="mailto:hello@formastudio.design"
            >
              hello@formastudio.design <ArrowIcon diagonal />
            </a>
            <div className="mt-10 border-t border-[#20231e]/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#777a71]">
                Good things we can do together
              </p>
              <p className="mt-3 text-sm leading-6 text-[#686b63]">
                Brand identity · Digital experiences · Creative direction ·
                E-commerce
              </p>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-[#eae8df]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-[#777a71] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p>© 2026 Forma Studio. Made with intention.</p>
          <a className="transition hover:text-ink" href="/">
            Back to home ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
