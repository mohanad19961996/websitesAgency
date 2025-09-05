import { FadeInUp, FadeInLeft, ScaleIn } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Star, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroWireframe() {
  const { language } = useLanguage();
  
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[500px] lg:min-h-[600px]">
      {/* Left side - Content */}
      <div className="space-y-6 flex flex-col justify-center">
        {/* Badge */}
        <FadeInLeft delay={300}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm">
              {language === 'ar' ? '🚀 منصة التطوير الأولى' : '🚀 #1 Development Platform'}
            </span>
          </div>
        </FadeInLeft>
        
        {/* Title */}
        <FadeInLeft delay={500}>
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-bold">
              {language === 'ar' ? (
                <>
                  حوّل أفكارك إلى
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> كود فعال</span>
                </>
              ) : (
                <>
                  Transform Your Ideas Into
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Powerful Code</span>
                </>
              )}
            </h1>
          </div>
        </FadeInLeft>
        
        {/* Subtitle */}
        <FadeInLeft delay={700}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'ar' 
              ? 'اكتشف أدوات التطوير المتقدمة التي ساعدت أكثر من 15,000 مطور على بناء تطبيقات استثنائية وتحقيق أهدافهم التقنية. ابدأ رحلة البرمجة اليوم واشعر بالفرق من اليوم الأول.'
              : 'Discover advanced development tools that helped over 15,000 developers build exceptional applications and achieve their technical goals. Start your coding journey today and feel the difference from day one.'
            }
          </p>
        </FadeInLeft>
        
        {/* Buttons */}
        <FadeInUp delay={900}>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl">
              {language === 'ar' ? 'ابدأ البرمجة مجاناً' : 'Start Coding Free'}
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/5">
              {language === 'ar' ? 'استكشف الأدوات' : 'Explore Tools'}
            </Button>
          </div>
        </FadeInUp>
        
        {/* Trust indicators */}
        <FadeInUp delay={1100}>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full border-2 border-background transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
                    <Users className="w-3 h-3 text-primary" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {language === 'ar' ? '+15,000 مطور' : '+15,000 Developers'}
              </span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-110" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-1">
                {language === 'ar' ? '4.9/5' : '4.9/5'}
              </span>
            </div>
          </div>
        </FadeInUp>
      </div>
      
      {/* Right side - Hero Image */}
      <ScaleIn delay={600}>
        <div className="relative h-full">
          <div className="relative overflow-hidden rounded-xl group h-full min-h-[400px] lg:min-h-[500px]">
            {/* Main Hero Image */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2OTk4MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={language === 'ar' ? 'مساحة عمل المطور والبرمجة' : 'Developer workspace and programming'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-80"></div>
            
            {/* Floating Developer Elements */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">
                    {language === 'ar' ? '+15K مطور' : '+15K Developers'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Code Quality Stats Card */}
            <div className="absolute bottom-6 left-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">99%</div>
                    <div className="text-xs text-gray-600">
                      {language === 'ar' ? 'جودة الكود' : 'Code Quality'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rating Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-800">4.9</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-1/3 right-12 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-secondary rounded-full animate-ping opacity-50"></div>
            </div>
          </div>
        </div>
      </ScaleIn>
    </div>
  );
}