import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye,
  TrendingUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Palette,
  ArrowRight,
  Play,
  Users,
  Zap
} from 'lucide-react';

export default function SocialMediaPortfolio() {
  const { language } = useLanguage();

  const content = {
    ar: {
      badge: "أعمال التصميم",
      title: "معرض تصاميم وسائل التواصل الاجتماعي",
      subtitle: "مجموعة مختارة من تصاميمنا الإبداعية لوسائل التواصل الاجتماعي التي حققت نجاحاً وتفاعلاً واسعاً",
      categories: [
        { name: "الكل", value: "all" },
        { name: "انستقرام", value: "instagram" },
        { name: "فيسبوك", value: "facebook" },
        { name: "لينكد إن", value: "linkedin" },
        { name: "يوتيوب", value: "youtube" }
      ],
      designs: [
        {
          title: "حملة العلامة التجارية للأزياء",
          description: "تصاميم متكاملة لحملة إطلاق مجموعة أزياء جديدة",
          platform: "Instagram",
          category: "instagram",
          image: "fashion brand campaign",
          metrics: {
            likes: "45K",
            comments: "2.3K",
            shares: "890",
            reach: "120K"
          },
          engagement: "8.5%",
          icon: Instagram,
          color: "from-pink-500 to-purple-500",
          tags: ["أزياء", "علامة تجارية", "إبداعي"]
        },
        {
          title: "محتوى تقني تفاعلي",
          description: "سلسلة تصاميم تقنية تعليمية مع رسوم بيانية متحركة",
          platform: "LinkedIn",
          category: "linkedin",
          image: "tech educational content",
          metrics: {
            likes: "12K",
            comments: "850",
            shares: "1.2K",
            reach: "85K"
          },
          engagement: "12.8%",
          icon: Linkedin,
          color: "from-blue-600 to-cyan-500",
          tags: ["تقنية", "تعليمي", "احترافي"]
        },
        {
          title: "حملة طعام وضيافة",
          description: "تصاميم شهية لمطعم فاخر مع تصوير احترافي للأطباق",
          platform: "Facebook",
          category: "facebook",
          image: "restaurant food campaign",
          metrics: {
            likes: "28K",
            comments: "1.8K",
            shares: "650",
            reach: "95K"
          },
          engagement: "9.2%",
          icon: Facebook,
          color: "from-orange-500 to-red-500",
          tags: ["طعام", "مطاعم", "فوتوغرافيا"]
        },
        {
          title: "فيديو موشن جرافيك",
          description: "فيديو ترويجي متحرك لشركة تكنولوجيا مع تأثيرات بصرية مذهلة",
          platform: "YouTube",
          category: "youtube",
          image: "motion graphics video",
          metrics: {
            likes: "8.5K",
            comments: "420",
            shares: "380",
            reach: "150K"
          },
          engagement: "15.3%",
          icon: Youtube,
          color: "from-red-500 to-pink-500",
          tags: ["موشن", "فيديو", "تكنولوجيا"]
        },
        {
          title: "هوية بصرية متكاملة",
          description: "تطوير هوية بصرية شاملة لشركة ناشئة مع دليل الاستخدام",
          platform: "Instagram",
          category: "instagram",
          image: "brand identity design",
          metrics: {
            likes: "32K",
            comments: "1.5K",
            shares: "720",
            reach: "110K"
          },
          engagement: "11.4%",
          icon: Instagram,
          color: "from-purple-500 to-indigo-500",
          tags: ["هوية بصرية", "شركات ناشئة", "احترافي"]
        },
        {
          title: "محتوى تسويقي إبداعي",
          description: "حملة تسويقية إبداعية لمنتج تقني مع رسائل تفاعلية",
          platform: "Facebook",
          category: "facebook",
          image: "creative marketing content",
          metrics: {
            likes: "19K",
            comments: "980",
            shares: "540",
            reach: "75K"
          },
          engagement: "10.1%",
          icon: Facebook,
          color: "from-green-500 to-teal-500",
          tags: ["تسويق", "إبداعي", "تقني"]
        }
      ],
      viewDesign: "مشاهدة التصميم",
      allWork: "مشاهدة جميع الأعمال",
      metrics: {
        likes: "إعجاب",
        comments: "تعليق",
        shares: "مشاركة",
        reach: "وصول",
        engagement: "تفاعل"
      }
    },
    en: {
      badge: "Design Work",
      title: "Social Media Design Portfolio",
      subtitle: "A curated collection of our creative social media designs that achieved wide success and engagement",
      categories: [
        { name: "All", value: "all" },
        { name: "Instagram", value: "instagram" },
        { name: "Facebook", value: "facebook" },
        { name: "LinkedIn", value: "linkedin" },
        { name: "YouTube", value: "youtube" }
      ],
      designs: [
        {
          title: "Fashion Brand Campaign",
          description: "Complete designs for launching a new fashion collection campaign",
          platform: "Instagram",
          category: "instagram",
          image: "fashion brand campaign",
          metrics: {
            likes: "45K",
            comments: "2.3K",
            shares: "890",
            reach: "120K"
          },
          engagement: "8.5%",
          icon: Instagram,
          color: "from-pink-500 to-purple-500",
          tags: ["Fashion", "Branding", "Creative"]
        },
        {
          title: "Interactive Tech Content",
          description: "Educational tech design series with animated infographics",
          platform: "LinkedIn",
          category: "linkedin",
          image: "tech educational content",
          metrics: {
            likes: "12K",
            comments: "850",
            shares: "1.2K",
            reach: "85K"
          },
          engagement: "12.8%",
          icon: Linkedin,
          color: "from-blue-600 to-cyan-500",
          tags: ["Tech", "Educational", "Professional"]
        },
        {
          title: "Food & Hospitality Campaign",
          description: "Appetizing designs for luxury restaurant with professional food photography",
          platform: "Facebook",
          category: "facebook",
          image: "restaurant food campaign",
          metrics: {
            likes: "28K",
            comments: "1.8K",
            shares: "650",
            reach: "95K"
          },
          engagement: "9.2%",
          icon: Facebook,
          color: "from-orange-500 to-red-500",
          tags: ["Food", "Restaurant", "Photography"]
        },
        {
          title: "Motion Graphics Video",
          description: "Promotional animated video for tech company with stunning visual effects",
          platform: "YouTube",
          category: "youtube",
          image: "motion graphics video",
          metrics: {
            likes: "8.5K",
            comments: "420",
            shares: "380",
            reach: "150K"
          },
          engagement: "15.3%",
          icon: Youtube,
          color: "from-red-500 to-pink-500",
          tags: ["Motion", "Video", "Technology"]
        },
        {
          title: "Complete Brand Identity",
          description: "Comprehensive visual identity development for startup with usage guidelines",
          platform: "Instagram",
          category: "instagram",
          image: "brand identity design",
          metrics: {
            likes: "32K",
            comments: "1.5K",
            shares: "720",
            reach: "110K"
          },
          engagement: "11.4%",
          icon: Instagram,
          color: "from-purple-500 to-indigo-500",
          tags: ["Brand Identity", "Startup", "Professional"]
        },
        {
          title: "Creative Marketing Content",
          description: "Creative marketing campaign for tech product with interactive messages",
          platform: "Facebook",
          category: "facebook",
          image: "creative marketing content",
          metrics: {
            likes: "19K",
            comments: "980",
            shares: "540",
            reach: "75K"
          },
          engagement: "10.1%",
          icon: Facebook,
          color: "from-green-500 to-teal-500",
          tags: ["Marketing", "Creative", "Tech"]
        }
      ],
      viewDesign: "View Design",
      allWork: "View All Work",
      metrics: {
        likes: "Likes",
        comments: "Comments",
        shares: "Shares",
        reach: "Reach",
        engagement: "Engagement"
      }
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'} sm:text-center`}>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full mb-4 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                {currentContent.badge}
              </span>
              <Palette className="w-3 h-3 text-primary" />
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

        {/* Designs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {currentContent.designs.map((design, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={300 + (index * 100)}>
              <div className="group relative bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 active:border-primary/30 active:shadow-2xl active:-translate-y-3 transition-all duration-500 cursor-pointer h-full touch-manipulation">
                
                {/* Design Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={
                      index === 0 ? "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2FtcGFpZ24lMjBkZXNpZ258ZW58MXx8fHwxNzU3MDU4NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 1 ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29udGVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwNTg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 2 ? "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwNTg0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 3 ? "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMHZpZGVvfGVufDF8fHx8MTc1NzA1ODQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 4 ? "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb250ZW50JTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    }
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${design.color} opacity-60 group-hover:opacity-40 group-active:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Platform Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <design.icon className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-medium text-white">
                        {design.platform}
                      </span>
                    </div>
                  </div>

                  {/* Engagement Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-medium text-white">
                        {design.engagement}
                      </span>
                    </div>
                  </div>

                  {/* Play Button for Video Content */}
                  {design.platform === 'YouTube' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`p-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {/* Design Title */}
                  <div className="mb-2">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors heading-elegant-underline leading-tight">
                      {design.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {design.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {design.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-muted/50 rounded-lg py-2 px-2 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        <span className="text-xs font-medium text-foreground">{design.metrics.likes}</span>
                      </div>
                      <div className="text-xs text-foreground/60">{currentContent.metrics.likes}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg py-2 px-2 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Eye className="w-3 h-3 text-blue-500" />
                        <span className="text-xs font-medium text-foreground">{design.metrics.reach}</span>
                      </div>
                      <div className="text-xs text-foreground/60">{currentContent.metrics.reach}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-2">
                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-sm">
                      <span>{currentContent.viewDesign}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  );
}
