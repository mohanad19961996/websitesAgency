import { AnimatedSection } from './AnimatedSection';

interface SectionDividerProps {
  className?: string;
  variant?: 'line' | 'gradient' | 'dots';
}

export default function SectionDivider({ className = '', variant = 'gradient' }: SectionDividerProps) {
  
  if (variant === 'dots') {
    return (
      <div className={`py-8 ${className}`}>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`py-6 ${className}`}>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-px bg-border opacity-50"></div>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  // Default gradient variant
  return (
    <div className={`py-8 ${className}`}>
      <AnimatedSection animation="fadeInUp" delay={100}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main gradient line */}
            <div 
              className="w-full h-px opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, var(--primary), transparent)`
              }}
            ></div>
            
            {/* Central accent dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: `var(--primary)`,
                  boxShadow: `0 0 8px var(--primary), 0 0 16px var(--primary)`
                }}
              ></div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}