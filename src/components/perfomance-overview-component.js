import React, { useState } from 'react'

import PerformanceSliderComponent from './performance-slider-component'
import './perfomance-overview-component.css'

const PerfomanceOverviewComponent = (props) => {
  const [infoBox, setInfoBox] = useState(false)
  return (
    <div className="perfomance-overview-component-perfomance-overview-component">
      <div className="perfomance-overview-component-container border-r">
        <div className="perfomance-overview-component-container01 border-b box-shadow-bottom">
          <div className="perfomance-overview-component-container02">
            <span>
              Performance
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="perfomance-overview-component-text01">
              {' '}
              overview
            </span>
          </div>
          <div className="perfomance-overview-component-container03">
            <div className="perfomance-overview-component-container04">
              <div className="perfomance-overview-component-container05 gradient"></div>
              <span className="perfomance-overview-component-text02">
                Leads
              </span>
            </div>
            <div className="perfomance-overview-component-container06">
              <div className="perfomance-overview-component-container07"></div>
              <span className="perfomance-overview-component-text03">
                Companies
              </span>
            </div>
            <div className="perfomance-overview-component-container08">
              <div className="perfomance-overview-component-container09"></div>
              <span className="perfomance-overview-component-text04">
                Employees
              </span>
            </div>
          </div>
        </div>
        <div className="perfomance-overview-component-container10">
          <PerformanceSliderComponent rootClassName="performance-slider-component-root-class-name"></PerformanceSliderComponent>
          <PerformanceSliderComponent
            month="Feb"
            rootClassName="performance-slider-component-root-class-name5"
          ></PerformanceSliderComponent>
          <PerformanceSliderComponent
            day="02"
            rootClassName="performance-slider-component-root-class-name4"
          ></PerformanceSliderComponent>
          <PerformanceSliderComponent
            day="03"
            rootClassName="performance-slider-component-root-class-name3"
          ></PerformanceSliderComponent>
          <PerformanceSliderComponent
            day="04"
            rootClassName="performance-slider-component-root-class-name2"
          ></PerformanceSliderComponent>
          <PerformanceSliderComponent
            day="05"
            rootClassName="performance-slider-component-root-class-name1"
          ></PerformanceSliderComponent>
        </div>
      </div>
      <div className="perfomance-overview-component-container11">
        <div className="perfomance-overview-component-container12 border-b box-shadow-bottom">
          <span className="perfomance-overview-component-text05">
            Data
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="perfomance-overview-component-text06">
            {' '}
            Completeness
          </span>
        </div>
        <div className="perfomance-overview-component-container13">
          <div className="perfomance-overview-component-container14">
            <span className="perfomance-overview-component-text07">
              Complete
            </span>
            <span className="perfomance-overview-component-text08">1534</span>
            <div className="perfomance-overview-component-container15">
              <span>+17,03%</span>
            </div>
            <span className="perfomance-overview-component-text10">
              <span>Compared</span>
              <br></br>
              <span>to last month</span>
            </span>
          </div>
          <div className="perfomance-overview-component-container16"></div>
          <div className="perfomance-overview-component-container17">
            <span className="perfomance-overview-component-text14">
              Incorrect
            </span>
            <span className="perfomance-overview-component-text15">342</span>
            <div className="perfomance-overview-component-container18">
              <span>-09,31%</span>
            </div>
            <span className="perfomance-overview-component-text17">
              <span>Compared</span>
              <br></br>
              <span>to last month</span>
            </span>
          </div>
        </div>
        <div className="perfomance-overview-component-container19 border-t">
          <div className="perfomance-overview-component-container20">
            <span className="perfomance-overview-component-text21">
              <span className="perfomance-overview-component-text22">
                Optimize
              </span>
              <span> your data now!</span>
            </span>
          </div>
          <div className="perfomance-overview-component-container21">
            <div className="perfomance-overview-component-container22 btn-lila">
              <svg
                viewBox="0 0 1024 1024"
                className="perfomance-overview-component-icon"
              >
                <path d="M956.29 804.482l-316.29-527.024v-213.458h32c17.6 0 32-14.4 32-32s-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32s14.4 32 32 32h32v213.458l-316.288 527.024c-72.442 120.734-16.512 219.518 124.288 219.518h640c140.8 0 196.73-98.784 124.29-219.518zM241.038 640l206.962-344.938v-231.062h128v231.062l206.964 344.938h-541.926z"></path>
              </svg>
              <span>Optimize</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfomanceOverviewComponent
