import { Wine } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20" data-testid="about-page">
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1642933828502-4fe9bd2e8547?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjb3p5JTIwZ3JlZWslMjBjYWZlJTIwaW50ZXJpb3IlMjBjb2ZmZWV8ZW58MHx8fHwxNzY5NzE0NzU3fDA&ixlib=rb-4.1.0&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/40 to-[#2D2A26]/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] animate-fade-in-up"
              data-testid="about-title"
            >
              About Dionysos Café
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          {/* Decorative Element */}
          <div className="text-center mb-10">
            <Wine className="w-10 h-10 text-[#722F37] mx-auto" />
            <div className="decorative-line mt-4" />
          </div>

          {/* Story */}
          <div className="space-y-8 text-center">
            <p 
              className="text-[#6B6560] text-base sm:text-lg leading-relaxed animate-fade-in-up"
              data-testid="about-paragraph-1"
            >
              Dionysos Café is a small, independent café inspired by Greek culture and the joy of sharing moments together.
            </p>

            <p 
              className="text-[#6B6560] text-base sm:text-lg leading-relaxed animate-fade-in-up animation-delay-100"
              data-testid="about-paragraph-2"
            >
              Our name comes from Dionysos, the god of wine and celebration, symbolizing our love for quality drinks and relaxed social experiences.
            </p>

            <p 
              className="text-[#6B6560] text-base sm:text-lg leading-relaxed animate-fade-in-up animation-delay-200"
              data-testid="about-paragraph-3"
            >
              Whether you are stopping by for a quick espresso or spending time with friends, our goal is to make you feel welcome.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-16 pt-12 border-t border-[#722F37]/10">
            <blockquote className="text-center">
              <p className="font-serif text-2xl sm:text-3xl text-[#2D2A26] italic leading-relaxed">
                "Life is too short for bad coffee"
              </p>
              <div className="mt-4 text-[#722F37] text-sm uppercase tracking-wider">
                — Our Philosophy
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2A26]">
              Our Values
            </h2>
            <div className="decorative-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-center p-6 animate-fade-in-up">
              <div className="text-3xl mb-4">☕</div>
              <h3 className="font-serif text-xl text-[#2D2A26] mb-2">Quality</h3>
              <p className="text-[#6B6560] text-sm">
                We source the finest beans and wines, never compromising on quality.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up animation-delay-100">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-serif text-xl text-[#2D2A26] mb-2">Community</h3>
              <p className="text-[#6B6560] text-sm">
                We're more than a café—we're a gathering place for neighbors and travelers.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up animation-delay-200">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="font-serif text-xl text-[#2D2A26] mb-2">Authenticity</h3>
              <p className="text-[#6B6560] text-sm">
                Greek traditions inspire everything we do, from our menu to our hospitality.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up animation-delay-300">
              <div className="text-3xl mb-4">💚</div>
              <h3 className="font-serif text-xl text-[#2D2A26] mb-2">Sustainability</h3>
              <p className="text-[#6B6560] text-sm">
                We prioritize local suppliers and eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1603787598212-5d54120ec6ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxhdGhlbnMlMjBncmVlY2UlMjBzdHJlZXQlMjBjYWZlfGVufDB8fHx8MTc2OTcxNDc2M3ww&ixlib=rb-4.1.0&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-[#2D2A26]/30" />
      </section>
    </div>
  );
};

export default AboutPage;
