import React from 'react'

import './activity-calendar-component.css'

const ActivityCalendarComponent = (props) => {
  return (
    <div className="activity-calendar-component-activity-calendar-component box-shadow gradient">
      <div className="activity-calendar-component-container border-b">
        <div className="activity-calendar-component-container01">
          <span>
            Activity
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="activity-calendar-component-text01"> calendar</span>
        </div>
      </div>
      <div className="activity-calendar-component-container02 border-b">
        <span className="activity-calendar-component-text02">24-Jan-2023</span>
        <div className="activity-calendar-component-container03">
          <div className="activity-calendar-component-container04">
            <svg
              viewBox="0 0 1024 1024"
              className="activity-calendar-component-icon"
            >
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
          </div>
          <div className="activity-calendar-component-container05">
            <svg
              viewBox="0 0 1024 1024"
              className="activity-calendar-component-icon2"
            >
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="activity-calendar-component-container06">
        <div className="activity-calendar-component-container07 border-b">
          <div className="activity-calendar-component-container08">
            <span className="activity-calendar-component-text03">Mo</span>
          </div>
          <div className="activity-calendar-component-container09">
            <span className="activity-calendar-component-text04">Tu</span>
          </div>
          <div className="activity-calendar-component-container10">
            <span className="activity-calendar-component-text05">We</span>
          </div>
          <div className="activity-calendar-component-container11">
            <span className="activity-calendar-component-text06">Th</span>
          </div>
          <div className="activity-calendar-component-container12">
            <span className="activity-calendar-component-text07">Fr</span>
          </div>
          <div className="activity-calendar-component-container13">
            <span className="activity-calendar-component-text08">Sa</span>
          </div>
          <div className="activity-calendar-component-container14">
            <span className="activity-calendar-component-text09">Su</span>
          </div>
        </div>
        <div className="activity-calendar-component-container15">
          <div className="activity-calendar-component-container16">
            <div className="calendar-day-unselect-disable">
              <span>31</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>1</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>2</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>3</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>4</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>5</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>6</span>
            </div>
          </div>
          <div className="activity-calendar-component-container24">
            <div className="calendar-day-unselect-enable">
              <span>7</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>8</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>9</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>10</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>11</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>12</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>13</span>
            </div>
          </div>
          <div className="activity-calendar-component-container32">
            <div className="calendar-day-unselect-enable">
              <span>14</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>15</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>16</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>17</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>18</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>19</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>20</span>
            </div>
          </div>
          <div className="activity-calendar-component-container40">
            <div className="calendar-day-unselect-enable">
              <span>21</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>22</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>23</span>
            </div>
            <div className="calendar-day-select">
              <span>24</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>25</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>26</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>27</span>
            </div>
          </div>
          <div className="activity-calendar-component-container48">
            <div className="calendar-day-unselect-enable">
              <span>28</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>29</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>30</span>
            </div>
            <div className="calendar-day-unselect-enable">
              <span>31</span>
            </div>
            <div className="calendar-day-unselect-disable">
              <span>1</span>
            </div>
            <div className="calendar-day-unselect-disable">
              <span>2</span>
            </div>
            <div className="calendar-day-unselect-disable">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityCalendarComponent
