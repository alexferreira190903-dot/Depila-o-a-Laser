import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, Clock, Smile, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center bg-pink-50">
        <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/90 via-pink-50/60 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl text-lumina-dark font-bold leading-tight mb-6">
              Sua pele mais lisa, suave e <span className="text-lumina-pink">livre de pelos.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Experimente a liberdade definitiva com nossa tecnologia de ponta em depilação a laser. Segurança, conforto e resultados visíveis desde a primeira sessão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/agendamento" className="bg-lumina-dark text-white text-center px-8 py-4 rounded-full font-bold hover:bg-lumina-pink transition-all transform hover:scale-105 shadow-lg">
                Agende sua Avaliação Gratuita
              </Link>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="group bg-white text-lumina-dark border-2 border-lumina-dark text-center px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce text-lumina-pink" />
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-lumina-dark font-bold mb-4">Por que escolher a Lumina Laser?</h2>
            <div className="w-20 h-1 bg-lumina-pink mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: ShieldCheck, title: "Tecnologia ANVISA", desc: "Equipamentos certificados e seguros para sua saúde." },
              { icon: Clock, title: "Procedimento Rápido", desc: "Sessões ágeis que se encaixam na sua rotina." },
              { icon: Smile, title: "Menos Dor", desc: "Ponteiras resfriadas que garantem conforto máximo." },
              { icon: Zap, title: "Resultados Duradouros", desc: "Eliminação real dos pelos com tecnologia de ponta." },
              { icon: Star, title: "Para Todos os Tons", desc: "Lasers específicos para peles claras, morenas e negras." },
              { icon: Smile, title: "Pele Macia", desc: "Adeus foliculite e pelos encravados para sempre." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-lumina-pink/30 group">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-lumina-pink group-hover:text-white transition-all duration-300">
                  <item.icon size={28} className="text-lumina-dark group-hover:text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-lumina-dark">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-lumina-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Clínica Moderna" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">Cuidado especializado e ambiente acolhedor</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Na Lumina Laser, entendemos que o bem-estar vai além da estética. Nossa clínica foi projetada para oferecer uma experiência de spa, com profissionais altamente capacitados e tecnologia que entrega resultados reais.
            </p>
            <ul className="space-y-3 mb-8">
              {['Equipe 100% certificada', 'Ambiente climatizado e privativo', 'Avaliação personalizada gratuita'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-lumina-pink"></div>
                  {feat}
                </li>
              ))}
            </ul>
            <Link to="/sobre" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-lumina-pink pb-1 hover:text-lumina-pink transition-colors">
              Conheça nossa história <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Body Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-lumina-dark font-bold mb-4">Áreas que atendemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tratamentos completos para corpo e rosto, respeitando sua anatomia.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Rosto", img: "https://i.pinimg.com/1200x/3c/43/be/3c43be96093891f7aa6fad66eb1eaf87.jpg" },
              { name: "Axilas", img: "https://i.pinimg.com/1200x/77/8e/50/778e50a5ee58ea1cdd4326e757f99130.jpg" },
              { name: "Pernas", img: "https://i.pinimg.com/736x/19/54/f5/1954f5ee1d5716f7ad64ed879304609e.jpg" },
              { name: "Virilha", img: "https://i.pinimg.com/736x/36/4a/45/364a45daf16a38ee839b8076e0a90517.jpg" },
              { name: "Costas", img: "https://i.pinimg.com/1200x/30/f0/a8/30f0a86c315b00f39d5a877e6d1350d0.jpg" },
              { name: "Peito", img: "https://i.pinimg.com/1200x/59/03/4a/59034a98dcdb3e27c38b3bfede235568.jpg" },
              { name: "Braços", img: "https://i.pinimg.com/736x/9b/49/3b/9b493b7493473e0c4bcc7566d380fe96.jpg" },
              { name: "Pés e Mãos", img: "https://i.pinimg.com/1200x/9e/23/4f/9e234fe39a1acaaf4138afdf07dc3950.jpg" },
            ].map((area, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer">
                <img src={area.img} alt={area.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-lg">{area.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tratamentos" className="inline-block border border-lumina-dark px-8 py-3 rounded-full hover:bg-lumina-dark hover:text-white transition-all font-medium">
              Ver todos os tratamentos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-lumina-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 border-2 border-lumina-lilac/50 p-8 rounded-xl max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">O que dizem nossos clientes</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
               <div className="flex text-yellow-400"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div>
               <span className="font-bold text-lg text-white">4.9/5</span>
            </div>
            <p className="text-sm text-gray-400">Média baseada em avaliações reais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm text-lumina-dark">{t.name}</h4>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-lumina-pink">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">Pronta para viver livre dos pelos?</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Agende sua avaliação agora mesmo e descubra como é fácil ter uma pele lisinha todos os dias.
          </p>
          <Link to="/agendamento" className="inline-block bg-white text-lumina-pink hover:text-white hover:bg-lumina-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Quero Agendar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;