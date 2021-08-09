import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Servicos from './views/Servicos';
import Portfolio from './views/Portfolio';
import SobreNos from './views/SobreNos';
import Contato from './views/Contato';

import RanchoEma from './views/portfolio/tourRanchoEma';
import MatutoSonhador from './views/portfolio/tourMatutoSonhador';
import DiaD from './views/portfolio/eventoDiaD';
import ECMO from './views/portfolio/eventoECMO';
import BodeRei from './views/portfolio/eventoBodeRei';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/Servicos" component={Servicos} layout={LayoutDefault} />
          <AppRoute path="/Portfolio" component={Portfolio} layout={LayoutDefault} />
          <AppRoute path="/SobreNos" component={SobreNos} layout={LayoutDefault} />
          <AppRoute path="/Contato" component={Contato} layout={LayoutDefault} />

          <AppRoute path="/Tour-Rancho-Ema" component={RanchoEma} layout={LayoutDefault} />
          <AppRoute path="/Tour-Matuto-Sonhador" component={MatutoSonhador} layout={LayoutDefault} />
          <AppRoute path="/Evento-Dia-D" component={DiaD} layout={LayoutDefault} />
          <AppRoute path="/Evento-ECMO" component={ECMO} layout={LayoutDefault} />
          <AppRoute path="/Evento-Bode-Rei" component={BodeRei} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;