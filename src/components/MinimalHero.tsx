import { useState, useEffect } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Code2,
  Sparkles,
  ChevronDown,
  Timer,
  Shield,
  Zap
} from 'lucide-react';

export default function MinimalHero() {
  const { language } = useLanguage();
  const [currentWord, setCurrentWord] = useState(0);

  const dynamicWords = language === 'ar' 
    ? ['المواقع', 'التطبيقات', 'الأنظمة', 'الحلول']
    : ['Websites', 'Applications', 'Systems', 'Solutions'];

  const stats = [
    { number: '150+', label: language === 'ar' ? 'مشروع' : 'Projects' },
    { number: '99%', label: language === 'ar' ? 'رضا' : 'Satisfaction' },
    { number: '2h', label: language === 'ar' ? 'استجابة' : 'Response' }
  ];

  const features = [
    { icon: Zap, text: language === 'ar' ? 'تطوير سريع' : 'Fast Development' },
    { icon: Shield, text: language === 'ar' ? 'أمان متقدم' : 'Advanced Security' },
    { icon: Code2, text: language === 'ar' ? 'كود محسن' : 'Optimized Code' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#tech-showcase');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative py-8 bg-background">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            
            {/* Small Badge */}
            <FadeInUp delay={200}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/8 rounded-full border border-primary/15">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium">
                  {language === 'ar' ? 'خبراء البرمجة' : 'Programming Experts'}
                </span>
              </div>
            </FadeInUp>

            {/* Dynamic Heading */}
            <FadeInUp delay={300}>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                {language === 'ar' ? (
                  <>
                    نصمم ونطور
                    <br />
                    <span className="relative">
                      <span className="text-primary transition-all duration-500">
                        {dynamicWords[currentWord]}
                      </span>
                    </span>{' '}
                    احترافية
                  </>
                ) : (
                  <>
                    We Design & Build
                    <br />
                    Professional{' '}
                    <span className="relative">
                      <span className="text-primary transition-all duration-500">
                        {dynamicWords[currentWord]}
                      </span>
                    </span>
                  </>
                )}
              </h1>
            </FadeInUp>

            {/* Description */}
            <FadeInUp delay={400}>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {language === 'ar'
                  ? 'فريق متخصص في تطوير حلول تقنية مبتكرة وحديثة، نساعدك في تحويل أفكارك إلى واقع رقمي متطور.'
                  : 'Specialized team in developing innovative and modern technical solutions. We help you transform your ideas into advanced digital reality.'
                }
              </p>
            </FadeInUp>

            {/* Features */}
            <FadeInUp delay={500}>
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary/15 rounded-md flex items-center justify-center">
                      <feature.icon className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>

            {/* Compact CTAs */}
            <FadeInUp delay={600}>
              <div className="flex items-center gap-3">
                <button className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <Code2 className="w-3.5 h-3.5" />
                  {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                
                <button className="inline-flex items-center gap-2 border border-border hover:border-primary/40 hover:bg-primary/3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  <Timer className="w-3.5 h-3.5" />
                  {language === 'ar' ? 'عرض الأعمال' : 'View Portfolio'}
                </button>
              </div>
            </FadeInUp>

            {/* Stats */}
            <FadeInUp delay={700}>
              <div className="flex items-center gap-6 pt-4 border-t border-border/30">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-bold text-primary">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* Coding Image */}
          <FadeInRight delay={400}>
            <div className="relative">
              <div className="aspect-[5/4] rounded-xl overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5 border border-border/20 shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWVyJTIwc2NyZWVuJTIwY29kZSUyMGxhcHRvcHxlbnwxfHx8fDE3NTcwMDExOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'برمجة على شاشة الكمبيوتر' : 'Programming on computer screen'}
                  className="w-full h-full object-cover"
                />
                
                {/* Code overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/40 backdrop-blur-sm rounded-md p-2 border border-white/10">
                      <div className="text-white text-xs font-mono">
                        {language === 'ar' ? '{ حلول_تقنية: "احترافية" }' : '{ solutions: "professional" }'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Small floating element */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/15 animate-float">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs">
            {language === 'ar' ? 'المزيد' : 'More'}
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </div>
  );
}