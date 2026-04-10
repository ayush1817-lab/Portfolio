import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact — Ayush Ramawat",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
        Let&rsquo;s Talk
      </h1>
      <p className="mt-6 max-w-xl text-lg text-ink-secondary">
        I&rsquo;m looking for Product Design roles where I can solve meaningful
        problems with a thoughtful team.
      </p>

      <a
        href="mailto:ayushramawat29@gmail.com"
        className="group mt-10 inline-flex items-center gap-2 rounded-pill bg-accent px-8 py-3 text-sm font-semibold text-bg-primary transition hover:shadow-accent"
      >
        Let&rsquo;s Connect
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>

      <div className="mt-12 flex gap-8 text-sm text-ink-muted">
        <a
          href="mailto:ayushramawat29@gmail.com"
          className="transition-colors hover:text-accent"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-ramawat-71880927b"
          className="transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://medium.com/@ayushramawat29"
          className="transition-colors hover:text-accent"
        >
          Medium
        </a>
      </div>
    </main>
  );
}
