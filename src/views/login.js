import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Up2Data-DashboardV2</title>
        <meta property="og:title" content="Login - Up2Data-DashboardV2" />
      </Helmet>
      <Link to="/" className="login-navlink">
        <div className="login-container1"></div>
      </Link>
    </div>
  )
}

export default Login
