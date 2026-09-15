import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+32 493 92 XX XX',
      sub: 'Lundi - Vendredi : 9h - 18h',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'luxanimagroup@gmail.com',
      sub: 'Réponse sous 24h',
    },
    {
      icon: MapPin,
      label: 'Belgique',
      value: 'Intervention nationale',
      sub: '',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Discussion instantanée',
      sub: 'Bouton flottant en bas à droite',
    },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/chatgpt_image_6_dec._2025,_14_56_51.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(5px)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* ── COORDONNÉES + FORMULAIRE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Colonne gauche — coordonnées & réseaux */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Parlons de votre projet
              </h2>

              <div className="space-y-4 mb-12">
                {contactItems.map(({ icon: Icon, label, value, sub }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{label}</h3>
                      <p className="text-gray-600">{value}</p>
                      {sub && <p className="text-sm text-gray-500 mt-1">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/19Mj6N61Nq/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook LuxAnima"
                    className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                  >
                    <Facebook size={28} className="text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/luxanima_groupe?stkn=d2xtMXExdGt4eXNp&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram LuxAnima"
                    className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                  >
                    <Instagram size={28} className="text-white" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok LuxAnima"
                    className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg text-white"
                  >
                    <svg
                      className="w-7 h-7 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-black p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Envoyez-nous un message</h3>
                <p className="text-white/90">
                  Remplissez ce formulaire et nous vous répondrons sous 24h
                </p>
              </div>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you/"
                className="p-8 md:p-10 space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Ne pas remplir :{' '}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                <div>
                  <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-2">
                    Nom *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-gray-700 font-semibold mb-2">
                    Sujet *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors resize-none bg-white"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-bold text-lg hover:from-gray-900 hover:to-gray-800 transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={24} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA WHATSAPP ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Besoin d'une réponse rapide ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible sur WhatsApp pour répondre à toutes vos questions
              en temps réel. Cliquez sur le bouton flottant en bas à droite de votre écran.
            </p>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-bold text-lg shadow-lg">
              <MessageCircle size={28} />
              Contactez-nous sur WhatsApp
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
