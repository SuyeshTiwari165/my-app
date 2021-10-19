import React from 'react'
import classNames from 'classnames';
import Image from '../components/elements/Image';
import { Typography } from '@mui/material';
import SectionHeader from '../components/sections/partials/SectionHeader';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '../components/elements/Button';
import { useHistory } from 'react-router-dom';
const Userprofile = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  imageFill,
  alignTop,
  ...props }) => {
  let history = useHistory();
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

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'My Profile',
  };

  const handleLogout = () => {
    localStorage.removeItem('Authenticated');
    localStorage.clear(); 
    history.push('/my-app/');
  }
    return (
        <section
        {...props}
        className={outerClasses}
      >
        
          <Button
          onClick={handleLogout}
          >
            Logout<LogoutIcon></LogoutIcon>
          </Button>

        <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Name : Priya Mishra 
                  </h3>
                  <p className="m-0">Email Address: priyamishra@testmail.com</p>
                  <p className="m-0"> Mobile Number : +91 8457215400 </p>
                  <p className="m-0"> Date of Birth : 10/09/1997</p>
                  <input className="m-0" type="file" id="myfile" name="myfile" label="My Reports"/>
                </div>
                
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('../assets/images/hemplogo.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Userprofile
