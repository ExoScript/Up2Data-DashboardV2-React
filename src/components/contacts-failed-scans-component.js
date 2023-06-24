import React from 'react'

import FailedScanItem from './failed-scan-item'
import './contacts-failed-scans-component.css'

const ContactsFailedScansComponent = (props) => {
  return (
    <div className="contacts-failed-scans-component-contacts-failed-scans-component box-shadow">
      <div className="contacts-failed-scans-component-container border-b box-shadow-bottom">
        <div className="contacts-failed-scans-component-container1 border-r">
          <span>Name:</span>
        </div>
        <div className="contacts-failed-scans-component-container2 border-r">
          <span>Folder:</span>
        </div>
        <div className="contacts-failed-scans-component-container3 border-r">
          <span>Scan attempt:</span>
        </div>
        <div className="contacts-failed-scans-component-container4">
          <span> scan:</span>
        </div>
        <div className="contacts-failed-scans-component-container5 border-l">
          <span>Actions</span>
        </div>
      </div>
      <div className="contacts-failed-scans-component-container6">
        <ul className="list">
          <li className="list-item">
            <FailedScanItem rootClassName="failed-scan-item-root-class-name4"></FailedScanItem>
          </li>
          <li className="list-item">
            <FailedScanItem rootClassName="failed-scan-item-root-class-name7"></FailedScanItem>
          </li>
          <li className="list-item">
            <FailedScanItem rootClassName="failed-scan-item-root-class-name6"></FailedScanItem>
          </li>
          <li className="list-item">
            <FailedScanItem rootClassName="failed-scan-item-root-class-name5"></FailedScanItem>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactsFailedScansComponent
