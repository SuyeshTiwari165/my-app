import React, { useState, useEffect } from 'react';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';
import classNames from 'classnames';
import Input from '../components/elements/Input';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../graphql/mutations/Auth";

const Signup = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofBirth, setdateofBirth] = useState(new Date())
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [SignIn, setSignIn] = useState(false);
  const [userAuthentication] = useMutation(USER_LOGIN);
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
  
  const handleChange = (data) => {
    if (data.currentTarget.id === "firstName") {
      setFirstName(data.currentTarget.value)
    }
    if (data.currentTarget.id === "mobileNumber") {
      setMobileNumber(data.currentTarget.value)
    }
    if (data.currentTarget.id === "date") {
      setdateofBirth(data.currentTarget.value)
    }
    if (data.currentTarget.id === "lastName") {
      setLastName(data.currentTarget.value)
    }
    if (data.currentTarget.id === "email") {
      setEmailAddress(data.currentTarget.value)
    }
    if (data.currentTarget.id === "password") {
      setPassword(data.currentTarget.value )
    }
  };

  const handleSubmit = (type) => {

    //  try {
    //   if (type === 'signUp') {
      
    //   }
    // } catch (error) {
    //   console.log("error",error)
    // }
    console.log("type",type)
    // try {
       
    //     userAuthentication({
    //     variables: {
    //       'identifier': emailAddress,
    //       'password': password
    //     }
    // }).then((loginResponse) => {
    //     localStorage.setItem('user_ID',loginResponse.data.login.user.id)
    //     localStorage.setItem('user_role',loginResponse.data.login.user.role.name)
    //     localStorage.setItem('user_session', loginResponse.data.login.jwt)
    //     window.location.replace('/my-app/')
    //   }).catch((error) => {
        
    //   })
    
    // } catch (error) {
    //   console.log("error",error)
    // };
   
  
  };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container-xs">
          <div className={innerClasses}>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">{SignIn ? 'Sign In' : 'Register'}</span>
            </h1>
            {!SignIn ?
              <Paper style={{ padding: '50px 10px 10px 10px', borderRadius: '50px' }}>
                <div className="hero-content">
                  <div className="mt-0 mb-16 " >
                    <TextField
                      value={firstName}
                      color="warning"
                      onChange={handleChange}
                      id="firstName"
                      label="First name"
                      variant="outlined"
                    />
                  </div>
                  <div className="mt-0 mb-16 " >
                    <TextField
                      value={lastName}
                      onChange={handleChange}
                      id="lastName"
                      label="Last name"
                      variant="outlined"
                    />
                  </div>
                  <div className="mt-0 mb-16 " >
                    <TextField
                      id="date"
                      label="Birth Date"
                      type="date"
                      onChange={handleChange}
                      defaultValue={dateofBirth}
                      sx={{ width: 310 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className="mt-0 mb-16 " >
                    <TextField
                      value={emailAddress}
                      onChange={handleChange}
                      id="email"
                      label="Email address"
                      variant="outlined"
                    />
                  </div>
                  <div className="mt-0 mb-16 " >
                    <TextField
                      value={mobileNumber}
                      onChange={handleChange}
                      id="mobileNumber"
                      label="Mobile Number"
                      variant="outlined"
                    />
                  </div>
                  <div className="mt-0 mb-16 " >
                    <TextField value={password}
                      onChange={handleChange}
                      id="password"
                      label="Password"
                      variant="outlined"
                    />
                  </div>
                  <Button className="button button-primary button-wide-mobile button-sm" onClick={handleSubmit}>Sign Up</Button>
                  <p className="forgot-password text-right">
                    Already registered <a onClick={() => setSignIn(true)} style={{ 'color': "blue" }}>sign in?</a>
                  </p>
                </div>
              </Paper>
              : 
              <Paper style={{ padding: '50px 10px 10px 10px', borderRadius: '50px' }}>
              <div className="hero-content"> 
                <div className="mt-0 mb-16 " >
                  <TextField
                    value={emailAddress}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    label="Email address"
                    variant="outlined"
                  />
                </div>
                <div className="mt-0 mb-16 " >
                  <TextField
                    value={password}
                    onChange={handleChange}
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                  />
                </div>
                <Button className="button button-primary button-wide-mobile button-sm" onClick={handleSubmit}>Login</Button>
                <p className="forgot-password text-right">
                  Don't have Account yet ? <a onClick={()=>setSignIn(false)} style={{ 'color': "blue" }}>Sign Up?</a>
                </p>
              </div>
            </Paper>
              }
          </div>
        </div>
      </section>
    )
}

export default Signup
