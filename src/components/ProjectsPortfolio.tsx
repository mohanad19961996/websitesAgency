import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ExternalLink, 
  Calendar, 
  Code, 
  Star,
  Users,
  Zap,
  Shield,
  Smartphone,
  ShoppingCart,
  Globe,
  ArrowRight,
  Eye,
  TrendingUp
} from 'lucide-react';

export default function ProjectsPortfolio() {
  const { language } = useLanguage();

  const content = {
    ar: {
      badge: "أعمالنا",
      title: "مشاريع نفخر بإنجازها معاً",
      subtitle: "نماذج حية من المواقع والتطبيقات التي طورناها لعملائنا، كل مشروع يحكي قصة نجاح مختلفة",
      projects: [
        {
          title: "متجر الأناقة الرقمي",
          description: "متجر إلكتروني متكامل للأزياء النسائية مع نظام إدارة متقدم ودفع آمن",
          category: "متجر إلكتروني",
          image: "ecommerce fashion",
          technologies: ["React", "Node.js", "Stripe", "MongoDB"],
          features: ["دفع آمن", "إدارة المخزون", "تطبيق جوال"],
          stats: {
            visitors: "50K+",
            sales: "200%+",
            rating: "4.9"
          },
          date: "2024",
          icon: ShoppingCart,
          color: "from-pink-500 to-rose-500"
        },
        {
          title: "منصة التعليم الذكية",
          description: "منصة تعليمية تفاعلية تدعم الفصول الافتراضية والاختبارات الإلكترونية",
          category: "منصة تعليمية",
          image: "online learning platform",
          technologies: ["Vue.js", "Laravel", "WebRTC", "MySQL"],
          features: ["فصول افتراضية", "اختبارات ذكية", "تقارير تفصيلية"],
          stats: {
            visitors: "30K+",
            sales: "150%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Users,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "تطبيق إدارة المطاعم",
          description: "تطبيق جوال شامل لإدارة المطاعم مع نظام الطلبات والتوصيل المباشر",
          category: "تطبيق جوال",
          image: "restaurant management app",
          technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
          features: ["طلبات فورية", "تتبع التوصيل", "إحصائيات مبيعات"],
          stats: {
            visitors: "25K+",
            sales: "300%+",
            rating: "4.7"
          },
          date: "2024",
          icon: Smartphone,
          color: "from-orange-500 to-red-500"
        },
        {
          title: "موقع الشركة الطبية",
          description: "موقع طبي احترافي مع نظام حجز المواعيد وإدارة ملفات المرضى",
          category: "موقع طبي",
          image: "medical website",
          technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          features: ["حجز مواعيد", "ملفات المرضى", "تشفير البيانات"],
          stats: {
            visitors: "40K+",
            sales: "180%+",
            rating: "5.0"
          },
          date: "2024",
          icon: Shield,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "منصة التجارة الإلكترونية",
          description: "منصة متعددة البائعين مع لوحة تحكم متقدمة وأنظمة دفع متنوعة",
          category: "منصة تجارية",
          image: "multi vendor ecommerce",
          technologies: ["Angular", "Django", "Redis", "PostgreSQL"],
          features: ["متعدد البائعين", "تحليلات متقدمة", "API شامل"],
          stats: {
            visitors: "80K+",
            sales: "250%+",
            rating: "4.9"
          },
          date: "2024",
          icon: TrendingUp,
          color: "from-purple-500 to-indigo-500"
        },
        {
          title: "تطبيق إدارة المشاريع",
          description: "نظام إدارة مشاريع متطور مع تتبع المهام والتعاون الجماعي المباشر",
          category: "نظام إدارة",
          image: "project management system",
          technologies: ["React", "Express", "Socket.io", "MongoDB"],
          features: ["تعاون فوري", "تتبع المهام", "تقارير ذكية"],
          stats: {
            visitors: "35K+",
            sales: "220%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Zap,
          color: "from-yellow-500 to-amber-500"
        }
      ],
      viewProject: "مشاهدة المشروع",
      liveDemo: "تجربة مباشرة",
      moreProjects: "مشاهدة جميع المشاريع"
    },
    en: {
      badge: "Our Work",
      title: "Projects We're Proud to Have Built Together",
      subtitle: "Live examples of websites and applications we've developed for our clients, each project tells a different success story",
      projects: [
        {
          title: "Digital Elegance Store",
          description: "Complete e-commerce store for women's fashion with advanced management system and secure payment",
          category: "E-commerce Store",
          image: "ecommerce fashion",
          technologies: ["React", "Node.js", "Stripe", "MongoDB"],
          features: ["Secure Payment", "Inventory Management", "Mobile App"],
          stats: {
            visitors: "50K+",
            sales: "200%+",
            rating: "4.9"
          },
          date: "2024",
          icon: ShoppingCart,
          color: "from-pink-500 to-rose-500"
        },
        {
          title: "Smart Learning Platform",
          description: "Interactive educational platform supporting virtual classrooms and electronic assessments",
          category: "Educational Platform",
          image: "online learning platform",
          technologies: ["Vue.js", "Laravel", "WebRTC", "MySQL"],
          features: ["Virtual Classes", "Smart Tests", "Detailed Reports"],
          stats: {
            visitors: "30K+",
            sales: "150%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Users,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Restaurant Management App",
          description: "Comprehensive mobile app for restaurant management with ordering and direct delivery system",
          category: "Mobile App",
          image: "restaurant management app",
          technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
          features: ["Instant Orders", "Delivery Tracking", "Sales Analytics"],
          stats: {
            visitors: "25K+",
            sales: "300%+",
            rating: "4.7"
          },
          date: "2024",
          icon: Smartphone,
          color: "from-orange-500 to-red-500"
        },
        {
          title: "Medical Company Website",
          description: "Professional medical website with appointment booking system and patient file management",
          category: "Medical Website",
          image: "medical website",
          technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          features: ["Appointment Booking", "Patient Files", "Data Encryption"],
          stats: {
            visitors: "40K+",
            sales: "180%+",
            rating: "5.0"
          },
          date: "2024",
          icon: Shield,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "E-commerce Platform",
          description: "Multi-vendor platform with advanced control panel and diverse payment systems",
          category: "Commercial Platform",
          image: "multi vendor ecommerce",
          technologies: ["Angular", "Django", "Redis", "PostgreSQL"],
          features: ["Multi-vendor", "Advanced Analytics", "Comprehensive API"],
          stats: {
            visitors: "80K+",
            sales: "250%+",
            rating: "4.9"
          },
          date: "2024",
          icon: TrendingUp,
          color: "from-purple-500 to-indigo-500"
        },
        {
          title: "Project Management App",
          description: "Advanced project management system with task tracking and direct team collaboration",
          category: "Management System",
          image: "project management system",
          technologies: ["React", "Express", "Socket.io", "MongoDB"],
          features: ["Real-time Collaboration", "Task Tracking", "Smart Reports"],
          stats: {
            visitors: "35K+",
            sales: "220%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Zap,
          color: "from-yellow-500 to-amber-500"
        }
      ],
      viewProject: "View Project",
      liveDemo: "Live Demo",
      moreProjects: "View All Projects"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
              <Star className="w-3 h-3 text-primary fill-current" />
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {currentContent.projects.map((project, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={300 + (index * 100)}>
              <div className="group relative bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer h-full">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={
                      index === 0 ? "https://images.unsplash.com/photo-1642142785744-261a5f663d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1Njk4MjkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 1 ? "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1NzA1ODQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 2 ? "https://images.unsplash.com/photo-1560125738-21281f9d9b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1NzA1ODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 3 ? "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2Vic2l0ZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTcwNTg0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 4 ? "https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU3MDM4MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      "https://images.unsplash.com/photo-1558092535-648ec3c50158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcwNTgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <project.icon className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-white">
                        {project.stats.rating}
                      </span>
                    </div>
                  </div>


                </div>

                {/* Content */}
                <div className={`p-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {/* Project Title & Date */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors heading-elegant-underline flex-1 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-foreground/60 ml-2">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-muted/50 rounded-lg py-2">
                      <div className="text-xs font-medium text-foreground">{project.stats.visitors}</div>
                      <div className="text-xs text-foreground/60">{language === 'ar' ? 'زائر' : 'Visitors'}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg py-2">
                      <div className="text-xs font-medium text-green-600">{project.stats.sales}</div>
                      <div className="text-xs text-foreground/60">{language === 'ar' ? 'نمو' : 'Growth'}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg py-2">
                      <div className="text-xs font-medium text-yellow-600">{project.stats.rating}</div>
                      <div className="text-xs text-foreground/60">{language === 'ar' ? 'تقييم' : 'Rating'}</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-sm">
                      <span>{currentContent.viewProject}</span>
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

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp" delay={900}>
          <div className="text-center">

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}