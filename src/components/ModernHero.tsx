import { useState, useEffect } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Code, 
  Rocket, 
  Zap,
  Star,
  Play,
  ChevronDown
} from 'lucide-react';

export default function ModernHero() {
  const { language } = useLanguage();
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'text-blue-500' },
    { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
    { name: 'Node.js', icon: '💚', color: 'text-green-500' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
    { name: 'Next.js', icon: '▲', color: 'text-gray-800 dark:text-white' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#tech-showcase');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/10),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.accent/10),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <FadeInUp delay={200}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {language === 'ar' ? '🚀 نطور مستقبلك الرقمي' : '🚀 Building Your Digital Future'}
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={400}>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {language === 'ar' ? (
                  <>
                    نحول أفكارك إلى
                    <br />
                    <span className="relative">
                      حلول رقمية
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
                    </span>
                  </>
                ) : (
                  <>
                    Transform Ideas Into
                    <br />
                    <span className="relative">
                      Digital Solutions
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
                    </span>
                  </>
                )}
              </h1>
            </FadeInUp>

            <FadeInUp delay={600}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {language === 'ar'
                  ? 'نصمم ونطور مواقع ويب وتطبيقات متطورة باستخدام أحدث التقنيات لضمان تجربة مستخدم استثنائية'
                  : 'We design and develop advanced websites and applications using cutting-edge technologies to ensure an exceptional user experience'
                }
              </p>
            </FadeInUp>

            {/* Dynamic Tech Display */}
            <FadeInUp delay={800}>
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'متخصصون في:' : 'Specialized in:'}
                  </span>
                  <div className="flex items-center gap-2 transition-all duration-500">
                    <span className="text-2xl">{technologies[currentTech].icon}</span>
                    <span className={`font-semibold ${technologies[currentTech].color}`}>
                      {technologies[currentTech].name}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {technologies.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTech ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Action Buttons */}
            <FadeInUp delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-primary px-8 py-4 rounded-xl font-medium transition-all duration-300">
                  <Play className="w-5 h-5" />
                  {language === 'ar' ? 'شاهد أعمالنا' : 'View Our Work'}
                </button>
              </div>
            </FadeInUp>

            {/* Quick Stats */}
            <FadeInUp delay={1200}>
              <div className="flex items-center gap-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'مشروع' : 'Projects'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'دعم' : 'Support'}
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Image */}
          <FadeInRight delay={600}>
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU2OTk5NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'مساحة عمل تطوير حديثة' : 'Modern development workspace'}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                <Code className="w-8 h-8 text-primary" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float-delayed">
                <Zap className="w-10 h-10 text-accent-foreground" />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm">
            {language === 'ar' ? 'استكشف المزيد' : 'Explore More'}
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </div>
  );
}