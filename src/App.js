import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Medicine from './views/Medicine';
import Signup from './views/Signup';
import Patients from './views/Patients';
import Doctors from './views/Doctors';
import UserProfile from './views/Userprofile';
import GovernmentInfo from './views/GovernmentInfo';
import Market from './views/Market';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
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
          <AppRoute exact path="/my-app" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/my-app/medicine" component={Medicine} layout={LayoutDefault} />
          <AppRoute exact path="/my-app/signup" component={Signup} layout={LayoutDefault} />
          <AppRoute exact path="/my-app/signin" component={Signup} layout={LayoutDefault}/>
          <AppRoute exact path="/my-app/patients" component={Patients} layout={LayoutDefault} />
          <AppRoute exact path="/my-app/doctors" component={Doctors} layout={LayoutDefault}/>
          <AppRoute exact path="/my-app/profile" component={UserProfile} layout={LayoutDefault} />
          <AppRoute exact path="/my-app/government-info" component={GovernmentInfo} layout={LayoutDefault} />
          <AppRoute exact path="/my-app/market" component={Market} layout={LayoutDefault}/>
        </Switch>
      )} />
  );
}

export default App;