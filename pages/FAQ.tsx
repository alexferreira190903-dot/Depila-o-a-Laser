import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-lumina-pink/10 py-16 text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
          <HelpCircle className="text-lumina-pink" size={32} />
        </div>
        <h1 className="font-serif text-4xl font-bold text-lumina-dark">Dúvidas Frequentes</h1>
        <p className="text-gray-600 mt-2">Tudo o que você precisa saber sobre depilação a laser</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {FAQS.map((faq, index) => (
          <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-5 text-left font-medium text-lg transition-colors ${openIndex === index ? 'bg-lumina-lilac/10 text-lumina-dark font-bold' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp className="text-lumina-pink" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-5 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
        <a href="/contato" className="inline-block border-2 border-lumina-dark text-lumina-dark px-8 py-3 rounded-full font-bold hover:bg-lumina-dark hover:text-white transition-all">
          Fale Conosco
        </a>
      </div>
    </div>
  );
};

export default FAQ;