import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  Globe,
  Database,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  GitBranch,
  Cpu
} from 'lucide-react';

export default function TechShowcase() {
  const { language } = useLanguage();

  const techCategories = [
    {
      title: language === 'ar' ? 'تطوير الويب' : 'Web Development',
      icon: Globe,
      technologies: [
        { name: 'React', icon: '⚛️', description: language === 'ar' ? 'مكتبة JavaScript قوية' : 'Powerful JavaScript library' },
        { name: 'Next.js', icon: '▲', description: language === 'ar' ? 'إطار عمل React متطور' : 'Advanced React framework' },
        { name: 'TypeScript', icon: '📘', description: language === 'ar' ? 'JavaScript مع الأنواع' : 'JavaScript with types' },
        { name: 'Tailwind CSS', icon: '💨', description: language === 'ar' ? 'أداة CSS سريعة' : 'Rapid CSS framework' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: language === 'ar' ? 'الخلفية والقواعد' : 'Backend & Database',
      icon: Database,
      technologies: [
        { name: 'Node.js', icon: '💚', description: language === 'ar' ? 'منصة JavaScript للخادم' : 'JavaScript server platform' },
        { name: 'Python', icon: '🐍', description: language === 'ar' ? 'لغة برمجة متعددة الاستخدام' : 'Versatile programming language' },
        { name: 'PostgreSQL', icon: '🐘', description: language === 'ar' ? 'قاعدة بيانات متقدمة' : 'Advanced database system' },
        { name: 'MongoDB', icon: '🍃', description: language === 'ar' ? 'قاعدة بيانات NoSQL' : 'NoSQL database' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: language === 'ar' ? 'الجوال والسحابة' : 'Mobile & Cloud',
      icon: Cloud,
      technologies: [
        { name: 'React Native', icon: '📱', description: language === 'ar' ? 'تطبيقات جوال متعددة المنصات' : 'Cross-platform mobile apps' },
        { name: 'AWS', icon: '☁️', description: language === 'ar' ? 'خدمات سحابية متكاملة' : 'Comprehensive cloud services' },
        { name: 'Docker', icon: '🐳', description: language === 'ar' ? 'حاويات التطبيقات' : 'Application containers' },
        { name: 'Firebase', icon: '🔥', description: language === 'ar' ? 'منصة تطوير متكاملة' : 'Complete development platform' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'ar' ? 'أمان متقدم' : 'Advanced Security',
      description: language === 'ar' ? 'حماية شاملة لبياناتك وتطبيقاتك' : 'Comprehensive protection for your data and applications'
    },
    {
      icon: Cpu,
      title: language === 'ar' ? 'أداء عالي' : 'High Performance',
      description: language === 'ar' ? 'تحسين متقدم لسرعة التحميل والاستجابة' : 'Advanced optimization for loading speed and responsiveness'
    },
    {
      icon: Palette,
      title: language === 'ar' ? 'تصميم جذاب' : 'Attractive Design',
      description: language === 'ar' ? 'واجهات مستخدم حديثة وجذابة' : 'Modern and appealing user interfaces'
    },
    {
      icon: GitBranch,
      title: language === 'ar' ? 'تطوير منظم' : 'Organized Development',
      description: language === 'ar' ? 'إدارة إصدارات احترافية وتطوير منهجي' : 'Professional version control and systematic development'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <FadeInUp delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {language === 'ar' ? '⚡ تقنيات متطورة' : '⚡ Advanced Technologies'}
              </span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <h2 className="text-3xl lg:text-5xl font-bold">
              {language === 'ar' ? 'نستخدم أحدث التقنيات' : 'We Use Latest Technologies'}
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={600}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نحرص على استخدام أحدث التقنيات والأدوات لضمان تطوير حلول رقمية متطورة وموثوقة'
                : 'We ensure using the latest technologies and tools to guarantee developing advanced and reliable digital solutions'
              }
            </p>
          </FadeInUp>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12 mb-20">
          {techCategories.map((category, categoryIndex) => (
            <FadeInUp key={categoryIndex} delay={800 + (categoryIndex * 200)}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <ScaleIn key={techIndex} delay={1000 + (categoryIndex * 200) + (techIndex * 100)}>
                      <div className="group p-6 bg-background/50 rounded-xl border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1">
                        <div className="text-center space-y-3">
                          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {tech.icon}
                          </div>
                          <h4 className="font-semibold text-lg">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          <FadeInUp delay={1400}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                {language === 'ar' ? 'لماذا تختار تقنياتنا؟' : 'Why Choose Our Technologies?'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'نضمن لك الحصول على أفضل جودة وأداء من خلال استخدام أحدث المعايير والممارسات'
                  : 'We guarantee the best quality and performance through using the latest standards and practices'
                }
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScaleIn key={index} delay={1600 + (index * 100)}>
                <div className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <FadeInUp delay={2000}>
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'مستعد لبناء مشروعك التقني؟' : 'Ready to Build Your Tech Project?'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'دعنا نساعدك في اختيار التقنيات المناسبة وتطوير حلول رقمية متطورة تلبي احتياجاتك'
                : 'Let us help you choose the right technologies and develop advanced digital solutions that meet your needs'
              }
            </p>
            
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Cpu className="w-5 h-5" />
              {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            </button>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}