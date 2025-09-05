import React from "react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ChevronDown, Moon, Sun, Globe, Palette, Menu } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTheme, setCurrentTheme] = useState("purple");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 768 || 
                            ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const themes = [
    {
      id: "default",
      name: "Default",
      colors: ["#030213", "#e9ebef", "#ececf0"]
    },
    {
      id: "ocean",
      name: "Ocean",
      colors: ["#0284c7", "#0ea5e9", "#7dd3fc"]
    },
    {
      id: "forest",
      name: "Forest",
      colors: ["#15803d", "#22c55e", "#86efac"]
    },
    {
      id: "sunset",
      name: "Sunset",
      colors: ["#dc2626", "#f97316", "#fbbf24"]
    },
    {
      id: "purple",
      name: "Purple",
      colors: ["#7c3aed", "#a855f7", "#c084fc"]
    },
    {
      id: "rose",
      name: "Rose",
      colors: ["#e11d48", "#f43f5e", "#fb7185"]
    }
  ];

  const applyTheme = (theme: typeof themes[0]) => {
    const root = document.documentElement;
    
    // Check if dark mode is active
    const isDark = document.documentElement.classList.contains('dark');
    
    switch (theme.id) {
      case "ocean":
        if (isDark) {
          root.style.setProperty('--primary', '#0ea5e9');
          root.style.setProperty('--accent', 'oklch(0.3 0.08 200)');
          root.style.setProperty('--muted', 'oklch(0.25 0.05 200)');
        } else {
          root.style.setProperty('--primary', '#0284c7');
          root.style.setProperty('--accent', '#e0f2fe');
          root.style.setProperty('--muted', '#f0f9ff');
        }
        break;
      case "forest":
        if (isDark) {
          root.style.setProperty('--primary', '#22c55e');
          root.style.setProperty('--accent', 'oklch(0.3 0.08 140)');
          root.style.setProperty('--muted', 'oklch(0.25 0.05 140)');
        } else {
          root.style.setProperty('--primary', '#15803d');
          root.style.setProperty('--accent', '#dcfce7');
          root.style.setProperty('--muted', '#f0fdf4');
        }
        break;
      case "sunset":
        if (isDark) {
          root.style.setProperty('--primary', '#f97316');
          root.style.setProperty('--accent', 'oklch(0.3 0.08 25)');
          root.style.setProperty('--muted', 'oklch(0.25 0.05 25)');
        } else {
          root.style.setProperty('--primary', '#dc2626');
          root.style.setProperty('--accent', '#fef2f2');
          root.style.setProperty('--muted', '#fef7f7');
        }
        break;
      case "purple":
        if (isDark) {
          root.style.setProperty('--primary', '#a855f7');
          root.style.setProperty('--accent', 'oklch(0.3 0.08 280)');
          root.style.setProperty('--muted', 'oklch(0.25 0.05 280)');
        } else {
          root.style.setProperty('--primary', '#7c3aed');
          root.style.setProperty('--accent', '#faf5ff');
          root.style.setProperty('--muted', '#fdfaff');
        }
        break;
      case "rose":
        if (isDark) {
          root.style.setProperty('--primary', '#f43f5e');
          root.style.setProperty('--accent', 'oklch(0.3 0.08 350)');
          root.style.setProperty('--muted', 'oklch(0.25 0.05 350)');
        } else {
          root.style.setProperty('--primary', '#e11d48');
          root.style.setProperty('--accent', '#fff1f2');
          root.style.setProperty('--muted', '#fef7f7');
        }
        break;
      default:
        if (isDark) {
          root.style.setProperty('--primary', '#a855f7');
          root.style.setProperty('--accent', 'oklch(0.3 0.08 280)');
          root.style.setProperty('--muted', 'oklch(0.25 0.05 280)');
        } else {
          root.style.setProperty('--primary', '#030213');
          root.style.setProperty('--accent', '#e9ebef');
          root.style.setProperty('--muted', '#ececf0');
        }
        break;
    }
    setCurrentTheme(theme.id);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Reapply current theme to get correct colors for new mode
    const currentThemeObj = themes.find(theme => theme.id === currentTheme);
    if (currentThemeObj) {
      applyTheme(currentThemeObj);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const themeButton = document.querySelector('[data-theme-button]');
      const themeDropdown = document.querySelector('[data-theme-dropdown]');
      
      // Don't close if clicking on the theme button or dropdown
      if (isThemeDropdownOpen && 
          !themeButton?.contains(target) && 
          !themeDropdown?.contains(target)) {
        setIsThemeDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isThemeDropdownOpen]);

  useEffect(() => {
    // Check for saved dark mode preference or system preference
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedDarkMode ? savedDarkMode === 'true' : prefersDark;
    
    setIsDarkMode(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    }

    // Apply purple theme on mount
    const purpleTheme = themes.find(theme => theme.id === "purple");
    if (purpleTheme) {
      applyTheme(purpleTheme);
    }

    const handleScroll = () => {
      const sections = ["hero", "problems", "benefits", "services", "portfolio", "gallery", "workflow", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      id: "hero", 
      label: language === 'ar' ? "الرئيسية" : "Home" 
    },
    { 
      id: "problems", 
      label: language === 'ar' ? "المشاكل والحلول" : "Solutions" 
    },
    { 
      id: "benefits", 
      label: language === 'ar' ? "الفوائد" : "Benefits" 
    },
    { 
      id: "services", 
      label: language === 'ar' ? "خدماتنا" : "Services" 
    },
    { 
      id: "portfolio", 
      label: language === 'ar' ? "أعمالنا" : "Portfolio" 
    },
    { 
      id: "workflow", 
      label: language === 'ar' ? "خطوات العمل" : "Workflow" 
    },
  ];

  return (
    <nav className="fixed top-1 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo - Left Side */}
          <div className="flex items-center flex-shrink-0">
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center space-x-2 group">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-12 group-hover:shadow-lg">
                  <div className="w-2 h-2 bg-primary-foreground rounded-sm transition-all duration-300 group-hover:scale-125"></div>
                </div>
                <span className="text-base font-medium text-foreground tracking-tight transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                  Elegant
                </span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex justify-center flex-1 mx-8">
            <div className="flex items-center justify-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    relative px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer
                    hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10
                    ${activeSection === item.id 
                      ? 'text-primary bg-gradient-to-br from-primary/8 to-primary/12 shadow-sm border border-primary/20' 
                      : 'text-muted-foreground hover:text-primary hover:scale-105'
                    }
                  `}
                >
                  {/* Active section indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg -z-10 animate-pulse"></div>
                  )}
                  
                  {item.label}
                  
                  {/* Active section bottom border */}
                  {activeSection === item.id && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      style={{
                        bottom: '-2px',
                        width: '60%',
                        height: '2px'
                      }}
                    ></div>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right side buttons - Language, Theme and CTA */}
          <div className={`flex items-center justify-end flex-shrink-0 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
            {/* Language Toggle - Hidden only on smallest screens */}
            <div className="hidden sm:block">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center space-x-1.5 px-2 py-1 text-xs font-medium cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:text-primary hover:shadow-sm group h-7 rounded-md border border-transparent hover:border-primary/20"
              >
                <Globe className="w-3 h-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="flex items-center space-x-0.5">
                  <span className={`transition-all duration-300 text-xs ${language === 'ar' ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    ع
                  </span>
                  <span className="text-muted-foreground/40 text-xs">|</span>
                  <span className={`transition-all duration-300 text-xs ${language === 'en' ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    EN
                  </span>
                </div>
              </Button>
            </div>

            {/* Theme Selector - Visible on all screens */}
            <div className="relative">
              <div className={isMobile ? '' : 'group'}>
                <Button
                  variant="ghost"
                  size="sm"
                  data-theme-button
                  onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                  className="flex items-center space-x-1.5 px-2 py-1 text-xs font-medium cursor-pointer hover:bg-primary/10 active:bg-primary/10 transition-all duration-300 hover:text-primary active:text-primary hover:shadow-sm active:shadow-sm h-7 rounded-md border border-transparent hover:border-primary/20 active:border-primary/20"
                >
                  <Palette className="w-3 h-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12" />
                  <span className="text-xs">{language === 'ar' ? 'المظهر' : 'Theme'}</span>
                </Button>
                
                {/* Theme Dropdown */}
                <div 
                  data-theme-dropdown
                  className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg transition-all duration-300 transform z-50 ${
                    isMobile
                      ? (isThemeDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2')
                      : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                  }`}
                >
                  <div className="p-3 space-y-2">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          applyTheme(theme);
                          setIsThemeDropdownOpen(false);
                        }}
                        className={`
                          w-full flex items-center justify-between p-2 rounded-md transition-all duration-300 cursor-pointer
                          hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:scale-102 hover:shadow-sm hover:shadow-primary/5
                          active:bg-gradient-to-r active:from-primary/10 active:to-primary/5 active:scale-102 active:shadow-sm active:shadow-primary/5
                          ${currentTheme === theme.id ? 'bg-gradient-to-r from-primary/15 to-primary/10 text-primary shadow-sm' : 'hover:text-primary active:text-primary'}
                        `}
                      >
                        <span className="text-xs font-medium">
                          {language === 'ar' ? (
                            theme.id === 'default' ? 'افتراضي' :
                            theme.id === 'ocean' ? 'محيطي' :
                            theme.id === 'forest' ? 'غابة' :
                            theme.id === 'sunset' ? 'غروب' :
                            theme.id === 'purple' ? 'بنفسجي' :
                            theme.id === 'rose' ? 'وردي' : theme.name
                          ) : theme.name}
                        </span>
                        <div className="flex space-x-0.5">
                          {theme.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-2 h-2 rounded-full border border-border/20"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Toggle - Hidden only on smallest screens */}
            <div className="hidden sm:block">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-1.5 cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:shadow-sm hover:scale-105 hover:text-primary h-7 w-7 rounded-md border border-transparent hover:border-primary/20 group"
              >
                <div className="relative w-3 h-3">
                  <Sun className={`absolute inset-0 w-3 h-3 transition-all duration-500 group-hover:rotate-12 ${isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                  <Moon className={`absolute inset-0 w-3 h-3 transition-all duration-500 group-hover:-rotate-12 ${isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
                </div>
              </Button>
            </div>

            {/* Contact Us Button */}
            <Button
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-1 h-7 text-xs font-medium cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 rounded-md border border-primary/20 hover:border-primary/40"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact'}
            </Button>


            
            {/* Mobile menu button - Always visible on mobile */}
            <div className="md:hidden ml-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1.5 cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:shadow-sm hover:scale-105 hover:text-primary h-7 w-7 rounded-md border border-transparent hover:border-primary/20 group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className={`w-3.5 h-3.5 transition-all duration-300 group-hover:scale-110 ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/50`}>
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                block px-4 py-3 rounded-lg transition-all duration-300 text-sm font-semibold cursor-pointer
                hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:translate-x-2 hover:shadow-md hover:shadow-primary/5
                ${activeSection === item.id 
                  ? 'text-foreground bg-gradient-to-r from-primary/15 to-primary/10 border-l-4 border-primary shadow-sm' 
                  : 'text-muted-foreground hover:text-primary hover:border-l-2 hover:border-primary/30'
                }
              `}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile-only buttons for very small screens */}
          <div className="sm:hidden pt-3 border-t border-border/20 space-y-2">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1.5' : 'space-x-1.5'}`}>
              {/* Mobile Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex-1 flex items-center justify-center space-x-1.5 p-2 cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:shadow-sm h-8 rounded-md border border-transparent hover:border-primary/20 group"
              >
                <Globe className="w-3 h-3 transition-all duration-300 group-hover:scale-110" />
                <div className="flex items-center space-x-0.5">
                  <span className={`transition-all duration-300 text-xs ${language === 'ar' ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    ع
                  </span>
                  <span className="text-muted-foreground/40 text-xs">|</span>
                  <span className={`transition-all duration-300 text-xs ${language === 'en' ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    EN
                  </span>
                </div>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="flex-1 flex items-center justify-center space-x-1.5 p-2 cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:shadow-sm h-8 rounded-md border border-transparent hover:border-primary/20 group"
              >
                <div className="relative w-3 h-3">
                  <Sun className={`absolute inset-0 w-3 h-3 transition-all duration-500 group-hover:rotate-12 ${isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                  <Moon className={`absolute inset-0 w-3 h-3 transition-all duration-500 group-hover:-rotate-12 ${isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
                </div>
                <span className="text-xs font-medium">
                  {language === 'ar' ? (isDarkMode ? 'فاتح' : 'داكن') : (isDarkMode ? 'Light' : 'Dark')}
                </span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}