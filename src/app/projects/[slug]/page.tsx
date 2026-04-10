import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.meta.title} — Ayush Ramawat`,
    description: project.meta.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      <header className="mt-10 border-b border-line pb-10">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          {project.meta.title}
        </h1>
        {project.meta.summary && (
          <p className="mt-4 text-lg text-ink-secondary">
            {project.meta.summary}
          </p>
        )}
      </header>

      <article
        className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
    </main>
  );
}
