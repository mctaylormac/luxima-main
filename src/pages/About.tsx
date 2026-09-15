import { Sparkles, Target, Eye, Heart, Award, Users, Star } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart size={32} className="text-white" />,
      title: 'Passion',
      description:
        'La passion est au cœur de LuxAnima. Elle anime chaque création et donne vie à la magie que nous offrons lors de chaque événement.',
    },
    {
      icon: <Award size={32} className="text-white" />,
      title: 'Excellence',
      description:
        'Chaque prestation est pensée dans ses moindres détails. Nous visons un niveau d\'excellence absolu, de la conception à la réalisation.',
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: 'Engagement',
      description:
        'Nous nous engageons pleinement auprès de nos clients pour comprendre leurs attentes, dépasser leurs exigences et donner vie à leurs projets les plus ambitieux.',
    },
    {
      icon: <Star size={32} className="text-white" />,
      title: 'Créativité',
      description:
        'Chaque idée est une opportunité d\'inventer quelque chose d\'unique. Nous repoussons les limites du possible pour créer des expériences spectaculaires.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Événements réalisés' },
    { value: '2', label: 'Pays couverts' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '5★', label: 'Satisfaction moyenne' },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center w-full">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6 tracking-widest uppercase">
            <Sparkles size={15} />
            Agence Artistique &amp; Événementielle
          </div>
          <h1
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}
          >
            Notre Histoire,<br />
            <span className="text-white/80">Notre Passion</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            Découvrez l'univers LuxAnima — là où l'art rencontre l'événement
            pour créer des instants inoubliables.
          </p>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-black py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                Qui sommes-nous
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Une agence pensée pour
                <span className="block text-gray-500">les grands moments</span>
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">LuxAnima Groupe</strong> est une agence artistique
                  et événementielle spécialisée dans la création d'animations premium
                  et d'expériences immersives.
                </p>
                <p>
                  Nous donnons vie à des univers uniques à travers des mascottes,
                  des performances visuelles et des concepts événementiels pensés
                  pour émerveiller, surprendre et marquer durablement les esprits.
                </p>
                <p>
                  Chaque projet est conçu comme une <strong className="text-gray-900">œuvre à part entière</strong>, où
                  créativité, savoir-faire et sens du détail se rencontrent pour
                  transformer chaque événement en un moment inoubliable.
                </p>
              </div>
            </div>
            {/* Bloc visuel décoratif */}
            <div className="relative">
              <div
                className="w-full h-80 lg:h-96 rounded-3xl overflow-hidden"
                style={{
                  backgroundImage: "url('/chatgpt_image_6_dec._2025,_14_56_51.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-black text-white rounded-2xl px-6 py-4 shadow-2xl">
                <div className="text-3xl font-black">★ 5/5</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Ce qui nous anime</p>
            <h2 className="text-4xl md:text-5xl font-black">Mission &amp; Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Notre Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Transformer chaque événement en une expérience magique et immersive,
                en créant des univers artistiques forts où petits et grands vivent
                des émotions uniques.
              </p>
              <p className="text-white font-semibold border-t border-white/10 pt-4">
                Chez LuxAnima, nous ne créons pas seulement des animations :
                nous créons des souvenirs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Notre Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Devenir une référence incontournable de l'événementiel premium en
                RDC et en Afrique, reconnue pour son univers artistique distinctif,
                son sens du détail et sa capacité à créer des expériences spectaculaires.
              </p>
              <p className="text-white font-semibold border-t border-white/10 pt-4">
                Chaque détail compte. De la conception à la réalisation, nous visons
                des prestations soignées, élégantes et irréprochables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Notre ADN</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">
              Les principes qui guident chacune de nos actions, au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-gray-950 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Sparkles size={40} className="mx-auto mb-6 text-gray-400" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Prêts à créer quelque chose<br />d'extraordinaire ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Confiez-nous votre événement. Nous ferons le reste.
          </p>
          <a
            href="/contact-booking"
            className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
          >
            Démarrer un projet →
          </a>
        </div>
      </section>

    </div>
  );
}
