import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute -left-1/4 -top-1/2 h-[60rem] w-[60rem] animate-aurora rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,107,53,0.35), transparent 60%)",
        }}
      />
      <div
        className="absolute -right-1/4 top-1/4 h-[45rem] w-[45rem] animate-aurora rounded-full opacity-30 blur-3xl [animation-delay:-6s]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,176,138,0.28), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
