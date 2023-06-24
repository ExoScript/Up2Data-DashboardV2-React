import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './failed-scans-item-component.css'

const FailedScansItemComponent = (props) => {
  const [status, setStatus] = useState(0)
  const [anteMeridiem, setAnteMeridiem] = useState(false)
  return (
    <div className="failed-scans-item-component-failed-scans-item-component border-b">
      <div className="failed-scans-item-component-container border-r">
        <div className="failed-scans-item-component-container1">
          <span className="failed-scans-item-component-text">
            {props.contactName}
          </span>
        </div>
      </div>
      <div className="failed-scans-item-component-container2 border-r">
        <span>{props.companyName}</span>
      </div>
      <div className="failed-scans-item-component-container3">
        <span>{props.time}</span>
        {anteMeridiem && (
          <span className="failed-scans-item-component-text3">AM</span>
        )}
        {!anteMeridiem && (
          <span className="failed-scans-item-component-text4">PM</span>
        )}
      </div>
    </div>
  )
}

FailedScansItemComponent.defaultProps = {
  time: '09:14',
  companyName: 'Position',
  contactName: 'First- Last Name',
}

FailedScansItemComponent.propTypes = {
  time: PropTypes.string,
  companyName: PropTypes.string,
  contactName: PropTypes.string,
}

export default FailedScansItemComponent
