import React from 'react';
// import sections
import Dashboard from '../components/sections/Dashboard';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Dashboard className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;