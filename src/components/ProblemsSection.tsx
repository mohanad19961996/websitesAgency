import { useLanguage } from './LanguageContext';
import { AlertTriangle, Clock, DollarSign, Users, Smartphone, Shield } from 'lucide-react';

export default function ProblemsSection() {
  const { language } = useLanguage();

  const problems = [
    {
      icon: Clock,
      title: language === 'ar' ? 'التأخير في التسليم' : 'Delivery Delays',
      description: language === 'ar' 
        ? 'كثير من الشركات تعاني من تأخير المشاريع وعدم الالتزام بالمواعيد المحددة'
        : 'Many companies suffer from project delays and failure to meet deadlines'
    },
    {
      icon: DollarSign,
      title: language === 'ar' ? 'التكاليف المرتفعة' : 'High Costs',
      description: language === 'ar'
        ? 'أسعار مبالغ فيها للخدمات التقنية مما يرهق ميزانية الشركات الناشئة'
        : 'Excessive prices for technical services burden startup budgets'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'ضعف التواصل' : 'Poor Communication',
      description: language === 'ar'
        ? 'صعوبة في التواصل مع فرق التطوير وعدم فهم المتطلبات بشكل واضح'
        : 'Difficulty communicating with development teams and unclear requirement understanding'
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'عدم التوافق مع الأجهزة' : 'Device Compatibility',
      description: language === 'ar'
        ? 'مواقع وتطبيقات لا تعمل بشكل صحيح على جميع الأجهزة والمنصات'
        : 'Websites and apps that don\'t work properly across all devices and platforms'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'مشاكل الأمان' : 'Security Issues',
      description: language === 'ar'
        ? 'ثغرات أمنية تعرض بيانات العملاء والشركة للخطر'
        : 'Security vulnerabilities that expose customer and company data to risk'
    },
    {
      icon: AlertTriangle,
      title: language === 'ar' ? 'ضعف الدعم الفني' : 'Poor Technical Support',
      description: language === 'ar'
        ? 'عدم توفر دعم فني موثوق بعد إطلاق المشروع'
        : 'Lack of reliable technical support after project launch'
    }
  ];

  return (
    <div className="py-16 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/5 border border-destructive/10 rounded-full mb-4">
            <AlertTriangle className="w-3 h-3 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              {language === 'ar' ? 'التحديات الشائعة' : 'Common Challenges'}
            </span>
          </div>
          
          <h2 className="mb-4">
            {language === 'ar' ? 'ما هي المشاكل التي تواجهها؟' : 'What Problems Are You Facing?'}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نحن نفهم التحديات التي تواجه الشركات في رحلتها الرقمية، ولذلك وضعنا حلولاً مدروسة لكل مشكلة'
              : 'We understand the challenges companies face in their digital journey, so we have developed thoughtful solutions for every problem'
            }
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-destructive/20 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/10 transition-colors">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2 group-hover:text-destructive transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {language === 'ar'
              ? 'هل تواجه أي من هذه المشاكل؟ نحن هنا لمساعدتك في إيجاد الحلول المناسبة'
              : 'Are you facing any of these problems? We are here to help you find the right solutions'
            }
          </p>
        </div>
      </div>
    </div>
  );
}