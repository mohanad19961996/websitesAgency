import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Palette,
  Eye,
  ExternalLink
} from 'lucide-react';

export default function SocialMediaPortfolio() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const content = {
    ar: {
      badge: "معرض الأعمال",
      title: "معرض أعمالنا",
      subtitle: "مجموعة مختارة من أفضل تصاميمنا وأعمالنا الإبداعية",
      galleryImages: [
        {
          title: "تصميم هوية بصرية",
          category: "تصميم",
          image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "تصميم مواقع ويب",
          category: "ويب",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDU4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "تطبيقات الجوال",
          category: "تطبيقات",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU3MDU4NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "تصميم جرافيكي",
          category: "جرافيك",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "تصوير منتجات",
          category: "تصوير",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb250ZW50JTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "موشن جرافيك",
          category: "فيديو",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMHZpZGVvfGVufDF8fHx8MTc1NzA1ODQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "التجارة الإلكترونية",
          category: "ويب",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2V8ZW58MXx8fHwxNzU3MDU4NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "حلول رقمية",
          category: "تقنية",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29udGVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwNTg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ],
      viewProject: "عرض المشروع"
    },
    en: {
      badge: "Portfolio Gallery",
      title: "Our Portfolio",
      subtitle: "A curated selection of our best creative works and designs",
      galleryImages: [
        {
          title: "Brand Identity Design",
          category: "Design",
          image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Website Design",
          category: "Web",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDU4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Mobile Applications",
          category: "Apps",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU3MDU4NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Graphic Design",
          category: "Graphics",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Product Photography",
          category: "Photography",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb250ZW50JTIwZGVzaWdufGVufDF8fHx8MTc1NzA1ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Motion Graphics",
          category: "Video",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMHZpZGVvfGVufDF8fHx8MTc1NzA1ODQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "E-commerce Solutions",
          category: "Web",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2V8ZW58MXx8fHwxNzU3MDU4NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
          title: "Digital Solutions",
          category: "Technology",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29udGVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NTcwNTg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ],
      viewProject: "View Project"
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

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {currentContent.galleryImages.map((image, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={300 + (index * 100)}>
              <div 
                className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 cursor-pointer hover:border-primary/30 hover:shadow-lg hover:-translate-y-2"
                onClick={() => setSelectedImage(selectedImage === index ? null : index)}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback 
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs font-medium text-primary bg-primary/10 backdrop-blur-sm px-2 py-1 rounded-full mb-2 w-fit">
                      {image.category}
                    </span>
                    <h3 className="text-sm font-medium text-white mb-2 leading-tight">
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Eye className="w-3 h-3 text-white" />
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  );
}
