import { getAboutHtml } from "@/lib/content";

export const metadata = {
  title: "About — Ayush Ramawat",
};

export default async function AboutPage() {
  const html = await getAboutHtml();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12">
      <h1 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        The Story
      </h1>
      <article
        className="prose prose-invert mt-8 max-w-none prose-headings:font-display prose-strong:text-ink-primary prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
