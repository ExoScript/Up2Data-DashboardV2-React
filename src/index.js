import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Home from './views/home'
import Sandbox from './views/sandbox'
import Tamplates from './views/tamplates'
import NewSecretKey from './views/new-secret-key'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} exact path="/" />
        <Route component={Home} exact path="/home" />
        <Route component={Sandbox} exact path="/sandbox" />
        <Route component={Tamplates} exact path="/tamplates" />
        <Route component={NewSecretKey} exact path="/new-secret-key" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
