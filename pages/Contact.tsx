import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-lumina-dark">Fale Conosco</h1>
        <p className="text-gray-600 mt-2">Estamos prontos para te atender</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-lumina-dark">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-lumina-pink/20 p-3 rounded-full text-lumina-dark">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
                  <a href="#" className="text-sm text-lumina-pink font-bold mt-2 inline-block hover:underline">Ver no Google Maps</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-lumina-pink/20 p-3 rounded-full text-lumina-dark">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefone & WhatsApp</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <p className="text-gray-500 text-sm">Atendimento exclusivo para agendamentos</p>
                  <a href="#" className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition-colors">
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-lumina-pink/20 p-3 rounded-full text-lumina-dark">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 08:00 - 20:00</p>
                  <p className="text-gray-600">Sábado: 09:00 - 16:00</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-lumina-pink hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-lumina-pink hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
             <h2 className="text-2xl font-serif font-bold text-lumina-dark mb-6">Envie uma mensagem</h2>
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada!'); }}>
               <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-lumina-pink focus:ring-1 focus:ring-lumina-pink outline-none" required />
               <input type="email" placeholder="Seu E-mail" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-lumina-pink focus:ring-1 focus:ring-lumina-pink outline-none" required />
               <input type="tel" placeholder="Seu Telefone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-lumina-pink focus:ring-1 focus:ring-lumina-pink outline-none" required />
               <textarea rows={4} placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-lumina-pink focus:ring-1 focus:ring-lumina-pink outline-none" required></textarea>
               <button className="w-full bg-lumina-dark text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">Enviar Mensagem</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;