import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './performance-slider-component.css'

const PerformanceSliderComponent = (props) => {
  const [infoBox, setInfoBox] = useState(false)
  const [infoBox_left, setInfoBox_left] = useState(false)
  return (
    <div
      onMouseEnter={() => setInfoBox(true)}
      onMouseLeave={() => setInfoBox(false)}
      className={`performance-slider-component-performance-slider-component ${props.rootClassName} `}
    >
      <div className="performance-slider-component-container">
        <div className="performance-slider-component-container01 border-b"></div>
        <div className="performance-slider-component-container02 border-b"></div>
        <div className="performance-slider-component-container03 gradient"></div>
      </div>
      <div className="performance-slider-component-container04">
        <span className="performance-slider-component-text">{props.day}</span>
        <span className="performance-slider-component-text01">
          {props.month}
        </span>
      </div>
      {infoBox && (
        <div className="performance-slider-component-container05">
          {infoBox_left && (
            <div className="performance-slider-component-container06 box-shadow">
              <div className="performance-slider-component-container07 border-b">
                <div className="performance-slider-component-container08">
                  <span className="performance-slider-component-text02">
                    Performance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="performance-slider-component-text03">
                    {' '}
                    Details
                  </span>
                </div>
              </div>
              <div className="performance-slider-component-container09">
                <div className="performance-slider-component-container10 border-b">
                  <span className="performance-slider-component-text04">
                    {props.day}
                  </span>
                  <span className="performance-slider-component-text05">-</span>
                  <span className="performance-slider-component-text06">
                    {props.month}
                  </span>
                  <span className="performance-slider-component-text07">-</span>
                  <span className="performance-slider-component-text08">
                    {props.year}
                  </span>
                </div>
                <div className="performance-slider-component-container11">
                  <div className="performance-slider-component-container12 border-b">
                    <div className="performance-slider-component-container13">
                      <span className="performance-slider-component-text09">
                        Leads
                      </span>
                      <span className="performance-slider-component-text10">
                        20%
                      </span>
                    </div>
                    <div className="performance-slider-component-container14">
                      <div className="performance-slider-component-container15"></div>
                    </div>
                  </div>
                  <div className="performance-slider-component-container16 border-b">
                    <div className="performance-slider-component-container17">
                      <span className="performance-slider-component-text11">
                        Companies
                      </span>
                      <span className="performance-slider-component-text12">
                        30%
                      </span>
                    </div>
                    <div className="performance-slider-component-container18">
                      <div className="performance-slider-component-container19"></div>
                    </div>
                  </div>
                  <div className="performance-slider-component-container20">
                    <div className="performance-slider-component-container21">
                      <span className="performance-slider-component-text13">
                        Employees
                      </span>
                      <span className="performance-slider-component-text14">
                        50%
                      </span>
                    </div>
                    <div className="performance-slider-component-container22">
                      <div className="performance-slider-component-container23"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="performance-slider-component-container24 border-t"></div>
            </div>
          )}
        </div>
      )}
      {infoBox && (
        <div className="performance-slider-component-container25">
          {!infoBox_left && (
            <div className="performance-slider-component-container26 box-shadow">
              <div className="performance-slider-component-container27 border-b">
                <div className="performance-slider-component-container28">
                  <span className="performance-slider-component-text15">
                    Performance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="performance-slider-component-text16">
                    {' '}
                    Details
                  </span>
                </div>
              </div>
              <div className="performance-slider-component-container29">
                <div className="performance-slider-component-container30 border-b">
                  <span className="performance-slider-component-text17">
                    {props.day}
                  </span>
                  <span className="performance-slider-component-text18">-</span>
                  <span className="performance-slider-component-text19">
                    {props.month}
                  </span>
                  <span className="performance-slider-component-text20">-</span>
                  <span className="performance-slider-component-text21">
                    {props.year}
                  </span>
                </div>
                <div className="performance-slider-component-container31">
                  <div className="performance-slider-component-container32 border-b">
                    <div className="performance-slider-component-container33">
                      <span className="performance-slider-component-text22">
                        Leads
                      </span>
                      <span className="performance-slider-component-text23">
                        20%
                      </span>
                    </div>
                    <div className="performance-slider-component-container34">
                      <div className="performance-slider-component-container35"></div>
                    </div>
                  </div>
                  <div className="performance-slider-component-container36 border-b">
                    <div className="performance-slider-component-container37">
                      <span className="performance-slider-component-text24">
                        Companies
                      </span>
                      <span className="performance-slider-component-text25">
                        30%
                      </span>
                    </div>
                    <div className="performance-slider-component-container38">
                      <div className="performance-slider-component-container39"></div>
                    </div>
                  </div>
                  <div className="performance-slider-component-container40">
                    <div className="performance-slider-component-container41">
                      <span className="performance-slider-component-text26">
                        Employees
                      </span>
                      <span className="performance-slider-component-text27">
                        50%
                      </span>
                    </div>
                    <div className="performance-slider-component-container42">
                      <div className="performance-slider-component-container43"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="performance-slider-component-container44 border-t"></div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

PerformanceSliderComponent.defaultProps = {
  rootClassName: '',
  year: '2023',
  month: 'Jan',
  day: '01',
}

PerformanceSliderComponent.propTypes = {
  rootClassName: PropTypes.string,
  year: PropTypes.string,
  month: PropTypes.string,
  day: PropTypes.string,
}

export default PerformanceSliderComponent
