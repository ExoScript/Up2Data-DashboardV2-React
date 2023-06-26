import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ContactsFailedScansComponent from './contacts-failed-scans-component'
import DownloadResultComponent from './download-result-component'
import ContactOverview from './contact-overview'
import FolderOverview from './folder-overview'
import './contacts-component.css'

const ContactsComponent = (props) => {
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterList, setFilterList] = useState('All')
  const [select_menu, setSelect_menu] = useState(0)
  const [filterType, setFilterType] = useState('All')
  return (
    <div
      className={`contacts-component-contacts-component ${props.rootClassName} `}
    >
      <div className="contacts-component-container">
        <div className="contacts-component-container01 border-b">
          <div className="contacts-component-container02">
            <span className="contacts-component-text">Contact</span>
            <span className="contacts-component-text01">Overview</span>
          </div>
          <div className="contacts-component-container03">
            <div className="contacts-component-container04">
              <div
                data-thq="thq-dropdown"
                className="contacts-component-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contacts-component-dropdown-toggle"
                >
                  <div className="contacts-component-container05 border-r">
                    <span className="contacts-component-text02">Section:</span>
                    <span className="contacts-component-text03">
                      {filterType}
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="contacts-component-dropdown-arrow"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="contacts-component-icon"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="contacts-component-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      onClick={() => setFilterType('All')}
                      className="contacts-component-dropdown-toggle01 border-b"
                    >
                      <span className="contacts-component-text04">
                        {props.filterType_1}
                      </span>
                    </div>
                    {filterType === 'All' && (
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="contacts-component-dropdown-toggle02 border-b"
                      >
                        <span>{props.filterType_1}</span>
                      </div>
                    )}
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      onClick={() => setFilterType('Company')}
                      className="contacts-component-dropdown-toggle03 border-b"
                    >
                      <span>{props.filterType_2}</span>
                    </div>
                    {filterType === 'Company' && (
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="contacts-component-dropdown-toggle04 border-b"
                      >
                        <span className="contacts-component-text07">
                          {props.filterType_2}
                        </span>
                      </div>
                    )}
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      onClick={() => setFilterType('Contact')}
                      className="contacts-component-dropdown-toggle05"
                    >
                      <span>{props.filterType_3}</span>
                    </div>
                    {filterType === 'Contact' && (
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="contacts-component-dropdown-toggle06"
                      >
                        <span className="contacts-component-text09">
                          {props.menu_3}
                        </span>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts-component-container06">
              <div
                data-thq="thq-dropdown"
                className="contacts-component-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contacts-component-dropdown-toggle07"
                >
                  <div className="contacts-component-container07 border-r">
                    <span className="contacts-component-text10">List:</span>
                    <span className="contacts-component-text11">
                      {filterList}
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="contacts-component-dropdown-arrow1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="contacts-component-icon2"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="contacts-component-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle08 border-b"
                    >
                      <span className="contacts-component-text12">All</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle09 border-b"
                    >
                      <span>All</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle10 border-b"
                    >
                      <span>Company</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle11 border-b"
                    >
                      <span className="contacts-component-text15">Company</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle12"
                    >
                      <span>Contact</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle13"
                    >
                      <span className="contacts-component-text17">
                        Contacts
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts-component-container08">
              <div
                data-thq="thq-dropdown"
                className="contacts-component-thq-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contacts-component-dropdown-toggle14"
                >
                  <div className="contacts-component-container09 border-r">
                    <span className="contacts-component-text18">Status:</span>
                    <span className="contacts-component-text19">
                      {filterStatus}
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="contacts-component-dropdown-arrow2"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="contacts-component-icon4"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="contacts-component-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle15 border-b"
                    >
                      <span className="contacts-component-text20">All</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle16 border-b"
                    >
                      <span>All</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle17 border-b"
                    >
                      <span>Company</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle18 border-b"
                    >
                      <span className="contacts-component-text23">Company</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-component-dropdown8 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle19"
                    >
                      <span>Contact</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-component-dropdown-toggle20"
                    >
                      <span className="contacts-component-text25">
                        Contacts
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts-component-container10 box-shadow gradient">
              <svg viewBox="0 0 1024 1024" className="icon-size">
                <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
              </svg>
              <span>Add Contact</span>
            </div>
          </div>
        </div>
        <div className="contacts-component-topbar-menu border-b box-shadow-bottom">
          <div className="contacts-component-menu-1">
            {select_menu === 0 && (
              <div className="topbar-menu-select">
                <span>{props.menu_1}</span>
              </div>
            )}
            <div
              onClick={() => setSelect_menu(0)}
              className="topbar-menu-unselect"
            >
              <span>{props.menu_1}</span>
            </div>
          </div>
          <div className="contacts-component-menu-2">
            {select_menu === 1 && (
              <div className="topbar-menu-select">
                <span>{props.menu_2}</span>
              </div>
            )}
            <div
              onClick={() => setSelect_menu(1)}
              className="topbar-menu-unselect"
            >
              <span>{props.menu_2}</span>
            </div>
          </div>
          <div className="contacts-component-menu-3">
            {select_menu === 2 && (
              <div className="topbar-menu-select">
                <span>{props.menu_3}</span>
              </div>
            )}
            <div
              onClick={() => setSelect_menu(2)}
              className="topbar-menu-unselect"
            >
              <span>{props.menu_3}</span>
            </div>
          </div>
        </div>
        <div className="contacts-component-content">
          <div className="contacts-component-all-contacts">
            <div className="contacts-component-container11">
              <div className="contacts-component-container12">
                <div className="contacts-component-container13">
                  <span className="contacts-component-text33">Failed</span>
                  <span className="contacts-component-text34">Scans</span>
                </div>
                <ContactsFailedScansComponent></ContactsFailedScansComponent>
              </div>
              <DownloadResultComponent></DownloadResultComponent>
            </div>
            <div className="contacts-component-container14">
              <ContactOverview rootClassName="contact-overview-root-class-name"></ContactOverview>
            </div>
            <FolderOverview></FolderOverview>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactsComponent.defaultProps = {
  filterType_3: 'Employee',
  filterType_1: 'All',
  filterType_2: 'Company',
  rootClassName1: '',
  rootClassName: '',
  menu_1: 'All',
  menu_3: 'Contacts',
  menu_2: 'Companies',
}

ContactsComponent.propTypes = {
  filterType_3: PropTypes.string,
  filterType_1: PropTypes.string,
  filterType_2: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
  menu_1: PropTypes.string,
  menu_3: PropTypes.string,
  menu_2: PropTypes.string,
}

export default ContactsComponent
