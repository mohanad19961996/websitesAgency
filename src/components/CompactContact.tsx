import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Mail, Phone, MapPin, Send, Clock, User, MessageSquare } from 'lucide-react';

export default function CompactContact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    language === 'ar' ? 'تطوير المواقع' : 'Web Development',
    language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps',
    language === 'ar' ? 'متاجر إلكترونية' : 'E-commerce',
    language === 'ar' ? 'أنظمة إدارة' : 'Management Systems',
    language === 'ar' ? 'تصميم UI/UX' : 'UI/UX Design',
    language === 'ar' ? 'دعم فني' : 'Technical Support'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-16 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-4">
            <Mail className="w-3 h-3 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
          </div>
          
          <h2 className="mb-4">
            {language === 'ar' ? 'هل أنت جاهز لبدء مشروعك؟' : 'Are You Ready to Start Your Project?'}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا الآن للحصول على استشارة مجانية ومناقشة احتياجاتك وأفكارك'
              : 'Contact us now for a free consultation and to discuss your needs and ideas'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ar' ? 'الاسم *' : 'Name *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                      placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                      placeholder={language === 'ar' ? 'email@example.com' : 'email@example.com'}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                      placeholder={language === 'ar' ? '+966 50 123 4567' : '+966 50 123 4567'}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ar' ? 'الخدمة المطلوبة' : 'Required Service'}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
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
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'ar' ? 'تفاصيل المشروع *' : 'Project Details *'}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background resize-none"
                    placeholder={language === 'ar' ? 'اكتب تفاصيل مشروعك أو استفسارك هنا...' : 'Write your project details or inquiry here...'}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="mb-4">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </div>
                    <div className="text-sm text-muted-foreground">info@elegant.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                    </div>
                    <div className="text-sm text-muted-foreground">+966 50 123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {language === 'ar' ? 'الموقع' : 'Location'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
              </h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'الجمعة' : 'Friday'}</span>
                  <span className="text-muted-foreground">2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'السبت' : 'Saturday'}</span>
                  <span className="text-muted-foreground">{language === 'ar' ? 'مغلق' : 'Closed'}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 rounded-xl p-6">
              <h4 className="font-medium mb-2">
                {language === 'ar' ? 'استشارة مجانية!' : 'Free Consultation!'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'ar'
                  ? 'نقدم استشارة مجانية لمناقشة مشروعك وتقديم أفضل الحلول المناسبة لاحتياجاتك'
                  : 'We offer free consultation to discuss your project and provide the best solutions suitable for your needs'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}