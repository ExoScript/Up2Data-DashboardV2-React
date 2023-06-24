import React from 'react'

import PropTypes from 'prop-types'

import ActivityCalendarComponent from './activity-calendar-component'
import PerfomanceOverviewComponent from './perfomance-overview-component'
import MonitorOverviewComponent from './monitor-overview-component'
import ScanInfoComponent from './scan-info-component'
import './dashboard-component.css'

const DashboardComponent = (props) => {
  return (
    <div className={`dashboard-component-container ${props.rootClassName} `}>
      <div className="dashboard-component-container01">
        <div className="dashboard-component-container02 border-b">
          <div className="dashboard-component-container03">
            <span className="dashboard-component-text">Dashboard</span>
            <span className="dashboard-component-text01">Overview</span>
          </div>
          <div className="dashboard-component-container04">
            <div className="dashboard-component-container05">
              <div
                data-thq="thq-dropdown"
                className="dashboard-component-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="dashboard-component-dropdown-toggle"
                >
                  <div className="dashboard-component-container06 border-r">
                    <span className="dashboard-component-text02">Month:</span>
                    <span className="dashboard-component-text03">Jan</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="dashboard-component-dropdown-arrow"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="dashboard-component-icon"
                    >
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="dashboard-component-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="dashboard-component-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle01 border-b"
                    >
                      <span className="dashboard-component-text04">All</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle02 border-b"
                    >
                      <span className="">All</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="dashboard-component-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle03 border-b"
                    >
                      <span className="">Company</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle04 border-b"
                    >
                      <span className="dashboard-component-text07">
                        Company
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="dashboard-component-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle05"
                    >
                      <span className="">Contact</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle06"
                    >
                      <span className="dashboard-component-text09">
                        Contacts
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard-component-container07">
              <div
                data-thq="thq-dropdown"
                className="dashboard-component-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="dashboard-component-dropdown-toggle07"
                >
                  <div className="dashboard-component-container08 border-r">
                    <span className="dashboard-component-text10">Year:</span>
                    <span className="dashboard-component-text11">2023</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="dashboard-component-dropdown-arrow1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="dashboard-component-icon2"
                    >
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="dashboard-component-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="dashboard-component-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle08 border-b"
                    >
                      <span className="dashboard-component-text12">All</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle09 border-b"
                    >
                      <span className="">All</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="dashboard-component-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle10 border-b"
                    >
                      <span className="">Company</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle11 border-b"
                    >
                      <span className="dashboard-component-text15">
                        Company
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="dashboard-component-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle12"
                    >
                      <span className="">Contact</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="dashboard-component-dropdown-toggle13"
                    >
                      <span className="dashboard-component-text17">
                        Contacts
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard-component-container09 box-shadow gradient">
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
        <div className="dashboard-component-container10">
          <div className="dashboard-component-container11">
            <ActivityCalendarComponent className=""></ActivityCalendarComponent>
            <PerfomanceOverviewComponent className=""></PerfomanceOverviewComponent>
          </div>
          <div className="dashboard-component-container12">
            <MonitorOverviewComponent
              rootClassName="monitor-overview-component-root-class-name"
              className=""
            ></MonitorOverviewComponent>
            <ScanInfoComponent
              rootClassName="scan-info-component-root-class-name"
              className=""
            ></ScanInfoComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

DashboardComponent.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

DashboardComponent.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default DashboardComponent
