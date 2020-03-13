import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewContact from './pages/NewContact'
import ListContact from './pages/ListContact'
import EditContact from './pages/EditContact'
import DeleteContact from './pages/DeleteContact'
import SearchContact from './pages/SearchContact'
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
            <Route exact path="/edit" component={EditContact} />
            <Route exact path="/delete" component={DeleteContact} />
            <Route exact path="/search" component={SearchContact} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}