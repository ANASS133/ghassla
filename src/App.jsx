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
import MostSalesA from './mostSalesCards';
import Banner from './banner';
import Features2 from './features2';
import ProductA from './products';

function App() {
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true });
  const { ref: whyusRef, inView: whyusInView } = useInView({ triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const { ref: hihiRef, inView: hihiInView } = useInView({ triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });

  return (
    <>

      <Header />
      <div className="alles">
      <First /><br /><br />
      <div id="most-sales-container">
        <div ref={whyusRef} className={`fade-in ${whyusInView ? 'visible' : ''}`}>
            <center><MostSalesA/></center> 
            </div>
      </div>
      
            <div ref={whyusRef} className={`fade-in ${whyusInView ? 'visible' : ''}`}>
            <center>      <Features2/></center> 
            </div><br /><br />

    
      <div ref={whyusRef} className={`fade-in ${whyusInView ? 'visible' : ''}`}>
            <center><ProductA/></center> <br /><br />
            </div>
        </div>
            <div ref={whyusRef} className={`fade-in ${whyusInView ? 'visible' : ''}`}>
            <Banner /> <br /><br />
            </div>
        <div className="alles">
      <div className="container1" id='container1'>
        <div className="cards-section">
          <br /><div ref={cardsRef} className={`fade-in ${cardsInView ? 'visible' : ''}`}><Cards /></div><br /><br />
        </div>
        <div className="whyus-section">
          <div ref={whyusRef} className={`fade-in ${whyusInView ? 'visible' : ''}`}><Whyus /><br /><br /></div>
        </div>
       </div> <Stats/><br /><br />
      <div ref={hihiRef} className={`fade-in ${hihiInView ? 'visible' : ''}`}>
        <Hihi/>
      </div>
      <div ref={faqRef} className={`fade-in ${faqInView ? 'visible' : ''}`}>
        <FAQ/><br />
      </div>
      <HeroSection/><br /><br />
      <div style={{ backgroundColor: "#ffefe547", height: "10px" }}></div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
