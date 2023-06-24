import React from 'react'

import { Helmet } from 'react-helmet'

import './tamplates.css'

const Tamplates = (props) => {
  return (
    <div className="tamplates-container">
      <Helmet>
        <title>Tamplates - Up2Data-DashboardV2</title>
        <meta property="og:title" content="Tamplates - Up2Data-DashboardV2" />
      </Helmet>
      <div className="tamplates-container01">
        <div className="tamplates-container02 box-shadow gradient">
          <div className="tamplates-container03 border-b"></div>
          <div className="tamplates-container04 border-b"></div>
        </div>
        <div className="tamplates-container05 box-shadow">
          <div className="tamplates-container06 border-b box-shadow-bottom">
            <div className="tamplates-container07">
              <span className="tamplates-text">Text</span>
              <span className="tamplates-text1">Text</span>
            </div>
          </div>
          <div className="tamplates-container08"></div>
        </div>
      </div>
      <div className="tamplates-container09">
        <div className="tamplates-container10">
          <div className="tamplates-container11 btn-lila">
            <svg viewBox="0 0 1024 1024" className="tamplates-icon">
              <path d="M956.29 804.482l-316.29-527.024v-213.458h32c17.6 0 32-14.4 32-32s-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32s14.4 32 32 32h32v213.458l-316.288 527.024c-72.442 120.734-16.512 219.518 124.288 219.518h640c140.8 0 196.73-98.784 124.29-219.518zM241.038 640l206.962-344.938v-231.062h128v231.062l206.964 344.938h-541.926z"></path>
            </svg>
            <span>Text</span>
          </div>
          <div className="tamplates-container12 btn-white">
            <svg viewBox="0 0 1024 1024" className="tamplates-icon2">
              <path d="M956.29 804.482l-316.29-527.024v-213.458h32c17.6 0 32-14.4 32-32s-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32s14.4 32 32 32h32v213.458l-316.288 527.024c-72.442 120.734-16.512 219.518 124.288 219.518h640c140.8 0 196.73-98.784 124.29-219.518zM241.038 640l206.962-344.938v-231.062h128v231.062l206.964 344.938h-541.926z"></path>
            </svg>
            <span>Text</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tamplates
