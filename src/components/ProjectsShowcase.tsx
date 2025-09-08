import { useState } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ExternalLink,
  Github,
  Smartphone,
  Monitor,
  ShoppingCart,
  Palette,
  Eye,
  Star,
  Calendar,
  Users,
  Filter,
  ArrowRight
} from 'lucide-react';
import { Badge } from './ui/badge';

export default function ProjectsShowcase() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: language === 'ar' ? 'منصة التجارة الإلكترونية' : 'E-commerce Platform',
      description: language === 'ar' 
        ? 'منصة متكاملة للتجارة الإلكترونية مع نظام دفع آمن وإدارة المخزون'
        : 'Complete e-commerce platform with secure payment system and inventory management',
      image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NjkwOTczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      duration: language === 'ar' ? '3 أشهر' : '3 Months',
      team: language === 'ar' ? '4 مطورين' : '4 Developers',
      rating: 4.9,
      views: '2.5K',
      liveUrl: 'https://www.mirimolds.com/ar',
      githubUrl: '#'
    },
    {
      id: 2,
      title: language === 'ar' ? 'تطبيق إدارة المهام' : 'Task Management App',
      description: language === 'ar'
        ? 'تطبيق جوال لإدارة المهام والمشاريع مع ميزات التعاون الجماعي'
        : 'Mobile app for task and project management with team collaboration features',
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2OTc5NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      duration: language === 'ar' ? '2 شهر' : '2 Months',
      team: language === 'ar' ? '3 مطورين' : '3 Developers',
      rating: 4.8,
      views: '1.8K',
      liveUrl: 'https://www.ultratech.top/ar',
      githubUrl: '#'
    },
    {
      id: 3,
      title: language === 'ar' ? 'لوحة تحكم تحليلية' : 'Analytics Dashboard',
      description: language === 'ar'
        ? 'لوحة تحكم متطورة لتحليل البيانات مع مخططات تفاعلية وتقارير مفصلة'
        : 'Advanced analytics dashboard with interactive charts and detailed reports',
      image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTY5MDk3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'web',
      technologies: ['Next.js', 'D3.js', 'MongoDB', 'Express'],
      duration: language === 'ar' ? '4 أشهر' : '4 Months',
      team: language === 'ar' ? '5 مطورين' : '5 Developers',
      rating: 5.0,
      views: '3.2K',
      liveUrl: 'https://www.citamermer.com/ar',
      githubUrl: '#'
    },
    {
      id: 4,
      title: language === 'ar' ? 'تطبيق الصحة واللياقة' : 'Health & Fitness App',
      description: language === 'ar'
        ? 'تطبيق شامل لتتبع الصحة واللياقة البدنية مع خطط تمارين مخصصة'
        : 'Comprehensive health and fitness tracking app with personalized workout plans',
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2OTc5NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'AWS', 'GraphQL'],
      duration: language === 'ar' ? '6 أشهر' : '6 Months',
      team: language === 'ar' ? '6 مطورين' : '6 Developers',
      rating: 4.7,
      views: '4.1K',
      liveUrl: 'https://nabhan-furniture-git-main-maher9393267111s-projects.vercel.app/ar',
      githubUrl: '#'
    },
    {
      id: 5,
      title: language === 'ar' ? 'منصة التعلم الإلكتروني' : 'E-Learning Platform',
      description: language === 'ar'
        ? 'منصة تعليمية شاملة مع دورات تفاعلية ونظام إدارة التعلم'
        : 'Comprehensive educational platform with interactive courses and LMS',
      image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTY5MDk3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'web',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      duration: language === 'ar' ? '5 أشهر' : '5 Months',
      team: language === 'ar' ? '7 مطورين' : '7 Developers',
      rating: 4.9,
      views: '2.9K',
      liveUrl: 'https://www.tedilimermer.com/ar/gallery',
      githubUrl: '#'
    },
    {
      id: 6,
      title: language === 'ar' ? 'محفظة استثمارية' : 'Investment Portfolio',
      description: language === 'ar'
        ? 'تطبيق إدارة المحافظ الاستثمارية مع تحليل المخاطر والعوائد'
        : 'Investment portfolio management app with risk and return analysis',
      image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NjkwOTczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: 'design',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      duration: language === 'ar' ? '2 شهر' : '2 Months',
      team: language === 'ar' ? '2 مصممين' : '2 Designers',
      rating: 4.8,
      views: '1.5K',
      liveUrl: 'websites-agency.vercel.app',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All', icon: Filter },
    { id: 'web', label: language === 'ar' ? 'مواقع ويب' : 'Web Apps', icon: Monitor },
    { id: 'mobile', label: language === 'ar' ? 'تطبيقات جوال' : 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: language === 'ar' ? 'تصميم' : 'Design', icon: Palette }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Monitor;
      case 'mobile': return Smartphone;
      case 'design': return Palette;
      default: return ShoppingCart;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'from-blue-500 to-cyan-500';
      case 'mobile': return 'from-green-500 to-emerald-500';
      case 'design': return 'from-purple-500 to-pink-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <FadeInUp delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {language === 'ar' ? '🚀 أعمالنا المتميزة' : '🚀 Our Featured Work'}
              </span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <h2 className="text-3xl lg:text-5xl font-bold">
              {language === 'ar' ? 'مشاريع نفخر بإنجازها' : 'Projects We Are Proud Of'}
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={600}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar'
                ? 'اكتشف مجموعة من أفضل أعمالنا التي تُظهر خبرتنا في تطوير حلول رقمية مبتكرة وعملية'
                : 'Discover a collection of our best work showcasing our expertise in developing innovative and practical digital solutions'
              }
            </p>
          </FadeInUp>
        </div>

        {/* Filter Buttons */}
        <FadeInUp delay={800}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                <span>{filter.label}</span>
                {activeFilter === filter.id && (
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    {filteredProjects.length}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <ScaleIn key={project.id} delay={1000 + (index * 100)}>
                <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full`}>
                        <CategoryIcon className="w-3 h-3 text-white" />
                        <span className="text-xs font-medium text-white">
                          {filters.find(f => f.id === project.category)?.label}
                        </span>
                      </div>
                    </div>

                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Github className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-sm">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{project.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <FadeInUp delay={1400}>
          <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold">
              {language === 'ar' ? 'شاهد المزيد من أعمالنا' : 'See More of Our Work'}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar'
                ? 'هذه مجرد عينة من مشاريعنا. لدينا المزيد من الأعمال المتميزة في مختلف المجالات'
                : 'This is just a sample of our projects. We have more outstanding work in various fields'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Monitor className="w-5 h-5" />
                {language === 'ar' ? 'جميع المشاريع' : 'All Projects'}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-primary px-8 py-4 rounded-xl font-medium transition-all duration-300">
                <Github className="w-5 h-5" />
                {language === 'ar' ? 'كود المصدر' : 'Source Code'}
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}