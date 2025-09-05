import { AnimatedSection } from './AnimatedSection';
import { AnimationType } from './useScrollAnimation';

// Wireframe placeholder component
function WireframePlaceholder({ sectionId }: { sectionId: string }) {
  const getSectionInfo = (id: string) => {
    switch (id) {
      case 'hero': 
        return { 
          title: 'Hero Section', 
          description: 'Main landing section with call-to-action',
          color: 'bg-primary/10 border-primary/20'
        };
      case 'section-a': 
        return { 
          title: 'Section A', 
          description: 'First content section',
          color: 'bg-blue-500/10 border-blue-500/20'
        };
      case 'section-b': 
        return { 
          title: 'Section B', 
          description: 'Second content section',
          color: 'bg-green-500/10 border-green-500/20'
        };
      case 'section-c': 
        return { 
          title: 'Section C', 
          description: 'Third content section',
          color: 'bg-orange-500/10 border-orange-500/20'
        };
      case 'section-d': 
        return { 
          title: 'Section D', 
          description: 'Fourth content section',
          color: 'bg-purple-500/10 border-purple-500/20'
        };
      case 'section-e': 
        return { 
          title: 'Section E', 
          description: 'Fifth content section',
          color: 'bg-pink-500/10 border-pink-500/20'
        };
      default: 
        return { 
          title: 'Section', 
          description: 'Content section',
          color: 'bg-gray-500/10 border-gray-500/20'
        };
    }
  };

  const sectionInfo = getSectionInfo(sectionId);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className={`inline-block ${sectionInfo.color} rounded-lg px-6 py-3 mb-6 border-2 border-dashed`}>
          <div className="text-lg font-bold text-foreground">
            {sectionInfo.title}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {sectionInfo.description}
          </div>
        </div>
        
        {/* Large Title Placeholder */}
        <div className="space-y-4 mb-8">
          <div className="h-12 bg-muted/40 rounded-lg max-w-lg mx-auto animate-pulse"></div>
          <div className="h-6 bg-muted/30 rounded-lg max-w-3xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-muted/20 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Content Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-card border-2 border-dashed border-border rounded-xl p-8 space-y-6 hover:border-primary/30 transition-colors">
            {/* Icon placeholder */}
            <div className="w-16 h-16 bg-muted/40 rounded-xl animate-pulse"></div>
            
            {/* Title placeholder */}
            <div className="space-y-3">
              <div className="h-6 bg-muted/50 rounded max-w-40 animate-pulse"></div>
              <div className="h-4 bg-muted/30 rounded max-w-32 animate-pulse"></div>
            </div>
            
            {/* Description placeholder */}
            <div className="space-y-2">
              <div className="h-3 bg-muted/30 rounded animate-pulse"></div>
              <div className="h-3 bg-muted/30 rounded max-w-32 animate-pulse"></div>
              <div className="h-3 bg-muted/30 rounded max-w-28 animate-pulse"></div>
            </div>
            
            {/* Button placeholder */}
            <div className="h-10 bg-muted/40 rounded-lg max-w-32 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Bottom Action Area */}
      <div className="text-center bg-muted/20 rounded-2xl p-12 border-2 border-dashed border-border">
        <div className="space-y-4">
          <div className="h-8 bg-muted/40 rounded-lg max-w-64 mx-auto animate-pulse"></div>
          <div className="h-12 bg-primary/20 rounded-lg max-w-48 mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

interface WireframeSectionProps {
  id: string;
  variant?: 'default' | 'gradient' | 'accent';
  backgroundColor?: string;
  children?: React.ReactNode;
  animation?: AnimationType;
  animationDelay?: number;
  showWireframe?: boolean;
}

export default function WireframeSection({ 
  id, 
  variant = 'default',
  backgroundColor = "bg-background",
  children,
  animation = 'fadeInUp',
  animationDelay = 0,
  showWireframe = true
}: WireframeSectionProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-background via-muted/30 to-accent/20';
      case 'accent':
        return 'bg-gradient-to-tr from-accent/10 to-secondary/20';
      default:
        return backgroundColor;
    }
  };

  return (
    <section id={id} className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()} relative overflow-hidden flex items-center`}>
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-secondary/3 to-muted/3 rounded-full blur-xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection animation={animation} delay={animationDelay}>
          {children || (showWireframe && <WireframePlaceholder sectionId={id} />)}
        </AnimatedSection>
      </div>
    </section>
  );
}