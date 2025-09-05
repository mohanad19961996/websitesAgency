import { useState, useEffect } from "react";
import { useLanguage } from './LanguageContext';
import { TrendingDown, TrendingUp, Target, Users, DollarSign, Calendar, Award, Star } from 'lucide-react';

export default function TransformWireframe() {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({ success: 0, income: 0, satisfaction: 0 });

  const transformationSteps = [
    { 
      phase: "before", 
      color: "destructive",
      title: language === 'ar' ? 'قبل' : 'Before',
      icon: TrendingDown
    },
    { 
      phase: "during", 
      color: "accent",
      title: language === 'ar' ? 'أثناء' : 'During',
      icon: Target
    },
    { 
      phase: "after", 
      color: "primary",
      title: language === 'ar' ? 'بعد' : 'After',
      icon: TrendingUp
    }
  ];

  const stepsContent = {
    before: {
      title: language === 'ar' ? 'التحديات والصعوبات' : 'Challenges & Difficulties',
      metrics: {
        income: language === 'ar' ? 'دخل منخفض' : 'Low Income',
        value: '$1,200',
        productivity: language === 'ar' ? 'إنتاجية ضعيفة' : 'Poor Productivity',
        satisfaction: language === 'ar' ? 'عدم رضا 35%' : '35% Satisfaction'
      },
      points: [
        language === 'ar' ? 'صعوبة في تحديد الأهداف' : 'Difficulty setting goals',
        language === 'ar' ? 'نقص في المهارات المطلوبة' : 'Lack of required skills',
        language === 'ar' ? 'عدم وجود خطة واضحة' : 'No clear plan',
        language === 'ar' ? 'قلة الثقة بالنفس' : 'Low self-confidence'
      ]
    },
    during: {
      title: language === 'ar' ? 'التطوير والنمو' : 'Development & Growth',
      metrics: {
        income: language === 'ar' ? 'دخل متزايد' : 'Growing Income',
        value: '$3,500',
        productivity: language === 'ar' ? 'تحسن ملحوظ' : 'Notable Improvement',
        satisfaction: language === 'ar' ? 'رضا متزايد 70%' : '70% Satisfaction'
      },
      points: [
        language === 'ar' ? 'تطبيق الاستراتيجيات المجربة' : 'Applying proven strategies',
        language === 'ar' ? 'تعلم مهارات جديدة يومياً' : 'Learning new skills daily',
        language === 'ar' ? 'وضع خطة عمل واضحة' : 'Creating a clear action plan',
        language === 'ar' ? 'بناء الثقة تدريجياً' : 'Building confidence gradually'
      ]
    },
    after: {
      title: language === 'ar' ? 'النجاح والتحول' : 'Success & Transformation',
      metrics: {
        income: language === 'ar' ? 'دخل مرتفع' : 'High Income',
        value: '$8,500',
        productivity: language === 'ar' ? 'إنتاجية عالية' : 'High Productivity',
        satisfaction: language === 'ar' ? 'رضا كامل 95%' : '95% Satisfaction'
      },
      points: [
        language === 'ar' ? 'تحقيق جميع الأهداف المحددة' : 'Achieving all set goals',
        language === 'ar' ? 'إتقان المهارات المطلوبة' : 'Mastering required skills',
        language === 'ar' ? 'تنفيذ الخطة بنجاح' : 'Successfully executing the plan',
        language === 'ar' ? 'ثقة كاملة بالنفس' : 'Complete self-confidence'
      ]
    }
  };

  // Animate numbers when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        success: 15000,
        income: 350,
        satisfaction: 95
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const currentContent = stepsContent[transformationSteps[activeStep].phase as keyof typeof stepsContent];

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          {language === 'ar' ? 'رحلة التحول الحقيقية' : 'The Real Transformation Journey'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === 'ar' 
            ? 'شاهد كيف تغيرت حياة عملائنا من التحديات إلى النجاح في خطوات واضحة ومثبتة'
            : 'See how our clients\' lives changed from challenges to success in clear, proven steps'
          }
        </p>
      </div>

      {/* Transformation Timeline */}
      <div className="space-y-10">
        <h3 className="text-xl font-semibold text-center">
          {language === 'ar' ? 'مراحل التحول' : 'Transformation Phases'}
        </h3>
        
        {/* Step Navigator */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-8 bg-background/60 backdrop-blur-sm rounded-full px-6 py-4 border border-muted/30">
            {transformationSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeStep === index 
                    ? `bg-${step.color}/10 border-2 border-${step.color}/30` 
                    : 'hover:bg-muted/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index 
                    ? step.color === 'destructive' ? 'bg-destructive/20' :
                      step.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
                    : 'bg-muted/20'
                }`}>
                  <step.icon className={`w-6 h-6 ${
                    activeStep === index 
                      ? step.color === 'destructive' ? 'text-destructive' :
                        step.color === 'accent' ? 'text-accent' : 'text-primary'
                      : 'text-muted-foreground'
                  }`} />
                </div>
                
                <span className={`text-sm font-medium transition-all duration-300 ${
                  activeStep === index ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
                
                {/* Connecting Line */}
                {index < transformationSteps.length - 1 && (
                  <div className={`absolute top-6 left-full w-8 h-0.5 transition-all duration-300 ${
                    activeStep > index ? 'bg-primary/60' : 'bg-muted/40'
                  }`}></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Transformation Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content based on active step */}
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold">{currentContent.title}</h4>
            </div>
            
            <div className={`rounded-xl p-6 border transition-all duration-500 ${
              activeStep === 0 ? 'bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20' :
              activeStep === 1 ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20' :
              'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20'
            }`}>
              <div className="space-y-6">
                {/* Income Metric */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className={`w-8 h-8 ${
                      activeStep === 0 ? 'text-destructive' :
                      activeStep === 1 ? 'text-accent' : 'text-primary'
                    }`} />
                    <div>
                      <p className="text-sm text-muted-foreground">{currentContent.metrics.income}</p>
                      <p className={`text-2xl font-bold ${
                        activeStep === 0 ? 'text-destructive' :
                        activeStep === 1 ? 'text-accent' : 'text-primary'
                      }`}>
                        {currentContent.metrics.value}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{currentContent.metrics.productivity}</p>
                    <p className="text-sm">{currentContent.metrics.satisfaction}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Points */}
            <div className="space-y-3">
              {currentContent.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 transition-all duration-300">
                  <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                    activeStep === 0 ? 'bg-destructive/20' :
                    activeStep === 1 ? 'bg-accent/20' : 'bg-primary/20'
                  }`}>
                    {activeStep === 2 ? (
                      <Star className="w-3 h-3 text-primary fill-current" />
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${
                        activeStep === 0 ? 'bg-destructive/60' :
                        activeStep === 1 ? 'bg-accent/60' : 'bg-primary/60'
                      }`}></div>
                    )}
                  </div>
                  <span className="text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Visual Progress */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl relative overflow-hidden border border-border/50">
              <div className="absolute inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                {/* Center Progress Circle */}
                <div className="absolute inset-6 flex items-center justify-center">
                  <div className={`rounded-full border-4 transition-all duration-700 flex items-center justify-center ${
                    activeStep === 0 ? 'w-24 h-24 border-destructive/30 bg-destructive/10' :
                    activeStep === 1 ? 'w-32 h-32 border-accent/40 bg-accent/15' : 
                    'w-40 h-40 border-primary/50 bg-primary/20'
                  }`}>
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-500 ${
                        activeStep === 0 ? 'bg-destructive/60' :
                        activeStep === 1 ? 'bg-accent/60' : 'bg-primary/60'
                      }`}>
                        {activeStep === 0 && <TrendingDown className="w-6 h-6 text-destructive-foreground" />}
                        {activeStep === 1 && <Target className="w-6 h-6 text-accent-foreground" />}
                        {activeStep === 2 && <TrendingUp className="w-6 h-6 text-primary-foreground" />}
                      </div>
                      <div className={`text-xs font-semibold ${
                        activeStep === 0 ? 'text-destructive' :
                        activeStep === 1 ? 'text-accent' : 'text-primary'
                      }`}>
                        {activeStep === 0 && '35%'}
                        {activeStep === 1 && '70%'}
                        {activeStep === 2 && '95%'}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Progress Elements */}
                <div className="absolute top-2 right-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep >= 1 ? 'bg-accent/30 scale-100' : 'bg-muted/20 scale-75'
                  }`}>
                    <Calendar className="w-4 h-4 text-accent" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep >= 2 ? 'bg-primary/30 scale-100' : 'bg-muted/20 scale-75'
                  }`}>
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-700 ${
                        activeStep === 0 ? 'w-1/3 bg-destructive/60' :
                        activeStep === 1 ? 'w-2/3 bg-accent/60' : 'w-full bg-primary/60'
                      }`}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    {transformationSteps.map((_, index) => (
                      <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index <= activeStep ? 'bg-primary/60 scale-125' : 'bg-muted/40'
                      }`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success metrics */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">
            {language === 'ar' ? 'نتائج حقيقية قابلة للقياس' : 'Real Measurable Results'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Success Stories */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">
                  {animatedNumbers.success.toLocaleString()}+
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'عميل نجح في تحقيق أهدافه' : 'Clients achieved their goals'}
                </p>
              </div>
            </div>
            
            {/* Income Increase */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">
                  {animatedNumbers.income}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'متوسط زيادة الدخل' : 'Average income increase'}
                </p>
              </div>
            </div>
            
            {/* Satisfaction Rate */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto flex items-center justify-center">
                <Star className="w-8 h-8 text-secondary fill-current" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">
                  {animatedNumbers.satisfaction}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'معدل الرضا والنجاح' : 'Satisfaction & success rate'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-muted-foreground italic">
              {language === 'ar' 
                ? '"النتائج مضمونة أو استرداد كامل للمبلغ"'
                : '"Results guaranteed or full money back"'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}