import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewContact from './pages/NewContact'
import Header from './Header'

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>    
          <Switch>
            <Route exact path="/new" component={NewContact} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}