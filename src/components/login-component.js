import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './login-component.css'

const LoginComponent = (props) => {
  const [notification, setNotification] = useState(false)
  const [remember_me, setRemember_me] = useState(false)
  return (
    <div className="login-component-login-component box-shadow">
      <div className="login-component-container border-b">
        <div className="login-component-container01 gradient">
          <div className="login-component-container02">
            <span className="login-component-text">Login</span>
            <span className="login-component-text01 visibility_60">now</span>
          </div>
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
      <div className="login-component-container03">
        <div className="login-component-container04">
          <div className="login-component-container05">
            <span className="login-component-text10 visibility_60">
              Client-ID:
            </span>
            <div className="login-component-container06">
              <input
                type="text"
                placeholder="Enter your Client-ID"
                className="login-component-textinput input"
              />
            </div>
          </div>
          <div className="login-component-container07">
            <span className="login-component-text11 visibility_60">
              Secret-Key:
            </span>
            <div className="login-component-container08">
              <input
                type="text"
                placeholder="Enter your Secret-Key"
                className="login-component-textinput1 input"
              />
            </div>
          </div>
        </div>
        <div className="login-component-container09">
          <div className="login-component-container10">
            <div className="login-component-container11">
              <div
                onClick={() => setRemember_me(!remember_me)}
                className="login-component-container12"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="login-component-icon icon-size"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                {remember_me && (
                  <div className="login-component-container13"></div>
                )}
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
          {notification && (
            <div className="login-component-container14">
              <span className="login-component-text16 visibility_70">
                <span className="login-component-text17">Login failed!</span>
                <span className="login-component-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="login-component-text19">
                  Please check your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="login-component-text20">Client-ID</span>
                <span className="login-component-text21">
                  {' '}
                  and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="login-component-text22">Secret-Key</span>
                <span className="login-component-text23"> and try again.</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="login-component-container15 border-t">
        <div className="login-component-container16 box-shadow gradient">
          <span>Login</span>
        </div>
      </div>
    </div>
  )
}

LoginComponent.defaultProps = {
  image_alt: 'image',
  image_src: 'd216e8fe-2578-40ea-bfed-2c327f2a98f5',
}

LoginComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default LoginComponent
