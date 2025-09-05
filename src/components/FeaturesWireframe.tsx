import { useState } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  Code2, 
  Rocket, 
  Users, 
  Trophy, 
  Zap, 
  Target,
  CheckCircle2, 
  TrendingUp, 
  Clock,
  Star,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Palette,
  Shield,
  BarChart3,
  GitBranch
} from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export default function FeaturesWireframe() {
  const { language } = useLanguage();
  const [activeSkill, setActiveSkill] = useState(0);

  const developmentStats = [
    {
      number: "500+",
      label: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      number: "95%",
      label: language === 'ar' ? 'معدل رضا العملاء' : 'Client Satisfaction',
      icon: Star,
      color: 'text-green-500'
    },
    {
      number: "24/7",
      label: language === 'ar' ? 'دعم تقني' : 'Technical Support',
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      number: "15K+",
      label: language === 'ar' ? 'مطور في المجتمع' : 'Developers in Community',
      icon: Users,
      color: 'text-purple-500'
    }
  ];

  const skillsData = [
    {
      category: language === 'ar' ? 'تطوير الواجهات الأمامية' : 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'Next.js', level: 88 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: language === 'ar' ? 'تطوير الخلفية' : 'Backend Development', 
      icon: Database,
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 87 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: language === 'ar' ? 'تطوير الجوال' : 'Mobile Development',
      icon: Smartphone, 
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter', level: 82 },
        { name: 'Swift', level: 78 },
        { name: 'Kotlin', level: 80 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: language === 'ar' ? 'DevOps والأمان' : 'DevOps & Security',
      icon: Shield,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 88 },
        { name: 'CI/CD', level: 92 },
        { name: 'Security', level: 90 }
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const comparisonData = {
    beginner: {
      title: language === 'ar' ? 'المطور المبتدئ' : 'Junior Developer',
      features: [
        language === 'ar' ? 'يكتب كود أساسي' : 'Writes basic code',
        language === 'ar' ? 'يحتاج إشراف مستمر' : 'Needs constant supervision', 
        language === 'ar' ? 'يركز على مهمة واحدة' : 'Focuses on single tasks',
        language === 'ar' ? 'محدود الخبرة' : 'Limited experience',
        language === 'ar' ? 'يتعلم من الأخطاء' : 'Learns from mistakes'
      ],
      icon: Code2,
      bgColor: 'bg-gray-100 dark:bg-gray-800',
      iconColor: 'text-gray-500'
    },
    expert: {
      title: language === 'ar' ? 'المطور المحترف' : 'Senior Developer',
      features: [
        language === 'ar' ? 'يصمم أنظمة معقدة' : 'Designs complex systems',
        language === 'ar' ? 'يقود فرق العمل' : 'Leads development teams',
        language === 'ar' ? 'يحل المشاكل بإبداع' : 'Solves problems creatively',
        language === 'ar' ? 'خبرة واسعة في التقنيات' : 'Extensive tech expertise', 
        language === 'ar' ? 'يمنع الأخطاء مسبقاً' : 'Prevents errors proactively'
      ],
      icon: Rocket,
      bgColor: 'bg-gradient-to-br from-primary/10 to-accent/10',
      iconColor: 'text-primary'
    }
  };

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '📂' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Next.js', icon: '▲' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-20">
      {/* Section Header */}
      <div className="text-center space-y-6">
        <FadeInUp delay={200}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              {language === 'ar' ? '💡 قوة التطوير الحديث' : '💡 Modern Development Power'}
            </span>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={400}>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {language === 'ar' ? (
              <>
                من فكرة إلى
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> واقع رقمي</span>
              </>
            ) : (
              <>
                From Idea to 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Digital Reality</span>
              </>
            )}
          </h2>
        </FadeInUp>
        
        <FadeInUp delay={600}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نحول رؤيتك إلى تطبيقات ومواقع متطورة باستخدام أحدث التقنيات وأفضل الممارسات في التطوير'
              : 'We transform your vision into advanced applications and websites using the latest technologies and development best practices'
            }
          </p>
        </FadeInUp>
      </div>

      {/* Development Stats */}
      <FadeInUp delay={800}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentStats.map((stat, index) => (
            <ScaleIn key={index} delay={1000 + (index * 100)}>
              <div className="relative group cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </FadeInUp>

      {/* Skills Showcase */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeInLeft delay={1200}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                {language === 'ar' ? 'خبرات تقنية متقدمة' : 'Advanced Technical Expertise'}
              </h3>
              <p className="text-muted-foreground text-lg">
                {language === 'ar'
                  ? 'نمتلك خبرة عميقة في مختلف تقنيات التطوير الحديثة مما يضمن تسليم مشاريع عالية الجودة'
                  : 'We possess deep expertise in various modern development technologies ensuring high-quality project delivery'
                }
              </p>
            </div>

            {/* Skill Categories Navigation */}
            <div className="flex flex-wrap gap-3">
              {skillsData.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSkill(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSkill === index 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <skill.icon className="w-4 h-4" />
                  <span className="text-sm">{skill.category}</span>
                </button>
              ))}
            </div>

            {/* Active Skills Display */}
            <div className="space-y-4">
              {skillsData[activeSkill].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </FadeInLeft>

        <FadeInRight delay={1400}>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/40 overflow-hidden">
              {/* Tech Stack Visualization */}
              <div className="relative h-full">
                <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 animate-pulse">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* Center Logo/Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                    <Code2 className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInRight>
      </div>

      {/* Developer Comparison */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">
            {language === 'ar' ? 'الفرق بين المبتدئ والمحترف' : 'Difference Between Junior & Senior'}
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نحن لا نكتب كود فقط، بل نصمم حلول ذكية ومتطورة'
              : "We don't just write code, we design smart and advanced solutions"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Beginner */}
          <FadeInLeft delay={1600}>
            <div className={`${comparisonData.beginner.bgColor} rounded-xl p-6 border border-border/40 h-full`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <comparisonData.beginner.icon className={`w-6 h-6 ${comparisonData.beginner.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold">{comparisonData.beginner.title}</h4>
              </div>
              
              <div className="space-y-4">
                {comparisonData.beginner.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600 dark:text-gray-400">●</span>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* Expert */}
          <FadeInRight delay={1800}>
            <div className={`${comparisonData.expert.bgColor} rounded-xl p-6 border-2 border-primary/20 h-full relative overflow-hidden`}>
              {/* Premium Badge */}
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                  {language === 'ar' ? '⭐ محترف' : '⭐ Expert'}
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <comparisonData.expert.icon className={`w-6 h-6 ${comparisonData.expert.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold">{comparisonData.expert.title}</h4>
              </div>
              
              <div className="space-y-4">
                {comparisonData.expert.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">
                    {language === 'ar' ? 'هذا مستوانا معك!' : "This is our level with you!"}
                  </span>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Call to Action */}
      <FadeInUp delay={2000}>
        <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/20">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              {language === 'ar' ? 'جاهز لبدء مشروعك التقني؟' : 'Ready to Start Your Tech Project?'}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar'
                ? 'دعنا نحول فكرتك إلى منتج رقمي متطور باستخدام أحدث التقنيات'
                : 'Let us transform your idea into an advanced digital product using the latest technologies'
              }
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              <Rocket className="w-5 h-5" />
              {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            </button>
            <button className="inline-flex items-center gap-2 border border-primary/30 hover:border-primary hover:bg-primary/5 text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300">
              <GitBranch className="w-5 h-5" />
              {language === 'ar' ? 'استكشف أعمالنا' : 'Explore Our Work'}
            </button>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}