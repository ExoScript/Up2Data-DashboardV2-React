import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './contact-overview-item.css'

const ContactOverviewItem = (props) => {
  const [profile_type, setProfile_type] = useState(0)
  const [time_type, setTime_type] = useState(props.timeStatus)
  const [border, setBorder] = useState(true)
  const [profile_image, setProfile_image] = useState(props.imageSrc)
  const [status, setStatus] = useState(props.status)
  return (
    <div
      className={`contact-overview-item-contact-overview ${props.rootClassName} `}
    >
      <div className="contact-overview-item-container">
        <div className="contact-overview-item-container01">
          <div className="contact-overview-item-container02 box-shadow">
            {profile_image && (
              <img
                alt="image"
                src={profile_image}
                className="contact-overview-item-image"
              />
            )}
            {profile_type === 0 && (
              <svg viewBox="0 0 1024 1024" className="icon-size">
                <path
                  d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"
                  className=""
                ></path>
              </svg>
            )}
            {profile_type === 1 && (
              <svg viewBox="0 0 731.4285714285713 1024" className="icon-size">
                <path
                  d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                  className=""
                ></path>
              </svg>
            )}
          </div>
          {profile_type === 0 && (
            <div className="contact-overview-item-container03">
              <span className="contact-overview-item-text">
                {props.company_name}
              </span>
              <div className="contact-overview-item-container04">
                <span className="contact-overview-item-text01">
                  {props.company_size}
                </span>
                <span className="contact-overview-item-text02">Employees</span>
              </div>
            </div>
          )}
          {profile_type === 1 && (
            <div className="contact-overview-item-container05">
              <span className="contact-overview-item-text03">
                {props.contact_name}
              </span>
              <span className="contact-overview-item-text04">
                {props.company_name}
              </span>
            </div>
          )}
        </div>
        <div className="contact-overview-item-container06">
          <div className="contact-overview-item-container07">
            <span className="">{props.section}</span>
          </div>
        </div>
        <div className="contact-overview-item-container08">
          <div className="contact-overview-item-container09">
            <span className="contact-overview-item-text06">{props.folder}</span>
          </div>
        </div>
        <div className="contact-overview-item-container10">
          {status === 1 && (
            <div className="contact-overview-item-container11">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-overview-item-icon04 icon-size"
              >
                <path
                  d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"
                  className=""
                ></path>
              </svg>
              <span className="contact-overview-item-text07">Pending</span>
            </div>
          )}
          {status === 0 && (
            <div className="contact-overview-item-container12">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-overview-item-icon06 icon-size"
              >
                <path
                  d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                  className=""
                ></path>
              </svg>
              <span className="contact-overview-item-text08">Scanned</span>
            </div>
          )}
          {status === 2 && (
            <div className="contact-overview-item-container13">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-overview-item-icon08 icon-size"
              >
                <path
                  d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 298h84v256h-84v-256zM470 640h84v86h-84v-86z"
                  className=""
                ></path>
              </svg>
              <span className="contact-overview-item-text09">Failed</span>
            </div>
          )}
        </div>
        <div className="contact-overview-item-container14 box-shadow-right">
          {status === 0 && (
            <div className="contact-overview-item-container15">
              <span className="contact-overview-item-text10">{props.time}</span>
              {time_type === 'AM' && (
                <span className="contact-overview-item-text11">AM</span>
              )}
              {time_type === 'PM' && (
                <span className="contact-overview-item-text12">PM</span>
              )}
            </div>
          )}
          <span className="contact-overview-item-text13">-</span>
        </div>
        <div className="contact-overview-item-container16 border-l">
          <div className="contact-overview-item-container17 box-shadow">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"
                className=""
              ></path>
            </svg>
            <span className="">Profile</span>
          </div>
          <div className="contact-overview-item-container18">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {border && <div className="contact-overview-item-container19"></div>}
    </div>
  )
}

ContactOverviewItem.defaultProps = {
  section: '-',
  rootClassName: '',
  folder: '-',
  company_size: '-',
  time: '09:13',
  contact_name: 'Contact name',
  company_name: 'Company name',
}

ContactOverviewItem.propTypes = {
  section: PropTypes.string,
  rootClassName: PropTypes.string,
  folder: PropTypes.string,
  time: PropTypes.string,
  contact_name: PropTypes.string,
  company_name: PropTypes.string,
}

export default ContactOverviewItem
