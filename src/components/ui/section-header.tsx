import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ 
  overline, 
  title, 
  description, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center space-y-4', className)}>
      {overline && (
        <p className="text-pewter-blue font-medium text-sm uppercase tracking-wider">
          {overline}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
