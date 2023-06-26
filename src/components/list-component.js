import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ContactOverviewItem from './contact-overview-item'
import './list-component.css'

const ListComponent = (props) => {
  const [menu, setMenu] = useState(0)
  return (
    <div className={`list-component-list-overview ${props.rootClassName} `}>
      <div className="list-component-container border-b">
        <div className="list-component-container01">
          <span className="list-component-text">List</span>
          <span className="list-component-text01">Overview</span>
        </div>
        <div className="list-component-container02">
          <div className="list-component-container03">
            <div
              data-thq="thq-dropdown"
              className="list-component-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="list-component-dropdown-toggle"
              >
                <div className="list-component-container04 border-r">
                  <span className="list-component-text02">Section:</span>
                  <span className="list-component-text03">All</span>
                </div>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="list-component-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="list-component-icon">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="list-component-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle01 border-b"
                  >
                    <span className="list-component-text04">All</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle02 border-b"
                  >
                    <span className="">All</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle03 border-b"
                  >
                    <span className="">Company</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle04 border-b"
                  >
                    <span className="list-component-text07">Company</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle05"
                  >
                    <span className="">Contact</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle06"
                  >
                    <span className="list-component-text09">Contacts</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-component-container05">
            <div
              data-thq="thq-dropdown"
              className="list-component-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="list-component-dropdown-toggle07"
              >
                <div className="list-component-container06 border-r">
                  <span className="list-component-text10">List:</span>
                  <span className="list-component-text11">All</span>
                </div>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="list-component-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="list-component-icon2">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="list-component-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle08 border-b"
                  >
                    <span className="list-component-text12">All</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle09 border-b"
                  >
                    <span className="">All</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown4 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle10 border-b"
                  >
                    <span className="">Company</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle11 border-b"
                  >
                    <span className="list-component-text15">Company</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown5 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle12"
                  >
                    <span className="">Contact</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle13"
                  >
                    <span className="list-component-text17">Contacts</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-component-container07">
            <div
              data-thq="thq-dropdown"
              className="list-component-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="list-component-dropdown-toggle14"
              >
                <div className="list-component-container08 border-r">
                  <span className="list-component-text18">Status:</span>
                  <span className="list-component-text19">All</span>
                </div>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="list-component-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="list-component-icon4">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="list-component-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown6 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle15 border-b"
                  >
                    <span className="list-component-text20">All</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle16 border-b"
                  >
                    <span className="">All</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown7 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle17 border-b"
                  >
                    <span className="">Company</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle18 border-b"
                  >
                    <span className="list-component-text23">Company</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="list-component-dropdown8 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle19"
                  >
                    <span className="">Contact</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="list-component-dropdown-toggle20"
                  >
                    <span className="list-component-text25">Contacts</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-component-container09 box-shadow gradient">
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
      <div className="list-component-topbar-menu border-b box-shadow-bottom">
        <div className="list-component-menu-0">
          {menu === 0 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_0}</span>
            </div>
          )}
          <div onClick={() => setMenu(0)} className="topbar-menu-unselect">
            <span className="">{props.menu_0}</span>
          </div>
        </div>
        <div className="list-component-menu-1">
          {menu === 1 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_1}</span>
            </div>
          )}
          <div onClick={() => setMenu(1)} className="topbar-menu-unselect">
            <span className="">{props.menu_1}</span>
          </div>
        </div>
        <div className="list-component-menu-2">
          {menu === 2 && (
            <div className="topbar-menu-select">
              <span className="">{props.menu_2}</span>
            </div>
          )}
          <div onClick={() => setMenu(2)} className="topbar-menu-unselect">
            <span className="">{props.menu_2}</span>
          </div>
        </div>
      </div>
      <div className="list-component-container10">
        <div className="list-component-container11 border-b box-shadow-bottom">
          <div className="list-component-container12 border-r">
            <span className="">Name:</span>
          </div>
          <div className="list-component-container13 border-r">
            <span className="">Section:</span>
          </div>
          <div className="list-component-container14 border-r">
            <span className="">Folder:</span>
          </div>
          <div className="list-component-container15 border-r">
            <span className="">Status:</span>
          </div>
          <div className="list-component-container16">
            <span className="">Scan:</span>
          </div>
          <div className="list-component-container17 border-l">
            <span className="">Actions</span>
          </div>
        </div>
        {menu === 0 && (
          <div className="list-component-menu0">
            <ul className="list">
              <li className="list-item">
                <ContactOverviewItem
                  rootClassName="contact-overview-item-root-class-name13"
                  className=""
                ></ContactOverviewItem>
              </li>
            </ul>
          </div>
        )}
        {menu === 1 && (
          <div className="list-component-menu1">
            <ul className="list">
              <li className="list-item">
                <ContactOverviewItem
                  rootClassName="contact-overview-item-root-class-name32"
                  className=""
                ></ContactOverviewItem>
              </li>
            </ul>
          </div>
        )}
        {menu === 2 && (
          <div className="list-component-menu2">
            <ul className="list">
              <li className="list-item">
                <ContactOverviewItem
                  rootClassName="contact-overview-item-root-class-name33"
                  className=""
                ></ContactOverviewItem>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

ListComponent.defaultProps = {
  menu_2: 'Contacts',
  menu_1: 'Companies',
  rootClassName: '',
  menu_0: 'All',
}

ListComponent.propTypes = {
  menu_2: PropTypes.string,
  menu_1: PropTypes.string,
  rootClassName: PropTypes.string,
  menu_0: PropTypes.string,
}

export default ListComponent
