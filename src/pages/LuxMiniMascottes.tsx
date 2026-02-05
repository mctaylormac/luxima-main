import { ArrowLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LuxMiniMascottes() {
  const navigate = useNavigate();
  const mascotteGallery = [
    {
      image: 'CATY.jpeg',
      name: 'Caty',
      description: 'Mascotte chat blanc élégant et adorable pour vos événements'
    },
    {
      image: 'FENIX.jpeg',
      name: 'Fénix',
      description: 'Renard orange chaleureux et dynamique pour animer vos fêtes'
    },
    {
      image: 'JAX.jpeg',
      name: 'Jax',
      description: 'Tigre orange rayé pour des animations sauvages et amusantes'
    },
    {
      image: 'MILO.jpeg',
      name: 'Milo',
      description: 'Chien marron sympathique et joueur pour ravir les enfants'
    },
    {
      image: 'SAI.jpeg',
      name: 'Saï',
      description: 'Chat noir mystérieux et captivant pour surprendre vos invités'
    }
  ];

  const features = [
    {
      title: 'Animations Interactives',
      description: 'Mascottes formées pour engager et divertir vos invités avec des performances joyeuses'
    },
    {
      title: 'Qualité Premium',
      description: 'Costumes haut de gamme confortables et durables pour des animations parfaites'
    },
    {
      title: 'Personnalisation',
      description: 'Adaptables à vos événements spécifiques et à vos thèmes personnalisés'
    },
    {
      title: 'Photos Souvenirs',
      description: 'Sessions photo mémorables avec vos invités pour garder de beaux souvenirs'
    },
    {
      title: 'Spectacles Choreographiés',
      description: 'Performances dansées et scénettes amusantes pour entertainer le public'
    },
    {
      title: 'Service Professionnel',
      description: 'Équipe expérimentée et courtoise pour un service sans faille'
    }
  ];

  const eventTypes = [
    'Anniversaires d\'enfants',
    'Événements scolaires',
    'Centres commerciaux',
    'Fêtes d\'entreprise',
    'Mariages',
    'Événements VIP',
    'Festivals',
    'Inaugurations'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Presentation Section with Image */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Luxanima mini mascotte.jpeg')",
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
            LuxAnima Mini Mascottes
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Mascottes professionnelles pour animer tous vos événements
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Mascottes
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {mascotteGallery.map((mascotte, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-300 h-96">
                  <img
                    src={`/${mascotte.image}`}
                    alt={mascotte.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6 bg-white text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {mascotte.name}
                  </h3>
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
            Prêt à Égayer Votre Événement ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Réservez l'une de nos mascottes charismatiques pour créer des moments inoubliables lors de votre événement.
          </p>
          <button onClick={() => navigate('/contact-booking')} className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Réserver une Mascotte
          </button>
        </div>
      </section>
    </div>
  );
}
