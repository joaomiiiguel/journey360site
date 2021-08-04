import React from 'react';
// import sections
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import CTA from '../components/sections/Cta'
const Contato = () => {

  return (
    <div className="container-sm" style={{ paddingTop: 120 }}>
      <div className="hero-content">
        <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary"  data-reveal-delay="200">
          Fale Conosco
        </h1>
        <div className="container-sm">
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Olá, quer saber mais sobre a Journey360 Studio e dos nossos serviços?
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;