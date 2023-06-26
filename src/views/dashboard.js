import React from 'react'

import { Helmet } from 'react-helmet'

import Main from '../components/main'
import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Up2Data-DashboardV2</title>
        <meta property="og:title" content="Dashboard - Up2Data-DashboardV2" />
      </Helmet>
      <Main rootClassName="main-root-class-name"></Main>
    </div>
  )
}

export default Dashboard
