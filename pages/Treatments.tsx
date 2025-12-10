import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { Check, Clock, AlertCircle } from 'lucide-react';

const Treatments: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-lumina-dark font-bold mb-6">Nossos Tratamentos</h1>
          <p className="text-gray-600 text-lg">
            Utilizamos as tecnologias mais avançadas do mercado mundial (Alexandrite, Diodo e Nd:YAG) para garantir eficácia e segurança em todos os tons de pele.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-gray-100 pb-6">
               <div>
                  <h2 className="font-serif text-3xl font-bold text-lumina-dark">{service.title}</h2>
               </div>
               <div className="bg-pink-50 px-4 py-2 rounded-full text-sm font-bold text-lumina-dark flex items-center gap-2 border border-pink-100">
                  <Clock size={16} className="text-lumina-pink" /> {service.duration}
                </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
               {/* Benefits */}
               <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-4">Benefícios Principais:</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <Check className="text-green-500 mt-1 shrink-0" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contraindications & CTA */}
              <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="flex items-start gap-3 text-sm text-amber-700 bg-amber-50 p-5 rounded-xl border border-amber-100">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-1">Contraindicações:</span>
                      {service.contraindications.join(', ')}
                    </div>
                  </div>
                  
                  <Link to="/agendamento" className="block w-full text-center bg-lumina-pink text-white px-8 py-3 rounded-full font-bold hover:bg-lumina-dark transition-colors shadow-lg hover:shadow-xl mt-auto">
                    Agendar este tratamento
                 </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;