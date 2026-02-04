import { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign, User, Mail, Phone, MessageSquare, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    time: '',
    address: '',
    budget: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
<section className="relative min-h-[60vh] flex items-center text-white overflow-hidden">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/chatgpt_image_6_dec._2025,_14_56_51.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'blur(5px)'
    }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Contact & Réservation
    </h1>
    <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
      Contactez-nous pour réserver votre événement ou demander un devis
    </p>
  </div>
</section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                <p className="text-gray-600">+32 493 92 XX XX</p>
                <p className="text-sm text-gray-500 mt-1">
                  Lundi - Vendredi: 9h - 18h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">contact@luxanima.com</p>
                <p className="text-sm text-gray-500 mt-1">
                  Réponse sous 24h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                <p className="text-gray-600">Belgique</p>
                <p className="text-sm text-gray-500 mt-1">
                  Intervention nationale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-black p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Demande de Devis & Réservation</h2>
              <p className="text-white/90">
                Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <User size={20} className="text-gray-800" />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Mail size={20} className="text-gray-800" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Phone size={20} className="text-gray-800" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  placeholder="+33 X XX XX XX XX"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Calendar size={20} className="text-gray-800" />
                  Type d'événement *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="mariage">Mariage</option>
                  <option value="corporate">Événement d'entreprise</option>
                  <option value="scolaire">Événement scolaire</option>
                  <option value="festival">Festival</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Calendar size={20} className="text-gray-800" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Clock size={20} className="text-gray-800" />
                    Heure *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MapPin size={20} className="text-gray-800" />
                  Adresse de l'événement *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  placeholder="Adresse complète"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <DollarSign size={20} className="text-gray-800" />
                  Budget estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="500-1000">500€ - 1 000€</option>
                  <option value="1000-2500">1 000€ - 2 500€</option>
                  <option value="2500-5000">2 500€ - 5 000€</option>
                  <option value="5000+">Plus de 5 000€</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MessageSquare size={20} className="text-gray-800" />
                  Prestation souhaitée *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez une prestation</option>
                  <option value="mascottes">Animation & Mascottes</option>
                  <option value="gourmand">Stand Gourmand</option>
                  <option value="logistique">Logistique Événementielle</option>
                  <option value="complete">Prestation complète</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MessageSquare size={20} className="text-gray-800" />
                  Message / Détails
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez-nous votre projet en détail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-bold text-lg hover:from-gray-900 hover:to-gray-800 transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={24} />
                Envoyer la demande
              </button>

              <p className="text-center text-gray-500 text-sm">
                * Champs obligatoires
              </p>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Réponse Rapide</h3>
              <p className="text-gray-600 text-sm">
                Nous vous répondons sous 24h
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Devis Gratuit</h3>
              <p className="text-gray-600 text-sm">
                Sans engagement de votre part
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Accompagnement</h3>
              <p className="text-gray-600 text-sm">
                Suivi personnalisé de A à Z
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-12 shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Besoin d'une réponse rapide ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                Notre équipe est disponible sur WhatsApp pour répondre à toutes vos questions
                en temps réel. Cliquez sur le bouton flottant en bas à droite de votre écran.
              </p>

              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg">
                  <MessageCircle size={28} />
                  Contactez-nous sur WhatsApp
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Suivez-nous
                </h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                  >
                    <Facebook size={28} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                  >
                    <Instagram size={28} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                  >
                    <Linkedin size={28} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
