import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Override the max-width. Defaults to the site-wide standard. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

const sizeMap = {
  sm:   'max-w-3xl',   // ~768px  — narrow prose / single-column CTA
  md:   'max-w-4xl',   // ~896px  — pricing, process (content-focused)
  lg:   'max-w-5xl',   // ~1024px — use-cases, projects
  xl:   'max-w-6xl',   // ~1152px — features, hero content
  full: 'max-w-7xl',   // ~1280px — full-bleed hero / footer (matches navbar)
};

export default function Container({ children, className, size = 'xl' }: ContainerProps) {
  return (
    <div className={cn(sizeMap[size], 'mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
