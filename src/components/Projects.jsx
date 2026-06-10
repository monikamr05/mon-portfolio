import { ExternalLink, Leaf, Mic } from "lucide-react";
import { projects } from "../data";
import { ScrollReveal } from "./ScrollReveal";

const projectIcons = { mic: Mic, leaf: Leaf };

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding border-b border-border/60 bg-muted/30 dark:bg-muted/20"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Academic and personal work demonstrating practical problem-solving.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.icon] || Mic;
            return (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <article className="card-hover group flex h-full flex-col overflow-hidden">
                  <div
                    className={`flex h-36 items-center justify-center bg-gradient-to-br ${project.gradient} px-6`}
                  >
                    <Icon className="h-14 w-14 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs"
                      >
                        View on GitHub
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
