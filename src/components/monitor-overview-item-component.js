import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './monitor-overview-item-component.css'

const MonitorOverviewItemComponent = (props) => {
  const [status, setStatus] = useState(0)
  const [anteMeridiem, setAnteMeridiem] = useState(false)
  return (
    <div
      className={`monitor-overview-item-component-monitor-overview-item-component border-b ${props.rootClassName} `}
    >
      <div className="monitor-overview-item-component-container border-r">
        <div className="monitor-overview-item-component-container1 box-shadow">
          <span className="monitor-overview-item-component-text">
            {props.nameShortcut}
          </span>
          <img
            alt="image"
            src={props.image_src}
            className="monitor-overview-item-component-image"
          />
        </div>
        <div className="monitor-overview-item-component-container2">
          <span className="monitor-overview-item-component-text01">
            {props.contactName}
          </span>
          <span className="monitor-overview-item-component-text02">
            {props.companyName}
          </span>
        </div>
      </div>
      <div className="monitor-overview-item-component-container3 border-r">
        <span className="">{props.position}</span>
      </div>
      <div className="monitor-overview-item-component-container4 border-r">
        {status === 0 && (
          <div className="monitor-overview-item-component-container5">
            <span className="monitor-overview-item-component-text04">
              Pending
            </span>
          </div>
        )}
        {status === 2 && (
          <div className="monitor-overview-item-component-container6">
            <span className="monitor-overview-item-component-text05">
              Scanned
            </span>
          </div>
        )}
        {status === 1 && (
          <div className="monitor-overview-item-component-container7">
            <span className="monitor-overview-item-component-text06">
              Failed
            </span>
          </div>
        )}
      </div>
      <div className="monitor-overview-item-component-container8">
        <span className="">{props.time}</span>
        {anteMeridiem && (
          <span className="monitor-overview-item-component-text08">AM</span>
        )}
        {!anteMeridiem && (
          <span className="monitor-overview-item-component-text09">PM</span>
        )}
      </div>
    </div>
  )
}

MonitorOverviewItemComponent.defaultProps = {
  time: '09:14',
  position: 'Position',
  image_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNjg3MzE2NDcxfDA&ixlib=rb-4.0.3&w=200',
  contactName: 'First- Last Name',
  nameShortcut: 'N\n',
  rootClassName: '',
  companyName: 'Company Name',
}

MonitorOverviewItemComponent.propTypes = {
  time: PropTypes.string,
  position: PropTypes.string,
  image_src: PropTypes.string,
  contactName: PropTypes.string,
  nameShortcut: PropTypes.string,
  rootClassName: PropTypes.string,
  companyName: PropTypes.string,
}

export default MonitorOverviewItemComponent
