import React, { useState } from 'react'

import PropTypes from 'prop-types'

import DashboardComponent from './dashboard-component'
import ContactsComponent from './contacts-component'
import CompanyProfileComponent from './company-profile-component'
import ListComponent from './list-component'
import './main.css'

const Main = (props) => {
  const [viewComponent, setViewComponent] = useState(0)
  return (
    <div className={`main-dashboard ${props.rootClassName} `}>
      <div className="main-menu-sidebar border-r">
        <div className="main-topbar gradient">
          <div className="main-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="main-image"
            />
          </div>
          <div className="main-container01">
            <span className="main-text">Up2Data</span>
            <span className="main-text01">Dashboard</span>
          </div>
        </div>
        <div className="main-container02">
          <div className="main-container03 border-b box-shadow-bottom">
            <span className="main-text02">Menu</span>
          </div>
          <div className="main-menu">
            <div className="main-menu1">
              <div
                onClick={() => setViewComponent(0)}
                className="main-menu-unselect menu-btn-unselect"
              >
                <svg viewBox="0 0 1024 1024" className="menu-btn-icon-04">
                  <path
                    d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_0}</span>
              </div>
              {viewComponent === 0 && (
                <div className="menu-btn-select">
                  <svg viewBox="0 0 1024 1024" className="menu-btn-icon-08">
                    <path
                      d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_0}</span>
                </div>
              )}
            </div>
            <div className="main-menu2">
              <div
                onClick={() => setViewComponent(1)}
                className="main-menu-unselect1 menu-btn-unselect"
              >
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="menu-btn-icon-04"
                >
                  <path
                    d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_1}</span>
              </div>
              {viewComponent === 1 && (
                <div className="menu-btn-select">
                  <svg
                    viewBox="0 0 1097.142857142857 1024"
                    className="menu-btn-icon-08"
                  >
                    <path
                      d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_1}</span>
                </div>
              )}
            </div>
            <div className="main-menu3">
              <div
                onClick={() => setViewComponent(10)}
                className="main-menu-unselect2 menu-btn-unselect"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="menu-btn-icon-04"
                >
                  <path
                    d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_2}</span>
              </div>
              {viewComponent === 2 && (
                <div className="menu-btn-select">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="menu-btn-icon-08"
                  >
                    <path
                      d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_2}</span>
                </div>
              )}
            </div>
          </div>
          <div className="main-container04 border-t"></div>
        </div>
      </div>
      <div className="main-content">
        <div className="main-topbar1 border-b box-shadow-bottom">
          <div className="main-container05">
            <svg viewBox="0 0 1024 1024" className="main-icon12">
              <path
                d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                className=""
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Quick search..."
              className="main-textinput input"
            />
          </div>
          <div className="main-container06">
            <div className="main-container07">
              <svg viewBox="0 0 1024 1024" className="main-icon14 icon-size">
                <path
                  d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="main-container08">
              <svg viewBox="0 0 1024 1024" className="icon-size">
                <path
                  d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="main-container09 box-shadow">
              <div className="main-container10">
                <span className="main-text09">Daniel D.</span>
              </div>
              <div className="main-container11">
                <div className="main-container12">
                  <img
                    alt={props.image_alt1}
                    src={props.image_src1}
                    className="main-image1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-view">
          {viewComponent === 0 && (
            <DashboardComponent
              rootClassName="dashboard-component-root-class-name"
              className=""
            ></DashboardComponent>
          )}
          {viewComponent === 1 && (
            <ContactsComponent className=""></ContactsComponent>
          )}
          {viewComponent === 2 && (
            <CompanyProfileComponent
              rootClassName="company-profile-component-root-class-name"
              className=""
            ></CompanyProfileComponent>
          )}
          {viewComponent === 10 && (
            <ListComponent
              rootClassName="list-component-root-class-name"
              className=""
            ></ListComponent>
          )}
        </div>
      </div>
    </div>
  )
}

Main.defaultProps = {
  image_alt: 'image',
  image_src: '/external/u2d-logo-200h.png',
  menu_1: 'Contacts',
  image_alt1: 'image',
  menu_2: 'Import & Export',
  image_src1:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTY4NzQ4NjczNnww&ixlib=rb-4.0.3&w=200',
  menu_0: 'Dashboard',
  rootClassName: '',
}

Main.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  menu_1: PropTypes.string,
  image_alt1: PropTypes.string,
  menu_2: PropTypes.string,
  image_src1: PropTypes.string,
  menu_0: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Main
