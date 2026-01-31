import { Coffee, Wine, UtensilsCrossed } from 'lucide-react';

export const MenuPage = () => {
  const menuSections = [
    {
      title: 'Coffee',
      icon: Coffee,
      items: [
        { name: 'Espresso', price: '€2.50' },
        { name: 'Cappuccino', price: '€3.00' },
        { name: 'Freddo Espresso', price: '€3.00' },
        { name: 'Freddo Cappuccino', price: '€3.50' },
      ],
    },
    {
      title: 'Wine',
      icon: Wine,
      items: [
        { name: 'Red Wine (Glass)', price: '€4.00' },
        { name: 'White Wine (Glass)', price: '€4.00' },
        { name: 'House Wine (Bottle)', price: '€15.00' },
      ],
    },
    {
      title: 'Snacks',
      icon: UtensilsCrossed,
      items: [
        { name: 'Croissant', price: '€2.50' },
        { name: 'Toast Sandwich', price: '€3.50' },
        { name: 'Cheese Plate', price: '€5.00' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20" data-testid="menu-page">
      {/* Hero */}
      <section className="relative h-[35vh] sm:h-[45vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1716589471488-3e9bac5f88f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMHdhcm18ZW58MHx8fHwxNzY5NzE0NzU5fDA&ixlib=rb-4.1.0&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/40 to-[#2D2A26]/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] animate-fade-in-up"
              data-testid="menu-title"
            >
              Menu
            </h1>
            <p className="text-[#FAF7F2]/80 mt-4 text-sm sm:text-base animate-fade-in-up animation-delay-100">
              Simple pleasures, carefully crafted
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto">
          {menuSections.map((section, sectionIndex) => (
            <div 
              key={section.title}
              className={`mb-16 last:mb-0 animate-fade-in-up animation-delay-${(sectionIndex + 1) * 100}`}
              data-testid={`menu-section-${section.title.toLowerCase()}`}
            >
              {/* Section Header */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-[#722F37]/20 flex-1" />
                <div className="flex items-center gap-3">
                  <section.icon className="w-5 h-5 text-[#722F37]" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2A26]">
                    {section.title}
                  </h2>
                </div>
                <div className="h-px bg-[#722F37]/20 flex-1" />
              </div>

              {/* Menu Items */}
              <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className="menu-item"
                    data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="text-center mt-16 pt-8 border-t border-[#722F37]/10">
            <p className="text-[#6B6560] text-sm italic">
              All prices include VAT. Ask about our daily specials.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[35vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/30816969/pexels-photo-30816969.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-[#2D2A26]/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2] text-center max-w-md">
            From our café to your table
          </p>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
