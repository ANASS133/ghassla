import React from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import './Organise.css';
import Cards from './Cards';
import First from './First';
import Header from './header';
import Whyus from './Whyus';
import Stats from './Stats';
import HeroSection from "./HeroSection";
import Footer from './Footer';
import Hihi from './Hyhy';
import FAQ from './Questions';

function App() {
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true });
  const { ref: whyusRef, inView: whyusInView } = useInView({ triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const { ref: hihiRef, inView: hihiInView } = useInView({ triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Header />
      <First />
      <br /><br /><br />
      <div className="container1">
        <div className="cards-section">
          <br /><div ref={cardsRef} className={`fade-in ${cardsInView ? 'visible' : ''}`}><Cards /></div><br /><br /><br />
        </div>
        <div className="whyus-section">
          <div ref={whyusRef} className={`fade-in ${whyusInView ? 'visible' : ''}`}><Whyus /></div>
        </div>
      </div>
      <div ref={statsRef} className={`fade-in ${statsInView ? 'visible' : ''}`}>
        <Stats/>
      </div><br /><br /><br /><br />
      <div ref={hihiRef} className={`fade-in ${hihiInView ? 'visible' : ''}`}>
        <Hihi/>
      </div><br /><br />
      <div ref={faqRef} className={`fade-in ${faqInView ? 'visible' : ''}`}>
        <FAQ/>
      </div>
      <HeroSection/>
      <div style={{ backgroundColor: "#ffefe547", height: "10px" }}></div>
      <Footer/>
    </>
  );
}

export default App;
