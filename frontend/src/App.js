import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewContact from './pages/NewContact'
import ListContact from './pages/ListContact'
import Header from './Header'

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>    
          <Switch>
            <Route exact path="/new" component={NewContact} />
            <Route exact path="/list" component={ListContact} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}