import { useState, useEffect } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Code2,
  Sparkles,
  ChevronDown,
  Play,
  Users,
  Trophy,
  Clock,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Target
} from 'lucide-react';

export default function InnovativeHero() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  const tabs = [
    {
      id: 'development',
      icon: Code2,
      title: language === 'ar' ? 'التطوير' : 'Development',
      desc: language === 'ar' ? 'مواقع وتطبيقات حديثة' : 'Modern Web & Apps'
    },
    {
      id: 'design',
      icon: Sparkles,
      title: language === 'ar' ? 'التصميم' : 'Design',
      desc: language === 'ar' ? 'واجهات مستخدم متقدمة' : 'Advanced UI/UX'
    },
    {
      id: 'optimization',
      icon: Zap,
      title: language === 'ar' ? 'التحسين' : 'Optimization',
      desc: language === 'ar' ? 'أداء وسرعة فائقة' : 'Performance & Speed'
    }
  ];

  const stats = [
    { icon: Users, value: '150+', label: language === 'ar' ? 'عميل راضي' : 'Happy Clients' },
    { icon: Trophy, value: '99%', label: language === 'ar' ? 'معدل النجاح' : 'Success Rate' },
    { icon: Clock, value: '24/7', label: language === 'ar' ? 'دعم مستمر' : 'Support' },
    { icon: Star, value: '4.9', label: language === 'ar' ? 'تقييم العملاء' : 'Client Rating' }
  ];

  const features = [
    { icon: Target, text: language === 'ar' ? 'حلول مخصصة' : 'Custom Solutions' },
    { icon: Shield, text: language === 'ar' ? 'أمان عالي' : 'High Security' },
    { icon: Zap, text: language === 'ar' ? 'أداء سريع' : 'Fast Performance' }
  ];

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3000);

    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => {
      clearInterval(tabInterval);
      clearInterval(statInterval);
    };
  }, [tabs.length, stats.length]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#tech-showcase');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Stats Bar */}
        <FadeInUp delay={100}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl px-6 py-3">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    currentStat === index ? 'scale-110 text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <stat.icon className="w-4 h-4" />
                  <span className="font-bold">{stat.value}</span>
                  <span className="text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            
            {/* Badge */}
            <FadeInUp delay={200}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium">
                  {language === 'ar' ? 'نحن نصنع الفرق في عالم التكنولوجيا' : 'Making the difference in tech world'}
                </span>
              </div>
            </FadeInUp>

            {/* Main Heading with Dynamic Tabs */}
            <FadeInUp delay={300}>
              <div className="space-y-4">
                <h1 className="leading-tight">
                  {language === 'ar' ? (
                    <>
                      نقدم أفضل خدمات
                      <br />
                      <span className="relative inline-block">
                        <span className="text-primary font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {tabs[activeTab].title}
                        </span>
                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                      </span>{' '}
                      التقنية
                    </>
                  ) : (
                    <>
                      We Deliver Excellence in
                      <br />
                      <span className="relative inline-block">
                        <span className="text-primary font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {tabs[activeTab].title}
                        </span>
                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                      </span>{' '}
                      Services
                    </>
                  )}
                </h1>
                
                {/* Tab Description */}
                <p className="text-muted-foreground transition-all duration-500">
                  {tabs[activeTab].desc}
                </p>
              </div>
            </FadeInUp>

            {/* Interactive Tabs */}
            <FadeInUp delay={400}>
              <div className="flex gap-2">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                        : 'bg-card border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.title}</span>
                  </button>
                ))}
              </div>
            </FadeInUp>

            {/* Features */}
            <FadeInUp delay={500}>
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 bg-card/50 border border-border/30 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-center">{feature.text}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>

            {/* CTAs */}
            <FadeInUp delay={600}>
              <div className="flex items-center gap-4">
                <button className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <Code2 className="w-4 h-4" />
                  {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3 rounded-xl font-medium transition-all duration-300">
                  <Play className="w-4 h-4" />
                  {language === 'ar' ? 'شاهد عرض توضيحي' : 'Watch Demo'}
                </button>
              </div>
            </FadeInUp>
          </div>

          {/* Visual Side */}
          <FadeInRight delay={400}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9ncmFtbWluZyUyMG11bHRpcGxlJTIwbW9uaXRvcnMlMjBkYXJrfGVufDF8fHx8MTc1NzAwMTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'مطور يعمل على شاشات متعددة' : 'Developer working on multiple monitors'}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with floating elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                  {/* Code snippet overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-green-400 text-xs font-mono">
                        {language === 'ar' ? '> npm run build' : '> npm run build'}
                        <br />
                        <span className="text-white">
                          {language === 'ar' ? '✓ تم التحسين بنجاح' : '✓ Build optimized successfully'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full border-4 border-background shadow-lg animate-bounce">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-bold">
                    {language === 'ar' ? 'نجح!' : 'Success!'}
                  </span>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">150+</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'ar' ? 'مشروع' : 'Projects'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>

        {/* Bottom Section - Technologies */}
        <FadeInUp delay={700}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'ar' ? 'نستخدم أحدث التقنيات' : 'Built with modern technologies'}
            </p>
            <div className="flex justify-center items-center gap-6 opacity-60">
              <span className="text-sm font-mono">React</span>
              <span className="text-sm font-mono">TypeScript</span>
              <span className="text-sm font-mono">Node.js</span>
              <span className="text-sm font-mono">Next.js</span>
              <span className="text-sm font-mono">Tailwind</span>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-xs font-medium">
            {language === 'ar' ? 'استكشف المزيد' : 'Explore More'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}