import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  Monitor,
  Smartphone,
  ShoppingCart,
  Brush,
  Search,
  Headphones,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

export default function ModernServices() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: language === 'ar' ? 'تطوير مواقع الويب' : 'Web Development',
      description: language === 'ar' 
        ? 'نصمم ونطور مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات'
        : 'We design and develop modern, responsive websites using the latest technologies',
      features: [
        language === 'ar' ? 'تصميم متجاوب' : 'Responsive Design',
        language === 'ar' ? 'أداء سريع' : 'Fast Performance',
        language === 'ar' ? 'سهولة الاستخدام' : 'User Friendly'
      ],
      price: language === 'ar' ? 'من $299' : 'From $299',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps',
      description: language === 'ar'
        ? 'ننشئ تطبيقات جوال متطورة لنظامي iOS و Android'
        : 'We create advanced mobile applications for iOS and Android systems',
      features: [
        language === 'ar' ? 'متعدد المنصات' : 'Cross Platform',
        language === 'ar' ? 'أداء أصلي' : 'Native Performance',
        language === 'ar' ? 'تجربة سلسة' : 'Smooth Experience'
      ],
      price: language === 'ar' ? 'من $599' : 'From $599',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      icon: ShoppingCart,
      title: language === 'ar' ? 'متاجر إلكترونية' : 'E-commerce Stores',
      description: language === 'ar'
        ? 'نبني متاجر إلكترونية شاملة مع أنظمة دفع آمنة'
        : 'We build comprehensive e-commerce stores with secure payment systems',
      features: [
        language === 'ar' ? 'دفع آمن' : 'Secure Payment',
        language === 'ar' ? 'إدارة المخزون' : 'Inventory Management',
        language === 'ar' ? 'تتبع الطلبات' : 'Order Tracking'
      ],
      price: language === 'ar' ? 'من $899' : 'From $899',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      icon: Brush,
      title: language === 'ar' ? 'تصميم UI/UX' : 'UI/UX Design',
      description: language === 'ar'
        ? 'نصمم واجهات مستخدم جذابة وتجارب مستخدم استثنائية'
        : 'We design attractive user interfaces and exceptional user experiences',
      features: [
        language === 'ar' ? 'تصميم حديث' : 'Modern Design',
        language === 'ar' ? 'سهولة التنقل' : 'Easy Navigation',
        language === 'ar' ? 'تجربة بديهية' : 'Intuitive Experience'
      ],
      price: language === 'ar' ? 'من $199' : 'From $199',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    },
    {
      icon: Search,
      title: language === 'ar' ? 'تحسين محركات البحث' : 'SEO Optimization',
      description: language === 'ar'
        ? 'نحسن موقعك لمحركات البحث لزيادة الظهور والزيارات'
        : 'We optimize your website for search engines to increase visibility and traffic',
      features: [
        language === 'ar' ? 'تحليل الكلمات المفتاحية' : 'Keyword Analysis',
        language === 'ar' ? 'تحسين المحتوى' : 'Content Optimization',
        language === 'ar' ? 'تقارير مفصلة' : 'Detailed Reports'
      ],
      price: language === 'ar' ? 'من $149' : 'From $149',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-950/20'
    },
    {
      icon: Headphones,
      title: language === 'ar' ? 'دعم تقني' : 'Technical Support',
      description: language === 'ar'
        ? 'نقدم دعم تقني شامل ومتابعة مستمرة لمشاريعك'
        : 'We provide comprehensive technical support and continuous follow-up for your projects',
      features: [
        language === 'ar' ? 'دعم 24/7' : '24/7 Support',
        language === 'ar' ? 'استجابة سريعة' : 'Quick Response',
        language === 'ar' ? 'حلول فورية' : 'Instant Solutions'
      ],
      price: language === 'ar' ? 'من $99' : 'From $99',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20'
    }
  ];

  const whyChooseUs = [
    {
      title: language === 'ar' ? 'جودة عالية' : 'High Quality',
      description: language === 'ar' ? 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا' : 'We commit to the highest quality standards in all our projects'
    },
    {
      title: language === 'ar' ? 'أسعار تنافسية' : 'Competitive Prices',
      description: language === 'ar' ? 'أسعار معقولة مع قيمة استثنائية مقابل الخدمة' : 'Reasonable prices with exceptional value for service'
    },
    {
      title: language === 'ar' ? 'تسليم في الوقت' : 'On-Time Delivery',
      description: language === 'ar' ? 'نحترم المواعيد ونسلم المشاريع في الوقت المحدد' : 'We respect deadlines and deliver projects on time'
    },
    {
      title: language === 'ar' ? 'دعم مستمر' : 'Continuous Support',
      description: language === 'ar' ? 'دعم تقني مستمر حتى بعد تسليم المشروع' : 'Continuous technical support even after project delivery'
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <FadeInUp delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {language === 'ar' ? '🎯 خدماتنا المتميزة' : '🎯 Our Premium Services'}
              </span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <h2 className="text-3xl lg:text-5xl font-bold">
              {language === 'ar' ? 'خدمات شاملة لنجاحك الرقمي' : 'Comprehensive Services for Your Digital Success'}
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={600}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نقدم مجموعة متكاملة من الخدمات الرقمية لتلبية جميع احتياجاتك التقنية بأعلى جودة وأفضل الأسعار'
                : 'We offer a comprehensive range of digital services to meet all your technical needs with the highest quality and best prices'
              }
            </p>
          </FadeInUp>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ScaleIn key={index} delay={800 + (index * 100)}>
              <div className="group relative h-full">
                <div className="h-full p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                    <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/btn">
                      {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Popular Badge */}
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      {language === 'ar' ? '⭐ الأكثر طلباً' : '⭐ Most Popular'}
                    </div>
                  </div>
                )}
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Why Choose Us */}
        <FadeInUp delay={1400}>
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <div className="text-center space-y-6 mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold">
                {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'نحن نقدم أكثر من مجرد خدمة، نحن شريكك في النجاح الرقمي'
                  : 'We offer more than just a service, we are your partner in digital success'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <FadeInUp key={index} delay={1600 + (index * 100)}>
                  <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Final CTA */}
        <FadeInUp delay={2000}>
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-2xl font-bold">
              {language === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar'
                ? 'تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم'
                : 'Contact us today and get a free consultation for your next project'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Headphones className="w-5 h-5" />
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-primary px-8 py-4 rounded-xl font-medium transition-all duration-300">
                <Monitor className="w-5 h-5" />
                {language === 'ar' ? 'شاهد أعمالنا' : 'View Our Work'}
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}