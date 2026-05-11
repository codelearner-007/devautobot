import { cn } from '@/lib/utils';

const sizeMap = {
  sm:   'max-w-3xl',
  md:   'max-w-4xl',
  lg:   'max-w-5xl',
  xl:   'max-w-6xl',
  full: 'max-w-7xl',
};

export default function Container({ children, className, size = 'xl' }) {
  return (
    <div className={cn(sizeMap[size], 'mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
