import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  image: string;
  title: string;
  description: string;
  subparts?: Array<{
    icon: string;
    label: string;
    image: string;
    presentationImage?: string;
    description: string;
  }>;
  comingSoon?: boolean;
}

export default function Home() {
  const navigate = useNavigate();
  const univers: ServiceItem[] = [
    {
      image: 'Luxanima mini mascotte.jpeg',
      title: 'LuxAnima Mini Mascottes',
      description: 'Des mascottes professionnelles soigneusement sélectionnées pour offrir des animations joyeuses et mémorables lors d’événements familiaux, scolaires et institutionnels.',
    },
    {
      image: 'Luxanima groupe gourmand.jpeg',
      title: 'LuxAnima Groupe Gourmand',
      description: 'Des stands gourmands premium alliant esthétique, générosité et saveurs, pour offrir à chaque invité et client une expérience sucrée inoubliable lors de vos événements.',
      subparts: [
        {
          icon: '🍿',
          label: 'Événementiel',
          image: 'Luxanima groupe gourmand.jpeg',
          presentationImage: 'Luxanima groupe gourmand - événementiel.jpeg',
          description: 'Notre service événementiel propose des stands gourmands sur mesure pour tous vos événements : mariages, anniversaires, fêtes d\'entreprise, festivals et bien plus. Nous apportons une touche de gourmandise et d\'élégance à chaque occasion avec des produits de qualité supérieure et un service professionnel irréprochable.'
        },
        {
          icon: '🍦',
          label: 'Vente publique mobile',
          image: 'Luxanima groupe gourmand.jpeg',
          presentationImage: 'Luxanima groupe gourmand - vente mobile.jpeg',
          description: 'Notre service de vente publique mobile vous permet de profiter de nos délicieuses gourmandises où que vous soyez. Nos stands mobiles sont équipés pour offrir une expérience gustative exceptionnelle dans les lieux publics, centres commerciaux, écoles et événements de grande envergure. Qualité, hygiène et service souriant garantis.'
        }
      ]
    },
    {
      image: 'Pour Luxanima 3D évent box.jpeg',
      title: 'LuxAnima 3D Event Box',
      description: 'Décors immersifs et scénographies 3D haut de gamme conçus pour sublimer vos événements. Backdrops spectaculaires, univers visuels personnalisés et mises en scène élégantes pour créer un effet “wow” inoubliable lors de vos anniversaires, soirées privées, clips, photoshoot et événements premium.',
    },
    {
      image: 'Luxanima groupe expérience.jpeg',
      title: 'LuxAnima Groupe Expérience',
      description: 'Création de spectacles événementiels et animations scéniques premium avec mascottes et univers visuels immersifs. Chaque représentation est pensée comme un show à part entière, alliant émotion, divertissement et excellence artistique.',
    },
    {
      image: 'Luxanima Event show (2028).jpeg',
      title: 'LuxAnima Event Show',
      description: 'Disponible en 2028',
      comingSoon: true,
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond floutée */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/chatgpt_image_6_dec._2025,_14_56_51.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(5px)'
          }}
        />
        {/* Overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}
          >
            LuxAnima Groupe
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-12 leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            Mascottes - Animations - Spectacles - Gourmandises - 3D Event Box - Evenement Premium
          </p>
        </div>
      </section>


      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                L'Excellence Événementielle
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                LuxAnima Groupe incarne une nouvelle génération d'entreprises artistiques et événementielles, où l'élégance, la créativité et l'excellence professionnelle s'unissent pour donner vie à des expériences uniques et mémorables. Plus qu'un simple prestataire d'animation, LuxAnima est un univers à part entière, pensé pour sublimer chaque instant et transformer chaque événement en un véritable spectacle d'émotions.
              </p>

              <p>
                Spécialisé dans les animations premium pour enfants et événements VIP, le groupe développe plusieurs pôles complémentaires comme: les mini mascottes LuxAnima, les stands gourmands spécialisés dans les snacks & sucreries internationales, les décors visuels haut de gamme avec la LuxAnima 3D Event Box, et les spectacles immersifs de LuxAnima Experience, inspirés de l'univers féerique et du divertissement international.
              </p>

              <p>
                Chaque prestation est conçue avec une exigence élevée de qualité, de sécurité et de précision artistique. Nos équipes sont formées pour offrir des performances harmonieuses, disciplinées et élégantes, dans le respect total des standards professionnels. Chez LuxAnima, chaque détail compte: du costume à la chorégraphie, du service au stand gourmand jusqu'à la mise en scène globale de l'événement.
              </p>

              <p>
                Basé à Kinshasa, LuxAnima Groupe accompagne les écoles, les familles, les centres commerciaux, les entreprises et les organisateurs d'événements dans la création de moments d'exception. Notre ambition est claire: élever l'animation événementielle à un niveau supérieur, en proposant un service structuré, fiable et résolument haut de gamme.
              </p>

              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center pt-4 sm:pt-6">
                LuxAnima Groupe ne se contente pas d'animer vos événements.<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Nous racontons une histoire, nous créons une émotion, nous laissons une empreinte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nos Univers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Des services premium pour des événements d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {univers.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col ${
                  item.comingSoon ? 'opacity-90' : ''
                }`}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {item.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-xs font-bold">
                      Bientôt
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    {item.title}
                  </h3>

                  <div className="flex-grow">
                    <p className={`text-sm sm:text-base leading-relaxed text-center ${
                      item.comingSoon ? 'text-gray-800 font-semibold' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>

                    {/* Section sous-parties - uniquement pour LuxAnima Gourmand */}
                    {item.subparts && (
                      <div className="mt-4 pt-4 border-t border-gray-200">

                        <div className="space-y-2">
                          {item.subparts.map((subpart, idx) => (
                            <button
                              key={idx}
                              onClick={() =>
                                navigate('/service-detail', {
                                  state: {
                                    title: `${item.title} - ${subpart.label}`,
                                    description: subpart.description,
                                    image: subpart.image,
                                    presentationImage: subpart.presentationImage,
                                  },
                                })
                              }
                              className="w-full flex items-center justify-center space-x-2 text-sm bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg py-2 px-3 border border-gray-200 hover:from-gray-100 hover:to-gray-200 hover:border-gray-300 transition-all hover:scale-105 cursor-pointer"
                            >
                              <span className="text-lg">{subpart.icon}</span>
                              <span className="font-medium text-gray-800">{subpart.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bouton Découvrir pour LuxAnima Mini Mascottes */}
                    {item.title === 'LuxAnima Mini Mascottes' && !item.comingSoon && (
                      <div className="mt-6">
                        <button
                          onClick={() => navigate('/lux-mini-mascottes')}
                          className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white font-bold rounded-full hover:from-gray-900 hover:to-gray-800 transition-all hover:scale-105 shadow-lg"
                        >
                          Découvrir ce pôle
                        </button>
                      </div>
                    )}

                    {/* Bouton Découvrir pour LuxAnima 3D Event Box */}
                    {item.title === 'LuxAnima 3D Event Box' && !item.comingSoon && (
                      <div className="mt-6">
                        <button
                          onClick={() => navigate('/lux-event-box')}
                          className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white font-bold rounded-full hover:from-gray-900 hover:to-gray-800 transition-all hover:scale-105 shadow-lg"
                        >
                          Découvrir ce pôle
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Prêt à créer votre événement ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Contactez-nous dès maintenant pour donner vie à votre projet
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
            <button
              onClick={() => navigate('/contact-booking')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-bold text-base sm:text-lg hover:from-gray-900 hover:to-gray-800 transition-all shadow-lg hover:scale-105"
            >
              Réserver maintenant
            </button>
            <button
              onClick={() => navigate('/contact-booking')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 hover:scale-105 transition-all border-2 border-gray-800 shadow-lg"
            >
              Demander un devis
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 hover:scale-105 transition-all border-2 border-gray-800 shadow-lg"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}