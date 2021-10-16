import React from 'react';
// import sections
import Dashboard from '../components/sections/Dashboard';
import MedicineFeaturesTiles from '../components/sections/MedicineFeaturesTiles';
import MedicineFeaturesSplit from '../components/sections/MedicineFeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      {/* <Dashboard className="illustration-section-01" /> */}
      <MedicineFeaturesTiles />
      <MedicineFeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;