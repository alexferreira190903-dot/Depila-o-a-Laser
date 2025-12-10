import React from 'react';
import { TEAM } from '../constants';
import { Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-lumina-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sobre a Lumina</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nossa missão é democratizar a beleza e o bem-estar através da tecnologia de ponta.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-serif text-3xl font-bold text-lumina-dark mb-6">Nossa História</h2>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Fundada em 2018, a Lumina Laser nasceu do desejo de criar um espaço onde a depilação a laser deixasse de ser um procedimento doloroso e clínico para se tornar uma experiência de autocuidado.
             </p>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Começamos com uma pequena sala e um único equipamento. Hoje, somos referência na região, com equipamentos importados de última geração e uma equipe que respira dermatologia e estética.
             </p>
             <div className="flex gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="block text-3xl font-bold text-lumina-pink">5k+</span>
                  <span className="text-sm text-gray-500">Clientes Felizes</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <span className="block text-3xl font-bold text-lumina-pink">50k+</span>
                  <span className="text-sm text-gray-500">Sessões Realizadas</span>
                </div>
             </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/id/102/400/600" className="rounded-2xl shadow-lg translate-y-8" alt="Clinica 1" />
             <img src="https://picsum.photos/id/106/400/600" className="rounded-2xl shadow-lg" alt="Clinica 2" />
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-lumina-lilac/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="font-serif text-3xl font-bold text-lumina-dark">Nossa Essência</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-lumina-pink">
                  <Award size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Excelência</h3>
                <p className="text-gray-600">Busca constante pelas tecnologias mais seguras e eficazes do mundo.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-lumina-pink">
                  <Heart size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Humanização</h3>
                <p className="text-gray-600">Cada corpo é único. Tratamos cada cliente com respeito, ética e carinho.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-lumina-pink">
                  <Users size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">Transparência</h3>
                <p className="text-gray-600">Honestidade sobre resultados esperados e preços justos sem surpresas.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl font-bold text-lumina-dark mb-4">Nossa Equipe</h2>
             <p className="text-gray-600">Profissionais graduados e especializados para cuidar de você.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {TEAM.map(member => (
              <div key={member.id} className="text-center group">
                 <div className="relative mb-6 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-lumina-pink transition-all">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                 </div>
                 <h3 className="font-bold text-xl text-lumina-dark">{member.name}</h3>
                 <p className="text-lumina-pink font-medium text-sm uppercase tracking-wide mb-2">{member.role}</p>
                 <p className="text-gray-500 text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;