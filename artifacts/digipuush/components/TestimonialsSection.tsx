import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { testimonials } from "@/lib/social";

export function TestimonialsSection({
  eyebrow = "What clients say",
  title = "Brands that stopped getting skipped",
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-12">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
