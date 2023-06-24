import React from 'react'

import PropTypes from 'prop-types'

import './folder-overview.css'

const FolderOverview = (props) => {
  return (
    <div className="folder-overview-folder-overview">
      <div className="folder-overview-contact-overview box-shadow">
        <div className="folder-overview-container border-b box-shadow-bottom">
          <div className="folder-overview-container01">
            <span className="folder-overview-text">Folder</span>
            <span className="folder-overview-text01">Settings</span>
          </div>
        </div>
        <div className="folder-overview-container02"></div>
      </div>
      <div className="folder-overview-contact-overview1 box-shadow">
        <div className="folder-overview-container03 border-b box-shadow-bottom">
          <div className="folder-overview-container04">
            <span className="folder-overview-text02">Folder</span>
            <span className="folder-overview-text03">Overview</span>
          </div>
          <span className="folder-overview-text04">See more</span>
        </div>
        <div className="folder-overview-container05 border-b box-shadow-bottom">
          <div className="folder-overview-container06 border-r">
            <span>Name:</span>
          </div>
          <div className="folder-overview-container07 border-r">
            <span>Preference:</span>
          </div>
          <div className="folder-overview-container08 border-r">
            <span>Companies:</span>
          </div>
          <div className="folder-overview-container09 border-r">
            <span>Employees:</span>
          </div>
          <div className="folder-overview-container10">
            <span>Triggered:</span>
          </div>
        </div>
        <div className="folder-overview-container11">
          <div className="folder-overview-container12 border-b">
            <div className="folder-overview-container13 border-r">
              <div className="folder-overview-container14 box-shadow">
                <svg viewBox="0 0 1024 1024" className="icon-size">
                  <path d="M426 170l86 86h342q34 0 59 26t25 60v426q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h256z"></path>
                </svg>
              </div>
              <span className="folder-overview-text10">My-Contacts</span>
            </div>
            <div className="folder-overview-container15 border-r">
              <div className="folder-overview-container16">
                <span>Sales</span>
              </div>
              <div className="folder-overview-container17">
                <span>Compliance</span>
              </div>
              <div className="folder-overview-container18">
                <span>Finance</span>
              </div>
              <span className="folder-overview-text14">+7</span>
            </div>
            <div className="folder-overview-container19 border-r">
              <span>53</span>
            </div>
            <div className="folder-overview-container20 border-r">
              <span>6342</span>
            </div>
            <div className="folder-overview-container21">
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FolderOverview.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNjg3NDg2NzM2fDA&ixlib=rb-4.0.3&w=200',
  text: 'Text',
}

FolderOverview.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default FolderOverview
