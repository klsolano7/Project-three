import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import AddCountry from './pages/AddCountry';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import logo from '../logo.svg';
import Dashboard from './pages/Dashboard';
import SavedEvents from './pages/SavedEvents';
import SearchEvent from './pages/SeachEvent';
import AddEvent from './pages/AddEvent';
import EditProfile from './pages/EditProfile';
import Event from './pages/Event'
import EditEvent from './pages/EditEvent'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LinkUP App</h1>
          <NavLink to="/dashboard" exact>Dashboard</NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Events</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Create Event</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />

          <Route path="/searchevent/:id" component={Event} />
          <Route path="/editevent/:id" component={EditEvent} />
          <Route path="/favorite" component={SavedEvents} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/addevent" component={AddEvent} />
          <Route path="/searchevent" component={SearchEvent} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}