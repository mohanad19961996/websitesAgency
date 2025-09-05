import { useState } from "react";
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { CheckCircle2, Phone, Mail, MapPin, Calendar, Clock, Shield, Star, Users } from 'lucide-react';

export default function ContactWireframe() {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepTitles = [
    language === 'ar' ? 'المعلومات الأساسية' : 'Basic Information',
    language === 'ar' ? 'أهدافك' : 'Your Goals',
    language === 'ar' ? 'التفاصيل' : 'Details',
    language === 'ar' ? 'تأكيد البيانات' : 'Confirmation'
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          {language === 'ar' ? 'ابدأ رحلتك نحو النجاح' : 'Start Your Success Journey'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === 'ar' 
            ? 'خطوات بسيطة للحصول على الاستشارة المجانية وبدء التحول في حياتك'
            : 'Simple steps to get your free consultation and start transforming your life'
          }
        </p>
      </div>

      {/* Multi-step Form */}
      <div className="space-y-8">
        <h3 className="text-xl font-semibold text-center">
          {language === 'ar' ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
        </h3>
        
        <div className="relative">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber <= currentStep;
              const isCompleted = stepNumber < currentStep;
              
              return (
                <div key={stepNumber} className="flex items-center">
                  {/* Step Circle */}
                  <div className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-md ${
                    isCompleted 
                      ? 'bg-primary border-primary hover:shadow-primary/25' 
                      : isActive 
                      ? 'bg-primary/20 border-primary hover:bg-primary/30 hover:shadow-primary/20' 
                      : 'bg-background border-muted hover:border-primary/50'
                  }`}>
                    {isCompleted ? (
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                    )}
                    
                    {/* Step Number */}
                    <div className={`absolute -top-8 text-center ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      <div className="text-xs font-semibold">{stepNumber}</div>
                    </div>
                    
                    {/* Step Title */}
                    <div className={`absolute -bottom-8 text-center w-24 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      <p className="text-xs">{stepTitles[index]}</p>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < totalSteps - 1 && (
                    <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                      stepNumber < currentStep ? 'bg-primary' : 'bg-muted'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Step Content */}
          <div className="bg-gradient-to-br from-background/60 to-muted/20 rounded-xl p-8 border border-muted/30 min-h-[400px]">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">
                  {language === 'ar' ? 'أخبرنا عن نفسك' : 'Tell Us About Yourself'}
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <Input placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <Input type="email" placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <Input placeholder={language === 'ar' ? '+966 5X XXX XXXX' : '+1 (555) 123-4567'} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'المدينة' : 'City'}
                    </label>
                    <Input placeholder={language === 'ar' ? 'أدخل مدينتك' : 'Enter your city'} />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">
                  {language === 'ar' ? 'ما هي أهدافك؟' : 'What Are Your Goals?'}
                </h4>
                <div className="space-y-4">
                  {[
                    language === 'ar' ? 'تطوير المهارات المهنية' : 'Develop professional skills',
                    language === 'ar' ? 'زيادة الدخل' : 'Increase income',
                    language === 'ar' ? 'بدء مشروع جديد' : 'Start a new project',
                    language === 'ar' ? 'تحسين الحياة الشخصية' : 'Improve personal life',
                    language === 'ar' ? 'تعلم مهارات جديدة' : 'Learn new skills'
                  ].map((goal, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-background/40 rounded-lg border border-muted/20 cursor-pointer hover:bg-background/60 hover:border-primary/30 transition-all duration-300 group">
                      <div className="w-5 h-5 border-2 border-primary/40 rounded group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300"></div>
                      <span className="group-hover:text-primary transition-all duration-300">{goal}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">
                    {language === 'ar' ? 'أهداف أخرى (اختياري)' : 'Other Goals (Optional)'}
                  </label>
                  <Textarea placeholder={language === 'ar' ? 'أخبرنا عن أهدافك الأخرى...' : 'Tell us about your other goals...'} />
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">
                  {language === 'ar' ? 'أخبرنا المزيد' : 'Tell Us More'}
                </h4>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'ما هي أكبر التحديات التي تواجهها؟' : 'What are your biggest challenges?'}
                    </label>
                    <Textarea 
                      placeholder={language === 'ar' 
                        ? 'اشرح لنا التحديات الرئيسية التي تواجهها في تحقيق أهدافك...' 
                        : 'Explain the main challenges you face in achieving your goals...'
                      } 
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <label className="text-sm font-medium">
                        {language === 'ar' ? 'الميزانية المتوقعة' : 'Expected Budget'}
                      </label>
                      <select className="w-full h-10 px-3 rounded-md border border-muted/40 bg-background">
                        <option>{language === 'ar' ? 'اختر الميزانية' : 'Select budget'}</option>
                        <option>$0 - $100</option>
                        <option>$100 - $500</option>
                        <option>$500 - $1000</option>
                        <option>$1000+</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">
                        {language === 'ar' ? 'الإطار الزمني' : 'Timeline'}
                      </label>
                      <select className="w-full h-10 px-3 rounded-md border border-muted/40 bg-background">
                        <option>{language === 'ar' ? 'اختر المدة' : 'Select timeline'}</option>
                        <option>{language === 'ar' ? 'خلال أسبوع' : 'Within a week'}</option>
                        <option>{language === 'ar' ? 'خلال شهر' : 'Within a month'}</option>
                        <option>{language === 'ar' ? 'خلال 3 شهور' : 'Within 3 months'}</option>
                        <option>{language === 'ar' ? 'أكثر من 3 شهور' : 'More than 3 months'}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="space-y-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-primary">
                    {language === 'ar' ? 'تم بنجاح!' : 'Success!'}
                  </h4>
                  <p className="text-lg">
                    {language === 'ar' 
                      ? 'تم إرسال طلبك بنجاح. سنتواصل معك خلال 24 ساعة'
                      : 'Your request has been sent successfully. We will contact you within 24 hours'
                    }
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-6 space-y-4">
                  <h5 className="font-semibold">
                    {language === 'ar' ? 'ماذا يحدث الآن؟' : 'What happens next?'}
                  </h5>
                  <div className="space-y-3 text-sm text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <span>
                        {language === 'ar' 
                          ? 'مراجعة طلبك من قبل الخبراء' 
                          : 'Your request will be reviewed by experts'
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <span>
                        {language === 'ar' 
                          ? 'تحديد موعد للاستشارة المجانية' 
                          : 'Schedule your free consultation'
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <span>
                        {language === 'ar' 
                          ? 'بدء رحلتك نحو النجاح' 
                          : 'Start your journey to success'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {language === 'ar' ? 'السابق' : 'Previous'}
            </Button>
            
            <Button 
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className={currentStep === totalSteps ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {currentStep === totalSteps 
                ? (language === 'ar' ? 'تم' : 'Done')
                : (language === 'ar' ? 'التالي' : 'Next')
              }
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Information & Quick Contact */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Special Offer & Process */}
        <div className="space-y-8">
          {/* Limited Time Offer */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">
                  {language === 'ar' ? 'عرض محدود الوقت' : 'Limited Time Offer'}
                </span>
              </div>
              <div className="text-2xl font-bold">
                {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
              </div>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'احجز جلستك المجانية اليوم واحصل على خطة عمل شخصية لتحقيق أهدافك'
                  : 'Book your free session today and get a personalized action plan to achieve your goals'
                }
              </p>
              <div className="bg-primary/20 rounded-lg p-3">
                <span className="text-primary font-bold">
                  {language === 'ar' ? 'قيمة الجلسة: $150 مجاناً' : 'Session Value: $150 FREE'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Our Process */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              {language === 'ar' ? 'عمليتنا المثبتة' : 'Our Proven Process'}
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: Calendar,
                  title: language === 'ar' ? 'تحديد الموعد' : 'Schedule Meeting',
                  desc: language === 'ar' ? 'احجز موعداً مناسباً خلال 24 ساعة' : 'Book a convenient time within 24 hours'
                },
                {
                  icon: Users,
                  title: language === 'ar' ? 'جلسة التحليل' : 'Analysis Session',
                  desc: language === 'ar' ? 'نحلل وضعك الحالي ونحدد الأهداف' : 'We analyze your current situation and define goals'
                },
                {
                  icon: CheckCircle2,
                  title: language === 'ar' ? 'خطة العمل' : 'Action Plan',
                  desc: language === 'ar' ? 'تحصل على خطة مخصصة وواضحة' : 'Get a customized and clear plan'
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative w-10 h-10 bg-primary/20 rounded-full flex-shrink-0 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h5 className="font-medium">{step.title}</h5>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h4 className="font-semibold">
              {language === 'ar' ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contact@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  {language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Contact Form */}
        <div className="bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl p-6 border border-muted/30">
          <h4 className="text-lg font-semibold mb-6">
            {language === 'ar' ? 'تواصل سريع' : 'Quick Contact'}
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'الاسم' : 'Name'}
              </label>
              <Input placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <Input type="email" placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
              </label>
              <Input placeholder={language === 'ar' ? '+966 5X XXX XXXX' : '+1 (555) 123-4567'} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'نوع الخدمة' : 'Service Type'}
              </label>
              <select className="w-full h-10 px-3 rounded-md border border-muted/40 bg-background">
                <option>{language === 'ar' ? 'اختر الخدمة' : 'Select service'}</option>
                <option>{language === 'ar' ? 'استشارة مجانية' : 'Free consultation'}</option>
                <option>{language === 'ar' ? 'باقة البداية' : 'Starter package'}</option>
                <option>{language === 'ar' ? 'باقة الاحتراف' : 'Professional package'}</option>
                <option>{language === 'ar' ? 'باقة VIP' : 'VIP package'}</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'رسالتك' : 'Your Message'}
              </label>
              <Textarea 
                placeholder={language === 'ar' 
                  ? 'أخبرنا كيف يمكننا مساعدتك...' 
                  : 'Tell us how we can help you...'
                } 
                rows={4}
              />
            </div>
            
            <Button className="w-full" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                {language === 'ar' 
                  ? 'سنرد عليك خلال ساعة واحدة في أوقات العمل'
                  : 'We will respond within 1 hour during business hours'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}