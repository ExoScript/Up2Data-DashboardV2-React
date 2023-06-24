import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Sandbox from './views/sandbox'
import Login from './views/login'
import Tamplates from './views/tamplates'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Sandbox} exact path="/sandbox" />
        <Route component={Login} exact path="/login" />
        <Route component={Tamplates} exact path="/tamplates" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
