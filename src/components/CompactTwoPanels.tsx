import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  XCircle, 
  CheckCircle, 
  Users, 
  Clock, 
  DollarSign, 
  Target,
  Zap,
  TrendingUp,
  AlertTriangle,
  Award,
  Search,
  Globe
} from 'lucide-react';

export default function CompactTwoPanels() {
  const { language } = useLanguage();

  const content = {
    ar: {
      badge: "الفرق واضح",
      title: "قبل وبعد امتلاك موقع إلكتروني احترافي",
      problems: {
        title: "بدون موقع إلكتروني",
        subtitle: "هذا ما تخسره كل يوم",
        items: [
          {
            icon: Users,
            title: "فقدان عملاء محتملين",
            desc: "80% من الناس يبحثون عن الخدمات أولاً على الإنترنت. بدون موقع، هؤلاء العملاء يذهبون مباشرة لمنافسيك الذين يملكون مواقع"
          },
          {
            icon: Clock,
            title: "إهدار ساعات يومياً في الشرح",
            desc: "تضطر لقضاء 2-3 ساعات يومياً في تفسير خدماتك وأسعارك لكل عميل على حدة، بدلاً من استثمار هذا الوقت في تطوير عملك"
          },
          {
            icon: Search,
            title: "غياب كامل عن محركات البحث",
            desc: "عندما يبحث الناس عن خدماتك على جوجل، لا يجدونك إطلاقاً. منافسوك يظهرون أولاً ويحصلون على كل العملاء الجدد"
          },
          {
            icon: AlertTriangle,
            title: "شكوك في المصداقية والاحترافية",
            desc: "العملاء في عصرنا يتوقعون موقع إلكتروني من أي عمل جدي. عدم وجود موقع يعطي انطباعاً بأن عملك صغير أو غير موثوق"
          },
          {
            icon: DollarSign,
            title: "خسارة مالية مستمرة",
            desc: "كل يوم بدون موقع يعني خسارة عملاء وأرباح. الشركات التي لديها مواقع تحقق أرباحاً أعلى بـ 40% من المنافسين بدون مواقع"
          }
        ]
      },
      solutions: {
        title: "مع موقع إلكتروني احترافي",
        subtitle: "هذا ما ستحققه",
        items: [
          {
            icon: Target,
            title: "عملاء جدد يأتون إليك تلقائياً",
            desc: "موقعك المحسن سيظهر في نتائج البحث الأولى. العملاء سيجدونك بسهولة ويتواصلون معك دون أي جهد منك"
          },
          {
            icon: Zap,
            title: "توفير ساعات العمل يومياً",
            desc: "موقعك يعمل كمندوب مبيعات 24 ساعة. يشرح خدماتك، يعرض أسعارك، ويجيب على الأسئلة الشائعة، فتركز على العمل المهم"
          },
          {
            icon: Globe,
            title: "ظهور قوي في محركات البحث",
            desc: "مع تحسين SEO المتقدم، موقعك سيتصدر نتائج البحث. عندما يبحث أي شخص عن خدماتك، سيجدك في المقدمة"
          },
          {
            icon: Award,
            title: "ثقة ومصداقية عالية",
            desc: "موقع احترافي يبني ثقة فورية. العملاء يشعرون بالأمان للتعامل معك ويفضلونك على المنافسين الذين لا يملكون مواقع مميزة"
          },
          {
            icon: TrendingUp,
            title: "زيادة ملحوظة في الأرباح",
            desc: "مع المزيد من العملاء والثقة الأكبر، ستشهد زيادة في المبيعات بنسبة 30-50% خلال الأشهر الأولى من إطلاق موقعك"
          }
        ]
      }
    },
    en: {
      badge: "Clear Difference",
      title: "Before and After Having a Professional Website",
      problems: {
        title: "Without a Website",
        subtitle: "This is what you lose every day",
        items: [
          {
            icon: Users,
            title: "Losing Potential Customers",
            desc: "80% of people search for services online first. Without a website, these customers go directly to your competitors who have websites"
          },
          {
            icon: Clock,
            title: "Wasting Hours Daily Explaining",
            desc: "You're forced to spend 2-3 hours daily explaining your services and prices to each customer individually, instead of investing this time in developing your business"
          },
          {
            icon: Search,
            title: "Complete Absence from Search Engines",
            desc: "When people search for your services on Google, they can't find you at all. Your competitors appear first and get all the new customers"
          },
          {
            icon: AlertTriangle,
            title: "Doubts About Credibility and Professionalism",
            desc: "Customers in our era expect a website from any serious business. Not having a website gives the impression that your business is small or untrustworthy"
          },
          {
            icon: DollarSign,
            title: "Continuous Financial Loss",
            desc: "Every day without a website means losing customers and profits. Companies with websites achieve 40% higher profits than competitors without websites"
          }
        ]
      },
      solutions: {
        title: "With a Professional Website",
        subtitle: "This is what you'll achieve",
        items: [
          {
            icon: Target,
            title: "New Customers Come to You Automatically",
            desc: "Your optimized website will appear in top search results. Customers will easily find you and contact you without any effort from your side"
          },
          {
            icon: Zap,
            title: "Save Hours of Work Daily",
            desc: "Your website works as a 24-hour sales representative. It explains your services, displays your prices, and answers common questions, so you focus on important work"
          },
          {
            icon: Globe,
            title: "Strong Presence in Search Engines",
            desc: "With advanced SEO optimization, your website will top search results. When anyone searches for your services, they'll find you at the front"
          },
          {
            icon: Award,
            title: "High Trust and Credibility",
            desc: "A professional website builds instant trust. Customers feel secure dealing with you and prefer you over competitors who don't have outstanding websites"
          },
          {
            icon: TrendingUp,
            title: "Notable Increase in Profits",
            desc: "With more customers and greater trust, you'll see a 30-50% increase in sales within the first months of launching your website"
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-10 lg:py-12 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-8 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted border border-border rounded-full mb-3 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs font-medium text-foreground">
                {currentContent.badge}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="text-xl lg:text-2xl max-w-3xl mx-auto mb-3 text-foreground font-medium heading-interactive heading-bounce">
              {currentContent.title}
            </h2>
          </AnimatedSection>
        </div>

        {/* Two Panels */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          
          {/* Problems Panel */}
          <AnimatedSection animation="fadeInLeft" delay={300}>
            <div className="relative group">
              <div className="bg-gradient-to-br from-red-50/95 to-red-100/75 border-2 border-red-200/90 rounded-xl p-4 h-full hover:shadow-md hover:shadow-red-200/50 transition-all duration-400 hover:scale-[1.01] relative overflow-hidden">
                
                {/* Header */}
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-red-500/20 rounded-lg">
                      <XCircle className="w-4 h-4 text-red-700" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-1 text-red-800">
                    {currentContent.problems.title}
                  </h3>
                  <p className="text-xs font-medium text-red-700">
                    {currentContent.problems.subtitle}
                  </p>
                </div>

                {/* Problems List */}
                <div className="space-y-3">
                  {currentContent.problems.items.map((item, index) => (
                    <div key={index} className="flex gap-2.5 group/item hover:bg-red-100/70 p-2 rounded-lg transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="p-1.5 bg-red-200/90 rounded-md group-hover/item:bg-red-300/80 transition-colors">
                          <item.icon className="w-3.5 h-3.5 text-red-800" />
                        </div>
                      </div>
                      <div className={`${language === 'ar' ? 'text-right' : 'text-left'} flex-1`}>
                        <h4 className="font-semibold mb-0.5 text-sm text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed font-medium text-red-800">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Solutions Panel */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-50/95 to-green-100/75 border-2 border-green-200/90 rounded-xl p-4 h-full hover:shadow-md hover:shadow-green-200/50 transition-all duration-400 hover:scale-[1.01] relative overflow-hidden">
                
                {/* Header */}
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-green-500/20 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-1 text-green-800">
                    {currentContent.solutions.title}
                  </h3>
                  <p className="text-xs font-medium text-green-700">
                    {currentContent.solutions.subtitle}
                  </p>
                </div>

                {/* Solutions List */}
                <div className="space-y-3">
                  {currentContent.solutions.items.map((item, index) => (
                    <div key={index} className="flex gap-2.5 group/item hover:bg-green-100/70 p-2 rounded-lg transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="p-1.5 bg-green-200/90 rounded-md group-hover/item:bg-green-300/80 transition-colors">
                          <item.icon className="w-3.5 h-3.5 text-green-800" />
                        </div>
                      </div>
                      <div className={`${language === 'ar' ? 'text-right' : 'text-left'} flex-1`}>
                        <h4 className="font-semibold mb-0.5 text-sm text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed font-medium text-green-800">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeInUp" delay={500}>
          <div className="text-center mt-6">
            <div 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-full hover:bg-muted/80 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-red-500/70 rounded-full group-hover:bg-red-500 transition-colors"></div>
                <div className="w-1 h-1 bg-foreground/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-green-500/70 rounded-full group-hover:bg-green-500 transition-colors"></div>
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {language === 'ar' ? 
                  'ابدأ رحلة التحول الرقمي اليوم' : 
                  'Start Your Digital Transformation Today'
                }
              </span>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}