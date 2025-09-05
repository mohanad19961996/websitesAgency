import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  TrendingDown, 
  TrendingUp, 
  XCircle, 
  CheckCircle, 
  Users, 
  Clock, 
  DollarSign, 
  Smartphone,
  Globe,
  Star,
  AlertTriangle,
  Zap,
  Target,
  Award,
  BarChart3,
  Shield
} from 'lucide-react';

export default function ProblemSolutionSection() {
  const { language } = useLanguage();

  const content = {
    ar: {
      badge: "لماذا تحتاج موقع إلكتروني؟",
      title: "الفرق واضح بين من يملك موقع ومن لا يملك",
      subtitle: "اكتشف كيف يؤثر عدم وجود موقع إلكتروني على عملك، وكيف يمكن للموقع الصحيح أن يغير كل شيء",
      problems: {
        title: "بدون موقع إلكتروني",
        subtitle: "هذا ما تخسره كل يوم",
        items: [
          {
            icon: Users,
            title: "عملاء قليلون",
            description: "معظم الناس يبحثون عن الخدمات على الإنترنت أولاً. بدون موقع، لن يجدوك معظم العملاء المحتملين."
          },
          {
            icon: Clock,
            title: "وقت ضائع في الشرح",
            description: "تقضي ساعات يومياً في شرح خدماتك وأسعارك لكل عميل على حدة بدلاً من توجيههم لموقعك."
          },
          {
            icon: DollarSign,
            title: "أرباح أقل",
            description: "منافسوك الذين لديهم مواقع يحصلون على عملاء أكثر ويحققون أرباحاً أعلى منك."
          },
          {
            icon: AlertTriangle,
            title: "ثقة أقل من العملاء",
            description: "العملاء يشكون في مصداقيتك ومهنيتك عندما لا يجدون لك موقع إلكتروني واضح."
          },
          {
            icon: Smartphone,
            title: "صعوبة الوصول إليك",
            description: "العملاء لا يعرفون كيف يتواصلون معك أو أين يجدون معلومات عن خدماتك بسهولة."
          },
          {
            icon: BarChart3,
            title: "لا تعرف احتياجات السوق",
            description: "بدون أدوات التحليل، لا تعرف ما يبحث عنه عملاؤك حقاً أو كيف تحسن خدماتك."
          }
        ]
      },
      solutions: {
        title: "مع موقع إلكتروني احترافي",
        subtitle: "هذا ما ستكسبه",
        items: [
          {
            icon: Target,
            title: "عملاء جدد يجدونك بسهولة",
            description: "موقعك سيظهر في نتائج البحث عندما يبحث الناس عن خدماتك، مما يجلب لك عملاء جدد تلقائياً."
          },
          {
            icon: Zap,
            title: "توفير الوقت والجهد",
            description: "موقعك يشرح خدماتك وأسعارك للعملاء، فتوفر ساعات من الشرح وتركز على العمل المهم."
          },
          {
            icon: TrendingUp,
            title: "زيادة المبيعات والأرباح",
            description: "مع المزيد من العملاء والثقة الأكبر، ستحقق مبيعات أعلى وأرباحاً أفضل من عملك."
          },
          {
            icon: Award,
            title: "ثقة ومصداقية أكبر",
            description: "الموقع الاحترافي يعطي انطباعاً ممتازاً عنك ويجعل العملاء يثقون بك أكثر."
          },
          {
            icon: Globe,
            title: "متاح 24 ساعة يومياً",
            description: "موقعك يعمل لصالحك حتى وأنت نائم، فالعملاء يمكنهم تصفحه والتواصل معك في أي وقت."
          },
          {
            icon: Shield,
            title: "فهم أفضل لعملائك",
            description: "ستعرف من يزور موقعك وماذا يريد، مما يساعدك على تحسين خدماتك وزيادة رضا العملاء."
          }
        ]
      }
    },
    en: {
      badge: "Why Do You Need a Website?",
      title: "The Clear Difference Between Having a Website and Not",
      subtitle: "Discover how not having a website affects your business, and how the right website can change everything",
      problems: {
        title: "Without a Website",
        subtitle: "This is what you lose every day",
        items: [
          {
            icon: Users,
            title: "Few Customers",
            description: "Most people search for services online first. Without a website, most potential customers won't find you."
          },
          {
            icon: Clock,
            title: "Time Wasted Explaining",
            description: "You spend hours daily explaining your services and prices to each customer individually instead of directing them to your website."
          },
          {
            icon: DollarSign,
            title: "Lower Profits",
            description: "Your competitors with websites get more customers and achieve higher profits than you."
          },
          {
            icon: AlertTriangle,
            title: "Less Customer Trust",
            description: "Customers doubt your credibility and professionalism when they can't find a clear website for you."
          },
          {
            icon: Smartphone,
            title: "Hard to Reach You",
            description: "Customers don't know how to contact you or where to easily find information about your services."
          },
          {
            icon: BarChart3,
            title: "Don't Know Market Needs",
            description: "Without analytics tools, you don't know what your customers really want or how to improve your services."
          }
        ]
      },
      solutions: {
        title: "With a Professional Website",
        subtitle: "This is what you'll gain",
        items: [
          {
            icon: Target,
            title: "New Customers Find You Easily",
            description: "Your website will appear in search results when people look for your services, automatically bringing you new customers."
          },
          {
            icon: Zap,
            title: "Save Time and Effort",
            description: "Your website explains your services and prices to customers, saving you hours of explanation and letting you focus on important work."
          },
          {
            icon: TrendingUp,
            title: "Increase Sales and Profits",
            description: "With more customers and greater trust, you'll achieve higher sales and better profits from your business."
          },
          {
            icon: Award,
            title: "Greater Trust and Credibility",
            description: "A professional website gives an excellent impression about you and makes customers trust you more."
          },
          {
            icon: Globe,
            title: "Available 24/7",
            description: "Your website works for you even while you sleep, as customers can browse it and contact you anytime."
          },
          {
            icon: Shield,
            title: "Better Understanding of Your Customers",
            description: "You'll know who visits your website and what they want, helping you improve your services and increase customer satisfaction."
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-8 lg:py-14 bg-gradient-to-br from-neutral-50 via-neutral-100/50 to-neutral-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-100/30 to-red-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-green-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-6 lg:mb-10 ${language === 'ar' ? 'text-right' : 'text-left'} lg:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-300 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-800">
                {currentContent.badge}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-3 max-w-4xl mx-auto text-[40px]" style={{ color: '#1f2937 !important' }}>
              {currentContent.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#374151' }}>
              {currentContent.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Problems Card */}
          <AnimatedSection animation="fadeInLeft" delay={400}>
            <div className="relative group">
              {/* Card */}
              <div className="bg-gradient-to-br from-red-50/80 to-red-100/60 border-2 border-red-300/70 rounded-2xl p-4 lg:p-6 h-full hover:shadow-xl hover:shadow-red-200/40 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                {/* Header */}
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-500/15 rounded-full">
                      <XCircle className="w-5 h-5 text-red-700" />
                    </div>
                    <TrendingDown className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl mb-2 font-bold" style={{ color: '#b91c1c !important' }}>
                    {currentContent.problems.title}
                  </h3>
                  <p className="font-medium" style={{ color: '#dc2626' }}>
                    {currentContent.problems.subtitle}
                  </p>
                </div>

                {/* Problems List */}
                <div className="space-y-3">
                  {currentContent.problems.items.map((item, index) => (
                    <div key={index} className="flex gap-3 group/item cursor-pointer hover:bg-red-100/60 p-2 rounded-xl transition-all duration-300 hover:scale-105">
                      <div className="flex-shrink-0">
                        <div className="p-1.5 bg-red-200/90 rounded-lg group-hover/item:bg-red-300/80 transition-colors">
                          <item.icon className="w-4 h-4 text-red-800 group-hover/item:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className={`${language === 'ar' ? 'text-right' : 'text-left'} flex-1`}>
                        <h4 className="font-bold mb-1 group-hover/item:font-bold transition-colors text-sm" style={{ color: '#b91c1c' }}>
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed group-hover/item:opacity-90 transition-colors font-medium" style={{ color: '#991b1b' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Solutions Card */}
          <AnimatedSection animation="fadeInRight" delay={500}>
            <div className="relative group">
              {/* Card */}
              <div className="bg-gradient-to-br from-green-50/80 to-green-100/60 border-2 border-green-300/70 rounded-2xl p-4 lg:p-6 h-full hover:shadow-xl hover:shadow-green-200/40 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                {/* Header */}
                <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/15 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl mb-2 font-bold" style={{ color: '#15803d !important' }}>
                    {currentContent.solutions.title}
                  </h3>
                  <p className="font-medium" style={{ color: '#16a34a' }}>
                    {currentContent.solutions.subtitle}
                  </p>
                </div>

                {/* Solutions List */}
                <div className="space-y-3">
                  {currentContent.solutions.items.map((item, index) => (
                    <div key={index} className="flex gap-3 group/item cursor-pointer hover:bg-green-100/60 p-2 rounded-xl transition-all duration-300 hover:scale-105">
                      <div className="flex-shrink-0">
                        <div className="p-1.5 bg-green-200/90 rounded-lg group-hover/item:bg-green-300/80 transition-colors">
                          <item.icon className="w-4 h-4 text-green-800 group-hover/item:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className={`${language === 'ar' ? 'text-right' : 'text-left'} flex-1`}>
                        <h4 className="font-bold mb-1 group-hover/item:font-bold transition-colors text-sm" style={{ color: '#15803d' }}>
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed group-hover/item:opacity-90 transition-colors font-medium" style={{ color: '#166534' }}>
                          {item.description}
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
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="text-center mt-6 lg:mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 border border-neutral-300 rounded-full hover:bg-neutral-200 hover:border-neutral-400 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Star className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ color: '#6b7280' }} />
              <span className="font-medium" style={{ color: '#374151' }}>
                {language === 'ar' ? 'ابدأ رحلتك نحو النجاح اليوم' : 'Start Your Journey to Success Today'}
              </span>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}