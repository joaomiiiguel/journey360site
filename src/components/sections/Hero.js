import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';



const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Experiências <span className="text-color-primary">em 360°</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Desenvolvemos soluções inovadoras para divulgar sua empresa de forma mais completa, em 360°
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#">
                    Saiba Mais
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <iframe
              title="Tour Exemplo - Journey" 
              width={896}
              height={504}
              className="has-shadow" 
              src="https://app.lapentor.com/sphere/site-journey" 
              style={{ height: '50vh', width: '100%', border: 0 }} ></iframe>

          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;