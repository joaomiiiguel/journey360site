import React from 'react';
// import sections
import CTA from '../../components/sections/Cta'

const MatutoSonhador = () => {

  return (
    <div className="container-sm" style={{ paddingTop: 120 }}>
      <div className="hero-content">
        <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
          Pousada Matuto Sonhador
        </h1>
        <h4 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
          Tour Virtual / Cabaceiras - PB
        </h4>
        <div className="container-sm">
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            A pousada Matuto Sonhador está localizada na Zona Rural de Cabaceiras, a Roliúde Nordestina, a 6km de distância do Lajedo de Pai Mateus. Nossa estrutura conta com 12 apartamentos, sendo 02 apartamentos do chalé Céu Encantado e 10 apartamentos do Chalé Cariri. Com capacidade para acomodar 04 pessoas por apartamento, todos equipados com ar condicionado e frigobar. Área de lazer com piscinas adulto e infantil, área kids com playground, redário, restaurante e capela. Em breve teremos salão de jogos, sala de cinema, Centro de convenções, trilhas a pé e para ciclismo, passeios a cavalo e charrete.
          </p>
        </div>
        <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
          <iframe
            title="Tour Matuto Sonhador - Journey"
            width={896}
            height={504}
            className="has-shadow"
            src="https://app.lapentor.com/sphere/matuto-sonhador"
            style={{ height: '60vh', width: '100%', border: 0 }} ></iframe>

        </div>

        <div className="reveal-from-bottom" data-reveal-delay="600">
          <CTA />
        </div>
      </div>
    </div>
  );
}

export default MatutoSonhador;