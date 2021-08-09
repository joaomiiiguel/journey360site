import React from 'react';
// import sections
import CTA from '../../components/sections/Cta'

const DiaD = () => {

    return (
        <div className="container-sm" style={{ paddingTop: 120 }}>
            <div className="hero-content">
                <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                    Webinar Ecmo 2021
                </h1>
                <h4 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    Evento Virtual / Online
                </h4>
                <div className="container-sm">
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        O restaurante e pousada Rancho da Ema é considerado um oásis no Cariri Paraibano. Prezamos pelo bem estar dos nossos clientes, oferecendo a melhor estrutura da cidade, contamos com 19 apartamentos com uma estrutura aconchegante, espaço verde para crianças, área de lazer com piscina com tobogã e cascata, quartos com piscina exclusiva e restaurante que oferece a melhor comida da região. Além de um dos pontos mais visitados de Cabaceiras, a cenografia utilizada no filme “O Auto da Compadecida”, a casinha e local de enterro da cachorra da personagem Dora (Denise Fraga).
                    </p>
                </div>
                <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                    <iframe
                        title="Evento ECMO - Journey"
                        width={896}
                        height={504}
                        className="has-shadow"
                        src="https://www.instagram.com/webinarecmo/"
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