import { SectionHeader } from '@/components/ui/section-header';

export function SystemsUX() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Systems & UX"
          title="Human-in-the-loop, by default"
          description="I build AI tools that stay inspectable, safe, and easy to use—so people can trust the output and keep control."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-3">Human-in-the-loop design</h3>
            <p className="text-sm text-muted-foreground">
              Clear checkpoints, visible reasoning, and simple overrides so humans can guide and correct the system.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-3">Safety & guardrails</h3>
            <p className="text-sm text-muted-foreground">
              Structured prompts, validations, and fallbacks that keep outputs bounded and transparent.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-3">Accessibility-first</h3>
            <p className="text-sm text-muted-foreground">
              WCAG-aligned contrast, keyboard-friendly flows, and readable layouts that work for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
