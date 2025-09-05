import { useLanguage } from './LanguageContext';
import { Code2, Layers, Zap } from 'lucide-react';

export default function CompactTech() {
  const { language } = useLanguage();

  const techCategories = [
    {
      title: language === 'ar' ? 'تطوير الواجهات الأمامية' : 'Frontend Development',
      icon: Layers,
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular']
    },
    {
      title: language === 'ar' ? 'تطوير الخوادم' : 'Backend Development',
      icon: Code2,
      techs: ['Node.js', 'Python', 'PHP', 'Express', 'Django', 'Laravel']
    },
    {
      title: language === 'ar' ? 'قواعد البيانات' : 'Databases',
      icon: Zap,
      techs: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis', 'SQLite']
    }
  ];

  const additionalTechs = [
    'React Native', 'Flutter', 'Docker', 'AWS', 'Git', 'Figma', 'Stripe', 'PayPal'
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-4">
            <Code2 className="w-3 h-3 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'التقنيات المتقدمة' : 'Advanced Technologies'}
            </span>
          </div>
          
          <h2 className="mb-4">
            {language === 'ar' ? 'التقنيات التي نستخدمها' : 'Technologies We Use'}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نعتمد على أحدث التقنيات والأدوات المتطورة لضمان تطوير حلول عالية الجودة وأداء متفوق'
              : 'We rely on the latest technologies and advanced tools to ensure high-quality solutions development and superior performance'
            }
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="bg-muted/30 hover:bg-primary/5 text-center py-2 px-3 rounded-lg text-xs font-medium transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <h3 className="mb-6">
            {language === 'ar' ? 'تقنيات وأدوات إضافية' : 'Additional Tools & Technologies'}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTechs.map((tech, index) => (
              <div 
                key={index}
                className="bg-card border border-border hover:border-primary/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
          <div className="text-center">
            <div className="font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'تقنية مختلفة' : 'Different Technologies'}
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'حلول حديثة' : 'Modern Solutions'}
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'دعم مستمر' : 'Continuous Support'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}