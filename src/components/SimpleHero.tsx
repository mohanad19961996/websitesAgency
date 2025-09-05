import { AnimatedSection } from './AnimatedSection';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Play, Zap, Trophy, Users, Clock, Star, CheckCircle, Code } from 'lucide-react';

export default function SimpleHero() {
  const { language } = useLanguage();

  const content = {
    ar: {
      badge: "حلول بسيطة وفعّالة",
      title: "نساعدك في بناء موقعك الإلكتروني وتطبيقك بسهولة ووضوح",
      subtitle: "نحن نصمم ونطور مواقع الإنترنت والتطبيقات بطريقة بسيطة ومفهومة. هدفنا هو مساعدتك في الوصول لعملائك بشكل أفضل وتنمية عملك بخطوات واضحة ومدروسة.",
      description: "فريقنا يتميز بالخبرة والصبر في التعامل مع العملاء. نشرح لك كل خطوة ونتأكد من فهمك الكامل للمشروع. نعمل معك خطوة بخطوة لضمان الحصول على النتيجة التي تريدها بالضبط.",
      primaryBtn: "ابدأ مشروعك الآن",
      secondaryBtn: "شاهد أعمالنا",
      metrics: [
        {
          icon: Trophy,
          value: "50+",
          label: "مشروع مكتمل",
          description: "مواقع وتطبيقات ناجحة"
        },
        {
          icon: Star,
          value: "98%",
          label: "رضا العملاء",
          description: "تقييمات إيجابية"
        },
        {
          icon: Clock,
          value: "24/7",
          label: "دعم مستمر",
          description: "متوفرون دائماً"
        },
        {
          icon: Code,
          value: "15+",
          label: "تقنية حديثة",
          description: "أحدث الأدوات"
        }
      ]
    },
    en: {
      badge: "Simple & Effective Solutions",
      title: "We help you build your website and app with ease and clarity",
      subtitle: "We design and develop websites and applications in a simple and understandable way. Our goal is to help you reach your customers better and grow your business with clear and thoughtful steps.",
      description: "Our team is characterized by experience and patience in dealing with clients. We explain every step to you and make sure you fully understand the project. We work with you step by step to ensure you get exactly the result you want.",
      primaryBtn: "Start Your Project Now",
      secondaryBtn: "View Our Work",
      metrics: [
        {
          icon: Trophy,
          value: "50+",
          label: "Projects Completed",
          description: "Successful websites & apps"
        },
        {
          icon: Star,
          value: "98%",
          label: "Client Satisfaction",
          description: "Positive reviews"
        },
        {
          icon: Clock,
          value: "24/7",
          label: "Continuous Support",
          description: "Always available"
        },
        {
          icon: Code,
          value: "15+",
          label: "Modern Technologies",
          description: "Latest tools"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='currentColor' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          color: 'var(--primary)'
        }}></div>
      </div>

      {/* Left side image */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
        <AnimatedSection animation="fadeInLeft" delay={700}>
          <div className="relative group cursor-pointer">
            <div className="w-24 h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover-float">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579882392185-581038fbc8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY29kaW5nJTIwd29ya3NwYWNlJTIwc2V0dXB8ZW58MXx8fHwxNzU3MDA5ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coding workspace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Small decorative element */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
          </div>
        </AnimatedSection>
      </div>

      {/* Right side image */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
        <AnimatedSection animation="fadeInRight" delay={800}>
          <div className="relative group cursor-pointer">
            <div className="w-24 h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover-float">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707769328139-e755d95c6d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGxhcHRvcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3MDA5ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern technology"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Small decorative element */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/20 rounded-full animate-float-delayed"></div>
          </div>
        </AnimatedSection>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-16 w-1 h-1 bg-primary/30 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content */}
        <div className={`text-center space-y-8 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          
          {/* Badge */}
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Zap className="w-4 h-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="text-sm font-medium text-primary">
                {currentContent.badge}
              </span>
            </div>
          </AnimatedSection>

          {/* Main Title */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight heading-interactive heading-elegant-underline">
              {currentContent.title}
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg lg:text-xl text-foreground max-w-2xl mx-auto leading-relaxed font-bold">
              {currentContent.subtitle}
            </p>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <p className="text-foreground max-w-xl mx-auto leading-relaxed text-[16px]">
              {currentContent.description}
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fadeInUp" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 hover:scale-105 hover-float transition-all duration-300 group text-white"
              >
                <span className="text-white">{currentContent.primaryBtn}</span>
                {language === 'ar' ? 
                  <ArrowLeft className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" /> : 
                  <ArrowLeft className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-white" />
                }
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 hover:scale-105 hover-float transition-all duration-300 group border-primary/30 hover:border-primary/60"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-primary" />
                <span>{currentContent.secondaryBtn}</span>
              </Button>
            </div>
          </AnimatedSection>

          {/* Metrics Cards */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="pt-12 mt-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 max-w-3xl mx-auto">
                {currentContent.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="group relative p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/80 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="absolute top-1 right-1 w-6 h-6 border border-primary/20 rounded-full"></div>
                      <div className="absolute bottom-1 left-1 w-3 h-3 border border-primary/15 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-2">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                        <metric.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Value */}
                      <div className="space-y-1">
                        <h3 className="text-lg lg:text-xl font-semibold text-primary group-hover:scale-105 transition-transform duration-300">
                          {metric.value}
                        </h3>
                        <h4 className="text-sm font-medium text-foreground">
                          {metric.label}
                        </h4>
                        <p className="text-xs text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                          {metric.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}