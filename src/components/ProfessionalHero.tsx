import { useState, useEffect } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Code, 
  Shield,
  Zap,
  Star,
  TrendingUp,
  ChevronDown,
  CheckCircle,
  Globe,
  Award,
  Users,
  Clock,
  Rocket,
  Building,
  Target,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';

export default function ProfessionalHero() {
  const { language } = useLanguage();
  const [currentMetric, setCurrentMetric] = useState(0);

  const professionalMetrics = [
    {
      value: '250+',
      label: language === 'ar' ? 'مشروع مؤسسي منجز' : 'Enterprise Projects Delivered',
      icon: Building,
      description: language === 'ar' ? 'حلول تقنية متطورة للشركات الكبرى' : 'Advanced technical solutions for major corporations'
    },
    {
      value: '99.8%',
      label: language === 'ar' ? 'معدل الأداء والاستقرار' : 'Uptime & Performance Rate',
      icon: Zap,
      description: language === 'ar' ? 'ضمان استقرار وموثوقية النظم' : 'Guaranteed system stability and reliability'
    },
    {
      value: '48h',
      label: language === 'ar' ? 'متوسط وقت التطوير السريع' : 'Average Rapid Development Time',
      icon: Clock,
      description: language === 'ar' ? 'تطوير سريع دون التضحية بالجودة' : 'Fast development without compromising quality'
    },
    {
      value: '15+',
      label: language === 'ar' ? 'تقنية متقدمة متخصصة' : 'Advanced Specialized Technologies',
      icon: Cpu,
      description: language === 'ar' ? 'خبرة عميقة في أحدث التقنيات' : 'Deep expertise in cutting-edge technologies'
    }
  ];

  const technicalExpertise = [
    {
      icon: Code,
      title: language === 'ar' ? 'هندسة البرمجيات المتقدمة' : 'Advanced Software Engineering',
      tech: ['Microservices', 'Clean Architecture', 'Domain-Driven Design']
    },
    {
      icon: Cloud,
      title: language === 'ar' ? 'الحوسبة السحابية المؤسسية' : 'Enterprise Cloud Computing',
      tech: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      icon: Database,
      title: language === 'ar' ? 'إدارة البيانات الضخمة' : 'Big Data Management',
      tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'أمن المعلومات المتطور' : 'Advanced Information Security',
      tech: ['OAuth 2.0', 'JWT', 'Encryption', 'Penetration Testing']
    }
  ];

  const certifications = [
    { name: 'AWS Certified', level: 'Solutions Architect Professional' },
    { name: 'Microsoft Azure', level: 'DevOps Engineer Expert' },
    { name: 'Google Cloud', level: 'Professional Cloud Architect' },
    { name: 'ISO 27001', level: 'Information Security Certified' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % professionalMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [professionalMetrics.length]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#tech-showcase');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,theme(colors.primary/8),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,theme(colors.accent/6),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,theme(colors.primary/4),transparent_60%)]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,theme(colors.foreground)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.foreground)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Professional Messaging */}
          <div className="space-y-10">
            <FadeInUp delay={200}>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-full border border-primary/20 mb-8">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-medium">
                  {language === 'ar' 
                    ? '🏆 شركة رائدة في تطوير الحلول التقنية المؤسسية' 
                    : '🏆 Leading Enterprise Software Development Company'
                  }
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={400}>
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tight">
                {language === 'ar' ? (
                  <>
                    نصمم ونطور
                    <br />
                    <span className="relative bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                      النظم المؤسسية
                    </span>
                    <br />
                    المتطورة
                  </>
                ) : (
                  <>
                    We Engineer
                    <br />
                    <span className="relative bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                      Enterprise-Grade
                    </span>
                    <br />
                    Solutions
                  </>
                )}
              </h1>
            </FadeInUp>

            <FadeInUp delay={600}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {language === 'ar'
                  ? 'متخصصون في تطوير الأنظمة المؤسسية الحديثة، والحلول السحابية المتقدمة، وهندسة البرمجيات عالية الأداء للشركات الرائدة في المنطقة والعالم.'
                  : 'Specialized in developing modern enterprise systems, advanced cloud solutions, and high-performance software engineering for leading companies in the region and globally.'
                }
              </p>
            </FadeInUp>

            {/* Dynamic Metrics Display */}
            <FadeInUp delay={800}>
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = professionalMetrics[currentMetric].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {professionalMetrics[currentMetric].value}
                    </div>
                    <div className="font-medium text-foreground">
                      {professionalMetrics[currentMetric].label}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {professionalMetrics[currentMetric].description}
                </p>
                
                {/* Progress Indicators */}
                <div className="flex gap-2 mt-4">
                  {professionalMetrics.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === currentMetric ? 'bg-primary flex-1' : 'bg-muted w-8'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Technical Expertise Chips */}
            <FadeInUp delay={1000}>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">
                  {language === 'ar' ? 'مجالات الخبرة التقنية:' : 'Technical Expertise Areas:'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicalExpertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card/30 rounded-xl border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate">{item.title}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {item.tech.join(' • ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Professional CTAs */}
            <FadeInUp delay={1200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/25">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  {language === 'ar' ? 'ابدأ مشروعك المؤسسي' : 'Start Your Enterprise Project'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center gap-3 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                  <Target className="w-5 h-5" />
                  {language === 'ar' ? 'استشارة تقنية مجانية' : 'Free Technical Consultation'}
                </button>
              </div>
            </FadeInUp>

            {/* Professional Certifications */}
            <FadeInUp delay={1400}>
              <div className="pt-8 border-t border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-sm">
                    {language === 'ar' ? 'شهادات ومعايير عالمية معتمدة' : 'Globally Certified Standards'}
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-center p-3 bg-card/20 rounded-lg border border-border/30">
                      <div className="font-semibold text-xs text-primary">{cert.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{cert.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Visual Content */}
          <FadeInRight delay={600}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTY5NDU3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'فريق تطوير البرمجيات المحترف' : 'Professional software development team'}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with enterprise stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 space-y-4">
                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="text-white text-2xl font-bold">
                        {language === 'ar' ? 'حلول تقنية مؤسسية' : 'Enterprise Technical Solutions'}
                      </div>
                      <div className="text-white/80 text-sm">
                        {language === 'ar' ? 'للشركات الرائدة والمتوسطة' : 'For Leading & Mid-sized Companies'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Professional Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float shadow-xl">
                <Code className="w-12 h-12 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float-delayed shadow-xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>

              <div className="absolute top-1/3 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center backdrop-blur-sm animate-float shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-current to-transparent opacity-50"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">
              {language === 'ar' ? 'استكشف قدراتنا التقنية' : 'Explore Our Technical Capabilities'}
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
          </div>
        </button>
      </div>

      {/* Enterprise Trust Indicators */}
      <div className="absolute top-20 right-8 hidden xl:block">
        <div className="space-y-4">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">
                {language === 'ar' ? 'عملاء دوليون' : 'Global Clients'}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'ar' 
                ? 'نخدم شركات في 15+ دولة حول العالم'
                : 'Serving companies in 15+ countries worldwide'
              }
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">
                {language === 'ar' ? 'فريق متخصص' : 'Expert Team'}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'ar' 
                ? '25+ مهندس برمجيات وخبير تقني'
                : '25+ Software Engineers & Technical Experts'
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}