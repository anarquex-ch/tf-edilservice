"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Navigation } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";

const contactInfo = {
  address: "Via Campagna 4b, 6512 Giubiasco",
  email: "info@tfedilservice.ch",
  phone: "+41 79 XXX XX XX",
};

const hours = [
  { day: "Lunedì - Venerdì", hours: "08:00 - 12:00 / 13:30 - 18:00" },
  { day: "Sabato", hours: "Su appuntamento" },
  { day: "Domenica", hours: "Chiuso" },
];

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Grazie per il messaggio! Ti contatteremo al più presto.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <PageHero
        iconName="Phone"
        title="Contattaci"
        subtitle="Siamo qui per rispondere alle tue domande e trovare la soluzione migliore per le tue esigenze."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contatti" }
        ]}
        imageUrl="/images/contatti.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                Informazioni di Contatto
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href={`https://maps.google.com/?q=${contactInfo.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Sede</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Telefono</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </a>
              </div>

              <div className="p-6 bg-primary rounded-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold">Orari di Apertura</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-gray-300"
                    >
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                Inviaci un Messaggio
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="tua@email.ch"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="+41 79 XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descrivi il tuo progetto o la tua richiesta..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Invio in corso..."
                  ) : (
                    <>
                      Invia Messaggio
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 -skew-y-2 transform origin-top-left -z-10" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Dove Siamo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Vieni a trovarci in sede
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Siamo situati in una posizione strategica a Giubiasco, facilmente raggiungibile per servire tutto il Canton Ticino con la massima tempestività.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl border border-gray-200 group">
            {/* Map Container */}
            <div className="h-[400px] md:h-[600px] w-full transition-transform duration-1000 group-hover:scale-[1.02]">
              <iframe
                src="https://maps.google.com/maps?q=Via%20Campagna%204b,%206512%20Giubiasco,%20Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Posizione TF Edilservice Sagl"
              />
            </div>
            
            {/* Overlay Direction Card */}
            <div className="md:absolute top-8 left-8 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/50 md:max-w-sm z-10 m-4 md:m-0 transform transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">TF Edilservice Sagl</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Via Campagna 4b<br/>
                6512 Giubiasco<br/>
                Ticino, Svizzera
              </p>
              
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=Via+Campagna+4b,+6512+Giubiasco,+Switzerland`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-accent hover:shadow-lg transition-all duration-300 group/btn"
              >
                <Navigation className="w-5 h-5 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                Ottieni Indicazioni
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}