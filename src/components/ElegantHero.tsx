import { useState } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Play,
  CheckCircle2,
  Zap,
  Shield,
  Code2,
  ChevronDown
} from 'lucide-react';

export default function ElegantHero() {
  const { language } = useLanguage();

  const achievements = [
    {
      metric: '150+',
      label: language === 'ar' ? 'مشروع' : 'Projects'
    },
    {
      metric: '99%',
      label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'
    },
    {
      metric: '24/7',
      label: language === 'ar' ? 'دعم' : 'Support'
    }
  ];

  const keyPoints = [
    {
      icon: Zap,
      text: language === 'ar' ? 'تطوير سريع ومتقن' : 'Fast & Precise Development'
    },
    {
      icon: Shield,
      text: language === 'ar' ? 'حماية وأمان عالي' : 'High Security & Protection'
    },
    {
      icon: Code2,
      text: language === 'ar' ? 'كود نظيف ومحسن' : 'Clean & Optimized Code'
    }
  ];

  const scrollToNext = () => {
    const nextSection = document.querySelector('#tech-showcase');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-background via-background/98 to-muted/30">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary/4),transparent_70%)]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            
            {/* Badge */}
            <FadeInUp delay={200}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {language === 'ar' ? 'شركة برمجيات موثوقة' : 'Trusted Software Company'}
                </span>
              </div>
            </FadeInUp>

            {/* Main Heading */}
            <FadeInUp delay={300}>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {language === 'ar' ? (
                  <>
                    نطور حلولاً تقنية{' '}
                    <span className="text-primary">احترافية</span>{' '}
                    لأعمالك
                  </>
                ) : (
                  <>
                    We Build{' '}
                    <span className="text-primary">Professional</span>{' '}
                    Tech Solutions
                  </>
                )}
              </h1>
            </FadeInUp>

            {/* Description */}
            <FadeInUp delay={400}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'ar'
                  ? 'فريق متخصص في تطوير مواقع الويب والتطبيقات الحديثة، نقدم حلول تقنية مبتكرة تساعد في نمو أعمالك وتحقيق أهدافك.'
                  : 'Specialized team in developing modern websites and applications. We deliver innovative technical solutions that help grow your business and achieve your goals.'
                }
              </p>
            </FadeInUp>

            {/* Key Points */}
            <FadeInUp delay={500}>
              <div className="space-y-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <point.icon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-medium">{point.text}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>

            {/* CTAs - Centered */}
            <FadeInUp delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <Code2 className="w-4 h-4" />
                  {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  <Play className="w-4 h-4" />
                  {language === 'ar' ? 'شاهد أعمالنا' : 'View Our Work'}
                </button>
              </div>
            </FadeInUp>

            {/* Achievements - Compact */}
            <FadeInUp delay={700}>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border/50">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-primary">{achievement.metric}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* Image Side - Compact */}
          <FadeInRight delay={400}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU3MDAwOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'مساحة عمل نظيفة ومطور' : 'Clean workspace developer'}
                  className="w-full h-full object-cover"
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border">
                      <div className="text-sm font-medium text-gray-800">
                        {language === 'ar' ? '🚀 حلول تقنية حديثة' : '🚀 Modern Tech Solutions'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simple floating element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20 animate-float">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Scroll Indicator - Simple */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs font-medium">
            {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </div>
  );
}