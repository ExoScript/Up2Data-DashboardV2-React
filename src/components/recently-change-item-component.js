import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './recently-change-item-component.css'

const RecentlyChangeItemComponent = (props) => {
  const [buttons, setButtons] = useState(false)
  return (
    <div
      onMouseEnter={() => setButtons(true)}
      onMouseLeave={() => setButtons(false)}
      className="recently-change-item-component-recently-change-item-component box-shadow"
    >
      <div className="recently-change-item-component-container border-b gradient">
        <div className="recently-change-item-component-container01">
          <div className="recently-change-item-component-container02 box-shadow">
            <span className="recently-change-item-component-text">
              {props.nameShortcut}
            </span>
            <img
              alt="image"
              src={props.image_src}
              className="recently-change-item-component-image"
            />
          </div>
          <div className="recently-change-item-component-container03">
            <span className="recently-change-item-component-text01">
              {props.contactName}
            </span>
            <span className="recently-change-item-component-text02">
              {props.newCompany}
            </span>
          </div>
        </div>
        <div className="recently-change-item-component-container04">
          <div className="recently-change-item-component-container05">
            <span className="recently-change-item-component-text03">
              Trigger fired
            </span>
            <span className="recently-change-item-component-text04">
              {props.triggerFired}
            </span>
          </div>
        </div>
      </div>
      <div className="recently-change-item-component-container06">
        <div className="recently-change-item-component-container07">
          <div className="recently-change-item-component-container08 border-b box-shadow-bottom">
            <span className="recently-change-item-component-text05">
              Change from:
            </span>
            <span className="recently-change-item-component-text06">To:</span>
          </div>
          <div className="recently-change-item-component-container09">
            <div className="recently-change-item-component-container10 border-r">
              <span>{props.oldCompany}</span>
              <span className="recently-change-item-component-text08">
                {props.oldPosition}
              </span>
            </div>
            <div className="recently-change-item-component-container11">
              <span className="recently-change-item-component-text09">
                {props.newCompany}
              </span>
              <span className="recently-change-item-component-text10">
                {props.newPosition}
              </span>
            </div>
          </div>
        </div>
        <div className="recently-change-item-component-container12 border-t">
          {buttons && (
            <div className="recently-change-item-component-container13">
              <div className="recently-change-item-component-container14 btn-lila">
                <svg
                  viewBox="0 0 731.4285714285713 1024"
                  className="recently-change-item-component-icon"
                >
                  <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                </svg>
                <span>Profile</span>
              </div>
              <div className="recently-change-item-component-container15 btn-white">
                <svg
                  viewBox="0 0 1024 1024"
                  className="recently-change-item-component-icon2"
                >
                  <path d="M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448z"></path>
                  <path d="M848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z"></path>
                </svg>
                <span>Delete</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

RecentlyChangeItemComponent.defaultProps = {
  triggerFired: '32min ago',
  oldCompany: 'HeyData GmbH',
  contactName: 'First- Last Name',
  newCompany: 'Company Name',
  nameShortcut: 'N\n',
  newPosition: 'Business Intelligence',
  oldPosition: 'Account Management',
  image_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNjg3MzE2NDcxfDA&ixlib=rb-4.0.3&w=200',
}

RecentlyChangeItemComponent.propTypes = {
  triggerFired: PropTypes.string,
  oldCompany: PropTypes.string,
  contactName: PropTypes.string,
  newCompany: PropTypes.string,
  nameShortcut: PropTypes.string,
  newPosition: PropTypes.string,
  oldPosition: PropTypes.string,
  image_src: PropTypes.string,
}

export default RecentlyChangeItemComponent
