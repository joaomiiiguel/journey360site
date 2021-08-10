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
                        Um grupo de médicos paraibanos promoveram um webinar gratuito sobre a ECMO (Extracorporeal Membrane Oxygenation), sigla para Oxigenação por Membrana Extracorpórea, no tratamento do paciente com Covid-19.
                        <br /><br />
                        O evento foi online e gratuito que uniu renomes da área da medicina regional e nacional, transmitido em João Pessoa com participações remotas. A iniciativa do evento é da Dra Priscila Gomes Dantas e contou com o apoio de instituições de ensino e da área de serviços de saúde.
                        <br /><br />
                        Fomos responsáveis pela produção do evento, comunicação/divulgação, inscrição e transmissão online.
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