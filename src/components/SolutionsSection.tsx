import { useLanguage } from './LanguageContext';
import { CheckCircle, Rocket, Users, Shield, Clock, DollarSign } from 'lucide-react';

export default function SolutionsSection() {
  const { language } = useLanguage();

  const solutions = [
    {
      icon: Clock,
      title: language === 'ar' ? 'التسليم في الوقت المحدد' : 'On-Time Delivery',
      description: language === 'ar'
        ? 'نلتزم بالمواعيد المحددة من خلال خطة عمل واضحة ومتابعة دورية للمشروع'
        : 'We commit to deadlines through clear work plans and regular project monitoring',
      benefits: [
        language === 'ar' ? 'خطة زمنية واضحة' : 'Clear timeline',
        language === 'ar' ? 'متابعة يومية' : 'Daily follow-up',
        language === 'ar' ? 'تحديثات منتظمة' : 'Regular updates'
      ]
    },
    {
      icon: DollarSign,
      title: language === 'ar' ? 'أسعار تنافسية' : 'Competitive Pricing',
      description: language === 'ar'
        ? 'نقدم حلول عالية الجودة بأسعار معقولة تناسب جميع الميزانيات'
        : 'We offer high-quality solutions at reasonable prices suitable for all budgets',
      benefits: [
        language === 'ar' ? 'عروض أسعار شفافة' : 'Transparent pricing',
        language === 'ar' ? 'خطط دفع مرنة' : 'Flexible payment plans',
        language === 'ar' ? 'لا توجد تكاليف خفية' : 'No hidden costs'
      ]
    },
    {
      icon: Users,
      title: language === 'ar' ? 'تواصل فعال' : 'Effective Communication',
      description: language === 'ar'
        ? 'فريق مخصص للتواصل معك ومتابعة احتياجاتك على مدار الساعة'
        : 'Dedicated team to communicate with you and follow up on your needs 24/7',
      benefits: [
        language === 'ar' ? 'مدير مشروع مخصص' : 'Dedicated project manager',
        language === 'ar' ? 'تقارير أسبوعية' : 'Weekly reports',
        language === 'ar' ? 'دعم على مدار الساعة' : '24/7 support'
      ]
    },
    {
      icon: Rocket,
      title: language === 'ar' ? 'تقنيات حديثة' : 'Modern Technologies',
      description: language === 'ar'
        ? 'نستخدم أحدث التقنيات لضمان أداء متفوق وتوافق مع جميع الأجهزة'
        : 'We use the latest technologies to ensure superior performance and compatibility with all devices',
      benefits: [
        language === 'ar' ? 'تصميم متجاوب' : 'Responsive design',
        language === 'ar' ? 'سرعة عالية' : 'High speed',
        language === 'ar' ? 'تحديثات مستمرة' : 'Continuous updates'
      ]
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'أمان متقدم' : 'Advanced Security',
      description: language === 'ar'
        ? 'نطبق أعلى معايير الأمان لحماية بياناتك ومعلومات عملائك'
        : 'We apply the highest security standards to protect your data and customer information',
      benefits: [
        language === 'ar' ? 'تشفير البيانات' : 'Data encryption',
        language === 'ar' ? 'نسخ احتياطية' : 'Backups',
        language === 'ar' ? 'مراقبة مستمرة' : 'Continuous monitoring'
      ]
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'دعم مستمر' : 'Continuous Support',
      description: language === 'ar'
        ? 'فريق دعم فني متخصص متاح لحل أي مشكلة بسرعة وكفاءة'
        : 'Specialized technical support team available to solve any problem quickly and efficiently',
      benefits: [
        language === 'ar' ? 'استجابة سريعة' : 'Quick response',
        language === 'ar' ? 'صيانة دورية' : 'Regular maintenance',
        language === 'ar' ? 'تدريب الموظفين' : 'Staff training'
      ]
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-4">
            <CheckCircle className="w-3 h-3 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'حلولنا المتميزة' : 'Our Distinguished Solutions'}
            </span>
          </div>
          
          <h2 className="mb-4">
            {language === 'ar' ? 'كيف نحل مشاكلك؟' : 'How Do We Solve Your Problems?'}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'لكل مشكلة حل مدروس، نحن نقدم منهجية عمل احترافية تضمن نجاح مشروعك وتحقيق أهدافك'
              : 'For every problem, there\'s a thoughtful solution. We provide a professional work methodology that ensures your project\'s success and goal achievement'
            }
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {solution.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 rounded-xl p-8">
            <h3 className="mb-2">
              {language === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Are You Ready to Start Your Project?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ar'
                ? 'دعنا نناقش احتياجاتك ونضع خطة عمل مناسبة لتحقيق أهدافك'
                : 'Let us discuss your needs and create a suitable work plan to achieve your goals'
              }
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}