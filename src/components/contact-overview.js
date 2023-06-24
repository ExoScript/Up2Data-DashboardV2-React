import React from 'react'

import PropTypes from 'prop-types'

import ContactOverviewItem from './contact-overview-item'
import './contact-overview.css'

const ContactOverview = (props) => {
  return (
    <div
      className={`contact-overview-contact-overview box-shadow ${props.rootClassName} `}
    >
      <div className="contact-overview-container">
        <div className="contact-overview-container01 border-b box-shadow-bottom">
          <div className="contact-overview-container02">
            <span className="contact-overview-text">Contact</span>
            <span className="contact-overview-text1">Overview</span>
          </div>
          <span className="contact-overview-text2">See more</span>
        </div>
        <div className="contact-overview-container03 border-b box-shadow-bottom">
          <div className="contact-overview-container04 border-r">
            <span className="">Name:</span>
          </div>
          <div className="contact-overview-container05 border-r">
            <span className="">Section:</span>
          </div>
          <div className="contact-overview-container06 border-r">
            <span className="">Folder:</span>
          </div>
          <div className="contact-overview-container07 border-r">
            <span className="">Status:</span>
          </div>
          <div className="contact-overview-container08">
            <span className="">Scan:</span>
          </div>
          <div className="contact-overview-container09 border-l">
            <span className="">Actions</span>
          </div>
        </div>
        <div className="contact-overview-container10">
          <ul className="list">
            <li className="list-item">
              <ContactOverviewItem
                section="Sale"
                rootClassName="contact-overview-item-root-class-name"
                className=""
              ></ContactOverviewItem>
            </li>
            <li className="list-item">
              <ContactOverviewItem
                section="Sale"
                rootClassName="contact-overview-item-root-class-name5"
                className=""
              ></ContactOverviewItem>
            </li>
            <li className="list-item">
              <ContactOverviewItem
                section="Sale"
                rootClassName="contact-overview-item-root-class-name4"
                className=""
              ></ContactOverviewItem>
            </li>
            <li className="list-item">
              <ContactOverviewItem
                section="Sale"
                rootClassName="contact-overview-item-root-class-name3"
                className=""
              ></ContactOverviewItem>
            </li>
            <li className="list-item">
              <ContactOverviewItem
                section="Sale"
                rootClassName="contact-overview-item-root-class-name2"
                className=""
              ></ContactOverviewItem>
            </li>
            <li className="list-item">
              <ContactOverviewItem
                section="Sale"
                rootClassName="contact-overview-item-root-class-name1"
                className=""
              ></ContactOverviewItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContactOverview.defaultProps = {
  rootClassName: '',
}

ContactOverview.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactOverview
