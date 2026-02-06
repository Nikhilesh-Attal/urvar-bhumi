import { cn } from "@/lib/utils";

interface QuoteSectionProps {
    quote: string;
    className?: string;
}

export function QuoteSection({ quote, className }: QuoteSectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)}>
      <div className="container">
        <blockquote className="text-center text-xl md:text-2xl lg:text-3xl font-semibold italic">
         “{quote}”
        </blockquote>
      </div>
    </section>
  );
}
