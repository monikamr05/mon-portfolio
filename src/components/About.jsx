import { CheckCircle2 } from "lucide-react";
import { aboutHighlights, personalInfo, stats } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="section-padding border-b border-border/60">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="section-label">About</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">{personalInfo.about}</p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="card-hover p-6 md:p-8">
              <h3 className="font-display mb-5 text-lg font-semibold">Highlights</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 + i * 0.08}>
                <div className="card-hover p-6 text-center">
                  <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
