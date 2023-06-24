import React from 'react'

import PropTypes from 'prop-types'

import './recently-changed-item-component.css'

const RecentlyChangedItemComponent = (props) => {
  return (
    <div
      className={`recently-changed-item-component-recently-changed-item-component border-b ${props.rootClassName} `}
    >
      <div className="recently-changed-item-component-container border-r">
        <div className="recently-changed-item-component-container1 box-shadow">
          <span className="recently-changed-item-component-text">
            {props.nameShortcut}
          </span>
          <img
            alt="image"
            src={props.image_src}
            className="recently-changed-item-component-image"
          />
        </div>
        <div className="recently-changed-item-component-container2">
          <span className="recently-changed-item-component-text1">
            {props.contactName}
          </span>
        </div>
      </div>
      <div className="recently-changed-item-component-container3 border-r">
        <span className="">{props.position}</span>
      </div>
      <div className="recently-changed-item-component-container4 border-r">
        <span className="">{props.position1}</span>
      </div>
      <div className="recently-changed-item-component-container5">
        <span className="">{props.time}</span>
        <span className="recently-changed-item-component-text5">AM</span>
      </div>
    </div>
  )
}

RecentlyChangedItemComponent.defaultProps = {
  position1: 'Position',
  image_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNjg3MzE2NDcxfDA&ixlib=rb-4.0.3&w=200',
  nameShortcut: 'N\n',
  position: 'Position',
  contactName: 'First- Last Name',
  rootClassName: '',
  time: '09:14',
}

RecentlyChangedItemComponent.propTypes = {
  position1: PropTypes.string,
  image_src: PropTypes.string,
  nameShortcut: PropTypes.string,
  position: PropTypes.string,
  contactName: PropTypes.string,
  rootClassName: PropTypes.string,
  time: PropTypes.string,
}

export default RecentlyChangedItemComponent
