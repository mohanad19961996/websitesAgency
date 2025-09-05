import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Search, 
  TrendingUp, 
  Users, 
  Shield,
  Clock,
  Target,
  Globe,
  Zap
} from 'lucide-react';

export default function CompactChallenges() {
  const { language } = useLanguage();

  const content = {
    ar: {
      badge: "التحديات والحلول",
      title: "نحل المشاكل التي تواجهها في عملك",
      challenges: [
        {
          icon: Search,
          title: "صعوبة الوصول للعملاء",
          description: "عملاؤك لا يعرفون عنك أو كيف يجدونك",
          solution: "موقع محسن لمحركات البحث يجلب العملاء إليك"
        },
        {
          icon: Users,
          title: "فقدان الثقة",
          description: "العملاء يشكون في مصداقيتك بدون موقع",
          solution: "موقع احترافي يبني الثقة ويعكس جودة عملك"
        },
        {
          icon: Clock,
          title: "هدر الوقت",
          description: "تقضي ساعات في شرح خدماتك لكل عميل",
          solution: "موقعك يشرح كل شيء ويوفر وقتك الثمين"
        },
        {
          icon: TrendingUp,
          title: "نمو محدود",
          description: "صعوبة في توسيع عملك والوصول لأسواق جديدة",
          solution: "منصة رقمية تفتح لك أسواق وفرص جديدة"
        }
      ]
    },
    en: {
      badge: "Challenges & Solutions",
      title: "We solve the problems you face in your business",
      challenges: [
        {
          icon: Search,
          title: "Difficulty Reaching Customers",
          description: "Your customers don't know about you or how to find you",
          solution: "SEO-optimized website that brings customers to you"
        },
        {
          icon: Users,
          title: "Trust Loss",
          description: "Customers doubt your credibility without a website",
          solution: "Professional website that builds trust and reflects work quality"
        },
        {
          icon: Clock,
          title: "Time Waste",
          description: "You spend hours explaining your services to each client",
          solution: "Your website explains everything and saves your precious time"
        },
        {
          icon: TrendingUp,
          title: "Limited Growth",
          description: "Difficulty expanding business and reaching new markets",
          solution: "Digital platform opens new markets and opportunities"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='currentColor' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='70' cy='70' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          color: 'var(--primary)'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-16 right-8 w-2 h-2 bg-primary/15 rounded-full animate-float-delayed"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <Badge variant="secondary" className="mb-4 px-4 py-2 hover:scale-105 transition-transform cursor-pointer">
              <Target className="w-4 h-4 mr-2 text-primary" />
              {currentContent.badge}
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="max-w-3xl mx-auto mb-4">
              {currentContent.title}
            </h2>
          </AnimatedSection>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {currentContent.challenges.map((challenge, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={300 + (index * 100)}
            >
              <Card className="p-6 h-full hover:shadow-lg hover-float transition-all duration-300 group cursor-pointer border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    <challenge.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h3 className="text-lg mb-2 group-hover:scale-105 transition-transform duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-4"></div>

                {/* Solution */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-600">
                      {language === 'ar' ? 'الحل' : 'Solution'}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom section */}
        <AnimatedSection animation="fadeInUp" delay={700}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 border border-border/50 rounded-full hover:bg-muted/70 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Globe className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium text-foreground">
                {language === 'ar' ? 
                  'دعنا نحول هذه التحديات إلى فرص نجاح' : 
                  'Let us turn these challenges into success opportunities'
                }
              </span>
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}