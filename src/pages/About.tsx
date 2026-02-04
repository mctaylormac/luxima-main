export default function About() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/chatgpt_image_6_dec._2025,_14_56_51.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(5px)'
          }}
        >
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À propos de nous
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Découvrez notre histoire, nos valeurs et notre vision
          </p>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Qui sommes-nous ?
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              LuxAnima Groupe est une agence artistique et événementielle
              spécialisée dans la création d'animations premium et d'expériences immersives.
            </p>
            <p>
              Nous donnons vie à des univers uniques à travers des mascottes,
              des performances visuelles et des concepts événementiels pensés
              pour émerveiller, surprendre et marquer durablement les esprits.
            </p>
            <p>
              Chaque projet est conçu comme une œuvre à part entière, où
              créativité, savoir-faire et sens du détail se rencontrent pour
              transformer chaque événement en un moment inoubliable.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION ET VISION — VERSION TEXTE UNIQUEMENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-16">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Transformer chaque événement en une expérience magique et immersive,
              en créant des univers artistiques forts où petits et grands vivent
              des émotions uniques.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Chez LuxAnima, nous ne créons pas seulement des animations :
              nous créons des souvenirs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Devenir une référence incontournable de l'événementiel premium en
              RDC et en Afrique, reconnue pour son univers artistique distinctif,
              son sens du détail et sa capacité à créer des expériences spectaculaires.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Chaque détail compte. De la conception à la réalisation, nous visons
              des prestations soignées, élégantes et irréprochables.
            </p>
          </div>

        </div>
      </section>

      {/* VALEURS — VERSION TEXTE UNIQUEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                La passion est au cœur de LuxAnima. Elle anime chaque création et
                donne vie à la magie que nous offrons lors de chaque événement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous engageons pleinement auprès de nos clients pour
                comprendre leurs attentes, dépasser leurs exigences et donner
                vie à leurs projets les plus ambitieux.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
