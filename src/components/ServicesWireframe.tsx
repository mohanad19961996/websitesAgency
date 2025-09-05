import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2, Zap, BookOpen, Users, Headphones, Clock, Shield, TrendingUp } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';

export default function ServicesWireframe() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalPages = 3;

  // Success stories data for carousel
  const successStories = [
    {
      id: 1,
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed',
      role: language === 'ar' ? 'رائد أعمال' : 'Entrepreneur',
      result: language === 'ar' ? 'زيادة الأرباح 300%' : '300% Profit Increase',
      story: language === 'ar' 
        ? 'تمكنت من تطوير مشروعي الصغير إلى شركة ناجحة خلال 6 أشهر فقط'
        : 'I transformed my small project into a successful company in just 6 months',
      category: 'business'
    },
    {
      id: 2,
      name: language === 'ar' ? 'فاطمة علي' : 'Fatima Ali',
      role: language === 'ar' ? 'مطورة مواقع' : 'Web Developer',
      result: language === 'ar' ? 'راتب أعلى بـ 150%' : '150% Higher Salary',
      story: language === 'ar' 
        ? 'حصلت على الوظيفة المثالية وضاعفت راتبي في أقل من شهرين'
        : 'Got my dream job and doubled my salary in less than two months',
      category: 'career'
    },
    {
      id: 3,
      name: language === 'ar' ? 'يوسف خالد' : 'Youssef Khaled',
      role: language === 'ar' ? 'مستقل' : 'Freelancer',
      result: language === 'ar' ? '5000$ شهرياً' : '$5000 Monthly',
      story: language === 'ar' 
        ? 'بدأت العمل الحر وحققت دخل ثابت يفوق وظيفتي السابقة'
        : 'Started freelancing and achieved steady income exceeding my previous job',
      category: 'freelance'
    },
    {
      id: 4,
      name: language === 'ar' ? 'نورا سالم' : 'Nora Salem',
      role: language === 'ar' ? 'مدربة' : 'Coach',
      result: language === 'ar' ? '100+ عميل' : '100+ Clients',
      story: language === 'ar' 
        ? 'أسست مركز تدريبي وأصبحت خبيرة معتمدة في مجالي'
        : 'Founded a training center and became a certified expert in my field',
      category: 'coaching'
    }
  ];

  // Triple the items for infinite scroll
  const infiniteItems = [...successStories, ...successStories, ...successStories];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoPlay) return;

    const scrollWidth = scrollContainer.scrollWidth / 3; // Since we tripled the content
    let scrollPosition = scrollWidth; // Start from middle set
    scrollContainer.scrollLeft = scrollPosition;

    const autoScroll = () => {
      scrollPosition += 1;
      
      // Reset to middle when reaching the end
      if (scrollPosition >= scrollWidth * 2) {
        scrollPosition = scrollWidth;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, 50); // Smooth scroll every 50ms

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          {language === 'ar' ? 'خدماتنا وباقاتنا' : 'Our Services & Packages'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === 'ar' 
            ? 'اختر الباقة المناسبة لك وابدأ رحلتك نحو النجاح اليوم'
            : 'Choose the right package for you and start your journey to success today'
          }
        </p>
      </div>

      {/* Success Stories Carousel */}
      <FadeInUp delay={200}>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center">
            {language === 'ar' ? 'قصص نجاح عملائنا' : 'Our Clients Success Stories'}
          </h3>
          
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden gap-6 pb-4"
            style={{ 
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {infiniteItems.map((story, index) => (
              <div 
                key={`${story.id}-${Math.floor(index / successStories.length)}`}
                className="flex-shrink-0 w-80 h-56 bg-gradient-to-br from-background/90 to-muted/20 rounded-xl border border-border/40 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 backdrop-blur-sm"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{story.name}</h4>
                        <p className="text-xs text-muted-foreground">{story.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Result */}
                  <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-3 mb-3">
                    <p className="text-sm font-semibold text-primary">{story.result}</p>
                  </div>
                  
                  {/* Story */}
                  <p className="text-sm text-muted-foreground italic leading-relaxed flex-grow">
                    "{story.story}"
                  </p>
                  
                  {/* Category Badge */}
                  <div className="pt-3 border-t border-border/30 mt-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/20 rounded-full text-xs">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      {language === 'ar' ? 'قصة موثقة' : 'Verified Story'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for Infinite Feel */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          
          {/* Auto-play Indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-primary animate-pulse' : 'bg-muted'}`}></div>
            <span className="text-xs bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
              {isAutoPlay ? (language === 'ar' ? 'تشغيل تلقائي' : 'Auto-play') : (language === 'ar' ? 'متوقف' : 'Paused')}
            </span>
          </div>
        </div>
      </div>
      </FadeInUp>

      {/* Features Showcase */}
      <FadeInLeft delay={400}>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center">
            {language === 'ar' ? 'ما تحصل عليه معنا' : 'What You Get With Us'}
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll gap-4">
            {/* First set of features */}
            {[
              { icon: Zap, title: language === 'ar' ? 'نتائج سريعة' : 'Fast Results', desc: language === 'ar' ? 'خلال 7 أيام' : 'Within 7 days' },
              { icon: BookOpen, title: language === 'ar' ? 'محتوى شامل' : 'Complete Content', desc: language === 'ar' ? '+50 درس' : '+50 lessons' },
              { icon: Users, title: language === 'ar' ? 'مجتمع داعم' : 'Supportive Community', desc: language === 'ar' ? '15,000+ عضو' : '15,000+ members' },
              { icon: Headphones, title: language === 'ar' ? 'دعم 24/7' : '24/7 Support', desc: language === 'ar' ? 'فريق متخصص' : 'Expert team' },
              { icon: Clock, title: language === 'ar' ? 'مرونة كاملة' : 'Full Flexibility', desc: language === 'ar' ? 'تعلم بوقتك' : 'Learn at your pace' },
              { icon: Shield, title: language === 'ar' ? 'ضمان مدى الحياة' : 'Lifetime Guarantee', desc: language === 'ar' ? 'استرداد مضمون' : 'Money back guarantee' },
              { icon: CheckCircle2, title: language === 'ar' ? 'شهادات معتمدة' : 'Certified Credentials', desc: language === 'ar' ? 'شهادة إتمام' : 'Completion certificate' },
              { icon: TrendingUp, title: language === 'ar' ? 'تتبع التقدم' : 'Progress Tracking', desc: language === 'ar' ? 'تقارير مفصلة' : 'Detailed reports' }
            ].map((feature, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm rounded-lg p-4 border border-border/40 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-1 bg-primary/30 rounded"></div>
                  <div className="w-5/6 h-1 bg-primary/25 rounded"></div>
                  <div className="w-4/5 h-1 bg-primary/20 rounded"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { icon: Zap, title: language === 'ar' ? 'نتائج سريعة' : 'Fast Results', desc: language === 'ar' ? 'خلال 7 أيام' : 'Within 7 days' },
              { icon: BookOpen, title: language === 'ar' ? 'محتوى شامل' : 'Complete Content', desc: language === 'ar' ? '+50 درس' : '+50 lessons' },
              { icon: Users, title: language === 'ar' ? 'مجتمع داعم' : 'Supportive Community', desc: language === 'ar' ? '15,000+ عضو' : '15,000+ members' },
              { icon: Headphones, title: language === 'ar' ? 'دعم 24/7' : '24/7 Support', desc: language === 'ar' ? 'فريق متخصص' : 'Expert team' },
              { icon: Clock, title: language === 'ar' ? 'مرونة كاملة' : 'Full Flexibility', desc: language === 'ar' ? 'تعلم بوقتك' : 'Learn at your pace' },
              { icon: Shield, title: language === 'ar' ? 'ضمان مدى الحياة' : 'Lifetime Guarantee', desc: language === 'ar' ? 'استرداد مضمون' : 'Money back guarantee' },
              { icon: CheckCircle2, title: language === 'ar' ? 'شهادات معتمدة' : 'Certified Credentials', desc: language === 'ar' ? 'شهادة إتمام' : 'Completion certificate' },
              { icon: TrendingUp, title: language === 'ar' ? 'تتبع التقدم' : 'Progress Tracking', desc: language === 'ar' ? 'تقارير مفصلة' : 'Detailed reports' }
            ].map((feature, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm rounded-lg p-4 border border-border/40 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-1 bg-primary/30 rounded"></div>
                  <div className="w-5/6 h-1 bg-primary/25 rounded"></div>
                  <div className="w-4/5 h-1 bg-primary/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeInLeft>

      {/* Pricing Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">
            {language === 'ar' ? 'اختر الباقة المناسبة لك' : 'Choose Your Perfect Package'}
          </h3>
          <p className="text-muted-foreground">
            {language === 'ar' 
              ? 'جميع الباقات تشمل ضمان استرداد المبلغ خلال 30 يوم'
              : 'All packages include 30-day money-back guarantee'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Starter Package */}
          <ScaleIn delay={600}>
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border border-muted relative cursor-pointer card-hover transition-all duration-300 group">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'باقة البداية' : 'Starter Package'}
                </h4>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">$49</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'دفعة واحدة' : 'One-time payment'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  language === 'ar' ? 'دورة تدريبية أساسية' : 'Basic training course',
                  language === 'ar' ? 'دعم عبر الإيميل' : 'Email support',
                  language === 'ar' ? 'مجتمع المتعلمين' : 'Learners community',
                  language === 'ar' ? 'شهادة إتمام' : 'Completion certificate',
                  language === 'ar' ? 'وصول لمدة 6 شهور' : '6-month access'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full" variant="outline">
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
              </Button>
            </div>
          </ScaleIn>
          
          {/* Popular Package */}
          <ScaleIn delay={800}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border-2 border-primary/20 relative transform scale-105 cursor-pointer card-hover transition-all duration-300 group hover:scale-110">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                </span>
              </div>
              
              <div className="text-center mb-6 pt-3">
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'باقة الاحتراف' : 'Professional Package'}
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-muted-foreground line-through">$149</span>
                    <div className="text-3xl font-bold">$97</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'وفر 35%' : 'Save 35%'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  language === 'ar' ? 'دورة تدريبية شاملة' : 'Complete training course',
                  language === 'ar' ? 'دعم مباشر 24/7' : '24/7 live support',
                  language === 'ar' ? 'جلسات فردية' : 'One-on-one sessions',
                  language === 'ar' ? 'أدوات متقدمة' : 'Advanced tools',
                  language === 'ar' ? 'مجتمع VIP' : 'VIP community',
                  language === 'ar' ? 'وصول مدى الحياة' : 'Lifetime access'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full">
                {language === 'ar' ? 'اختر هذه الباقة' : 'Choose This Package'}
              </Button>
            </div>
          </ScaleIn>
          
          {/* VIP Package */}
          <ScaleIn delay={1000}>
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-6 border border-accent/30 relative cursor-pointer card-hover transition-all duration-300 group">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'باقة VIP' : 'VIP Package'}
                </h4>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">$197</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'تجربة حصرية' : 'Exclusive experience'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  language === 'ar' ? 'كل شيء في الباقة الاحترافية' : 'Everything in Professional',
                  language === 'ar' ? 'تدريب شخصي 1:1' : 'Personal 1:1 coaching',
                  language === 'ar' ? 'خطة عمل مخصصة' : 'Custom action plan',
                  language === 'ar' ? 'دعم الواتساب' : 'WhatsApp support',
                  language === 'ar' ? 'مكالمات أسبوعية' : 'Weekly calls',
                  language === 'ar' ? 'ضمان النتائج' : 'Results guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full" variant="outline">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Button>
            </div>
          </ScaleIn>
        </div>
      </div>
      
      {/* Pagination Example */}
      <div className="space-y-6">
        <div className="w-32 h-4 bg-foreground/60 rounded"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-muted/30 cursor-pointer card-hover transition-all duration-300 hover:bg-background/80 hover:border-primary/20">
              <div className="space-y-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg"></div>
                <div className="w-full h-3 bg-foreground/40 rounded"></div>
                <div className="w-4/5 h-3 bg-muted-foreground/40 rounded"></div>
                <div className="space-y-1">
                  <div className="w-full h-2 bg-muted-foreground/30 rounded"></div>
                  <div className="w-3/4 h-2 bg-muted-foreground/30 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                  className="cursor-pointer transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-110"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}