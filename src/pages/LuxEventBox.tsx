import { ArrowLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LuxEventBox() {
  const navigate = useNavigate();
  const eventBoxGallery = [
    {
      image: 'Pour anniversaire, évènement privé & VIP.jpeg',
      title: "Pour anniversaire, évènement privé & VIP",
      description: 'Ambiance festive et énergique avec neons doré et raffiné pour vos soirées les plus électrisantes.'
    },
    {
      image: 'Pour shooting photo, clip, mariage et autres.jpeg',
      title: 'Pour shooting photo, clip, mariage et autres',
      description: 'Décor bruts pour créer une atmosphère d\'élégance et de prestige à vos événements.'
    },
    {
      image: 'Demande en mariage & fiançailles.jpeg',
      title: 'Demande en mariage & fiançailles',
      description: 'Moment magique et romantique avec décor neon rouge pour une demande en mariage inoubliable.'
    }
  ];

  const features = [
    {
      title: 'Photobox Premium',
      description: 'Technologie 3D avancée pour des photos instantanées professionnelles et mémorables'
    },
    {
      title: 'Décors Immersifs',
      description: 'Scénographies personnalisées et thématiques pour sublimer vos événements'
    },
    {
      title: 'Props Luxe',
      description: 'Accessoires haut de gamme pour enrichir vos photos et vidéos'
    },
    {
      title: 'Animation Complète',
      description: 'Service professionnel avec opérateur qualifié pendant toute la durée de l\'événement'
    },
    {
      title: 'Impression Instantanée',
      description: 'Photos imprimées en direct pour que vos invités repartent avec leurs souvenirs'
    },
    {
      title: 'Retouches Numériques',
      description: 'Retouches professionnelles et envoi numérique pour partager vos moments sur les réseaux'
    }
  ];

  const eventTypes = [
    'Mariages',
    'Anniversaires Premium',
    'Événements Privés VIP',
    'Lancements de Marque',
    'Photoshoots Professionnels',
    'Clips Musicaux',
    'Galas & Soirées Prestigieuses',
    'Événements Corporatifs'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Presentation Section with Image */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Pour Luxanima 3D évent box.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            LuxAnima 3D Event Box
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Décors immersifs et photobox premium pour des événements d'exception
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Univers
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventBoxGallery.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-300">
                  <img
                    src={`/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Inclus
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Idéal Pour
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-gray-800 hover:bg-gray-50"
              >
                <p className="font-semibold text-gray-900">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Prêt à Créer un Moment Inoubliable ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour personnaliser votre expérience et créer l'événement parfait.
          </p>
          <button onClick={() => navigate('/contact-booking')} className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Demander un Devis
          </button>
        </div>
      </section>
    </div>
  );
}
