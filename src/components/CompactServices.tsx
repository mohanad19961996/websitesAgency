import { useLanguage } from './LanguageContext';
import { Monitor, Smartphone, ShoppingCart, Database, Palette, Headphones } from 'lucide-react';

export default function CompactServices() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: language === 'ar' ? 'تطوير المواقع' : 'Web Development',
      description: language === 'ar'
        ? 'مواقع ويب حديثة وسريعة باستخدام أحدث التقنيات'
        : 'Modern and fast websites using the latest technologies',
      price: language === 'ar' ? 'من 1500 ريال' : 'From $400',
      features: [
        language === 'ar' ? 'تصميم متجاوب' : 'Responsive design',
        language === 'ar' ? 'سرعة عالية' : 'High performance',
        language === 'ar' ? 'محرك بحث محسن' : 'SEO optimized'
      ]
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps',
      description: language === 'ar'
        ? 'تطبيقات ذكية لنظامي iOS و Android'
        : 'Smart applications for iOS and Android systems',
      price: language === 'ar' ? 'من 3000 ريال' : 'From $800',
      features: [
        language === 'ar' ? 'تطبيق أصلي' : 'Native app',
        language === 'ar' ? 'واجهة سهلة' : 'Easy interface',
        language === 'ar' ? 'إشعارات فورية' : 'Push notifications'
      ]
    },
    {
      icon: ShoppingCart,
      title: language === 'ar' ? 'متاجر إلكترونية' : 'E-commerce',
      description: language === 'ar'
        ? 'منصات تجارة إلكترونية متكاملة مع نظام دفع آمن'
        : 'Complete e-commerce platforms with secure payment system',
      price: language === 'ar' ? 'من 2500 ريال' : 'From $650',
      features: [
        language === 'ar' ? 'نظام دفع آمن' : 'Secure payment',
        language === 'ar' ? 'إدارة المخزون' : 'Inventory management',
        language === 'ar' ? 'تقارير مبيعات' : 'Sales reports'
      ]
    },
    {
      icon: Database,
      title: language === 'ar' ? 'أنظمة إدارة' : 'Management Systems',
      description: language === 'ar'
        ? 'أنظمة إدارة مخصصة لتنظيم عمليات الشركة'
        : 'Custom management systems to organize company operations',
      price: language === 'ar' ? 'من 4000 ريال' : 'From $1000',
      features: [
        language === 'ar' ? 'نظام مخصص' : 'Custom system',
        language === 'ar' ? 'تقارير تفصيلية' : 'Detailed reports',
        language === 'ar' ? 'أمان عالي' : 'High security'
      ]
    },
    {
      icon: Palette,
      title: language === 'ar' ? 'تصميم UI/UX' : 'UI/UX Design',
      description: language === 'ar'
        ? 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام'
        : 'Attractive and user-friendly interface design',
      price: language === 'ar' ? 'من 800 ريال' : 'From $200',
      features: [
        language === 'ar' ? 'تصميم حديث' : 'Modern design',
        language === 'ar' ? 'تجربة مستخدم' : 'User experience',
        language === 'ar' ? 'نماذج أولية' : 'Prototypes'
      ]
    },
    {
      icon: Headphones,
      title: language === 'ar' ? 'دعم فني' : 'Technical Support',
      description: language === 'ar'
        ? 'دعم فني مستمر وصيانة دورية للمشاريع'
        : 'Continuous technical support and regular maintenance for projects',
      price: language === 'ar' ? 'من 500 ريال شهرياً' : 'From $130/month',
      features: [
        language === 'ar' ? 'دعم 24/7' : '24/7 support',
        language === 'ar' ? 'صيانة دورية' : 'Regular maintenance',
        language === 'ar' ? 'تحديثات أمنية' : 'Security updates'
      ]
    }
  ];

  return (
    <div className="py-16 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-4">
            <Monitor className="w-3 h-3 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
            </span>
          </div>
          
          <h2 className="mb-4">
            {language === 'ar' ? 'ما الذي نقدمه لك؟' : 'What Do We Offer You?'}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'مجموعة شاملة من الخدمات التقنية بأسعار تنافسية وجودة عالية تلبي جميع احتياجاتك'
              : 'A comprehensive range of technical services at competitive prices and high quality that meet all your needs'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-sm font-bold text-primary">
                    {service.price}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary border border-primary/20 hover:border-primary py-2.5 rounded-lg font-medium transition-all duration-300 group-hover:shadow-md">
                {language === 'ar' ? 'اطلب الخدمة' : 'Request Service'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <span className="text-muted-foreground">
              {language === 'ar' ? 'تحتاج خدمة مخصصة؟' : 'Need a custom service?'}
            </span>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              {language === 'ar' ? 'تحدث معنا' : 'Talk to Us'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}