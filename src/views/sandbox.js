import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Contacts from '../components/contacts'
import './sandbox.css'

const Sandbox = (props) => {
  return (
    <div className="sandbox-container">
      <Helmet>
        <title>Sandbox - Up2Data-DashboardV2</title>
        <meta property="og:title" content="Sandbox - Up2Data-DashboardV2" />
      </Helmet>
      <div className="sandbox-container1">
        <Link to="/" className="sandbox-navlink">
          <div className="sandbox-container2 border-r"></div>
        </Link>
        <div className="sandbox-container3">
          <div className="sandbox-topbar border-b box-shadow-bottom">
            <div className="sandbox-container4">
              <svg viewBox="0 0 1024 1024" className="sandbox-icon">
                <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <input
                type="text"
                placeholder="Quick search..."
                className="sandbox-textinput input"
              />
            </div>
          </div>
          <Contacts rootClassName="contacts-root-class-name"></Contacts>
        </div>
      </div>
    </div>
  )
}

export default Sandbox
