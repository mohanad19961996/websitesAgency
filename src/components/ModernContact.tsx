import { useState } from 'react';
import { FadeInUp, FadeInLeft, FadeInRight } from './AnimatedSection';
import { useLanguage } from './LanguageContext';
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ModernContact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
      value: 'hello@developer.com',
      description: language === 'ar' ? 'نرد عليك خلال ساعة' : 'We reply within an hour'
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'رقم الهاتف' : 'Phone Number',
      value: '+1 (555) 123-4567',
      description: language === 'ar' ? 'متاح 24/7' : 'Available 24/7'
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'الموقع' : 'Location',
      value: language === 'ar' ? 'العمل عن بُعد' : 'Remote Work',
      description: language === 'ar' ? 'نخدم العالم كله' : 'Serving worldwide'
    }
  ];

  const services = [
    language === 'ar' ? 'تطوير مواقع الويب' : 'Web Development',
    language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps',
    language === 'ar' ? 'متاجر إلكترونية' : 'E-commerce',
    language === 'ar' ? 'تصميم UI/UX' : 'UI/UX Design',
    language === 'ar' ? 'تحسين SEO' : 'SEO Optimization',
    language === 'ar' ? 'دعم تقني' : 'Technical Support'
  ];

  const workingProcess = [
    {
      step: '01',
      title: language === 'ar' ? 'التواصل الأولي' : 'Initial Contact',
      description: language === 'ar' ? 'نتواصل معك لفهم متطلباتك' : 'We contact you to understand your requirements'
    },
    {
      step: '02',
      title: language === 'ar' ? 'التخطيط والتقدير' : 'Planning & Estimation',
      description: language === 'ar' ? 'نضع خطة مفصلة وتقدير الوقت والتكلفة' : 'We create a detailed plan and estimate time and cost'
    },
    {
      step: '03',
      title: language === 'ar' ? 'التطوير والتنفيذ' : 'Development & Implementation',
      description: language === 'ar' ? 'نبدأ في تطوير مشروعك بأعلى جودة' : 'We start developing your project with highest quality'
    },
    {
      step: '04',
      title: language === 'ar' ? 'التسليم والمتابعة' : 'Delivery & Follow-up',
      description: language === 'ar' ? 'نسلم المشروع ونقدم الدعم المستمر' : 'We deliver the project and provide ongoing support'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <FadeInUp delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {language === 'ar' ? '📞 تواصل معنا' : '📞 Get In Touch'}
              </span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <h2 className="text-3xl lg:text-5xl font-bold">
              {language === 'ar' ? 'لنبدأ مشروعك معاً' : "Let's Start Your Project Together"}
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={600}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نحن هنا لمساعدتك في تحويل فكرتك إلى واقع رقمي. تواصل معنا اليوم واحصل على استشارة مجانية'
                : 'We are here to help you turn your idea into digital reality. Contact us today and get a free consultation'
              }
            </p>
          </FadeInUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Form */}
          <FadeInLeft delay={800}>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-bold">
                  {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'املأ النموذج وسنتواصل معك في أقرب وقت'
                    : 'Fill out the form and we will contact you as soon as possible'
                  }
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-600 dark:text-green-400">
                    {language === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'ar'
                      ? 'سنتواصل معك خلال 24 ساعة'
                      : 'We will contact you within 24 hours'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'الخدمة المطلوبة' : 'Required Service'}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      required
                    >
                      <option value="">
                        {language === 'ar' ? 'اختر الخدمة' : 'Select Service'}
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                      placeholder={language === 'ar' 
                        ? 'أخبرنا عن مشروعك ومتطلباتك...'
                        : 'Tell us about your project and requirements...'
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5" />
                    {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </FadeInLeft>

          {/* Contact Info & Process */}
          <FadeInRight delay={1000}>
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Process */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {language === 'ar' ? 'كيف نعمل معك' : 'How We Work With You'}
                </h3>
                
                <div className="space-y-4">
                  {workingProcess.map((process, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border/50">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{process.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-lg">
                    {language === 'ar' ? 'وقت الاستجابة' : 'Response Time'}
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'نرد على جميع الاستفسارات خلال ساعة واحدة خلال ساعات العمل، و24 ساعة كحد أقصى.'
                    : 'We respond to all inquiries within one hour during business hours, and 24 hours maximum.'
                  }
                </p>
              </div>
            </div>
          </FadeInRight>
        </div>

        {/* Final CTA */}
        <FadeInUp delay={1400}>
          <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold">
              {language === 'ar' ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar'
                ? 'لا تتردد في التواصل معنا. نحن متحمسون لسماع أفكارك ومساعدتك في تحقيقها.'
                : "Don't hesitate to contact us. We are excited to hear your ideas and help you achieve them."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                {language === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-primary px-8 py-4 rounded-xl font-medium transition-all duration-300">
                <Mail className="w-5 h-5" />
                {language === 'ar' ? 'أرسل إيميل' : 'Send Email'}
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}