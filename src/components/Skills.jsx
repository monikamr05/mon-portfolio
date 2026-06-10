import { useEffect, useRef, useState } from "react";
import { skillCategories } from "../data";
import { ScrollReveal } from "./ScrollReveal";

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-accent">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-blue"
          style={{
            width: visible ? `${level}%` : "0%",
            transition: "width 1s ease-out",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-b border-border/60 bg-muted/30 dark:bg-muted/20"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and competencies developed through coursework and projects.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.08}>
              <div className="card-hover h-full p-6">
                <h3 className="font-display mb-5 font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
