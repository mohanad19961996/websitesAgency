import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Eye, Code2, Laptop, Monitor } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function TemplatesShowcase() {
  const { language } = useLanguage();

  const templates = [
    {
      id: 1,
      title: language === 'ar' ? "بوتيك زهور أنيق" : "Elegant Flower Boutique",
      subtitle: language === 'ar' ? "متجر زهور إلكتروني" : "Online Flower Shop",
      description: language === 'ar' 
        ? "متجر إلكتروني عصري وأنيق لبيع الزهور، مصمم لعرض تنسيقات الزهور المذهلة وتوفير تجربة تسوق سلسة."
        : "A beautiful and modern online store for a flower boutique, designed to showcase stunning floral arrangements and provide a seamless shopping experience.",
      image: "/images/flowers.png",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      color: "from-pink-400 to-rose-400",
      preview: "https://flowers-website-alpha.vercel.app/",
      features: language === 'ar' ? ["عرض جذاب للمنتجات", "سهولة الطلب عبر الإنترنت", "مجموعات موسمية"] : ["Beautiful Product Showcase", "Easy Online Ordering", "Seasonal Collections"]
    },
    {
      id: 2,
      title: language === 'ar' ? "وكالة سفر وسياحة" : "Travel & Tourism Agency",
      subtitle: language === 'ar' ? "حجوزات سياحية" : "Tour Booking System",
      description: language === 'ar'
        ? "منصة متكاملة لحجز الجولات السياحية والفنادق مع واجهة سهلة الاستخدام لعرض الوجهات السياحية المميزة والعروض الحصرية"
        : "A comprehensive platform for booking tours and hotels with an easy-to-use interface to showcase featured destinations and exclusive offers",
      image: "/images/tourist.png",
      techStack: ["Next.js", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-400",
      preview: "https://tourist-agency-zeta.vercel.app/",
      features: language === 'ar' ? ["حجوزات فورية", "عروض حصرية", "دعم متعدد اللغات"] : ["Instant Booking", "Exclusive Deals", "Multi-language Support"]
    },
    {
      id: 3,
      title: language === 'ar' ? "موقع عقاري احترافي" : "Professional Real Estate Website",
      subtitle: language === 'ar' ? "عرض العقارات" : "Property Showcase",
      description: language === 'ar'
        ? "موقع عقاري احترافي مع واجهة تفاعلية وإمكانيات بحث متقدمة في العقارات لزيادة المبيعات والإيجارات"
        : "Professional real estate website with interactive interface and advanced property search capabilities designed to maximize sales and rentals",
      image: "/images/reasEstate.png",
      techStack: ["Next.js", "Tailwind", "Framer"],
      color: "from-blue-500 to-indigo-400",
      preview: "https://real-estate-plum-ten.vercel.app/",
      features: language === 'ar' ? ["بحث متقدم في العقارات", "جولات افتراضية", "قوائم ديناميكية"] : ["Advanced Property Search", "Virtual Tours", "Dynamic Listings"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: {
        bg: "bg-pink-50 dark:bg-pink-950/20",
        border: "border-pink-200 dark:border-pink-800",
        text: "text-pink-600 dark:text-pink-400",
        button: "bg-pink-500 hover:bg-pink-600 text-white"
      },
      blue: {
        bg: "bg-blue-50 dark:bg-blue-950/20", 
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-600 dark:text-blue-400",
        button: "bg-blue-500 hover:bg-blue-600 text-white"
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-950/20",
        border: "border-amber-200 dark:border-amber-800", 
        text: "text-amber-600 dark:text-amber-400",
        button: "bg-amber-500 hover:bg-amber-600 text-white"
      }
    };
    return colors[color as keyof typeof colors];
  };


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 shadow-lg mb-8">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-lg">
              {language === 'ar' ? "معرض القوالب البرمجية" : "Code Templates Gallery"}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {language === 'ar' ? (
              <>
                قوالب برمجية <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">احترافية</span>
                <br />جاهزة للاستخدام
              </>
            ) : (
              <>
                Professional <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Code Templates</span>
                <br />Ready to Deploy
              </>
            )}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? "استكشف مجموعتنا من قوالب البرمجة المتقدمة المصممة لتسريع تطوير مشاريعك"
              : "Explore our collection of advanced coding templates designed to accelerate your project development"
            }
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group relative bg-card rounded-3xl border border-border/30 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Tech Stack Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {template.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Preview Button - Always visible */}
                <div className="absolute top-4 right-4 z-20">
                  <Button
                    size="sm"
                    className="bg-white hover:bg-primary hover:text-white text-gray-700 border border-gray-200 hover:border-primary shadow-lg h-10 w-10 p-0 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    onClick={() => window.open(template.preview, '_blank')}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-3 w-fit border border-primary/20">
                  <Laptop className="w-4 h-4" />
                  {template.subtitle}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-start">
                  {template.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-light flex-1 min-h-[4rem]">
                  {template.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 min-h-[4.5rem]">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-foreground/80 text-xs font-normal leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground border-0 font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 rounded-lg h-10"
                    onClick={() => window.open(template.preview, '_blank')}
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    {language === 'ar' ? "معاينة" : "Preview"}
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                {language === 'ar' ? "تريد قالباً مخصصاً؟" : "Need a Custom Template?"}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-lg">
              {language === 'ar'
                ? "نصمم قوالب برمجية مخصصة تماماً لتتناسب مع متطلباتك التقنية"
                : "We create completely custom code templates tailored to your technical requirements"
              }
            </p>
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-4 h-auto text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Laptop className="w-6 h-6 mr-3" />
              {language === 'ar' ? "ابدأ مشروعك البرمجي" : "Start Your Coding Project"}
              <ArrowUpRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
