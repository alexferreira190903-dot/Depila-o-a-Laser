import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Tratamentos', path: '/tratamentos' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Dúvidas', path: '/faq' },
    { label: 'Contato', path: '/contato' },
  ];

  const activeClass = "text-lumina-text font-bold border-b-2 border-lumina-pink";
  const inactiveClass = "text-gray-500 hover:text-lumina-text transition-colors duration-300";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = '#'}>
            <div className="bg-lumina-pink p-2 rounded-full">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="font-serif text-2xl font-bold text-lumina-dark tracking-wide">
              Lumina <span className="text-lumina-pink">Laser</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => isActive ? activeClass : inactiveClass}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/agendamento"
              className="bg-lumina-dark text-white px-6 py-2 rounded-full hover:bg-lumina-text transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Agendar
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-lumina-dark focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-lumina-pink/20 text-lumina-dark' : 'text-gray-500 hover:text-lumina-dark hover:bg-gray-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
             <NavLink
                to="/agendamento"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-lumina-pink text-white px-3 py-3 rounded-md font-bold"
              >
                Agendar Agora
              </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;