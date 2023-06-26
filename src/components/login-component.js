import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './login-component.css'
import { authStatus } from '../database/app'

const LoginComponent = (props) => {
  const history = useHistory();
  const [remember_me, setRemember_me] = useState(false);
  const [clientID, setClientID] = useState(
    localStorage.getItem("clientID") || ""
  );
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem("secretKey") || ""
  );

  useEffect(() => {
    localStorage.setItem("clientID", clientID);
    localStorage.setItem("secretKey", secretKey);
  }, [clientID, secretKey]);

  const eventChange = (event) => {
    const id = event.target.id
    switch (id) {
      case 'clientID':
        setClientID(event.target.value);
        break;
      case 'secretKey':
        setSecretKey(event.target.value);
        break;
      default:
    }
  };

  const userAuth = async () => {
    if (clientID && secretKey) {
      const status = await authStatus();
      if (status) {
        console.log('Auth true');
        history.push('/home');
      } else {
        console.log('Auth false');
      }
    } else {
      if (!clientID) {
        console.log('Client ID is missing');
      }
      if (!secretKey) {
        console.log('Secret Key is missing');
      }
    }
  };

  return (
    <div className="login-component-login-component box-shadow">
      <div className="login-component-container border-b">
        <div className="login-component-container01 gradient">
          <span className="login-component-text">Login</span>
          <span className="login-component-text01 visibility_60">now</span>
        </div>
        <span className="visibility_70">
          <span>
            Welcome to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="login-component-text04">Up2Data</span>
          <span>! </span>
          <span>Please login to your</span>
          <br></br>
          <span>account.</span>
          <br></br>
        </span>
      </div>
      <div className="login-component-container02">
        <div className="login-component-container03">
          <span className="login-component-text10 visibility_60">
            Client-ID:
          </span>
          <div className="login-component-container04">
            <input
              onChange={eventChange}
              id="clientID"
              value={clientID}
              type="text"
              placeholder="Enter your client ID"
              className="login-component-textinput input"
            />
          </div>
        </div>
        <div className="login-component-container05">
          <span className="login-component-text11 visibility_60">
            Secret-Key:
          </span>
          <div className="login-component-container06">
            <input
              onChange={eventChange}
              id="secretKey"
              value={secretKey}
              type="text"
              placeholder="Enter your Secret-Key"
              className="login-component-textinput1 input"
            />
          </div>
        </div>
      </div>
      <div className="login-component-container07">
        <div className="login-component-container08">
          <div
            onClick={() => setRemember_me(!remember_me)}
            className="login-component-container09"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="login-component-icon icon-size"
            >
              <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
            </svg>
            {remember_me && <div className="login-component-container10"></div>}
          </div>
          <span className="login-component-text12">Remember Me</span>
        </div>
        <span className="login-component-text13 visibility_70">
          <span>
            Forget
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Secret-Key?</span>
        </span>
      </div>
      <div onClick={userAuth} className="login-component-container11 border-t">
          <div className="login-component-container12 box-shadow gradient">
            <span>Login</span>
          </div>
      </div>
    </div>
  )
}

export default LoginComponent
