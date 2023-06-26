import React from 'react'

import { Helmet } from 'react-helmet'

import LoginComponent from '../components/login-component'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Up2Data-DashboardV2</title>
        <meta property="og:title" content="Up2Data-DashboardV2" />
      </Helmet>
      <div className="login-container01">
        <div className="login-container02 box-shadow-right gradient">
          <div className="login-container03 border-b">
            <div className="login-container04">
              <img
                alt="image"
                src="/external/u2d-logo-200h.png"
                className="login-image"
              />
            </div>
            <div className="login-container05">
              <span className="login-text">Up2</span>
              <span className="login-text01">Data</span>
            </div>
          </div>
          <div className="login-container06">
            <div className="login-container07">
              <div className="login-container08">
                <span className="login-text02">Customer</span>
                <span className="login-text03">Dashboard</span>
              </div>
              <span className="login-text04 visibility_70">
                Comprehensive data management and system control are vital for
                businesses to optimize processes, make informed decisions, and
                ensure regulatory compliance. Robust solutions enable efficient
                handling, storage, and analysis of data, empowering
                organizations to enhance productivity, mitigate risks, and
                achieve sustainable growth in the digital era.
              </span>
            </div>
          </div>
          <div className="login-container09 border-t">
            <a
              href="https://www.up2data.io"
              target="_blank"
              rel="noreferrer noopener"
              className="login-link"
            >
              <div className="login-container10">
                <span className="login-text05">©</span>
                <span className="login-text06">2023 Up2Data</span>
              </div>
            </a>
            <div className="login-container11">
              <span className="login-text07">Privacy Policy</span>
              <div className="login-container12"></div>
              <span className="login-text08">Terms of use</span>
            </div>
          </div>
        </div>
        <div className="login-container13">
          <div className="login-container14">
            <div className="login-container15 box-shadow">
              <span className="login-text09">Sytsem status:</span>
              <div className="login-container16"></div>
            </div>
          </div>
          <div className="login-container17">
            <LoginComponent></LoginComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
