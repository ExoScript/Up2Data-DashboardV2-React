import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './company-profile-component.css'

const CompanyProfileComponent = (props) => {
  const [menu, setMenu] = useState(0)
  return (
    <div
      className={`company-profile-component-company-profile-component ${props.rootClassName} `}
    >
      <div className="company-profile-component-container border-b">
        <div className="company-profile-component-container01">
          <span className="company-profile-component-text">Company</span>
          <span className="company-profile-component-text01">Profile</span>
        </div>
        <div className="company-profile-component-container02">
          <div className="company-profile-component-container03 box-shadow gradient">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"
                className=""
              ></path>
            </svg>
            <span className="">Message</span>
          </div>
          <div className="company-profile-component-container04 btn-white">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M512 810q124 0 211-87t87-211-87-211-211-87-211 87-87 211 87 211 211 87zM894 470h88v84h-88q-14 126-114 226t-226 114v88h-84v-88q-126-14-226-114t-114-226h-88v-84h88q14-126 114-226t226-114v-88h84v88q126 14 226 114t114 226z"
                className=""
              ></path>
            </svg>
            <span className="">Scan</span>
          </div>
        </div>
      </div>
      <div className="company-profile-component-topbar-menu border-b box-shadow-bottom">
        <div className="company-profile-component-menu-1">
          {menu === 0 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_1}</span>
            </div>
          )}
          <div onClick={() => setMenu(0)} className="topbar-menu-unselect">
            <span className="">{props.menu_1}</span>
          </div>
        </div>
        <div className="company-profile-component-menu-2">
          {menu === 1 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_2}</span>
            </div>
          )}
          <div onClick={() => setMenu(1)} className="topbar-menu-unselect">
            <span className="">{props.menu_2}</span>
          </div>
        </div>
        <div className="company-profile-component-menu-3">
          {menu === 2 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_3}</span>
            </div>
          )}
          <div onClick={() => setMenu(2)} className="topbar-menu-unselect">
            <span className="">{props.menu_3}</span>
          </div>
        </div>
        <div className="company-profile-component-menu-4">
          {menu === 3 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_4}</span>
            </div>
          )}
          <div onClick={() => setMenu(3)} className="topbar-menu-unselect">
            <span className="">{props.menu_4}</span>
          </div>
        </div>
        <div className="company-profile-component-menu-5">
          {menu === 4 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_5}</span>
            </div>
          )}
          <div onClick={() => setMenu(4)} className="topbar-menu-unselect">
            <span className="">{props.menu_5}</span>
          </div>
        </div>
      </div>
      <div className="company-profile-component-content">
        {menu === 0 && (
          <div className="company-profile-component-details">
            <div className="company-profile-component-container05">
              <span className="company-profile-component-text14">Company</span>
              <span className="company-profile-component-text15">Details</span>
            </div>
          </div>
        )}
        {menu === 1 && (
          <div className="company-profile-component-employees">
            <div className="company-profile-component-container06">
              <span className="company-profile-component-text16">Employee</span>
              <span className="company-profile-component-text17">Lists</span>
            </div>
          </div>
        )}
        {menu === 2 && (
          <div className="company-profile-component-customers">
            <div className="company-profile-component-container07">
              <span className="company-profile-component-text18">Customer</span>
              <span className="company-profile-component-text19">Lists</span>
            </div>
          </div>
        )}
        {menu === 3 && (
          <div className="company-profile-component-log">
            <div className="company-profile-component-container08">
              <span className="company-profile-component-text20">Log</span>
              <span className="company-profile-component-text21">Overview</span>
            </div>
          </div>
        )}
        {menu === 4 && (
          <div className="company-profile-component-settings">
            <div className="company-profile-component-container09">
              <span className="company-profile-component-text22">Company</span>
              <span className="company-profile-component-text23">Settings</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

CompanyProfileComponent.defaultProps = {
  menu_4: 'Log',
  menu_5: 'Settings',
  menu_2: 'Employees',
  menu_1: 'Details',
  rootClassName: '',
  menu_3: 'Customers',
}

CompanyProfileComponent.propTypes = {
  menu_4: PropTypes.string,
  menu_5: PropTypes.string,
  menu_2: PropTypes.string,
  menu_1: PropTypes.string,
  rootClassName: PropTypes.string,
  menu_3: PropTypes.string,
}

export default CompanyProfileComponent
