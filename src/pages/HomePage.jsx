import { Link } from 'react-router-dom';
import { Coffee, Wine, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export const HomePage = () => {
  const highlights = [
    {
      icon: Coffee,
      title: 'Fresh Coffee',
      description: 'High-quality coffee beans, freshly brewed every day.',
    },
    {
      icon: Wine,
      title: 'Local Wine',
      description: 'A selection of Greek wines inspired by tradition.',
    },
    {
      icon: Users,
      title: 'Cozy Atmosphere',
      description: 'A warm space to relax, work, or meet friends.',
    },
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section relative"
        data-testid="hero-section"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1635594110298-8f5ccb5bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxhdGhlbnMlMjBncmVlY2UlMjBzdHJlZXQlMjBjYWZlfGVufDB8fHx8MTc2OTcxNDc2M3ww&ixlib=rb-4.1.0&q=85')`,
          }}
        />
        <div className="hero-overlay" />
        
        {/* Hero Content */}
        <div className="hero-content text-center px-4 pt-20">
          <div className="animate-fade-in-up">
            <span className="text-[#722F37] text-sm uppercase tracking-[0.3em] font-medium">
              Athens, Greece
            </span>
          </div>
          
          <h1 
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#2D2A26] mt-4 mb-6 animate-fade-in-up animation-delay-100"
            data-testid="hero-title"
          >
            Dionysos Café
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-[#6B6560] max-w-lg mx-auto mb-10 animate-fade-in-up animation-delay-200"
            data-testid="hero-subtitle"
          >
            Coffee, wine, and small bites in the heart of Athens
          </p>
          
          <Link 
            to="/menu" 
            className="animate-fade-in-up animation-delay-300 inline-block"
          >
            <Button 
              className="btn-wine text-sm uppercase tracking-wider"
              data-testid="hero-cta"
            >
              View Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#722F37]/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#722F37]/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section 
        className="section-padding bg-[#FAF7F2]"
        data-testid="intro-section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="decorative-grape mb-4">🍇</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2A26] mb-6">
            Welcome to Dionysos
          </h2>
          <div className="decorative-line" />
          <p className="text-[#6B6560] text-base sm:text-lg leading-relaxed mt-8 text-balance">
            At Dionysos Café, we believe great conversations start with great coffee.
          </p>
          <p className="text-[#6B6560] text-base sm:text-lg leading-relaxed mt-4 text-balance">
            Located in the center of Athens, we serve freshly brewed coffee, local wines, and simple food made with care.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section 
        className="section-padding bg-[#F5F0E8]"
        data-testid="highlights-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2A26]">
              What We Offer
            </h2>
            <div className="decorative-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`highlight-card text-center animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                data-testid={`highlight-${item.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#722F37]/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#722F37]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2A26] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B6560] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[50vh] sm:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/33173919/pexels-photo-33173919.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-[#2D2A26]/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F2] text-center max-w-2xl leading-relaxed">
            "Where every cup tells a story"
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding bg-[#FAF7F2]"
        data-testid="cta-section"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2A26] mb-4">
            Visit Us Today
          </h2>
          <div className="decorative-line" />
          <p className="text-[#6B6560] text-base sm:text-lg mt-8 mb-10">
            Visit us today or get in touch for more information.
          </p>
          <Link to="/contact">
            <Button 
              className="btn-outline text-sm uppercase tracking-wider"
              data-testid="cta-contact"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
