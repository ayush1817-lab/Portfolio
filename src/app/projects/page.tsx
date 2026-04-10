import Link from "next/link";
import { getAllProjects } from "@/lib/content";

export const metadata = {
  title: "Projects — Ayush Ramawat",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-12">
      <header className="mb-16 flex items-baseline justify-between">
        <h1 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Selected Work
        </h1>
        <span className="text-xs text-ink-muted">
          {projects.length} case {projects.length === 1 ? "study" : "studies"}
        </span>
      </header>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-card border border-line bg-bg-card p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-card"
            >
              <h2 className="font-display text-2xl font-semibold text-ink-primary">
                {project.title}
              </h2>
              {project.summary && (
                <p className="mt-3 text-ink-secondary">{project.summary}</p>
              )}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-line px-3 py-1 text-xs text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
