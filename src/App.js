import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
// import { SessionContext } from "./context/session";
import { ApolloProvider } from "@apollo/client";
import ragqlClient from "./config/apolloclient";
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
  const childRef = useRef();
  const session = localStorage.getItem('user_session');
  const [authenticated, setAuthenticated] = useState(session ? true : false);
  const accessToken = session ? session : null;
  let location = useLocation();
  const client = authenticated ? ragqlClient(accessToken) : ragqlClient(null);
  
  const values = {
    authenticated: authenticated,
    setAuthenticated: (value) => {
      setAuthenticated(value);
    },
  };
  
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    // <SessionContext.Provider value={values}>
      <ApolloProvider client={client}>
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
        </ApolloProvider>
    
  );
}

export default App;