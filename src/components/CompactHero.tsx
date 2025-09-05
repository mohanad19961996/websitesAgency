import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Code, Zap } from 'lucide-react';

export default function CompactHero() {
  const { language } = useLanguage();

  return (
    <div className="relative py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
              <Code className="w-3 h-3 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === 'ar' ? 'شركة تطوير البرمجيات' : 'Software Development Company'}
              </span>
            </div>

            {/* Title */}
            <h1 className="leading-tight">
              {language === 'ar' ? (
                <>
                  نحول أفكارك إلى{' '}
                  <span className="text-primary">حلول رقمية</span>{' '}
                  متطورة ومبتكرة
                </>
              ) : (
                <>
                  Transform Your Ideas Into{' '}
                  <span className="text-primary">Digital Solutions</span>{' '}
                  That Drive Success
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {language === 'ar'
                ? 'نقدم خدمات تطوير المواقع والتطبيقات بأحدث التقنيات، مع فريق محترف يضمن جودة عالية وأداء متميز يلبي احتياجاتك ويحقق أهدافك.'
                : 'We provide website and application development services using the latest technologies, with a professional team ensuring high quality and outstanding performance that meets your needs and achieves your goals.'
              }
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'مشروع' : 'Projects'}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'دعم فني' : 'Support'}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <button className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                <Zap className="w-4 h-4" />
                {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                {language === 'ar' ? 'مشاهدة أعمالنا' : 'View Our Work'}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-muted/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734208682292-df2643d0c8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbiUyMGRlc2t8ZW58MXx8fHwxNzU3MDAyMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={language === 'ar' ? 'مكتب عمل حديث' : 'Modern workspace'}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  {language === 'ar' ? 'متاح الآن' : 'Available Now'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}