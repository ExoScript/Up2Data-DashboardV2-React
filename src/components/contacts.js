import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ContactsFailedScansComponent from './contacts-failed-scans-component'
import DownloadResultComponent from './download-result-component'
import ContactOverview from './contact-overview'
import FolderOverview from './folder-overview'
import './contacts.css'

const Contacts = (props) => {
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterList, setFilterList] = useState('All')
  const [select_menu, setSelect_menu] = useState(0)
  const [filterType, setFilterType] = useState('All')
  return (
    <div className={`contacts-contacts-component ${props.rootClassName} `}>
      <div className="contacts-container">
        <div className="contacts-container01 border-b">
          <div className="contacts-container02">
            <span className="contacts-text">Contact</span>
            <span className="contacts-text01">Overview</span>
          </div>
          <div className="contacts-container03">
            <div className="contacts-container04">
              <div
                data-thq="thq-dropdown"
                className="contacts-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contacts-dropdown-toggle"
                >
                  <div className="contacts-container05 border-r">
                    <span className="contacts-text02">Section:</span>
                    <span className="contacts-text03">{filterType}</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="contacts-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="contacts-icon">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="contacts-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      onClick={() => setFilterType('All')}
                      className="contacts-dropdown-toggle01 border-b"
                    >
                      <span className="contacts-text04">
                        {props.filterType_1}
                      </span>
                    </div>
                    {filterType === 'All' && (
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="contacts-dropdown-toggle02 border-b"
                      >
                        <span className="">{props.filterType_1}</span>
                      </div>
                    )}
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      onClick={() => setFilterType('Company')}
                      className="contacts-dropdown-toggle03 border-b"
                    >
                      <span className="">{props.filterType_2}</span>
                    </div>
                    {filterType === 'Company' && (
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="contacts-dropdown-toggle04 border-b"
                      >
                        <span className="contacts-text07">
                          {props.filterType_2}
                        </span>
                      </div>
                    )}
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      onClick={() => setFilterType('Contact')}
                      className="contacts-dropdown-toggle05"
                    >
                      <span className="">{props.filterType_3}</span>
                    </div>
                    {filterType === 'Contact' && (
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="contacts-dropdown-toggle06"
                      >
                        <span className="contacts-text09">{props.menu_3}</span>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts-container06">
              <div
                data-thq="thq-dropdown"
                className="contacts-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contacts-dropdown-toggle07"
                >
                  <div className="contacts-container07 border-r">
                    <span className="contacts-text10">List:</span>
                    <span className="contacts-text11">{filterList}</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="contacts-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="contacts-icon2">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="contacts-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle08 border-b"
                    >
                      <span className="contacts-text12">All</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle09 border-b"
                    >
                      <span className="">All</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle10 border-b"
                    >
                      <span className="">Company</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle11 border-b"
                    >
                      <span className="contacts-text15">Company</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle12"
                    >
                      <span className="">Contact</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle13"
                    >
                      <span className="contacts-text17">Contacts</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts-container08">
              <div
                data-thq="thq-dropdown"
                className="contacts-thq-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contacts-dropdown-toggle14"
                >
                  <div className="contacts-container09 border-r">
                    <span className="contacts-text18">Status:</span>
                    <span className="contacts-text19">{filterStatus}</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="contacts-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="contacts-icon4">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="contacts-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle15 border-b"
                    >
                      <span className="contacts-text20">All</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle16 border-b"
                    >
                      <span className="">All</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle17 border-b"
                    >
                      <span className="">Company</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle18 border-b"
                    >
                      <span className="contacts-text23">Company</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="contacts-dropdown8 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle19"
                    >
                      <span className="">Contact</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="contacts-dropdown-toggle20"
                    >
                      <span className="contacts-text25">Contacts</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts-container10 box-shadow gradient">
              <svg viewBox="0 0 1024 1024" className="icon-size">
                <path
                  d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
                  className=""
                ></path>
              </svg>
              <span className="">Add Contact</span>
            </div>
          </div>
        </div>
        <div className="contacts-topbar-menu border-b box-shadow-bottom">
          <div className="contacts-menu-1">
            {select_menu === 0 && (
              <div className="topbar-menu-select">
                <span className="">{props.menu_1}</span>
              </div>
            )}
            <div
              onClick={() => setSelect_menu(0)}
              className="topbar-menu-unselect"
            >
              <span className="">{props.menu_1}</span>
            </div>
          </div>
          <div className="contacts-menu-2">
            {select_menu === 1 && (
              <div className="topbar-menu-select">
                <span className="">{props.menu_2}</span>
              </div>
            )}
            <div
              onClick={() => setSelect_menu(1)}
              className="topbar-menu-unselect"
            >
              <span className="">{props.menu_2}</span>
            </div>
          </div>
          <div className="contacts-menu-3">
            {select_menu === 2 && (
              <div className="topbar-menu-select">
                <span className="">{props.menu_3}</span>
              </div>
            )}
            <div
              onClick={() => setSelect_menu(2)}
              className="topbar-menu-unselect"
            >
              <span className="">{props.menu_3}</span>
            </div>
          </div>
        </div>
        <div className="contacts-content">
          <div className="contacts-all-contacts">
            <div className="contacts-container11">
              <div className="contacts-container12">
                <div className="contacts-container13">
                  <span className="contacts-text33">Failed</span>
                  <span className="contacts-text34">Scans</span>
                </div>
                <ContactsFailedScansComponent className=""></ContactsFailedScansComponent>
              </div>
              <DownloadResultComponent className=""></DownloadResultComponent>
            </div>
            <div className="contacts-container14">
              <ContactOverview
                rootClassName="contact-overview-root-class-name"
                className=""
              ></ContactOverview>
            </div>
            <FolderOverview className=""></FolderOverview>
          </div>
        </div>
      </div>
    </div>
  )
}

Contacts.defaultProps = {
  filterType_3: 'Employee',
  filterType_1: 'All',
  filterType_2: 'Company',
  rootClassName1: '',
  rootClassName: '',
  menu_1: 'All',
  menu_3: 'Contacts',
  menu_2: 'Companies',
}

Contacts.propTypes = {
  filterType_3: PropTypes.string,
  filterType_1: PropTypes.string,
  filterType_2: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
  menu_1: PropTypes.string,
  menu_3: PropTypes.string,
  menu_2: PropTypes.string,
}

export default Contacts
