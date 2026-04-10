import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-secondary">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.5)] animate-pulse-dot" />
          Open to Work
        </div>
        <Link
          href="/"
          className="relative font-display text-2xl font-extrabold"
        >
          ar
          <span className="absolute -right-2 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent animate-float" />
        </Link>
        <Link
          href="/contact"
          className="group flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary transition-colors hover:text-ink-primary"
        >
          Contact
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </header>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(32px,5vw,48px)] font-bold leading-tight tracking-tight">
            Ayush Ramawat
            <span className="font-extrabold text-accent">.</span>
          </h1>

          <div className="mt-3 inline-flex">
            <span className="pill">Product Designer</span>
          </div>

          <h2 className="mt-8 font-display text-[clamp(28px,4.5vw,44px)] font-semibold leading-snug">
            I design systems that make
            <br />
            <em className="font-medium italic text-accent-soft">
              complexity feel simple
            </em>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
            Crafting AI-powered tools that feel human, not robotic. I bring a
            background in game design and 3D animation to solve real problems
            for real people.
          </p>

          <nav className="mt-12 flex items-center justify-center gap-8 text-sm text-ink-secondary">
            <Link
              href="/projects"
              className="transition-colors hover:text-accent"
            >
              Projects
            </Link>
            <Link href="/about" className="transition-colors hover:text-accent">
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
