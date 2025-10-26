import Image from 'next/image';

export default function LogoCarousel() {
  const clients = [
    { name: 'Ajmera', logo: '/logos/ajmera-realty-seeklogo.png', width: 140, height: 70 },
    { name: 'AMS', logo: '/logos/AMSlogo.svg', width: 120, height: 60 },
    { name: 'Arshiya', logo: '/logos/arshiya logo_20160617141033.png', width: 130, height: 65 },
    { name: 'BP Infra', logo: '/logos/Bp infra.webp', width: 120, height: 60 },
    { name: 'EPC', logo: '/logos/Ed.jpg', width: 110, height: 55 },
    { name: 'Febal Casa', logo: '/logos/Febal Casa_idMZe6I0IW_0.png', width: 130, height: 65 },
    { name: 'Kosmos', logo: '/logos/Kosmos.png', width: 120, height: 60 },
    { name: 'Ruparel', logo: '/logos/logonew.png', width: 130, height: 65 },
    { name: 'Lokhandwala', logo: '/logos/lokhandwala-kataria-construction-18236-4700.avif', width: 120, height: 60 },
    { name: 'Minerva', logo: '/logos/Minerva.png', width: 100, height: 50 },
    { name: 'Piramal', logo: '/logos/piramal-realty-logo-png_seeklogo-613311.png', width: 130, height: 65 },
    { name: 'Anjay Puri', logo: '/logos/Sanjay-Puri-5.jpg', width: 130, height: 65 },
    { name: 'Shapoorji', logo: '/logos/Shapoorji_Pallonji_Group_logo.svg.png', width: 140, height: 70 },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Leading Companies
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll-fast">
            {clients.map((client, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 flex items-center" style={{minWidth:'150px'}}>
                <Image src={client.logo} alt={client.name} width={client.width} height={client.height} className="object-contain" />
              </div>
            ))}
            {clients.map((client, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 flex items-center" style={{minWidth:'150px'}}>
                <Image src={client.logo} alt={client.name} width={client.width} height={client.height} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scrollFast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scrollFast 15s linear infinite;
        }
      `}</style>
    </section>
  );
}