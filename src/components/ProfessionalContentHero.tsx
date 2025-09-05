import { useState, useEffect } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Code2,
  Sparkles,
  ChevronDown,
  Star,
  Users,
  Trophy,
  Clock,
  Shield,
  Zap,
  Target,
  CheckCircle2,
  Briefcase,
  Globe,
  Heart,
  Award,
  TrendingUp,
  Coffee,
  Lightbulb
} from 'lucide-react';

export default function ProfessionalContentHero() {
  const { language } = useLanguage();
  const [currentStat, setCurrentStat] = useState(0);

  const companyStats = [
    {
      icon: Users,
      value: '500+',
      label: language === 'ar' ? 'عميل راضي حول العالم' : 'Happy Clients Worldwide',
      desc: language === 'ar' ? 'نفخر بخدمة أكثر من 500 عميل من مختلف القطاعات' : 'Proudly serving 500+ clients across various industries'
    },
    {
      icon: Briefcase,
      value: '1000+',
      label: language === 'ar' ? 'مشروع مكتمل بنجاح' : 'Successfully Completed Projects',
      desc: language === 'ar' ? 'مشاريع متنوعة من المواقع البسيطة إلى الأنظمة المعقدة' : 'From simple websites to complex enterprise systems'
    },
    {
      icon: Award,
      value: '99.8%',
      label: language === 'ar' ? 'معدل رضا العملاء' : 'Client Satisfaction Rate',
      desc: language === 'ar' ? 'نحقق أعلى معدلات الرضا من خلال الجودة والالتزام' : 'Achieving highest satisfaction through quality and commitment'
    },
    {
      icon: Clock,
      value: '24/7',
      label: language === 'ar' ? 'دعم فني متواصل' : 'Continuous Technical Support',
      desc: language === 'ar' ? 'فريق دعم متخصص متاح على مدار الساعة' : 'Specialized support team available around the clock'
    }
  ];

  const expertiseAreas = [
    {
      icon: Code2,
      title: language === 'ar' ? 'تطوير الويب المتقدم' : 'Advanced Web Development',
      description: language === 'ar' 
        ? 'نستخدم أحدث التقنيات مثل React، Next.js، و Node.js لإنشاء مواقع ويب سريعة وآمنة ومتجاوبة مع جميع الأجهزة.'
        : 'Using latest technologies like React, Next.js, and Node.js to create fast, secure, and responsive websites for all devices.'
    },
    {
      icon: Target,
      title: language === 'ar' ? 'تطبيقات الجوال الأصلية' : 'Native Mobile Applications',
      description: language === 'ar'
        ? 'تطوير تطبيقات جو��ل احترافية لنظامي iOS و Android باستخدام React Native و Flutter مع تجربة مستخدم استثنائية.'
        : 'Professional mobile app development for iOS and Android using React Native and Flutter with exceptional user experience.'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'أنظمة إدارة المؤسسات' : 'Enterprise Management Systems',
      description: language === 'ar'
        ? 'حلول مخصصة لإدارة الموارد البشرية، المخزون، المبيعات، والمحاسبة مع أعلى معايير الأمان وحماية البيانات.'
        : 'Custom solutions for HR, inventory, sales, and accounting management with highest security standards and data protection.'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'حلول التجارة الإلكترونية' : 'E-Commerce Solutions',
      description: language === 'ar'
        ? 'منصات تجارة إلكترونية متكاملة مع أنظمة دفع آمنة، إدارة المخزون، وتحليلات مبيعات متقدمة.'
        : 'Complete e-commerce platforms with secure payment systems, inventory management, and advanced sales analytics.'
    }
  ];

  const companyValues = [
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'الابتكار المستمر' : 'Continuous Innovation',
      text: language === 'ar' ? 'نبحث دائماً عن أحدث الحلول التقنية' : 'Always seeking the latest technical solutions'
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'الشراكة الحقيقية' : 'True Partnership',
      text: language === 'ar' ? 'نؤمن بالعمل كشركاء وليس مجرد مقدمي خدمة' : 'We believe in working as partners, not just service providers'
    },
    {
      icon: Star,
      title: language === 'ar' ? 'الجودة العالية' : 'High Quality',
      text: language === 'ar' ? 'نضمن أعلى معايير الجودة في كل مشروع' : 'We guarantee the highest quality standards in every project'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % companyStats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [companyStats.length]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#tech-showcase');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-background/98 to-muted/10 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Enhanced Stats Bar */}
        <FadeInUp delay={100}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-medium">
                {language === 'ar' ? 'شركة رائدة في مجال تطوير البرمجيات منذ 2019' : 'Leading Software Development Company Since 2019'}
              </span>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {companyStats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      currentStat === index ? 'transform scale-105' : ''
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-500 ${
                      currentStat === index 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xl text-primary mb-1">{stat.value}</div>
                    <div className="text-sm font-medium mb-2">{stat.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Content - Takes 2/3 of space */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Company Introduction */}
            <FadeInUp delay={200}>
              <div className="space-y-6">
                <h1 className="leading-tight">
                  {language === 'ar' ? (
                    <>
                      نحول أفكارك إلى{' '}
                      <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        حلول رقمية مبتكرة
                      </span>{' '}
                      تحقق أهدافك وتتفوق على توقعاتك
                    </>
                  ) : (
                    <>
                      We Transform Your Ideas Into{' '}
                      <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Innovative Digital Solutions
                      </span>{' '}
                      That Exceed Expectations
                    </>
                  )}
                </h1>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {language === 'ar'
                      ? 'نحن فريق من المطورين والمصممين المتخصصين الذ��ن يمتلكون خبرة واسعة في مجال تطوير البرمجيات والتطبيقات. نؤمن بأن التكنولوجيا الحديثة هي الأساس لنجاح الأعمال في العصر الرقمي، ولذلك نقدم حلولاً تقنية متطورة ومخصصة تلبي احتياجات عملائنا الفريدة.'
                      : 'We are a team of specialized developers and designers with extensive experience in software and application development. We believe that modern technology is the foundation for business success in the digital age, which is why we provide advanced and customized technical solutions that meet our clients\' unique needs.'
                    }
                  </p>
                  
                  <p>
                    {language === 'ar'
                      ? 'منذ تأسيسنا، التزمنا بتقديم خدمات عالية الجودة تجمع بين الابتكار والاحترافية. نستخدم أحدث التقنيات والأدوات البرمجية لضمان تطوير مشاريع تتميز بالأداء المتفوق والأمان العالي والتصميم الجذاب الذي يعكس هوية عملائنا ويحقق رؤيتهم.'
                      : 'Since our establishment, we have been committed to providing high-quality services that combine innovation and professionalism. We use the latest technologies and programming tools to ensure the development of projects that feature superior performance, high security, and attractive design that reflects our clients\' identity and achieves their vision.'
                    }
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Company Values */}
            <FadeInUp delay={300}>
              <div className="space-y-4">
                <h3 className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  {language === 'ar' ? 'قيمنا وما نؤمن به' : 'Our Values & What We Believe In'}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {companyValues.map((value, index) => (
                    <div key={index} className="bg-card/30 border border-border/20 rounded-lg p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Expertise Areas */}
            <FadeInUp delay={400}>
              <div className="space-y-6">
                <h3 className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  {language === 'ar' ? 'مجالات خبرتنا المتخصصة' : 'Our Specialized Expertise Areas'}
                </h3>
                
                <div className="space-y-4">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="bg-card/40 border border-border/20 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <area.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-2 group-hover:text-primary transition-colors">{area.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Call to Action */}
            <FadeInUp delay={500}>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <button className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <Briefcase className="w-5 h-5" />
                  {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center gap-3 border border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-4 rounded-xl font-medium transition-all duration-300">
                  <Coffee className="w-5 h-5" />
                  {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                </button>
              </div>
            </FadeInUp>
          </div>

          {/* Small Image - Takes 1/3 of space */}
          <FadeInRight delay={300}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5 border border-border/20 shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsJTIwY2xlYW58ZW58MXx8fHwxNzU3MDAxNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'مساحة عمل نظيفة ومنظمة' : 'Clean and organized workspace'}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                        <Globe className="w-4 h-4 text-primary" />
                        {language === 'ar' ? 'نعمل مع العالم' : 'Working Globally'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full border-4 border-background shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-bold">
                    {language === 'ar' ? 'موثوق' : 'Trusted'}
                  </span>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>

        {/* Bottom Technologies */}
        <FadeInUp delay={600}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              {language === 'ar' ? 'نستخدم أحدث التقنيات والأدوات المتطورة' : 'Built with the latest technologies and advanced tools'}
            </p>
            <div className="flex justify-center items-center flex-wrap gap-8 opacity-60">
              <span className="text-sm font-mono bg-card/50 px-3 py-1 rounded-md">React</span>
              <span className="text-sm font-mono bg-card/50 px-3 py-1 rounded-md">Next.js</span>
              <span className="text-sm font-mono bg-card/50 px-3 py-1 rounded-md">TypeScript</span>
              <span className="text-sm font-mono bg-card/50 px-3 py-1 rounded-md">Node.js</span>
              <span className="text-sm font-mono bg-card/50 px-3 py-1 rounded-md">MongoDB</span>
              <span className="text-sm font-mono bg-card/50 px-3 py-1 rounded-md">AWS</span>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-xs font-medium">
            {language === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}