import React, { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';

const Schedule: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-lumina-dark mb-4">Agende sua Avaliação</h1>
          <p className="text-gray-600">Preencha o formulário abaixo e nossa equipe entrará em contato em até 1 hora para confirmar seu horário.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-lumina-dark text-white p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6 text-lumina-pink">Por que agendar?</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-lumina-pink">✓</span> Avaliação completa da pele</li>
                <li className="flex gap-2"><span className="text-lumina-pink">✓</span> Teste de sensibilidade (patch test)</li>
                <li className="flex gap-2"><span className="text-lumina-pink">✓</span> Orçamento personalizado</li>
                <li className="flex gap-2"><span className="text-lumina-pink">✓</span> Tire todas as suas dúvidas</li>
              </ul>
            </div>
            <div className="mt-10">
              <p className="text-sm text-gray-400 mb-2">Prefere ligar?</p>
              <div className="flex items-center gap-2 text-xl font-bold">
                <Phone size={20} className="text-lumina-pink" />
                (11) 99999-9999
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-2/3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Enviada!</h3>
                <p className="text-gray-600 mb-8">Recebemos seus dados. Em breve nossa recepção entrará em contato pelo WhatsApp ou telefone informado.</p>
                <button onClick={() => setSubmitted(false)} className="text-lumina-pink font-bold hover:underline">
                  Fazer novo agendamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumina-pink focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                    <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumina-pink focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumina-pink focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Área de Interesse</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumina-pink focus:border-transparent outline-none transition-all">
                      <option>Axilas</option>
                      <option>Virilha</option>
                      <option>Pernas</option>
                      <option>Rosto</option>
                      <option>Masculino - Costas/Peito</option>
                      <option>Corpo Inteiro</option>
                      <option>Outra</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Melhor Horário</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumina-pink focus:border-transparent outline-none transition-all">
                      <option>Manhã (08:00 - 12:00)</option>
                      <option>Tarde (12:00 - 18:00)</option>
                      <option>Noite (18:00 - 20:00)</option>
                      <option>Sábado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Observações (Opcional)</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumina-pink focus:border-transparent outline-none transition-all" placeholder="Tem alguma dúvida ou restrição de horário?"></textarea>
                </div>

                <button type="submit" className="w-full bg-lumina-pink text-white font-bold py-3 rounded-lg hover:bg-lumina-dark transition-colors shadow-md">
                  Solicitar Agendamento
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;