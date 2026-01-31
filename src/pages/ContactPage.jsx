import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      lines: ['Dionysos Café', 'Ermou Street 25', 'Athens, Greece'],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      lines: ['Monday – Friday: 8:00 – 22:00', 'Saturday – Sunday: 9:00 – 23:00'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+30 210 123 4567'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['hello@dionysoscafe.gr'],
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20" data-testid="contact-page">
      {/* Hero */}
      <section className="relative h-[35vh] sm:h-[45vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/30162468/pexels-photo-30162468.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/40 to-[#2D2A26]/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] animate-fade-in-up"
              data-testid="contact-title"
            >
              Contact & Location
            </h1>
            <p className="text-[#FAF7F2]/80 mt-4 text-sm sm:text-base animate-fade-in-up animation-delay-100">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2A26] mb-8 text-center lg:text-left">
                Get In Touch
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className={`flex items-start gap-4 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                    data-testid={`contact-info-${info.title.toLowerCase().replace(' ', '-')}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#722F37]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#722F37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#2D2A26] mb-1">
                        {info.title}
                      </h3>
                      {info.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-[#6B6560] text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Note */}
              <div className="mt-12 p-6 bg-[#F5F0E8] rounded text-center">
                <p className="text-[#6B6560] text-sm">
                  Follow us on social media for updates and behind-the-scenes moments.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <span className="text-[#722F37] cursor-pointer hover:scale-110 transition-transform">
                    @dionysoscafe
                  </span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2A26] mb-8 text-center lg:text-left">
                Find Us
              </h2>

              {/* Google Maps Embed */}
              <div 
                className="map-container aspect-square lg:aspect-[4/3]"
                data-testid="contact-map"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.0293961877385!2d23.726531315320!3d37.97615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd19ca39ee61%3A0x1b3fa079890ab7e0!2sErmou%2C%20Athens%2C%20Greece!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dionysos Café Location"
                />
              </div>

              {/* Directions Note */}
              <div className="mt-6 text-center">
                <p className="text-[#6B6560] text-sm">
                  Located in the heart of Athens, just steps from Syntagma Square.
                </p>
                <p className="text-[#6B6560] text-sm mt-2">
                  Nearest Metro: <span className="text-[#722F37] font-medium">Syntagma Station</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#2D2A26] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] mb-4">
            We Look Forward to Seeing You
          </h2>
          <p className="text-[#FAF7F2]/70 text-sm sm:text-base">
            Come for the coffee, stay for the atmosphere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
