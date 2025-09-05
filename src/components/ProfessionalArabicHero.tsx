import { AnimatedSection } from './AnimatedSection';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Play, Code, Database, Globe, Zap, Layers, Shield } from 'lucide-react';

export default function ProfessionalArabicHero() {
  const { language } = useLanguage();

  const technologies = [
    { name: 'Next.js', icon: Code, color: 'text-gray-700' },
    { name: 'React', icon: Layers, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-700' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Globe, color: 'text-green-600' },
    { name: 'AWS', icon: Shield, color: 'text-orange-500' }
  ];

  const content = {
    ar: {
      badge: "حلول بسيطة وفعّالة",
      title: "نساعدك في بناء موقعك الإلكتروني وتطبيقك بسهولة ووضوح",
      subtitle: "نحن نصمم ونطور مواقع الإنترنت والتطبيقات بطريقة بسيطة ومفهومة. هدفنا هو مساعدتك في الوصول لعملائك بشكل أفضل وتنمية عملك بخطوات واضحة ومدروسة.",
      description: "فريقنا يتميز بالخبرة والصبر في التعامل مع العملاء. نشرح لك كل خطوة ونتأكد من فهمك الكامل للمشروع. نعمل معك خطوة بخطوة لضمان الحصول على النتيجة التي تريدها بالضبط.",
      primaryBtn: "ابدأ مشروعك الآن",
      secondaryBtn: "شاهد أعمالنا",
      trustedBy: "نستخدم أفضل الأدوات",
      stats: {
        projects: "أكثر من 500 مشروع",
        clients: "أكثر من 200 عميل راض",
        experience: "خبرة 10 سنوات",
        satisfaction: "رضا العملاء 99%"
      }
    },
    en: {
      badge: "Simple & Effective Solutions",
      title: "We help you build your website and app with ease and clarity",
      subtitle: "We design and develop websites and applications in a simple and understandable way. Our goal is to help you reach your customers better and grow your business with clear and thoughtful steps.",
      description: "Our team is characterized by experience and patience in dealing with clients. We explain every step to you and make sure you fully understand the project. We work with you step by step to ensure you get exactly the result you want.",
      primaryBtn: "Start Your Project Now",
      secondaryBtn: "View Our Work",
      trustedBy: "We Use The Best Tools",
      stats: {
        projects: "500+ Happy Projects",
        clients: "200+ Satisfied Clients", 
        experience: "10 Years Experience",
        satisfaction: "99% Client Satisfaction"
      }
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/5 to-accent/10 pt-20 lg:pt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/8 to-accent/12 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/8 to-primary/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-transparent via-primary/3 to-transparent rounded-full"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center min-h-[600px] py-12 lg:py-0`}>
          
          {/* Content Side */}
          <div className={`space-y-8 ${language === 'ar' ? 'text-right order-2 lg:order-2' : 'text-left order-2 lg:order-1'} relative z-40`}>
            
            {/* Badge */}
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full cursor-pointer hover:bg-primary/20 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group relative z-50">
                <Zap className="w-4 h-4 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-50" />
                <span className="text-sm font-medium text-primary group-hover:text-primary/90 transition-colors relative z-50">
                  {currentContent.badge}
                </span>
              </div>
            </AnimatedSection>

            {/* Main Title */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:opacity-90 relative z-50">
                <span className="block text-[40px] relative z-50">
                  {currentContent.title}
                </span>
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection animation="fadeInUp" delay={300}>
              <p className="lg:text-xl text-[rgba(13,13,39,1)] leading-relaxed text-[16px] cursor-pointer hover:text-foreground/80 transition-colors duration-300 hover:scale-[1.02] transition-transform relative z-50">
                {currentContent.subtitle}
              </p>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection animation="fadeInUp" delay={400}>
              <p className="text-[rgba(17,17,34,1)] leading-relaxed text-[15px] cursor-pointer hover:text-foreground/80 transition-colors duration-300 hover:scale-[1.01] transition-transform relative z-50">
                {currentContent.description}
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation="fadeInUp" delay={500}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 relative z-50">
                {Object.values(currentContent.stats).map((stat, index) => (
                  <div key={index} className="text-center lg:text-left cursor-pointer hover:scale-110 transition-all duration-300 hover-float p-3 rounded-lg hover:bg-primary/5 hover:shadow-lg group relative z-50">
                    <div className="text-2xl font-bold text-primary mb-1 group-hover:text-primary/90 transition-colors relative z-50">{stat.split(' ')[0]}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-50">{stat.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'sm:justify-end' : 'sm:justify-start'} relative z-50`}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover-float hover:shadow-primary/30 cursor-pointer group relative overflow-hidden z-50"
                >
                  <span className="relative z-50">{currentContent.primaryBtn}</span>
                  {language === 'ar' ? 
                    <ArrowLeft className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300 relative z-50" /> : 
                    <ArrowLeft className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-all duration-300 relative z-50" />
                  }
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary/20 hover:border-primary/60 hover:bg-primary/10 px-8 py-4 text-base font-medium transition-all duration-500 hover:scale-110 hover-float hover:shadow-lg hover:shadow-primary/20 cursor-pointer group relative overflow-hidden z-50"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 text-primary relative z-50" />
                  <span className="relative z-50 group-hover:text-primary transition-colors">{currentContent.secondaryBtn}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </AnimatedSection>

          </div>

          {/* Image Side */}
          <div className={`relative w-full flex items-center justify-center ${language === 'ar' ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} z-10 mb-8 lg:mb-0`}>
            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.05] hover-float hover:shadow-primary/20 w-full max-w-md lg:max-w-none cursor-pointer group z-10">
                {/* Main Image */}
                <div className="aspect-[4/3] lg:aspect-[3/2] w-full bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[250px] lg:min-h-[450px] relative overflow-hidden z-10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY5NTAxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Web development and coding workspace"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 z-10"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-20"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 hover:bg-background group/badge z-30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover/badge:bg-green-400"></div>
                    <span className="text-xs font-medium group-hover/badge:text-primary transition-colors">Live Development</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 hover:bg-background group/badge z-30">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary group-hover/badge:scale-125 transition-transform duration-300" />
                    <span className="text-xs font-medium group-hover/badge:text-primary transition-colors">Clean Code</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-2xl animate-float z-5"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-2xl animate-float-delayed z-5"></div>
          </div>

        </div>

        {/* Trusted Technologies Section */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="mt-[15px] text-center p-[0px] mr-[0px] mb-[0px] ml-[0px] relative z-40">
            <p className="text-sm font-medium text-muted-foreground mb-8 relative z-40">
              {currentContent.trustedBy}
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 border-4 border-primary/20 px-[0px] py-[6px] rounded-2xl relative z-40">
              {technologies.map((tech, index) => (
                <AnimatedSection
                  key={tech.name}
                  animation="fadeInUp"
                  delay={900 + index * 100}
                >
                  <div className="flex items-center gap-3 px-5 py-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-xl hover:bg-card hover:shadow-primary/10 transition-all duration-500 hover:scale-110 hover-float cursor-pointer group relative overflow-hidden z-40">
                    <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-40`} />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors relative z-40">{tech.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}