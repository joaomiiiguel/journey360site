import React from 'react';
// import sections
import Image from '../components/elements/Image';

const Portfolio = () => {

  return (
    <div className="container-sm" style={{ paddingTop: 120 }}>
      <div className="hero-content">
        <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
          Portfólio
        </h1>
        <div className="container-sm">
          <div className="reveal-from-bottom center-content" data-reveal-delay="200" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12 text-color-primary">
                  Tour Virtual
                </h3>
                <p className="m-0">
                  Recurso interativo que permite aos visitantes do seu site visualizarem fotos em 360 graus do seu negócio e que pode ser personalizada com recursos de sons,  textos e links.
                </p>
              </div>
              <div data-reveal-container=".split-item">
                <Image
                  src={require('../assets/images/jm.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;