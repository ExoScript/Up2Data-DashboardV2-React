import React from 'react'

import { Helmet } from 'react-helmet'

import Main from '../components/main'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Up2Data-DashboardV2</title>
        <meta property="og:title" content="Home - Up2Data-DashboardV2" />
      </Helmet>
      <Main rootClassName="main-root-class-name"></Main>
    </div>
  )
}

export default Home
