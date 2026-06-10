export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent-blue/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent-light/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }} />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
