import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  BarChart3,
  Search,
  Palette,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Shield,
  Zap,
  Trophy,
  Target
} from 'lucide-react';

export default function OurServices() {
  const { language } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const content = {
    ar: {
      badge: "خدماتنا",
      title: "حلول رقمية شاملة لنجاح عملك",
      subtitle: "نقدم مجموعة متكاملة من الخدمات التقنية المصممة خصيصاً لتحويل أفكارك إلى واقع رقمي مؤثر",
      services: [
        {
          icon: Globe,
          title: "المواقع الإلكترونية",
          description: "مواقع احترافية سريعة ومحسنة لمحركات البحث",
          features: ["تصميم عصري وجذاب", "سرعة تحميل فائقة", "متوافق مع جميع الأجهزة", "تحسين SEO متقدم"],
          image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzU3MDU0MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "نبدأ بفهم احتياجاتك ثم نصمم موقعاً يعكس هويتك التجارية بشكل مثالي",
            timeline: "من 7-14 يوم عمل",
            technologies: ["React", "Next.js", "WordPress", "Shopify"],
            benefits: [
              { icon: Users, title: "زيادة العملاء", desc: "جذب 300% عملاء أكثر" },
              { icon: Shield, title: "أمان متقدم", desc: "حماية SSL وأمان كامل" },
              { icon: Zap, title: "سرعة عالية", desc: "تحميل أقل من 3 ثواني" }
            ]
          }
        },
        {
          icon: Smartphone,
          title: "تطبيقات الجوال",
          description: "تطبيقات ذكية لأندرويد وآيفون تخدم عملاءك",
          features: ["واجهة مستخدم سهلة", "أداء سريع ومستقر", "إشعارات ذكية", "تحديثات مجانية"],
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTY5OTczMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: true,
          additionalInfo: {
            process: "تطوير تطبيقات أصلية للأندرويد والآيفون بأحدث التقنيات المتاحة",
            timeline: "من 21-45 يوم عمل",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            benefits: [
              { icon: Target, title: "وصول أوسع", desc: "ملايين المستخدمين" },
              { icon: Clock, title: "إشعارات فورية", desc: "تفاعل مباشر مع العملاء" },
              { icon: Trophy, title: "تجربة مميزة", desc: "سهولة استخدام لا مثيل لها" }
            ]
          }
        },
        {
          icon: ShoppingCart,
          title: "المتاجر الإلكترونية",
          description: "متاجر قوية لبيع منتجاتك وخدماتك عبر الإنترنت",
          features: ["بوابات دفع آمنة", "إدارة المخزون", "تقارير مبيعات", "دعم متعدد العملات"],
          image: "https://images.unsplash.com/photo-1688561807403-ba262590f86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzdG9yZXxlbnwxfHx8fDE3NTY5ODMyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "متجر إلكتروني متكامل يدعم جميع وسائل الدفع ويدير مبيعاتك بذكاء",
            timeline: "من 14-30 يوم عمل",
            technologies: ["WooCommerce", "Shopify", "Magento", "Custom"],
            benefits: [
              { icon: Users, title: "مبيعات 24/7", desc: "بيع مستمر بدون توقف" },
              { icon: Shield, title: "دفع آمن", desc: "حماية معلومات العملاء" },
              { icon: BarChart3, title: "تقارير شاملة", desc: "تحليل دقيق للأرباح" }
            ]
          }
        },
        {
          icon: BarChart3,
          title: "أنظمة الإدارة",
          description: "حلول مخصصة لإدارة وتنظيم عملياتك التجارية",
          features: ["واجهات إدارة بسيطة", "تقارير تفصيلية", "نسخ احتياطي آمن", "دعم فني مستمر"],
          image: "https://images.unsplash.com/photo-1645397925426-cf18e08fc019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MDU0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "أنظمة إدارة مخصصة لتبسيط عملياتك وزيادة كفاءة فريق العمل",
            timeline: "من 30-60 يوم عمل",
            technologies: ["Laravel", "Django", "Node.js", "Custom Systems"],
            benefits: [
              { icon: Zap, title: "كفاءة عالية", desc: "توفير 50% من الوقت" },
              { icon: Shield, title: "بيانات آمنة", desc: "حماية شاملة للمعلومات" },
              { icon: Users, title: "تعاون سهل", desc: "إدارة الفرق بسهولة" }
            ]
          }
        },
        {
          icon: Search,
          title: "تحسين محركات البحث",
          description: "اجعل موقعك يتصدر نتائج جوجل ومحركات البحث",
          features: ["تحليل الكلمات المفتاحية", "تحسين سرعة الموقع", "بناء روابط قوية", "تقارير شهرية"],
          image: "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzZWFyY2glMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzU3MDU0MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "استراتيجية SEO شاملة لجعل موقعك في المرتبة الأولى بمحركات البحث",
            timeline: "نتائج خلال 2-6 أشهر",
            technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Technical SEO"],
            benefits: [
              { icon: Target, title: "صفحة أولى", desc: "ظهور في النتائج الأولى" },
              { icon: Users, title: "زوار أكثر", desc: "زيادة 400% في الزيارات" },
              { icon: Trophy, title: "سمعة أقوى", desc: "ثقة أكبر من العملاء" }
            ]
          }
        },
        {
          icon: Palette,
          title: "الهوية البصرية",
          description: "تصاميم مميزة تعكس هوية عملك وتجذب عملاءك",
          features: ["شعار احترافي", "دليل الهوية البصرية", "بطاقات عمل", "ملفات قابلة للطباعة"],
          image: "https://images.unsplash.com/photo-1633533450371-4d3562ca227f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGlkZW50aXR5fGVufDF8fHx8MTc1Njk4MjA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "تصميم هوية بصرية متكاملة تعكس قيم عملك وتجذب جمهورك المستهدف",
            timeline: "من 7-14 يوم عمل",
            technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Guidelines"],
            benefits: [
              { icon: Trophy, title: "تميز واضح", desc: "هوية فريدة لا تُنسى" },
              { icon: Users, title: "جذب العملاء", desc: "انطباع أول قوي" },
              { icon: Target, title: "اتساق العلامة", desc: "تطبيق موحد عبر كل شيء" }
            ]
          }
        }
      ],
      cta: "احصل على استشارة مجانية",
      guarantee: "ضمان الجودة 100%"
    },
    en: {
      badge: "Our Services",
      title: "Comprehensive Digital Solutions for Your Business Success",
      subtitle: "We offer an integrated range of technical services designed specifically to transform your ideas into impactful digital reality",
      services: [
        {
          icon: Globe,
          title: "Websites",
          description: "Professional websites that are fast and optimized for search engines",
          features: ["Modern and attractive design", "Ultra-fast loading", "Compatible with all devices", "Advanced SEO optimization"],
          image: "https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzU3MDU0MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "We start by understanding your needs, then design a website that perfectly reflects your business identity",
            timeline: "7-14 business days",
            technologies: ["React", "Next.js", "WordPress", "Shopify"],
            benefits: [
              { icon: Users, title: "More Customers", desc: "Attract 300% more clients" },
              { icon: Shield, title: "Advanced Security", desc: "SSL protection and full security" },
              { icon: Zap, title: "High Speed", desc: "Load time under 3 seconds" }
            ]
          }
        },
        {
          icon: Smartphone,
          title: "Mobile Apps",
          description: "Smart applications for Android and iPhone that serve your customers",
          features: ["Easy user interface", "Fast and stable performance", "Smart notifications", "Free updates"],
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTY5OTczMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: true,
          additionalInfo: {
            process: "Developing native apps for Android and iPhone with the latest available technologies",
            timeline: "21-45 business days",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            benefits: [
              { icon: Target, title: "Wider Reach", desc: "Millions of users" },
              { icon: Clock, title: "Instant Notifications", desc: "Direct customer interaction" },
              { icon: Trophy, title: "Premium Experience", desc: "Unmatched ease of use" }
            ]
          }
        },
        {
          icon: ShoppingCart,
          title: "E-commerce Stores",
          description: "Powerful stores to sell your products and services online",
          features: ["Secure payment gateways", "Inventory management", "Sales reports", "Multi-currency support"],
          image: "https://images.unsplash.com/photo-1688561807403-ba262590f86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzdG9yZXxlbnwxfHx8fDE3NTY5ODMyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "Complete e-commerce store supporting all payment methods and managing your sales intelligently",
            timeline: "14-30 business days",
            technologies: ["WooCommerce", "Shopify", "Magento", "Custom"],
            benefits: [
              { icon: Users, title: "24/7 Sales", desc: "Continuous selling without stopping" },
              { icon: Shield, title: "Secure Payment", desc: "Customer information protection" },
              { icon: BarChart3, title: "Comprehensive Reports", desc: "Accurate profit analysis" }
            ]
          }
        },
        {
          icon: BarChart3,
          title: "Management Systems",
          description: "Custom solutions to manage and organize your business operations",
          features: ["Simple admin interfaces", "Detailed reports", "Secure backup", "Continuous technical support"],
          image: "https://images.unsplash.com/photo-1645397925426-cf18e08fc019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MDU0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "Custom management systems to simplify your operations and increase team efficiency",
            timeline: "30-60 business days",
            technologies: ["Laravel", "Django", "Node.js", "Custom Systems"],
            benefits: [
              { icon: Zap, title: "High Efficiency", desc: "Save 50% of time" },
              { icon: Shield, title: "Secure Data", desc: "Comprehensive information protection" },
              { icon: Users, title: "Easy Collaboration", desc: "Manage teams easily" }
            ]
          }
        },
        {
          icon: Search,
          title: "SEO Optimization",
          description: "Make your website top Google and search engine results",
          features: ["Keyword analysis", "Website speed optimization", "Strong link building", "Monthly reports"],
          image: "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzZWFyY2glMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzU3MDU0MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "Comprehensive SEO strategy to make your website rank first in search engines",
            timeline: "Results in 2-6 months",
            technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Technical SEO"],
            benefits: [
              { icon: Target, title: "First Page", desc: "Appear in top results" },
              { icon: Users, title: "More Visitors", desc: "400% increase in visits" },
              { icon: Trophy, title: "Stronger Reputation", desc: "Greater customer trust" }
            ]
          }
        },
        {
          icon: Palette,
          title: "Visual Identity",
          description: "Distinctive designs that reflect your business identity and attract customers",
          features: ["Professional logo", "Visual identity guide", "Business cards", "Print-ready files"],
          image: "https://images.unsplash.com/photo-1633533450371-4d3562ca227f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGlkZW50aXR5fGVufDF8fHx8MTc1Njk4MjA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          popular: false,
          additionalInfo: {
            process: "Designing complete visual identity that reflects your business values and attracts your target audience",
            timeline: "7-14 business days",
            technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Guidelines"],
            benefits: [
              { icon: Trophy, title: "Clear Distinction", desc: "Unique unforgettable identity" },
              { icon: Users, title: "Attract Customers", desc: "Strong first impression" },
              { icon: Target, title: "Brand Consistency", desc: "Unified application across everything" }
            ]
          }
        }
      ],
      cta: "Get Free Consultation",
      guarantee: "100% Quality Guarantee"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-12 lg:py-16 bg-background relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-10 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">
                {currentContent.badge}
              </span>
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <h2 className="text-2xl lg:text-3xl max-w-4xl mx-auto mb-4 heading-interactive" style={{ color: 'var(--primary)' }}>
              {currentContent.title}
            </h2>
            <p className="text-foreground max-w-3xl mx-auto leading-relaxed">
              {currentContent.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid - Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {currentContent.services.map((service, index) => {
            const isFlipped = flippedCards.includes(index);
            
            return (
              <AnimatedSection key={index} animation="fadeInUp" delay={300 + (index * 100)}>
                <div className="relative group h-[520px]">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-2 z-20">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {language === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                      </div>
                    </div>
                  )}

                  {/* Flip Card Container */}
                  <div className="flip-card-container h-full">
                    <div className={`flip-card-inner h-full transition-transform duration-700 ${isFlipped ? 'transform' : ''}`}
                         style={{ 
                           transformStyle: 'preserve-3d',
                           transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                         }}>
                      
                      {/* Front Side */}
                      <div className={`flip-card-front absolute inset-0 w-full h-full bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-400 ${service.popular ? 'border-primary/40 shadow-lg' : ''}`}
                           style={{ backfaceVisibility: 'hidden' }}>
                        
                        {/* Service Image */}
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback 
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70"></div>
                          
                          {/* Icon Overlay */}
                          <div className="absolute top-4 left-4">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`p-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          <h3 className="text-lg font-medium mb-2 text-foreground heading-elegant-underline">
                            {service.title}
                          </h3>
                          
                          <p className="text-foreground text-sm mb-4 leading-relaxed font-bold">
                            {service.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-2 mb-5">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-xs">
                                <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground text-[13px] font-bold">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <div className="flex items-center justify-center pt-2">
                            <button 
                              onClick={() => handleCardFlip(index)}
                              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                            >
                              <span>{language === 'ar' ? 'اعرف أكثر' : 'Learn More'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="flip-card-back absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 via-card to-primary/10 border-2 border-primary/50 rounded-xl overflow-hidden shadow-xl"
                           style={{ 
                             backfaceVisibility: 'hidden',
                             transform: 'rotateY(180deg)'
                           }}>
                        
                        <div className={`p-5 h-full flex flex-col ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <service.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-medium text-foreground leading-tight">
                                  {service.title}
                                </h3>
                              </div>
                            </div>
                            <div className="w-12 h-0.5 bg-primary/30 rounded-full"></div>
                          </div>

                          {/* Additional Info */}
                          <div className="flex-1 space-y-4">
                            {/* Process */}
                            <div>
                              <h4 className="text-sm font-medium text-foreground mb-1">
                                {language === 'ar' ? 'العملية:' : 'Process:'}
                              </h4>
                              <p className="text-xs text-foreground/80 leading-relaxed">
                                {service.additionalInfo.process}
                              </p>
                            </div>

                            {/* Timeline */}
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="text-xs font-medium text-foreground">
                                {service.additionalInfo.timeline}
                              </span>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-sm font-medium text-foreground mb-2">
                                {language === 'ar' ? 'التقنيات:' : 'Technologies:'}
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {service.additionalInfo.technologies.map((tech, techIndex) => (
                                  <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-2">
                              {service.additionalInfo.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-start gap-2">
                                  <benefit.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <h5 className="text-xs font-medium text-foreground">
                                      {benefit.title}
                                    </h5>
                                    <p className="text-xs text-foreground/70">
                                      {benefit.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Back Button */}
                          <div className="mt-4 pt-3 border-t border-primary/10">
                            <button 
                              onClick={() => handleCardFlip(index)}
                              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-all duration-300 text-sm"
                            >
                              <ArrowRight className={`w-4 h-4 ${language === 'ar' ? '' : 'rotate-180'}`} />
                              <span>{language === 'ar' ? 'العودة' : 'Back'}</span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-muted/50 to-muted/30 border border-border rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {currentContent.guarantee}
                </span>
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {currentContent.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <p className="text-xs text-foreground mt-3">
                {language === 'ar' ? 
                  'استشارة مجانية بدون التزام • رد خلال ساعة واحدة' : 
                  'Free consultation with no obligation • Reply within one hour'
                }
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}