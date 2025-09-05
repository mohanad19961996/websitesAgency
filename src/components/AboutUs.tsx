import { useState } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users,
  Award,
  Target,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Star,
  Code,
  Palette,
  Database,
  Smartphone,
  Coffee,
  Lightbulb,
  CheckCircle2,
  Quote
} from 'lucide-react';

export default function AboutUs() {
  const { language } = useLanguage();
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    {
      number: "50+",
      label: language === 'ar' ? 'مشروع مكتمل' : 'Completed Projects',
      icon: CheckCircle2,
      color: 'text-green-500'
    },
    {
      number: "3+",
      label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience',
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      number: "100%",
      label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      number: "24/7",
      label: language === 'ar' ? 'دعم متواصل' : 'Continuous Support',
      icon: Shield,
      color: 'text-purple-500'
    }
  ];

  const team = [
    {
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed',
      role: language === 'ar' ? 'مطور Full Stack' : 'Full Stack Developer',
      speciality: language === 'ar' ? 'React & Node.js' : 'React & Node.js',
      experience: language === 'ar' ? '4 سنوات' : '4 Years',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: language === 'ar' ? 'سارة أحمد' : 'Sarah Ahmed',
      role: language === 'ar' ? 'مصممة UI/UX' : 'UI/UX Designer',
      speciality: language === 'ar' ? 'Figma & Adobe XD' : 'Figma & Adobe XD',
      experience: language === 'ar' ? '3 سنوات' : '3 Years',
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: language === 'ar' ? 'محمد علي' : 'Mohammed Ali',
      role: language === 'ar' ? 'مطور الخلفية' : 'Backend Developer',
      speciality: language === 'ar' ? 'Python & Django' : 'Python & Django',
      experience: language === 'ar' ? '5 سنوات' : '5 Years',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: language === 'ar' ? 'فاطمة حسن' : 'Fatima Hassan',
      role: language === 'ar' ? 'مطورة جوال' : 'Mobile Developer',
      speciality: language === 'ar' ? 'React Native & Flutter' : 'React Native & Flutter',
      experience: language === 'ar' ? '3 سنوات' : '3 Years',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      icon: Target,
      title: language === 'ar' ? 'الهدف والوضوح' : 'Purpose & Clarity',
      description: language === 'ar' 
        ? 'نحن نؤمن بأهمية وضوح الهدف في كل مشروع نعمل عليه، ونسعى لتحقيق أهداف عملائنا بأفضل الطرق'
        : 'We believe in the importance of clear purpose in every project we work on, striving to achieve our clients\' goals in the best ways',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'الشغف والإبداع' : 'Passion & Creativity',
      description: language === 'ar'
        ? 'نحب ما نفعله ونبدع في كل تفصيل، من التصميم إلى البرمجة، نضع قلوبنا في كل مشروع'
        : 'We love what we do and create in every detail, from design to programming, we put our hearts into every project',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'السرعة والكفاءة' : 'Speed & Efficiency',
      description: language === 'ar'
        ? 'نقدر وقتك ونعمل بسرعة وكفاءة عالية، مع الحفاظ على أعلى معايير الجودة في العمل'
        : 'We value your time and work with high speed and efficiency, while maintaining the highest quality standards',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'الثقة والأمان' : 'Trust & Security',
      description: language === 'ar'
        ? 'نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة، ونضمن أمان مشاريعهم وبياناتهم'
        : 'We build long-term relationships with our clients based on trust, ensuring the security of their projects and data',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const journey = [
    {
      year: '2021',
      title: language === 'ar' ? 'بداية الرحلة' : 'The Beginning',
      description: language === 'ar' ? 'تأسيس الفريق وأول المشاريع' : 'Team formation and first projects'
    },
    {
      year: '2022',
      title: language === 'ar' ? 'النمو والتطور' : 'Growth & Development',
      description: language === 'ar' ? 'توسيع الفريق وتنويع الخدمات' : 'Team expansion and service diversification'
    },
    {
      year: '2023',
      title: language === 'ar' ? 'التميز والابتكار' : 'Excellence & Innovation',
      description: language === 'ar' ? 'تطوير حلول مبتكرة ومشاريع معقدة' : 'Developing innovative solutions and complex projects'
    },
    {
      year: '2024',
      title: language === 'ar' ? 'القيادة والريادة' : 'Leadership & Pioneering',
      description: language === 'ar' ? 'أصبحنا من أفضل الفرق في المنطقة' : 'Became one of the best teams in the region'
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <FadeInUp delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {language === 'ar' ? '👥 تعرف علينا' : '👥 Meet Our Team'}
              </span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <h2 className="text-3xl lg:text-5xl font-bold">
              {language === 'ar' ? 'نحن أكثر من مطورين' : "We're More Than Developers"}
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={600}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نحن فريق شغوف بالتقنية والإبداع، نجمع بين الخبرة والحماس لتقديم أفضل الحلول الرقمية لعملائنا'
                : 'We are a team passionate about technology and creativity, combining experience and enthusiasm to provide the best digital solutions for our clients'
              }
            </p>
          </FadeInUp>
        </div>

        {/* Stats Section */}
        <FadeInUp delay={800}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <ScaleIn key={index} delay={1000 + (index * 100)}>
                <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeInUp>

        {/* About Content with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          <FadeInLeft delay={1200}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  {language === 'ar' ? 'قصتنا وشغفنا' : 'Our Story & Passion'}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {language === 'ar'
                    ? 'بدأنا رحلتنا من حب التقنية والرغبة في حل المشاكل الحقيقية. اليوم، نحن فريق متكامل من المطورين والمصممين المتخصصين في تطوير حلول رقمية مبتكرة.'
                    : 'We started our journey from a love of technology and a desire to solve real problems. Today, we are an integrated team of developers and designers specialized in developing innovative digital solutions.'
                  }
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'نؤمن بأن التقنية يجب أن تخدم الإنسان، لذلك نركز على تطوير تطبيقات ومواقع سهلة الاستخدام وذات قيمة حقيقية للمستخدمين.'
                    : 'We believe that technology should serve humanity, so we focus on developing user-friendly applications and websites with real value for users.'
                  }
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    {language === 'ar' 
                      ? '"نحول الأفكار إلى واقع رقمي يفوق التوقعات"'
                      : '"We turn ideas into digital reality that exceeds expectations"'
                    }
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {language === 'ar' ? '- شعار فريقنا' : '- Our Team Motto'}
                  </p>
                </div>
              </div>
            </div>
          </FadeInLeft>

          <FadeInRight delay={1400}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739287088635-444554e7ac0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1Njk2OTA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={language === 'ar' ? 'فريق العمل المحترف' : 'Professional team workspace'}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float">
                <Coffee className="w-12 h-12 text-primary" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float-delayed">
                <Lightbulb className="w-10 h-10 text-accent-foreground" />
              </div>
            </div>
          </FadeInRight>
        </div>

        {/* Team Members */}
        <div className="space-y-12 mb-20">
          <FadeInUp delay={1600}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                {language === 'ar' ? 'فريق الخبراء' : 'Expert Team'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'تعرف على الخبراء الذين يقفون وراء نجاح مشاريعك'
                  : 'Meet the experts behind the success of your projects'
                }
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ScaleIn key={index} delay={1800 + (index * 100)}>
                <div className="group text-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-2">{member.speciality}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3" />
                    <span>{member.experience}</span>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-12 mb-20">
          <FadeInUp delay={2000}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                {language === 'ar' ? 'قيمنا ومبادئنا' : 'Our Values & Principles'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'القيم التي توجه عملنا وتضمن تقديم أفضل الخدمات لعملائنا'
                  : 'The values that guide our work and ensure we provide the best services to our clients'
                }
              </p>
            </div>
          </FadeInUp>

          {/* Interactive Values Display */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <FadeInLeft delay={2200}>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      activeValue === index
                        ? 'bg-primary/5 border-primary/30 shadow-md'
                        : 'bg-card border-border/50 hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center ${
                        activeValue === index ? 'scale-110' : ''
                      } transition-transform duration-300`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar' ? 'انقر للمزيد' : 'Click for more'}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </FadeInLeft>

            <FadeInRight delay={2400}>
              <div className="p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${values[activeValue].color} rounded-2xl flex items-center justify-center mb-6`}>
                  {(() => {
                    const IconComponent = values[activeValue].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                
                <h4 className="text-xl font-bold mb-4">{values[activeValue].title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {values[activeValue].description}
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-12">
          <FadeInUp delay={2600}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                {language === 'ar' ? 'رحلتنا عبر السنين' : 'Our Journey Through Years'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'من البداية المتواضعة إلى أن أصبحنا من أفضل الفرق في المنطقة'
                  : 'From humble beginnings to becoming one of the best teams in the region'
                }
              </p>
            </div>
          </FadeInUp>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <FadeInUp key={index} delay={2800 + (index * 200)}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1 lg:text-right lg:pr-8">
                      {index % 2 === 0 && (
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h4 className="text-xl font-semibold">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 relative"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    <div className="flex-1 lg:pl-8">
                      {index % 2 === 1 && (
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h4 className="text-xl font-semibold">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}