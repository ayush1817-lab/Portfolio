import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");

export interface ProjectMeta {
  slug: string;
  title: string;
  summary?: string;
  tags?: string[];
  cover?: string;
  link?: string;
  date?: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

async function readProjectFile(filename: string) {
  const filePath = path.join(PROJECTS_DIR, filename);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug =
    (data.slug as string | undefined) ?? filename.replace(/\.mdx?$/, "");
  const meta: ProjectMeta = {
    slug,
    title: (data.title as string) ?? slug,
    summary: data.summary as string | undefined,
    tags: data.tags as string[] | undefined,
    cover: data.cover as string | undefined,
    link: data.link as string | undefined,
    date: data.date as string | undefined,
  };
  return { meta, content };
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  let entries: string[] = [];
  try {
    entries = await fs.readdir(PROJECTS_DIR);
  } catch {
    return [];
  }
  const files = entries.filter((f) => /\.mdx?$/.test(f));
  const projects = await Promise.all(
    files.map(async (file) => (await readProjectFile(file)).meta),
  );
  return projects.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function getProjectBySlug(
  slug: string,
): Promise<{ meta: ProjectMeta; html: string } | null> {
  let entries: string[];
  try {
    entries = await fs.readdir(PROJECTS_DIR);
  } catch {
    return null;
  }
  const match = entries.find(
    (f) => f === `${slug}.md` || f === `${slug}.mdx`,
  );
  if (!match) return null;
  const { meta, content } = await readProjectFile(match);
  return { meta, html: await markdownToHtml(content) };
}

export async function getAboutHtml(): Promise<string> {
  try {
    const raw = await fs.readFile(
      path.join(CONTENT_DIR, "about.md"),
      "utf8",
    );
    const { content } = matter(raw);
    return markdownToHtml(content);
  } catch {
    return "";
  }
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export async function getSkills(): Promise<SkillGroup[]> {
  try {
    const raw = await fs.readFile(
      path.join(CONTENT_DIR, "skills.json"),
      "utf8",
    );
    return JSON.parse(raw) as SkillGroup[];
  } catch {
    return [];
  }
}

export interface ExperienceEntry {
  role: string;
  company: string;
  start: string;
  end?: string;
  summary?: string;
}

export async function getExperience(): Promise<ExperienceEntry[]> {
  try {
    const raw = await fs.readFile(
      path.join(CONTENT_DIR, "experience.json"),
      "utf8",
    );
    return JSON.parse(raw) as ExperienceEntry[];
  } catch {
    return [];
  }
}
