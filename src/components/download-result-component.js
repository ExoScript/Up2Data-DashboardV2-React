import React from 'react'

import PropTypes from 'prop-types'

import './download-result-component.css'

const DownloadResultComponent = (props) => {
  return (
    <div className="download-result-component-download-result-component box-shadow gradient">
      <div className="download-result-component-container border-b box-shadow-bottom">
        <div className="download-result-component-container01">
          <span className="download-result-component-text">Download</span>
          <span className="download-result-component-text01">results</span>
        </div>
        <svg
          viewBox="0 0 634.88 1024"
          className="download-result-component-icon icon-size"
        >
          <path d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"></path>
        </svg>
      </div>
      <div className="download-result-component-container02">
        <div className="download-result-component-container03">
          <div className="download-result-component-container04">
            <span>Total failed</span>
            <span className="download-result-component-text03">31</span>
            <div className="download-result-component-container05">
              <span className="download-result-component-text04">-13,07%</span>
            </div>
          </div>
          <div className="download-result-component-container06"></div>
          <div className="download-result-component-container07">
            <div className="download-result-component-container08 border-b">
              <div className="download-result-component-container09 border-b">
                <span className="download-result-component-text05">
                  Companies
                </span>
              </div>
              <div className="download-result-component-container10">
                <span className="download-result-component-text06">12</span>
                <span className="download-result-component-text07">07,31%</span>
              </div>
            </div>
            <div className="download-result-component-container11">
              <div className="download-result-component-container12 border-b">
                <span className="download-result-component-text08">
                  Employees
                </span>
              </div>
              <div className="download-result-component-container13">
                <span className="download-result-component-text09">12</span>
                <span className="download-result-component-text10">07,31%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-result-component-container14 border-t">
        <span className="download-result-component-text11">
          <span className="download-result-component-text12">Get</span>
          <span> all results</span>
          <br></br>
          <span>as </span>
          <span className="download-result-component-text16">CSV</span>
          <span>.</span>
        </span>
        <div className="download-result-component-container15 btn-white">
          <svg viewBox="0 0 1024 1024" className="icon-size">
            <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
          </svg>
          <span>Download</span>
        </div>
      </div>
    </div>
  )
}

DownloadResultComponent.defaultProps = {
  text1: 'Text',
  text: 'Text',
}

DownloadResultComponent.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default DownloadResultComponent
