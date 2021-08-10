import React from 'react';
// import sections
import CTA from '../../components/sections/Cta'

const DiaD = () => {

    return (
        <div className="container-sm" style={{ paddingTop: 120 }}>
            <div className="hero-content">
                <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                    Festa do Bode Rei - Edição 2021
                </h1>
                <h4 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    Evento Virtual / Cabaceiras - PB
                </h4>
                <div className="container-sm">
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        A tradicional Festa do Bode Rei, acontece em Cabaceiras, no Cariri da Paraíba, celebrou 22 anos de existência e teve a sua primeira versão online, em um único dia, devido à pandemia de coronavírus.
                        <br /><br />
                        As competições, a expo feira de artesanatos e de animais, apresentações culturais, gastronomia bodística (derivados do bode), shows e toda diversidade estiveram presentes nesse novo formato e de um jeito dinâmico, sem perder a essência do tradicional Bode Rei.
                        <br /><br />
                        Realizamos a produção em parceria com o Sebrae PB e Prefeitura Municipal de Cabaceiras, além da produção audiovisual e transmissão do evento.
                    </p>
                </div>
                <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                    <iframe
                        title="Tour Rancho da Ema - Journey"
                        width={896}
                        height={504}
                        className="has-shadow"
                        src="https://festadoboderei.com.br"
                        style={{ height: '60vh', width: '100%', border: 0 }} ></iframe>
                </div>

                <div className="reveal-from-bottom" data-reveal-delay="600">
                    <CTA />
                </div>
            </div>
        </div>
    );
}

export default DiaD;