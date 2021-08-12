import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button'
import ButtonGroup from '../elements/ButtonGroup'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Nosso Portfolio',
    paragraph: 'Utilizamos das atuais tecnologias e equipamentos do mercado para criarmos soluções personalizadas e inovadoras para seu negócio.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item ">
              <div className="split-item-content  center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                  Pousada Rancho da Ema
                </h3>
                <h5 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Tour Virtual / Cabaceiras - PB
                </h5>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  O restaurante e pousada Rancho da Ema é considerado um oásis no Cariri Paraibano. Prezamos pelo bem estar dos nossos clientes, oferecendo a melhor estrutura da cidade, contamos com 19 apartamentos com uma estrutura aconchegante, espaço verde para crianças, área de lazer com piscina com tobogã e cascata, quartos com piscina exclusiva e restaurante que oferece a melhor comida da região. Além de um dos pontos mais visitados de Cabaceiras, a cenografia utilizada no filme “O Auto da Compadecida”, a casinha e local de enterro da cachorra da personagem Dora (Denise Fraga).
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/EmaCapa.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile target="_blank" href="https://tourranchoema.journey360.com.br" style={{ width: '100%', marginTop: 50 }}>
                    Faça um tour virtual
                  </Button>
                </ButtonGroup>

              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">

                <h3 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                  Pousada Matuto Sonhador
                </h3>
                <h5 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Tour Virtual / Cabaceiras - PB
                </h5>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  A pousada Matuto Sonhador está localizada na Zona Rural de Cabaceiras, a Roliúde Nordestina, a 6km de distância do Lajedo de Pai Mateus. Nossa estrutura conta com 12 apartamentos, sendo 02 apartamentos do chalé Céu Encantado e 10 apartamentos do Chalé Cariri. Com capacidade para acomodar 04 pessoas por apartamento, todos equipados com ar condicionado e frigobar. Área de lazer com piscinas adulto e infantil, área kids com playground, redário, restaurante e capela. Em breve teremos salão de jogos, sala de cinema, Centro de convenções, trilhas a pé e para ciclismo, passeios a cavalo e charrete.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/MatutoCapa.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile target="_blank" href="https://tourmatutosonhador.journey360.com.br" style={{ width: '100%', marginTop: 50 }}>
                    Faça um tour virtual
                  </Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="split-item ">
              <div className="split-item-content  center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                  Festa do Bode Rei
                </h3>
                <h5 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Evento Virtual / Cabaceiras - PB
                </h5>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  A tradicional Festa do Bode Rei, acontece em Cabaceiras, no Cariri da Paraíba, celebrou 22 anos de existência e teve a sua primeira versão online, em um único dia, devido à pandemia de coronavírus. Toda diversidade estiveram presentes nesse novo formato e de um jeito dinâmico, sem perder a essência do tradicional.
                  <br /><br />
                  Realizamos a produção em parceria com o Sebrae PB e Prefeitura Municipal de Cabaceiras, além da produção audiovisual e transmissão do evento.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/BodeReiCapa.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile target="_blank" href="https://festadoboderei.com.br" style={{ width: '100%', marginTop: 50 }}>
                    Visualize o projeto
                  </Button>
                </ButtonGroup>

              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">

                <h3 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                Dia D 2021 e 2020 - Fazenda Carnaúba 
                </h3>
                <h5 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Evento Virtual / Taperoá - PB
                </h5>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                        Nós realizamos a produção do evento Dia D na Fazenda Carnaúba há 03 anos consecutivos (2019/2020 e 2021). A edição de 2019 foi presencial e reuniu quase 9 mil pessoas na Fazenda Carnaúba em Taperoá, com atividades de conhecimento, capacitação, negócios e cultura paraibana no cariri. <br />
                        <br />
                        Em 2020 e 2021 as edições foram remotas e gratuitas, transformando o dia a dia no campo e tradição da Carnaúba para o mundo, através do formato online. “Do campo ao digital” foi o tema das edições em que construímos todo o evento: a plataforma, transmissão, direção de materiais audiovisuais, parte gráfica e promoção do evento. Em parceria com o Sebrae PB e os administradores da Fazenda Carnaúba. <br />
                    </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/DiaDCapa.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile target="_blank" href="https://fazendacarnauba.com/diad2021/index.html" style={{ width: '100%', marginTop: 50 }}>
                  Visualize o projeto
                  </Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="split-item ">
              <div className="split-item-content  center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
                  Centra App
                </h3>
                <h5 className="mt-10 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Site Institucional / Canadá
                </h5>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  Nós desenvolvemos um site institucional para um projeto de aplicativo, um app para conectar clientes que comprem produtos alimentícios de diversos países, vendedores desses alimentos e que sejam entregues em pouco tempo.                  
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/CentraAppCapa.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile target="_blank" href="https://centraapp.com" style={{ width: '100%', marginTop: 50 }}>
                    Visualize o projeto
                  </Button>
                </ButtonGroup>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;