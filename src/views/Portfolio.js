import React from 'react';
// import sections
import Image from '../components/elements/Image';
import classNames from 'classnames';
import { SectionSplitProps } from '../utils/SectionProps';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Portfolio = ({
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

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <div >
      <div className="container" style={{ paddingTop: 120 }}>
        <div className="hero-content">
          <h2 className="mt-10 mb-16 reveal-from-bottom text-color-primary" data-reveal-delay="200">
            Portfólio
          </h2>
          <div className="container" >
            <div className="reveal-from-bottom" data-reveal-delay="200" style={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-between'}}>

              <div className="split-item" style={{margin: 10}}>
                <a href="/Tour-Rancho-Ema" data-reveal-container=".split-item" >
                  <Image
                    src={require('../assets/images/EmaCapa.jpg')}
                    alt="Features split 01"
                    width={300}
                    height={200} />
                </a>
              </div>

              <div className="split-item" style={{margin: 10}}>
                <a href="/Tour-Matuto-Sonhador" data-reveal-container=".split-item" >
                  <Image
                    src={require('../assets/images/MatutoCapa.jpg')}
                    alt="Features split 01"
                    width={300}
                    height={200} />
                </a>
              </div>
              <div className="split-item" style={{margin: 10}}>
                <a href="/Evento-Dia-D" data-reveal-container=".split-item" >
                  <Image
                    src={require('../assets/images/DiaDCapa.jpg')}
                    alt="Features split 01"
                    width={300}
                    height={200} />
                </a>
              </div>
              <div className="split-item" style={{margin: 10}}>
                <a href="/Evento-ECMO" data-reveal-container=".split-item" >
                  <Image
                    src={require('../assets/images/EcmoCapa.jpg')}
                    alt="Features split 01"
                    width={300}
                    height={200} />
                </a>
              </div>
              <div className="split-item" style={{margin: 10}}>
                <a href="/Evento-Bode-Rei" data-reveal-container=".split-item" >
                  <Image
                    src={require('../assets/images/BodeReiCapa.jpg')}
                    alt="Features split 01"
                    width={300}
                    height={200} />
                </a>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;