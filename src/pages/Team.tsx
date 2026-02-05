import { Users, UtensilsCrossed, Truck } from 'lucide-react';

export default function Team() {
  const poles = [
    {
      icon: Users,
      title: 'Animation & Mascottes',
      description: 'Des animations élégantes et interactives pour émerveiller petits et grands.',
      items: ['Mascottes premium & élégantes (personnages soignés, animaux, mascottes sur mesure)', 'Danseurs & performers professionnels (animations chorégraphiées, accueil des invités, performances visuelles)', 'Animations VIP enfants & adultes (anniversaires, événements privés, soirées, lancements, fêtes d’entreprise)'],
      color: 'from-pink-500 to-rose-600',
      image: 'Luxanima mini mascotte.jpeg',
      page: 'univers'
    },
    {
      icon: UtensilsCrossed,
      title: 'Gourmand Événementiel & Vente Mobile',
      description: 'Des stands gourmands premium alliant esthétique, générosité et saveurs.',
      items: ['Gaufres de liége artisanales (spéculoos, Nutella, toppings variés)', 'Crêpes gourmandes (classiques et personnalisables)', 'Beignets & douceurs sucrées', 'Popcorn & Barbe à papa', 'Glaces & bâtons glacés (parfaits pour événements estivaux)'],
      color: 'from-amber-500 to-orange-600',
      image: 'Luxanima groupe gourmand.jpeg',
      page: 'univers'
    },
    {
      icon: Truck,
      title: 'Logistique & Expérience VIP',
      description: 'Des solutions logistiques complètes pour des événements sans souci.',
      items: ['Box 3D photo personnalisé', 'Décors mobiles', 'Transport, installation, démontage', 'Gestion technique événementielle'],
      color: 'from-blue-500 to-cyan-600',
      image: 'logistique.jpeg',
      page: 'univers'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Section Hero - CORRECTION : <div> fermant incorrectement */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/chatgpt_image_6_dec._2025,_14_56_51.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: 'blur(5px)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Services
          </h1>
        </div>
      </section>

      {/* Section Pôles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos 3 Pôles d'Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Des services premium pour sublimer vos événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {poles.map((pole, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`h-48 ${pole.image ? '' : `bg-gradient-to-br ${pole.color}`} flex items-center justify-center overflow-hidden`}>
                  {pole.image ? (
                    <img
                      src={pole.image}
                      alt={pole.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <pole.icon size={80} className="text-white" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pole.title}
                  </h3>
                  {pole.description ? (
                    <p className="text-gray-700 mb-4">{pole.description}</p>
                  ) : null}
                  {pole.items ? (
                    <ul className="space-y-2 mb-6">
                      {pole.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="mr-3 text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {/* Bouton caché dans la version actuelle - navigation gérée par les autres pages */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}