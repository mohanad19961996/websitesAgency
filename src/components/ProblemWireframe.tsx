import { useLanguage } from './LanguageContext';
import { Clock, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';

export default function ProblemWireframe() {
  const { language } = useLanguage();
  
  const problems = [
    {
      icon: Clock,
      title: language === 'ar' ? 'ضياع الوقت' : 'Time Wasted',
      description: language === 'ar' 
        ? 'تقضي ساعات في البحث عن الحلول دون نتائج واضحة، مما يؤثر على إنتاجيتك وتقدمك' 
        : 'You spend hours searching for solutions without clear results, affecting your productivity and progress'
    },
    {
      icon: TrendingDown,
      title: language === 'ar' ? 'عدم التقدم' : 'No Progress',
      description: language === 'ar' 
        ? 'تشعر بالإحباط لأن جهودك لا تحقق النتائج المرجوة، وتبدأ في فقدان الثقة بنفسك' 
        : 'You feel frustrated because your efforts don\'t achieve the desired results, and you start losing confidence'
    },
    {
      icon: AlertTriangle,
      title: language === 'ar' ? 'تشتت الأفكار' : 'Scattered Ideas',
      description: language === 'ar' 
        ? 'لديك أفكار رائعة لكن لا تعرف كيف تحولها إلى خطط عملية قابلة للتنفيذ' 
        : 'You have great ideas but don\'t know how to turn them into practical, actionable plans'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          {language === 'ar' ? 'هل تواجه هذه التحديات؟' : 'Are You Facing These Challenges?'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === 'ar' 
            ? 'أنت لست وحدك. 87% من الأشخاص يواجهون نفس هذه المشاكل، ولكن القليل منهم يجد الحل المناسب'
            : 'You\'re not alone. 87% of people face these same problems, but few find the right solution'
          }
        </p>
      </div>

      {/* Problem cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div key={index} className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-destructive/10 hover:-translate-y-2 hover:scale-105 group card-hover border border-destructive/10">
            <div className="w-16 h-16 bg-destructive/20 rounded-xl mx-auto mb-4 transition-all duration-300 group-hover:bg-destructive/30 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center">
              <problem.icon className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-destructive">
              {problem.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Cost visualization */}
      <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-destructive/15 hover:-translate-y-1 hover:scale-102 group border border-destructive/20">
        <div className="flex items-center justify-center gap-2 mb-6">
          <DollarSign className="w-6 h-6 text-destructive" />
          <h3 className="text-2xl font-bold text-destructive">
            {language === 'ar' ? 'التكلفة الحقيقية لعدم العمل' : 'The Real Cost of Inaction'}
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '0ms' }}>
            <div className="text-3xl font-bold text-destructive">$12,000</div>
            <p className="text-sm text-muted-foreground">
              {language === 'ar' ? 'خسارة سنوية في الدخل' : 'Annual Income Loss'}
            </p>
          </div>
          <div className="space-y-3 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '100ms' }}>
            <div className="text-3xl font-bold text-destructive">300+</div>
            <p className="text-sm text-muted-foreground">
              {language === 'ar' ? 'ساعة مهدرة شهرياً' : 'Hours Wasted Monthly'}
            </p>
          </div>
          <div className="space-y-3 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '200ms' }}>
            <div className="text-3xl font-bold text-destructive">68%</div>
            <p className="text-sm text-muted-foreground">
              {language === 'ar' ? 'انخفاض في الإنتاجية' : 'Productivity Decline'}
            </p>
          </div>
        </div>
        
        <p className="mt-6 text-muted-foreground italic">
          {language === 'ar' 
            ? '"المشكلة ليست في قدراتك، بل في عدم وجود الأدوات والاستراتيجيات الصحيحة"'
            : '"The problem isn\'t your abilities, but the lack of right tools and strategies"'
          }
        </p>
      </div>
    </div>
  );
}