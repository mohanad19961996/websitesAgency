import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { Card } from './ui/card';
import { 
  Facebook, 
  Linkedin, 
  ArrowRight,
  Send,
  Globe,
  Users
} from 'lucide-react';

export default function ContactUs() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: "تواصل معنا",
      subtitle: "اختر الطريقة المناسبة للتواصل معنا وابدأ رحلة تطوير موقعك اليوم",
      cta: "دعنا نحول فكرتك إلى واقع رقمي",
      contacts: [
        {
          platform: "فيسبوك",
          title: "صفحتنا الرسمية",
          description: "تابع آخر أعمالنا وأحدث الأخبار التقنية",
          href: "https://facebook.com",
          icon: Facebook,
          bgGradient: "bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10",
          borderColor: "border-blue-500/20 hover:border-blue-500/50",
          iconColor: "text-blue-600 dark:text-blue-400",
          accentColor: "blue"
        },
        {
          platform: "لينكد إن",
          title: "الشبكة المهنية",
          description: "تواصل مهني وعرض خبراتنا في التطوير",
          href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
          icon: Linkedin,
          bgGradient: "bg-gradient-to-br from-indigo-500/10 via-indigo-400/5 to-indigo-600/10",
          borderColor: "border-indigo-500/20 hover:border-indigo-500/50",
          iconColor: "text-indigo-600 dark:text-indigo-400",
          accentColor: "indigo"
        }
      ]
    },
    en: {
      title: "Contact Us",
      subtitle: "Choose your preferred contact method and start your website development journey today",
      cta: "Let us turn your idea into digital reality",
      contacts: [
        {
          platform: "Facebook",
          title: "Official Page",
          description: "Follow our latest work and tech updates",
          href: "https://facebook.com",
          icon: Facebook,
          bgGradient: "bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10",
          borderColor: "border-blue-500/20 hover:border-blue-500/50",
          iconColor: "text-blue-600 dark:text-blue-400",
          accentColor: "blue"
        },
        {
          platform: "LinkedIn",
          title: "Professional Network",
          description: "Professional connection and showcase our development expertise",
          href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
          icon: Linkedin,
          bgGradient: "bg-gradient-to-br from-indigo-500/10 via-indigo-400/5 to-indigo-600/10",
          borderColor: "border-indigo-500/20 hover:border-indigo-500/50",
          iconColor: "text-indigo-600 dark:text-indigo-400",
          accentColor: "indigo"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-card/50 to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary/15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/10 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === 'ar' ? 'ابدأ المحادثة' : 'Start Conversation'}
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl mb-6 max-w-2xl mx-auto">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-4">
              {currentContent.subtitle}
            </p>
            
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <Globe className="w-4 h-4" />
              <span>{currentContent.cta}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Cards Grid */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {currentContent.contacts.map((contact, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden ${contact.bgGradient} ${contact.borderColor} border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 h-full"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${contact.bgGradient} border ${contact.borderColor} group-hover:scale-110 transition-all duration-300`}>
                      <contact.icon className={`w-8 h-8 ${contact.iconColor}`} />
                    </div>
                    <ArrowRight className={`w-5 h-5 ${contact.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {contact.platform}
                    </h3>
                    
                    <h4 className={`font-medium ${contact.iconColor}`}>
                      {contact.title}
                    </h4>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {contact.description}
                    </p>
                  </div>

                  {/* Hover Effects */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${contact.accentColor}-400 to-${contact.accentColor}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`w-20 h-20 rounded-full bg-${contact.accentColor}-400`}></div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action Footer */}
        <AnimatedSection animation="fadeInUp" delay={300}>
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">
                {language === 'ar' ? 
                  'فريقنا جاهز لمساعدتك في تحقيق أهدافك الرقمية' : 
                  'Our team is ready to help you achieve your digital goals'
                }
              </span>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}