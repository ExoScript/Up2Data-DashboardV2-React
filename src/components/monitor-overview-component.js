import React from 'react'

import PropTypes from 'prop-types'

import MonitorOverviewItemComponent from './monitor-overview-item-component'
import './monitor-overview-component.css'

const MonitorOverviewComponent = (props) => {
  return (
    <div
      className={`monitor-overview-component-monitor-overview-component box-shadow ${props.rootClassName} `}
    >
      <div className="monitor-overview-component-container border-b box-shadow-bottom">
        <div className="monitor-overview-component-container1">
          <span className="monitor-overview-component-text">Monitor</span>
          <span className="monitor-overview-component-text1">Overview</span>
        </div>
        <span className="monitor-overview-component-text2">See more</span>
      </div>
      <div className="monitor-overview-component-container2 border-b box-shadow-bottom">
        <div className="monitor-overview-component-container3 border-r">
          <span className="">Name</span>
        </div>
        <div className="monitor-overview-component-container4 border-r">
          <span className="">Position</span>
        </div>
        <div className="monitor-overview-component-container5 border-r">
          <span className="">Status</span>
        </div>
        <div className="monitor-overview-component-container6">
          <span className="">Time</span>
        </div>
      </div>
      <div className="monitor-overview-component-container7">
        <ul className="monitor-overview-component-ul list">
          <li className="list-item">
            <MonitorOverviewItemComponent
              rootClassName="monitor-overview-item-component-root-class-name"
              className=""
            ></MonitorOverviewItemComponent>
          </li>
          <li className="list-item">
            <MonitorOverviewItemComponent className=""></MonitorOverviewItemComponent>
          </li>
          <li className="list-item">
            <MonitorOverviewItemComponent className=""></MonitorOverviewItemComponent>
          </li>
          <li className="list-item">
            <MonitorOverviewItemComponent className=""></MonitorOverviewItemComponent>
          </li>
          <li className="list-item">
            <MonitorOverviewItemComponent className=""></MonitorOverviewItemComponent>
          </li>
        </ul>
      </div>
    </div>
  )
}

MonitorOverviewComponent.defaultProps = {
  text2: 'Text',
  rootClassName: '',
  text: 'Text',
  text1: 'Text',
}

MonitorOverviewComponent.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default MonitorOverviewComponent
