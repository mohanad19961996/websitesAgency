import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  Users,
  Palette,
  Monitor
} from 'lucide-react';

export default function WorkflowSteps() {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const content = {
    ar: {
      badge: "عملية العمل",
      title: "خطوات العمل مع العميل",
      subtitle: "نتبع منهجية واضحة ومنظمة لضمان تسليم أفضل النتائج في الوقت المحدد",
      deliveryTime: "مدة التسليم النهائية: 3 أيام",
      steps: [
        {
          number: "01",
          title: "التشاور والفهم",
          description: "نبدأ بجلسة استشارية شاملة لفهم رؤيتك ومتطلباتك بدقة",
          details: "نقوم بتحليل احتياجاتك وأهدافك التجارية ونضع استراتيجية مخصصة لمشروعك",
          icon: MessageSquare,
          color: "from-blue-500 to-cyan-500",
          bgColor: "bg-blue-50",
          iconBg: "bg-blue-100",
          duration: "يوم واحد"
        },
        {
          number: "02", 
          title: "التخطيط والتصميم",
          description: "نطور المفاهيم الإبداعية ونصمم النماذج الأولية",
          details: "نحول أفكارك إلى تصاميم مبتكرة مع مراعاة تجربة المستخدم والهوية البصرية",
          icon: Lightbulb,
          color: "from-orange-500 to-yellow-500", 
          bgColor: "bg-orange-50",
          iconBg: "bg-orange-100",
          duration: "يوم واحد"
        },
        {
          number: "03",
          title: "التطوير والبرمجة", 
          description: "نحول التصاميم إلى واقع رقمي متفاعل وعملي",
          details: "نستخدم أحدث التقنيات والأدوات لبناء حلول قوية وقابلة للتطوير",
          icon: Code,
          color: "from-green-500 to-emerald-500",
          bgColor: "bg-green-50", 
          iconBg: "bg-green-100",
          duration: "يوم واحد"
        },
        {
          number: "04",
          title: "التسليم والإطلاق",
          description: "نراجع المشروع نهائياً ونسلمه جاهزاً للإطلاق",
          details: "نتأكد من جودة العمل ونقوم بالاختبارات النهائية قبل التسليم الرسمي",
          icon: Rocket,
          color: "from-purple-500 to-pink-500",
          bgColor: "bg-purple-50",
          iconBg: "bg-purple-100", 
          duration: "خلال 3 أيام"
        }
      ],
      features: [
        "متابعة مستمرة",
        "تواصل شفاف", 
        "جودة عالية",
        "تسليم سريع"
      ]
    },
    en: {
      badge: "Work Process",
      title: "Client Workflow Steps", 
      subtitle: "We follow a clear and organized methodology to ensure delivering the best results on time",
      deliveryTime: "Final delivery time: 3 days",
      steps: [
        {
          number: "01",
          title: "Consultation & Understanding",
          description: "We start with a comprehensive consultation to understand your vision and requirements accurately",
          details: "We analyze your needs and business goals and develop a customized strategy for your project",
          icon: MessageSquare,
          color: "from-blue-500 to-cyan-500", 
          bgColor: "bg-blue-50",
          iconBg: "bg-blue-100",
          duration: "1 day"
        },
        {
          number: "02",
          title: "Planning & Design",
          description: "We develop creative concepts and design initial prototypes", 
          details: "We transform your ideas into innovative designs while considering user experience and visual identity",
          icon: Lightbulb,
          color: "from-orange-500 to-yellow-500",
          bgColor: "bg-orange-50",
          iconBg: "bg-orange-100", 
          duration: "1 day"
        },
        {
          number: "03",
          title: "Development & Programming",
          description: "We transform designs into interactive and functional digital reality",
          details: "We use the latest technologies and tools to build robust and scalable solutions",
          icon: Code,
          color: "from-green-500 to-emerald-500",
          bgColor: "bg-green-50",
          iconBg: "bg-green-100",
          duration: "1 day"
        },
        {
          number: "04", 
          title: "Delivery & Launch",
          description: "We conduct final project review and deliver it ready for launch",
          details: "We ensure work quality and conduct final testing before official delivery",
          icon: Rocket,
          color: "from-purple-500 to-pink-500",
          bgColor: "bg-purple-50",
          iconBg: "bg-purple-100",
          duration: "Within 3 days"
        }
      ],
      features: [
        "Continuous follow-up",
        "Transparent communication", 
        "High quality",
        "Fast delivery"
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full mb-6 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                {currentContent.badge}
              </span>
              <Users className="w-4 h-4 text-primary" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <div>
              <h2 className="text-3xl lg:text-4xl max-w-4xl mx-auto mb-6 heading-interactive" style={{ color: 'var(--primary)' }}>
                {currentContent.title}
              </h2>
              <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
                {currentContent.subtitle}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-medium text-sm">
                  {currentContent.deliveryTime}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {currentContent.steps.map((step, index) => (
            <div key={index}>
              <AnimatedSection animation="fadeInUp" delay={300 + (index * 150)}>
                <div 
                  key={index}
                  className={`group relative bg-card border-2 transition-all duration-500 cursor-pointer rounded-2xl overflow-visible h-full pr-8 pt-6 ${
                    activeStep === index 
                      ? 'border-primary/40 shadow-2xl -translate-y-4 scale-105' 
                      : 'border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <div className={`p-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 ${
                    activeStep === index ? 'scale-110 rotate-6' : 'scale-100'
                  }`}>
                    <step.icon className={`w-8 h-8 text-primary transition-all duration-500 ${
                      activeStep === index ? 'scale-110' : 'scale-100'
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full mb-4">
                    <Clock className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-foreground">{step.duration}</span>
                  </div>

                  {/* Detailed Description - Shows on Hover */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    activeStep === index 
                      ? 'max-h-32 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
