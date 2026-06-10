import { BookOpen, GraduationCap, School } from "lucide-react";
import { education } from "../data";
import { ScrollReveal } from "./ScrollReveal";

const levelIcons = {
  mca: GraduationCap,
  bca: GraduationCap,
  puc: BookOpen,
  sslc: School,
};

function getIcon(degree) {
  if (degree.includes("MCA")) return levelIcons.mca;
  if (degree.includes("BCA") || degree.includes("Bachelor")) return levelIcons.bca;
  if (degree.includes("Pre-University") || degree.includes("PU")) return levelIcons.puc;
  return levelIcons.sslc;
}

export function Education() {
  return (
    <section id="education" className="section-padding border-b border-border/60 bg-muted/20 dark:bg-muted/10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="section-label">Education</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic journey from school to postgraduate studies in computer applications.
          </p>
        </ScrollReveal>

        <div className="relative mt-12">
          <div
            className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-accent via-accent-light to-accent-blue md:block"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {education.map((item, i) => {
              const Icon = getIcon(item.degree);
              const isActive = item.status === "In Progress";

              return (
                <ScrollReveal key={item.degree} delay={i * 0.08}>
                  <div className="relative md:pl-16">
                    <div
                      className={`absolute left-3 top-8 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background md:block ${
                        isActive
                          ? "bg-gradient-to-br from-accent to-accent-blue shadow-md shadow-accent/30"
                          : "bg-muted-foreground/40"
                      }`}
                      aria-hidden="true"
                    />

                    <article
                      className={`card-hover overflow-hidden ${
                        isActive ? "ring-1 ring-accent/20" : ""
                      }`}
                    >
                      <div className="h-1 bg-gradient-to-r from-accent via-accent-light to-accent-blue" />
                      <div className="flex flex-col gap-5 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-blue/15">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {item.degree}
                            </h3>
                            <p className="mt-1 font-medium text-accent">{item.institution}</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {item.location ? `${item.location} · ` : ""}
                              {item.status === "In Progress"
                                ? `Expected: ${item.year}`
                                : `Year: ${item.year}`}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 md:justify-end">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              isActive
                                ? "border border-accent/20 bg-accent/10 text-accent"
                                : "border border-border bg-muted text-muted-foreground"
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                            {item.scoreLabel}: {item.score}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
