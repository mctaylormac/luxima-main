interface ServiceDetailProps {
  onNavigate: (page: string) => void;
  service: {
    title: string;
    description: string;
    image: string;
    presentationImage?: string;
  } | null;
}

import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail({ onNavigate, service }: ServiceDetailProps) {
  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-bold hover:from-gray-900 hover:to-gray-800 transition-all"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  // Utiliser l'image de présentation du service (presentationImage si disponible, sinon image)
  const presentationImage = service.presentationImage || service.image;

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${presentationImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Description du service
            </h2>

            <div className="mb-12">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-bold text-lg hover:from-gray-900 hover:to-gray-800 transition-all shadow-lg hover:scale-105"
            >
              Réserver ce service
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-800 shadow-lg hover:scale-105"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
