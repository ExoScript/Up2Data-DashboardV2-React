import React from 'react'

import PropTypes from 'prop-types'

import './scan-info-component.css'

const ScanInfoComponent = (props) => {
  return (
    <div
      className={`scan-info-component-scan-info-component box-shadow ${props.rootClassName} `}
    >
      <div className="scan-info-component-container border-b box-shadow-bottom">
        <div className="scan-info-component-container01">
          <span className="scan-info-component-text">Scan</span>
          <span className="scan-info-component-text01">Information</span>
        </div>
      </div>
      <div className="scan-info-component-container02">
        <div className="scan-info-component-container03 border-b">
          <div className="scan-info-component-container04 border-r">
            <span className="scan-info-component-text02">Last scan begin:</span>
            <span className="scan-info-component-text03">12.02.2023</span>
            <div className="scan-info-component-container05">
              <span className="scan-info-component-text04">07:33</span>
              <span className="scan-info-component-text05">AM</span>
            </div>
          </div>
          <div className="scan-info-component-container06">
            <span className="scan-info-component-text06">Last scan begin:</span>
            <span className="scan-info-component-text07">12.02.2023</span>
            <div className="scan-info-component-container07">
              <span className="scan-info-component-text08">07:33</span>
              <span className="scan-info-component-text09">AM</span>
            </div>
          </div>
        </div>
        <div className="scan-info-component-container08 border-b">
          <div className="scan-info-component-container09 border-r">
            <span className="scan-info-component-text10">Scan for:</span>
            <span className="scan-info-component-text11">649</span>
            <div className="scan-info-component-container10">
              <span className="scan-info-component-text12">Companies</span>
            </div>
          </div>
          <div className="scan-info-component-container11">
            <span className="scan-info-component-text13">Failed search:</span>
            <span className="scan-info-component-text14">42</span>
            <div className="scan-info-component-container12">
              <span className="scan-info-component-text15">-06,67%</span>
              <span className="scan-info-component-text16">Companies</span>
            </div>
          </div>
        </div>
        <div className="scan-info-component-container13 border-b">
          <div className="scan-info-component-container14 border-r">
            <span className="scan-info-component-text17">Scan for:</span>
            <span className="scan-info-component-text18">3641</span>
            <div className="scan-info-component-container15">
              <span className="scan-info-component-text19">Contacts</span>
            </div>
          </div>
          <div className="scan-info-component-container16">
            <span className="scan-info-component-text20">Failed search:</span>
            <span className="scan-info-component-text21">142</span>
            <div className="scan-info-component-container17">
              <span className="scan-info-component-text22">-06,67%</span>
              <span className="scan-info-component-text23">Contacts</span>
            </div>
          </div>
        </div>
        <div className="scan-info-component-container18">
          <div className="scan-info-component-container19 border-r">
            <span className="scan-info-component-text24">Total monitores:</span>
            <span className="scan-info-component-text25">08</span>
            <div className="scan-info-component-container20">
              <span className="scan-info-component-text26">Be available</span>
            </div>
          </div>
          <div className="scan-info-component-container21">
            <span className="scan-info-component-text27">
              Monitors inactive:
            </span>
            <span className="scan-info-component-text28">03</span>
            <div className="scan-info-component-container22">
              <span className="scan-info-component-text29">Not usable</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scan-info-component-container23 border-t">
        <div className="scan-info-component-container24">
          <div className="scan-info-component-container25 btn-lila">
            <svg viewBox="0 0 1024 1024" className="icon-size">
              <path
                d="M512 682.667h-341.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM469.333 768v85.333h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-85.333h298.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-682.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504z"
                className=""
              ></path>
            </svg>
            <span className="">Add monitor</span>
          </div>
          <div className="scan-info-component-container26 btn-white">
            <svg viewBox="0 0 1024 1024" className="scan-info-component-icon2">
              <path
                d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
                className=""
              ></path>
            </svg>
            <span className="">Settings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ScanInfoComponent.defaultProps = {
  rootClassName: '',
  text1: 'Text',
  text: 'Text',
}

ScanInfoComponent.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default ScanInfoComponent
