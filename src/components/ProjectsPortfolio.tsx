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
          title: "مصنع قوالب حديدية",
          description: "موقع متكامل لمصنع متخصص في صناعة قوالب الحديد وتصنيع الماكينات الصناعية مع نظام إدارة الطلبات والإنتاج",
          category: "صناعة وتصنيع",
          image: "iron molds manufacturing",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          features: ["إدارة الطلبات", "تتبع الإنتاج", "نظام المخزون"],
          stats: {
            visitors: "25K+",
            sales: "150%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Zap,
          color: "from-gray-600 to-gray-800",
          liveUrl: "https://www.mirimolds.com/ar"
        },
        {
          title: "منصة كروت رقمية",
          description: "منصة متكاملة لإنشاء وإدارة الكروت الرقمية والبطاقات التجارية مع ميزات التخصيص والمشاركة الذكية",
          category: "خدمات رقمية",
          image: "digital cards platform",
          technologies: ["React", "Node.js", "MongoDB", "NFC API"],
          features: ["تصميم الكروت", "مشاركة فورية", "تحليلات الأداء"],
          stats: {
            visitors: "40K+",
            sales: "200%+",
            rating: "4.9"
          },
          date: "2024",
          icon: Smartphone,
          color: "from-purple-500 to-indigo-500",
          liveUrl: "https://www.ultratech.top/ar"
        },
        {
          title: "شركة رخام",
          description: "موقع متكامل لشركة متخصصة في صناعة وتوزيع الرخام مع كتالوج المنتجات ونظام إدارة الطلبات",
          category: "صناعة وتصنيع",
          image: "marble company",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          features: ["كتالوج المنتجات", "إدارة الطلبات", "عرض المشاريع"],
          stats: {
            visitors: "35K+",
            sales: "180%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Shield,
          color: "from-stone-500 to-stone-700",
          liveUrl: "https://www.citamermer.com/ar"
        },
        {
          title: "شركة الموبيليا والمفروشات",
          description: "موقع متكامل لبيع الموبيليا والمفروشات المنزلية مع كتالوج المنتجات وعربة التسوق الإلكترونية",
          category: "بيع بالتجزئة",
          image: "furniture retail",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          features: ["كتالوج المنتجات", "عربة التسوق", "تتبع التوصيل"],
          stats: {
            visitors: "45K+",
            sales: "220%+",
            rating: "4.6"
          },
          date: "2024",
          icon: ShoppingCart,
          color: "from-amber-500 to-orange-500",
          liveUrl: "https://nabhan-furniture-git-main-maher9393267111s-projects.vercel.app/ar"
        },
        {
          title: "شركة صناعة الرخام والأحجار الطبيعية",
          description: "موقع متكامل لشركة متخصصة في صناعة الرخام والأحجار الطبيعية مع كتالوج المنتجات ونظام إدارة الطلبات",
          category: "صناعة وتصنيع",
          image: "marble stones manufacturing",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          features: ["كتالوج المنتجات", "إدارة الطلبات", "عرض المشاريع"],
          stats: {
            visitors: "50K+",
            sales: "200%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Shield,
          color: "from-stone-600 to-stone-800",
          liveUrl: "https://www.tedilimermer.com/ar/gallery"
        },
        {
          title: "موقع الشركة",
          description: "موقع متكامل لشركة الويب يعرض خدماتنا ومعرض أعمالنا مع نظام إدارة المحتوى والتسويق الرقمي",
          category: "موقع شركة",
          image: "agency website",
          technologies: ["React", "Next.js", "Node.js", "MongoDB"],
          features: ["معرض الأعمال", "إدارة المحتوى", "التسويق الرقمي"],
          stats: {
            visitors: "100K+",
            sales: "300%+",
            rating: "5.0"
          },
          date: "2024",
          icon: Globe,
          color: "from-primary to-primary/70",
          liveUrl: "websites-agency.vercel.app"
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
          title: "Iron Molds Manufacturing",
          description: "Comprehensive website for a specialized factory in iron molds manufacturing and industrial machinery with order management and production tracking system",
          category: "Manufacturing",
          image: "iron molds manufacturing",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          features: ["Order Management", "Production Tracking", "Inventory System"],
          stats: {
            visitors: "25K+",
            sales: "150%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Zap,
          color: "from-gray-600 to-gray-800",
          liveUrl: "https://www.mirimolds.com/ar"
        },
        {
          title: "Digital Cards Platform",
          description: "Comprehensive platform for creating and managing digital cards and business cards with customization and smart sharing features",
          category: "Digital Services",
          image: "digital cards platform",
          technologies: ["React", "Node.js", "MongoDB", "NFC API"],
          features: ["Card Design", "Instant Sharing", "Performance Analytics"],
          stats: {
            visitors: "40K+",
            sales: "200%+",
            rating: "4.9"
          },
          date: "2024",
          icon: Smartphone,
          color: "from-purple-500 to-indigo-500",
          liveUrl: "https://www.ultratech.top/ar"
        },
        {
          title: "Marble Company",
          description: "Comprehensive website for a specialized company in marble production and distribution with product catalog and order management system",
          category: "Manufacturing",
          image: "marble company",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          features: ["Product Catalog", "Order Management", "Project Showcase"],
          stats: {
            visitors: "35K+",
            sales: "180%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Shield,
          color: "from-stone-500 to-stone-700",
          liveUrl: "https://www.citamermer.com/ar"
        },
        {
          title: "Furniture & Furnishings Company",
          description: "Comprehensive website for selling furniture and home furnishings with product catalog and online shopping cart",
          category: "Retail",
          image: "furniture retail",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          features: ["Product Catalog", "Shopping Cart", "Delivery Tracking"],
          stats: {
            visitors: "45K+",
            sales: "220%+",
            rating: "4.6"
          },
          date: "2024",
          icon: ShoppingCart,
          color: "from-amber-500 to-orange-500",
          liveUrl: "https://nabhan-furniture-git-main-maher9393267111s-projects.vercel.app/ar"
        },
        {
          title: "Marble & Natural Stones Manufacturing",
          description: "Comprehensive website for a specialized company in marble and natural stones manufacturing with product catalog and order management system",
          category: "Manufacturing",
          image: "marble stones manufacturing",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          features: ["Product Catalog", "Order Management", "Project Showcase"],
          stats: {
            visitors: "50K+",
            sales: "200%+",
            rating: "4.8"
          },
          date: "2024",
          icon: Shield,
          color: "from-stone-600 to-stone-800",
          liveUrl: "https://www.tedilimermer.com/ar/gallery"
        },
        {
          title: "Company Website",
          description: "Comprehensive website for our web agency showcasing our services and portfolio with content management and digital marketing systems",
          category: "Company Website",
          image: "agency website",
          technologies: ["React", "Next.js", "Node.js", "MongoDB"],
          features: ["Portfolio Showcase", "Content Management", "Digital Marketing"],
          stats: {
            visitors: "100K+",
            sales: "300%+",
            rating: "5.0"
          },
          date: "2024",
          icon: Globe,
          color: "from-primary to-primary/70",
          liveUrl: "websites-agency.vercel.app"
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
                      index === 2 ? "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzdG9uZXxlbnwxfHx8fDE3NTcwNTg0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 3 ? "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaG9tZSUyMGZ1cm5pc2hpbmdzfGVufDF8fHx8MTc1NzA1ODQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                      index === 4 ? "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzdG9uZXxlbnwxfHx8fDE3NTcwNTg0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
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
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <button  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-sm">
                      <span>{currentContent.viewProject}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    </a>
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