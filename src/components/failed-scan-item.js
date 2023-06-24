import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './failed-scan-item.css'

const FailedScanItem = (props) => {
  const [border, setBorder] = useState(true)
  const [type, setType] = useState(0)
  const [time_am, setTime_am] = useState(true)
  return (
    <div
      className={`failed-scan-item-failed-scan-item ${props.rootClassName} `}
    >
      <div className="failed-scan-item-container">
        {type === 0 && (
          <div className="failed-scan-item-container01">
            <div className="failed-scan-item-container02 box-shadow">
              <svg viewBox="0 0 1024 1024" className="icon-size">
                <path
                  d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="failed-scan-item-container03">
              <span className="failed-scan-item-text">{props.company}</span>
              <span className="failed-scan-item-text01">{props.contact}</span>
            </div>
          </div>
        )}
        {type === 1 && (
          <div className="failed-scan-item-container04">
            <div className="failed-scan-item-container05 box-shadow">
              <svg viewBox="0 0 731.4285714285713 1024" className="icon-size">
                <path
                  d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="failed-scan-item-container06">
              <span className="failed-scan-item-text02">{props.contact}</span>
              <span className="failed-scan-item-text03">{props.company}</span>
            </div>
          </div>
        )}
        <div className="failed-scan-item-container07">
          <div className="failed-scan-item-container08">
            <span className="failed-scan-item-text04">{props.folder}</span>
          </div>
        </div>
        <div className="failed-scan-item-container09">
          <span className="failed-scan-item-text05">{props.scan_times}</span>
          <span className="failed-scan-item-text06">times</span>
        </div>
        <div className="failed-scan-item-container10 box-shadow-right">
          <span className="failed-scan-item-text07">09:13</span>
          {time_am && <span className="failed-scan-item-text08">AM</span>}
          {!time_am && <span className="failed-scan-item-text09">PM</span>}
        </div>
        <div className="failed-scan-item-container11 border-l">
          <div className="failed-scan-item-container12 box-shadow">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M956.29 804.482l-316.29-527.024v-213.458h32c17.6 0 32-14.4 32-32s-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32s14.4 32 32 32h32v213.458l-316.288 527.024c-72.442 120.734-16.512 219.518 124.288 219.518h640c140.8 0 196.73-98.784 124.29-219.518zM241.038 640l206.962-344.938v-231.062h128v231.062l206.964 344.938h-541.926z"
                className=""
              ></path>
            </svg>
            <span className="">Optimize</span>
          </div>
          <div className="failed-scan-item-container13">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {border && <div className="failed-scan-item-container14"></div>}
    </div>
  )
}

FailedScanItem.defaultProps = {
  scan_times: '03',
  folder: 'New Contacts',
  rootClassName: '',
  contact: 'Contact name',
  company: 'Company Name',
}

FailedScanItem.propTypes = {
  scan_times: PropTypes.string,
  folder: PropTypes.string,
  rootClassName: PropTypes.string,
  contact: PropTypes.string,
  company: PropTypes.string,
}

export default FailedScanItem
