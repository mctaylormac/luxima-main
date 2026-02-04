import { Users, Candy, Package, Sparkles } from 'lucide-react';

export default function Univers() {
  const univers = [
    {
      icon: Users,
      title: 'LuxAnima Mini Mascottes',
      description: 'Mascottes animales haut de gamme pour anniversaires, écoles, événements et VIP.',
      color: 'from-pink-500 to-rose-600',
      features: ['Mascottes personnalisées', 'Animations interactives', 'Photos souvenirs', 'Spectacles sur mesure']
    },
    {
      icon: Candy,
      title: 'LuxAnima Groupe Gourmand',
      description: 'Stands gourmands pour évenement & vente mobile (gaufres de Liege, crepes, crème glacée...).',
      color: 'from-amber-500 to-orange-600',
      features: ['Barbe à papa', 'Popcorns gourmet', 'Crêpes & gaufres', 'Confiseries premium']
    },
    {
      icon: Package,
      title: 'LuxAnima 3D Event Box',
      description: 'Box photo 3D premuim personnalisée pour mariages, anniversaires, évenements VIP, lancement de marque.',
      color: 'from-blue-500 to-cyan-600',
      features: ['Matériel événementiel', 'Vente mobile', 'Logistique complète', 'Installation professionnelle']
    },
    {
      icon: Sparkles,
      title: 'LuxAnima Groupe Expérience',
      description: 'Spectacles et animations immersives pour enfants, ecoles, centres commerciaux et événements culturels.',
      color: 'from-gray-800 to-black',
      features: ['Événements sur mesure', 'Scénographie créative', 'Animation premium', 'Coordination complète']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Univers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Quatre pôles d'excellence pour des événements inoubliables
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {univers.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`aspect-[5/3] rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}>
                    <item.icon size={120} className="text-white/80" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color}`}>
                    <item.icon size={32} className="text-white" />
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color}`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`px-8 py-4 bg-gradient-to-r ${item.color} text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg`}>
                    Découvrir ce pôle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
