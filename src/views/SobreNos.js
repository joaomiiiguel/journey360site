import React from 'react';
// import sections
import Image from '../components/elements/Image';

const SobreNos = () => {

  return (
    <div className="container-sm" style={{ paddingTop: 120 }}>
      <div className="hero-content">
        <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
          Sobre Nós
        </h1>
        <div className="container-sm">
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            A empresa nasce da visão criativa e empreendedora de um programador que viu a possibilidade de entregar soluções digitais que unam o marketing digital e a inovação tecnológica, através de ferramentas web.
          </p>
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="500">
            Experiências virtuais em 360 graus é um produto que cabe em diversos segmentos e possibilita uma infinidade de ações para fortalecer a marca no ambiente digital de forma lúdica, dinâmica e interativa.
          </p>
          <div className="reveal-from-bottom center-content" data-reveal-delay="600" style={{display: 'flex',flexDirection: 'row', justifyContent:'space-around'}}>
            <div className="m-0 mb-8 reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-32">
                    <Image
                      src={require('../assets/images/jm.jpg')}
                      alt="Features tile icon 03"
                      width={150}
                      height={150}
                      style={{borderRadius:150}} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="mt-0 mb-16 text-color-primary">
                    João Miguel
                  </h3>
                  <p className="m-0 text-sm">
                    Programador que está há 5 anos criando ideias e desenvolvendo soluções em forma de software utilizando a criatividade e o conhecimento técnico para criar aplicações web e mobile. Especializando em realidade aumentada, realidade virtual e tour em 360º. <br /><br />
                    Trabalhando com Desenvolvimento de Softwares e em Designer Gráfico há 8 anos no total, já passou por empresas como a Faculdade Rebouças, Senai-PB, FIEP-PB e Banco do Brasil.
                  </p>
                </div>
              </div>
            </div>

     
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
