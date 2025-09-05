import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Globe, 
  Headphones, 
  BarChart3,
  ArrowRight,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WebsiteBenefits() {
  const { language } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 768 || 
                            ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setFlippedCards(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    }
  };

  const content = {
    ar: {
      badge: "فوائد الموقع الإلكتروني",
      title: "ماذا يحقق الموقع الإلكتروني لعملك؟",
      subtitle: "اكتشف كيف يمكن للموقع الإلكتروني الاحترافي أن يحول عملك إلى مؤسسة رقمية ناجحة ومربحة",
      benefits: [
        {
          icon: TrendingUp,
          title: "زيادة المبيعات والإيرادات",
          summary: "نمو مالي مستدام ومضاعف",
          description: "الموقع الإلكتروني الاحترافي يضاعف مبيعاتك خلال أشهر قليلة. العملاء يجدونك بسهولة في محركات البح��، مما يعني المزيد من الطلبات والاستفسارات يومياً.",
          image: "https://images.unsplash.com/photo-1705234384679-119488a72a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHNhbGVzJTIwY2hhcnR8ZW58MXx8fHwxNzU3MDExMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "زيادة فورية في الطلبات",
              description: "75% من العملاء يطلبون الخدمة فور رؤية الموقع الاحترافي"
            },
            {
              title: "أسعار أعلى مبررة",
              description: "الموقع المتطور يبرر طلب أسعار أعلى بنسبة 40-60%"
            },
            {
              title: "عملاء من مناطق جديدة",
              description: "توسع جغرافي يجلب عملاء من مدن ومناطق لم تصلها من قبل"
            }
          ],
          stat: {
            value: "300%",
            label: "زيادة التحويل"
          }
        },
        {
          icon: Shield,
          title: "بناء الثقة والمصداقية",
          summary: "سمعة قوية وموثوقية عالية",
          description: "في عالم اليوم، الموقع الإلكتروني الاحترافي هو شهادة المصداقية الأولى لعملك. العملاء يحكمون على جودة خدماتك من خلال موقعك قبل أن يتصلوا بك.",
          image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cnVzdCUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NzAxMTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "انطباع أول قوي",
              description: "90% من الزوار يكونون انطباعهم عن عملك خلال 7 ثوان من رؤية الموقع"
            },
            {
              title: "تقليل المقاومة للشراء",
              description: "عملاء أقل تردداً وأسرع في اتخاذ قرار التعامل معك"
            },
            {
              title: "شهادات عملاء موثقة",
              description: "عرض تقييمات حقيقية تزيد من الثقة وتقنع العملاء الجدد"
            }
          ],
          stat: {
            value: "90%",
            label: "ثقة أكبر"
          }
        },
        {
          icon: Target,
          title: "تسويق رقمي متقدم ومؤثر",
          summary: "وصول دقيق للجمهور المستهدف",
          description: "موقعك يصبح مركز عمليات التسويق الرقمي المتطورة. من خلال تحسين محركات البحث (SEO)، ستظهر في المقدمة عند البحث عن خدماتك.",
          image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1Njk5NjE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "ظهور في الصفحة الأولى",
              description: "تحسين SEO يضعك في المواضع الأولى عند البحث عن خدماتك"
            },
            {
              title: "حملات إعلانية مستهدفة",
              description: "إعلانات دقيقة تصل للعملاء المحتملين بتكلفة أقل وفعالية أكبر"
            },
            {
              title: "تتبع وتحليل شامل",
              description: "معرفة دقيقة بمصادر العملاء وأكثر الخدمات طلباً"
            }
          ],
          stat: {
            value: "500%",
            label: "زيادة الوصول"
          }
        },
        {
          icon: Globe,
          title: "توسع جغرافي بلا حدود",
          summary: "وصول عالمي وأسواق جديدة",
          description: "الموقع الإلكتروني يكسر الحدود الجغرافية لعملك. بدلاً من الاقتصار على عملاء منطقتك، يمكنك الوصول لعملاء من مدن ودول أخرى.",
          image: "https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGV4cGFuc2lvbiUyMHdvcmxkJTIwbWFwfGVufDF8fHx8MTc1NzAxMTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "عملاء من مدن جديدة",
              description: "توسع في نطاق جغرافي أوسع يضاعف قاعدة العملاء المحتملين"
            },
            {
              title: "أسواق إقليمية وعالمية",
              description: "إمكانية الوصول لعملاء من دول مجاورة ومناطق جديدة كلياً"
            },
            {
              title: "خدمات عن بُعد",
              description: "تقديم خدمات رقمي�� واستشارات عن بُعد لعملاء في أي مكان"
            }
          ],
          stat: {
            value: "10X",
            label: "توسع السوق"
          }
        },
        {
          icon: Headphones,
          title: "خدمة عملاء متطورة ومتاحة",
          summary: "دعم فوري وتجربة عملاء استثنائية",
          description: "الموقع الإلكتروني يثوّر طريقة تعاملك مع العملاء. من خلال نظام الدردشة المباشرة، العملاء يحصلون على إجابات فورية لاستفساراتهم.",
          image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwdGVhbXxlbnwxfHx8fDE3NTcwMTEyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "دردشة مباشرة فورية",
              description: "إجابات سريعة في أي وقت تزيد من رضا العملاء واحتمالية الشراء"
            },
            {
              title: "قاعدة معرفة شاملة",
              description: "إجابات جاهزة لأهم الأسئلة توفر وقتك وتخدم العملاء بسرعة"
            },
            {
              title: "متابعة ذكية للطلبات",
              description: "نظام تذاكر متطور يضمن عدم فقدان أي طلب أو استفسار"
            }
          ],
          stat: {
            value: "24/7",
            label: "دعم متواصل"
          }
        },
        {
          icon: BarChart3,
          title: "توافق مع الجوال وسرعة عالية",
          summary: "أداء محترف على جميع الأجهزة",
          description: "موقعك سيعمل بسرعة وكفاءة على جميع الأجهزة - الجوال، التابلت، والحاسوب. تصميم متجاوب يضمن تجربة مثالية للزوار من أي جهاز يستخدمونه.",
          image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwNTg3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "تصميم متجاوب تماماً",
              description: "الموقع يتكيف تلقائياً مع حجم شاشة أي جهاز للحصول على أفضل تجربة"
            },
            {
              title: "سرعة تحميل فائقة",
              description: "تحميل سريع في ثوانٍ معدودة يحافظ على صبر الزوار ويقلل معدل الانصراف"
            },
            {
              title: "تجربة مستخدم سلسة",
              description: "تنقل سهل وواضح يجعل العملاء يجدون ما يبحثون عنه بسرعة"
            }
          ],
          stat: {
            value: "100%",
            label: "توافق كامل"
          }
        }
      ]
    },
    en: {
      badge: "Website Benefits",
      title: "What Does a Website Achieve for Your Business?",
      subtitle: "Discover how a professional website can transform your business into a successful and profitable digital enterprise",
      benefits: [
        {
          icon: TrendingUp,
          title: "Increase Sales and Revenue",
          summary: "Sustainable and multiplied financial growth",
          description: "A professional website doubles your sales within months. Customers easily find you in search engines, meaning more daily orders and inquiries.",
          image: "https://images.unsplash.com/photo-1705234384679-119488a72a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHNhbGVzJTIwY2hhcnR8ZW58MXx8fHwxNzU3MDExMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "Immediate Order Increase",
              description: "75% of customers request services immediately after seeing a professional website"
            },
            {
              title: "Higher Justified Prices",
              description: "Advanced website justifies 40-60% higher prices than competitors"
            },
            {
              title: "Customers from New Areas",
              description: "Geographic expansion brings customers from cities and regions never reached before"
            }
          ],
          stat: {
            value: "300%",
            label: "Conversion Boost"
          }
        },
        {
          icon: Shield,
          title: "Build Trust and Credibility",
          summary: "Strong reputation and high trustworthiness",
          description: "In today's world, a professional website is your business's first credibility certificate. Customers judge your service quality through your website before contacting you.",
          image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cnVzdCUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NzAxMTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "Strong First Impression",
              description: "90% of visitors form their opinion about your business within 7 seconds of seeing the website"
            },
            {
              title: "Reduced Purchase Resistance",
              description: "Less hesitant customers who make decisions faster when dealing with you"
            },
            {
              title: "Documented Customer Testimonials",
              description: "Display real reviews that increase trust and convince new customers"
            }
          ],
          stat: {
            value: "90%",
            label: "Higher Trust"
          }
        },
        {
          icon: Target,
          title: "Advanced and Impactful Digital Marketing",
          summary: "Precise reach to target audience",
          description: "Your website becomes the center of advanced digital marketing operations. Through SEO optimization, you'll appear first when people search for your services.",
          image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1Njk5NjE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "First Page Appearance",
              description: "SEO optimization places you in top positions when searching for your services"
            },
            {
              title: "Targeted Ad Campaigns",
              description: "Precise ads that reach potential customers with lower cost and higher effectiveness"
            },
            {
              title: "Comprehensive Tracking and Analysis",
              description: "Precise knowledge of customer sources and most requested services"
            }
          ],
          stat: {
            value: "500%",
            label: "Reach Increase"
          }
        },
        {
          icon: Globe,
          title: "Unlimited Geographic Expansion",
          summary: "Global reach and new markets",
          description: "A website breaks the geographical boundaries of your business. Instead of limiting yourself to local customers, you can reach customers from other cities and countries.",
          image: "https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGV4cGFuc2lvbiUyMHdvcmxkJTIwbWFwfGVufDF8fHx8MTc1NzAxMTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "Customers from New Cities",
              description: "Expansion into wider geographic scope that doubles potential customer base"
            },
            {
              title: "Regional and Global Markets",
              description: "Ability to reach customers from neighboring countries and completely new regions"
            },
            {
              title: "Remote Services",
              description: "Provide digital services and remote consultations to customers anywhere"
            }
          ],
          stat: {
            value: "10X",
            label: "Market Expansion"
          }
        },
        {
          icon: Headphones,
          title: "Advanced and Available Customer Service",
          summary: "Instant support and exceptional customer experience",
          description: "A website revolutionizes how you deal with customers. Through live chat systems, customers get instant answers to their questions, increasing their satisfaction and likelihood of purchase.",
          image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwdGVhbXxlbnwxfHx8fDE3NTcwMTEyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "Instant Live Chat",
              description: "Quick answers anytime increase customer satisfaction and purchase likelihood"
            },
            {
              title: "Comprehensive Knowledge Base",
              description: "Ready answers to important questions save your time and serve customers quickly"
            },
            {
              title: "Smart Request Tracking",
              description: "Advanced ticketing system ensures no request or inquiry is lost"
            }
          ],
          stat: {
            value: "24/7",
            label: "Continuous Support"
          }
        },
        {
          icon: BarChart3,
          title: "Mobile Compatibility and High Speed",
          summary: "Professional performance on all devices",
          description: "Your website will work fast and efficiently on all devices - mobile, tablet, and desktop. Responsive design ensures a perfect experience for visitors from any device they use.",
          image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwNTg3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          additionalContent: [
            {
              title: "Fully Responsive Design",
              description: "Website automatically adapts to any device screen size for optimal experience"
            },
            {
              title: "Lightning Fast Loading",
              description: "Quick loading in seconds maintains visitor patience and reduces bounce rate"
            },
            {
              title: "Smooth User Experience",
              description: "Easy and clear navigation helps customers find what they're looking for quickly"
            }
          ],
          stat: {
            value: "100%",
            label: "Full Compatibility"
          }
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-14 lg:py-18 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-12 w-2 h-2 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-primary/15 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-primary/20 rounded-full animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <Badge variant="secondary" className="mb-6 px-6 py-3 hover:scale-105 transition-transform cursor-pointer text-base">
              <Star className="w-5 h-5 mr-2 text-primary" />
              {currentContent.badge}
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl max-w-4xl mx-auto mb-6 heading-interactive" style={{ color: 'var(--primary)' }}>
              {currentContent.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-bold">
              {currentContent.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {currentContent.benefits.map((benefit, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={400 + (index * 150)}
            >
              <div 
                className="perspective-1000 h-full group cursor-pointer"
                style={{ height: '420px' }}
                onClick={() => handleCardClick(index)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-gpu hover:scale-[1.02] transition-all ${
                    isMobile 
                      ? (flippedCards.includes(index) ? 'rotate-y-180' : '')
                      : 'group-hover:rotate-y-180'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  
                  {/* Front Side */}
                  <Card 
                    className="absolute inset-0 w-full h-full backface-hidden border border-border/30 bg-card backdrop-blur-sm overflow-hidden hover:shadow-xl hover-border-primary hover-glow-primary transition-all duration-500"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">
                      <ImageWithFallback
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60"></div>
                      
                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Summary badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-xs font-medium text-primary/80 leading-tight">
                            {benefit.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="mb-3">
                        <h3 className="text-lg font-medium mb-2 text-foreground heading-bounce">
                          {benefit.title}
                        </h3>
                      </div>

                      <p className="text-sm text-foreground leading-relaxed line-clamp-3 mb-4 font-bold">
                        {benefit.description}
                      </p>

                      {/* Tap/Hover indicator */}
                      <div className="flex items-center justify-center">
                        <div className={`flex items-center gap-2 text-primary/70 px-4 py-2 bg-primary/8 rounded-full border border-primary/20 hover:bg-primary/12 hover:border-primary/30 transition-all ${
                          isMobile 
                            ? (flippedCards.includes(index) ? 'scale-105 bg-primary/12 border-primary/30' : '')
                            : 'group-hover:scale-105'
                        }`}>
                          <span className="text-xs font-medium">
                            {language === 'ar' 
                              ? (isMobile ? 'اضغط للتفاصيل' : 'مرر للتفاصيل')
                              : (isMobile ? 'Tap for Details' : 'Hover for Details')
                            }
                          </span>
                          <ArrowRight className={`w-3 h-3 transition-transform ${
                            isMobile 
                              ? (flippedCards.includes(index) ? 'translate-x-1' : '')
                              : 'group-hover:translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Back Side */}
                  <Card 
                    className="absolute inset-0 w-full h-full backface-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/8 via-card to-primary/12 backdrop-blur-sm overflow-hidden shadow-xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      boxShadow: '0 0 0 1px var(--primary), 0 12px 40px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div className="p-4 h-full flex flex-col">
                      
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <benefit.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-foreground leading-tight heading-bounce">
                              {benefit.title}
                            </h3>
                          </div>
                        </div>
                        <div className="w-12 h-0.5 bg-primary/30 rounded-full"></div>
                      </div>

                      {/* Additional Content */}
                      <div className="flex-1 space-y-3">
                        {benefit.additionalContent?.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex gap-3">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2"></div>
                            <div>
                              <h4 className="text-sm font-medium text-foreground mb-1">
                                {item.title}
                              </h4>
                              <p className="text-xs text-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Stats or CTA */}
                      <div className="mt-4 pt-3 border-t border-primary/10">
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="text-lg font-medium text-primary">
                              {benefit.stat?.value}
                            </div>
                            <div className="text-xs text-foreground">
                              {benefit.stat?.label}
                            </div>
                          </div>
                          <div 
                            className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors cursor-pointer group/cta"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <span className="text-xs font-medium">
                              {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                            </span>
                            <ArrowRight className="w-3 h-3 group-hover/cta:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeInUp" delay={1300}>
          <div className="text-center mt-14">
            <div 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-muted/50 via-card to-muted/50 border border-border rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-400 cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/60 transition-colors animate-pulse"></div>
              </div>
              <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {language === 'ar' ? 
                  'هذه الفوائد تنتظرك - ابدأ موقعك اليوم' : 
                  'These Benefits Await You - Start Your Website Today'
                }
              </span>
              <ArrowRight className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}