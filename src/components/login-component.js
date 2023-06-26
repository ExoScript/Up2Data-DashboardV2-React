import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'

import './login-component.css'

const LoginComponent = (props) => {
  const [notification, setNotification] = useState(false)
  const [remember_me, setRemember_me] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <div className="login-component-login-component">
      <div className="login-component-container box-shadow">
        <div className="login-component-container01 border-b">
          <div className="login-component-container02 gradient">
            <div className="login-component-container03">
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
        <div className="login-component-container04">
          <div className="login-component-container05">
            <div className="login-component-container06">
              <span className="login-component-text10 visibility_60">
                Client-ID:
              </span>
              <div className="login-component-container07">
                <input
                  type="text"
                  placeholder="Enter your Client-ID"
                  className="login-component-textinput input"
                />
              </div>
            </div>
            <div className="login-component-container08">
              <span className="login-component-text11 visibility_60">
                Secret-Key:
              </span>
              <div className="login-component-container09">
                <input
                  type="text"
                  placeholder="Enter your Secret-Key"
                  className="login-component-textinput1 input"
                />
              </div>
            </div>
          </div>
          <div className="login-component-container10">
            <div className="login-component-container11">
              <div className="login-component-container12">
                <div
                  onClick={() => setRemember_me(!remember_me)}
                  className="login-component-container13"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="login-component-icon icon-size"
                  >
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  {remember_me && (
                    <div className="login-component-container14"></div>
                  )}
                </div>
                <span className="login-component-text12">Remember Me</span>
              </div>
              <Link
                to="/new-secret-key"
                className="login-component-navlink visibility_70"
              >
                <span>
                  Forget
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Secret-Key?</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="login-component-container15 border-t">
          {!loading && (
            <div className="login-component-container16 box-shadow gradient">
              <span>Login</span>
            </div>
          )}
          {loading && (
            <div className="login-component-container17">
              <Player
                src="https://assets7.lottiefiles.com/packages/lf20_fyye8szy.json"
                autoplay
                speed="1"
                background="transparent"
                loop
                className="login-component-lottie-node"
              ></Player>
            </div>
          )}
        </div>
      </div>
      {notification && (
        <div className="login-component-container18 box-shadow">
          <span className="login-component-text16 visibility_70">
            <span className="login-component-text17">Login failed!</span>
            <span className="login-component-text18">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="login-component-text21">
              <span>
                Please check your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="login-component-text24">Client-ID</span>
            <span className="login-component-text25">
              <span>
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="login-component-text28">Secret-Key</span>
            <span className="login-component-text29"> and try again.</span>
          </span>
        </div>
      )}
    </div>
  )
}

export default LoginComponent
