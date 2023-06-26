import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ListComponent from '../components/list-component'
import './sandbox.css'

const Sandbox = (props) => {
  return (
    <div className="sandbox-container">
      <Helmet>
        <title>Sandbox - Up2Data-DashboardV2</title>
        <meta property="og:title" content="Sandbox - Up2Data-DashboardV2" />
      </Helmet>
      <div className="sandbox-container01">
        <Link to="/home" className="sandbox-navlink">
          <div className="sandbox-container02 border-r"></div>
        </Link>
        <div className="sandbox-container03">
          <div className="sandbox-topbar border-b box-shadow-bottom">
            <div className="sandbox-container04">
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
          <div className="sandbox-content-template">
            <div className="sandbox-container05 border-b">
              <div className="sandbox-container06">
                <span className="sandbox-text">List</span>
                <span className="sandbox-text01">Overview</span>
              </div>
              <div className="sandbox-container07">
                <div className="sandbox-container08 box-shadow gradient">
                  <svg viewBox="0 0 1024 1024" className="icon-size">
                    <path d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
                  </svg>
                  <span>Message</span>
                </div>
                <div className="sandbox-container09 btn-white">
                  <svg viewBox="0 0 1024 1024" className="icon-size">
                    <path d="M512 810q124 0 211-87t87-211-87-211-211-87-211 87-87 211 87 211 211 87zM894 470h88v84h-88q-14 126-114 226t-226 114v88h-84v-88q-126-14-226-114t-114-226h-88v-84h88q14-126 114-226t226-114v-88h84v88q126 14 226 114t114 226z"></path>
                  </svg>
                  <span>Scan</span>
                </div>
              </div>
            </div>
            <div className="sandbox-topbar-menu border-b box-shadow-bottom">
              <div className="sandbox-menu-1">
                <div className="topbar-menu-select">
                  <span>All</span>
                </div>
                <div className="topbar-menu-unselect">
                  <span>All</span>
                </div>
              </div>
              <div className="sandbox-menu-2">
                <div className="topbar-menu-select">
                  <span>Companies</span>
                </div>
                <div className="topbar-menu-unselect">
                  <span>Companies</span>
                </div>
              </div>
              <div className="sandbox-menu-3">
                <div className="topbar-menu-select">
                  <span>Contacts</span>
                </div>
                <div className="topbar-menu-unselect">
                  <span>Contacts</span>
                </div>
              </div>
            </div>
          </div>
          <ListComponent></ListComponent>
        </div>
      </div>
    </div>
  )
}

export default Sandbox
