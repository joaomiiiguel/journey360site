import React from 'react';
// import sections
import CTA from '../../components/sections/Cta'

const DiaD = () => {

    return (
        <div className="container-sm" style={{ paddingTop: 120 }}>
            <div className="hero-content">
                <h1 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                    Fazenda Carnaúba - Dia D 2020 e 2021
                </h1>
                <h4 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    Evento Virtual / Taperoá - PB
                </h4>
                <div className="container-sm">
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        Nós realizamos a produção do evento Dia D na Fazenda Carnaúba há 03 anos consecutivos (2019/2020 e 2021). A edição de 2019 foi presencial e reuniu quase 9 mil pessoas na Fazenda Carnaúba em Taperoá, com atividades de conhecimento, capacitação, negócios e cultura paraibana no cariri. <br />
                        <br />
                        Em 2020 e 2021 as edições foram remotas e gratuitas, transformando o dia a dia no campo e tradição da Carnaúba para o mundo, através do formato online. “Do campo ao digital” foi o tema das edições em que construímos todo o evento: a plataforma, transmissão, direção de materiais audiovisuais, parte gráfica e promoção do evento. Em parceria com o Sebrae PB e os administradores da Fazenda Carnaúba. <br />
                        <br />
                        A programação além de palestras, oficinas, exposições e leilões de animais e os resultados foram superados a cada edição, desde o número de acessos à geração de negócios com venda de animais e produtos.

                    </p>
                </div>
                <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                    <iframe
                        title="Tour Rancho da Ema - Journey"
                        width={896}
                        height={504}
                        className="has-shadow"
                        src="https://fazendacarnauba.com/diad2021/home.html"
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