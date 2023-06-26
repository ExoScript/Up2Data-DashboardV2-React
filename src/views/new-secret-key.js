import React from 'react'

import { Helmet } from 'react-helmet'

import './new-secret-key.css'

const NewSecretKey = (props) => {
  return (
    <div className="new-secret-key-container">
      <Helmet>
        <title>New-Secret-Key - Up2Data-DashboardV2</title>
        <meta
          property="og:title"
          content="New-Secret-Key - Up2Data-DashboardV2"
        />
      </Helmet>
    </div>
  )
}

export default NewSecretKey
