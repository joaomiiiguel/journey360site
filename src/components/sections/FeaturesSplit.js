import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
    title: 'Desenvolvimento sob demanda',
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
                <h3 className="mt-8 mb-12 text-color-primary">
                  Tour Virtual
                </h3>
                <p className="mb-16">
                  Recurso interativo que permite aos visitantes do seu site visualizarem fotos em 360 graus do seu negócio e que pode ser personalizada com recursos de sons,  textos e links.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/servico01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <h3 className="mt-0 mb-12 text-color-primary">
                  Desenvolvimento de sites e apps
                </h3>
                <p className="m-0">
                  Para hospedar de forma personalizada seus produtos, também criamos soluções na web como websites e aplicativos. Plataformas leves e com recursos que atendam suas demandas.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/servico03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
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
