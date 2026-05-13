"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, 
  Zap, Home, Sun, Shield, Car, Hammer, 
  Calendar, MessageSquare, ArrowRight, CheckCircle2 
} from "lucide-react";

const servicesList = [
  { id: "elettrici", title: "Impianti Elettrici", icon: Zap },
  { id: "domotica", title: "Domotica & Smart Home", icon: Home },
  { id: "fotovoltaico", title: "Fotovoltaico", icon: Sun },
  { id: "sicurezza", title: "Sicurezza & Allarmi", icon: Shield },
  { id: "elettromobilita", title: "Elettromobilità", icon: Car },
  { id: "edili", title: "Opere Edili", icon: Hammer },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const timing = formData.get('timing');
    const description = formData.get('description');
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const location = formData.get('location');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services: selectedServices.map(s => servicesList.find(sl => sl.id === s)?.title || s),
          timing,
          description,
          name,
          email,
          phone,
          location
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Si è verificato un errore durante l'invio. Riprova più tardi.");
      }
    } catch (error) {
      alert("Errore di connessione. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] p-12 text-center shadow-xl shadow-gray-200/50 border border-gray-100"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Richiesta Inviata!</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Grazie per averci contattato. Il nostro team tecnico analizzerà la tua richiesta e ti risponderà entro 24 ore con un preventivo dettagliato.
        </p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setSelectedServices([]);
          }}
          className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-accent transition-colors"
        >
          Invia un'altra richiesta
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 border-b border-gray-100 px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm font-bold ${step >= 1 ? 'text-accent' : 'text-gray-400'}`}>1. Servizi</span>
          <div className={`flex-1 h-1 mx-4 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`}></div>
          <span className={`text-sm font-bold ${step >= 2 ? 'text-accent' : 'text-gray-400'}`}>2. Progetto</span>
          <div className={`flex-1 h-1 mx-4 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-gray-200'}`}></div>
          <span className={`text-sm font-bold ${step >= 3 ? 'text-accent' : 'text-gray-400'}`}>3. Dati</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative min-h-[400px]">
        {/* Step 1: Services Selection */}
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Di cosa hai bisogno?</h3>
            <p className="text-gray-600 mb-8 text-lg">Seleziona uno o più servizi per aiutarci a capire le tue necessità.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {servicesList.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected 
                        ? "border-accent bg-accent/5 text-accent shadow-md scale-[1.02]" 
                        : "border-gray-100 bg-white text-gray-500 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-3 ${isSelected ? "text-accent" : "text-gray-400"}`} />
                    <span className={`font-semibold text-sm md:text-base ${isSelected ? "text-accent" : "text-gray-700"}`}>
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-100">
              <button 
                type="button" 
                onClick={nextStep}
                disabled={selectedServices.length === 0}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${
                  selectedServices.length === 0 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                    : "bg-gray-900 text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/30"
                }`}
              >
                Avanti <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Dettagli del Progetto</h3>
            
            <div className="space-y-8 mb-10">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-1">Tempistiche previste</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <select name="timing" defaultValue="" className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none appearance-none text-gray-700">
                    <option value="" disabled>Seleziona una tempistica</option>
                    <option value="urgente">Urgente (Il prima possibile)</option>
                    <option value="1-mese">Entro 1 mese</option>
                    <option value="3-mesi">Entro 3 mesi</option>
                    <option value="flessibile">Flessibile</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 ml-1">Descrizione del lavoro *</label>
                <div className="relative">
                  <div className="absolute top-5 left-5 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea 
                    name="description"
                    required
                    rows={5}
                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none text-gray-700"
                    placeholder="Descrivi brevemente il progetto, ad esempio: 'Vorrei installare un impianto fotovoltaico da 6kWp con batteria di accumulo...'"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-gray-100">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-8 py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Indietro
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-gray-900 text-white hover:bg-accent transition-all hover:shadow-lg hover:shadow-accent/30"
              >
                Avanti <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Personal Details & Submit */}
        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">I tuoi dati</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Nome e Cognome *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-gray-700"
                    placeholder="Mario Rossi"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-gray-700"
                    placeholder="mario.rossi@email.ch"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Telefono *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-gray-700"
                    placeholder="+41 79 349 45 46"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">CAP e Città *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    name="location"
                    required
                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-gray-700"
                    placeholder="6500 Bellinzona"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-8 py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors w-full md:w-auto"
              >
                Indietro
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all w-full md:w-auto ${
                  isSubmitting
                    ? "bg-gray-300 cursor-not-allowed" 
                    : "bg-accent hover:bg-gray-900 shadow-lg shadow-accent/30"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Invio...
                  </span>
                ) : (
                  <>
                    Richiedi Preventivo <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-6 text-center">
              Premendo "Richiedi Preventivo", accetti la nostra Privacy Policy. I tuoi dati saranno trattati in modo confidenziale.
            </p>
          </motion.div>
        )}
      </form>
    </div>
  );
}
