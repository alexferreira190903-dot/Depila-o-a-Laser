import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamentos" element={<Treatments />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/agendamento" element={<Schedule />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;