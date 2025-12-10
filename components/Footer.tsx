import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lumina-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-lumina-pink">Lumina Laser</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em revelar a sua melhor versão. Tecnologia avançada e cuidado humanizado para uma pele perfeita.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-lumina-pink transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lumina-pink transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lumina-pink transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-lumina-pink transition-colors">Home</Link></li>
              <li><Link to="/tratamentos" className="hover:text-lumina-pink transition-colors">Tratamentos</Link></li>
              <li><Link to="/sobre" className="hover:text-lumina-pink transition-colors">Sobre Nós</Link></li>
              <li><Link to="/agendamento" className="hover:text-lumina-pink transition-colors">Agendamento</Link></li>
              <li><Link to="/faq" className="hover:text-lumina-pink transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-lumina-pink mt-0.5 shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-lumina-pink shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-lumina-pink shrink-0" />
                <span>contato@luminalaser.com.br</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Horários</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Seg - Sex:</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>09:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-xs text-green-400">
               <CheckCircle size={14} />
               <span>Clínica certificada pela ANVISA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Lumina Laser. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;