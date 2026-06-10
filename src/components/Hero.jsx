import { ArrowRight, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data";
import { ProfileAvatar } from "./ProfileAvatar";

const techStack = ["Java", "Python", "HTML5", "CSS3", "JavaScript", "MySQL"];

export function Hero() {
  return (
    <section
      id="home"
      className="section-padding relative flex min-h-[92vh] items-center overflow-hidden border-b border-border/60 pt-24"
    >
      <div
        className="pointer-events-none absolute -left-20 top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-2xl border border-border/80 bg-card/60 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <div
              className="absolute -left-px top-8 h-24 w-1 rounded-full bg-gradient-to-b from-accent to-accent-blue"
              aria-hidden="true"
            />

            <span className="section-label">Portfolio</span>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground/90 md:text-xl">
              {personalInfo.title}
            </p>
            <div className="accent-line mt-5" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {personalInfo.bio}
            </p>

            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              {personalInfo.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <ProfileAvatar />
        </div>
      </div>
    </section>
  );
}
