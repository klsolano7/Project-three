import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import team from '../team.svg';
import Dashboard from './pages/Dashboard';
import SavedEvents from './pages/SavedEvents';
import SearchEvent from './pages/SeachEvent';
import AddEvent from './pages/AddEvent';
import EditProfile from './pages/EditProfile';
import Event from './pages/Event'
import EditEvent from './pages/EditEvent'
import AddProfilePicture from './pages/AddProfilePicture'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      user: {}
    }
  }

  componentDidMount() {
    let user = api.getLocalStorageUser()
    console.log(user)
    if(user) {
      api.getUser().then(user=>{
       console.log('user',user)
       this.setState({user:user.me})
      })
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  resetPic = (url) => {
    this.setState({
      user: { ...this.state.user, imageUrl: url }
    })
  }
  resetUser = persona =>{
    console.log("-------", persona)
    this.setState({user:persona})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className='navbar' >
          <div className="leftSide">
            <NavLink to="/">
          <img src={team} className="App-logo" alt="team" />
          <h1 className="App-title" style={{fontSize: '15px'}}>LinkUP App</h1>
          </NavLink>
          </div>
          {/* <img width="50px" src={this.state.user.imageUrl} /> */}
          <NavLink to="/dashboard" exact>Dashboard</NavLink>
          <NavLink to="/searchevent">Events</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Create Event</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          {/* <NavLink to="/secret">Secret</NavLink> */}
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/dashboard" component={(props) => <Dashboard user={this.state.user} {...props} resetPic={this.resetPic} />} />
          <Route path="/signup" component={(props) => <Signup user={this.state.user} {...props} resetPic={this.resetPic} resetUser={this.resetUser}/>} />
          <Route path="/login" component={(props) => <Login user={this.state.user} {...props} resetPic={this.resetPic} resetUser={this.resetUser}/>} />
          <Route path="/secret" component={Secret} />

          <Route path="/searchevent/:id" component={Event} />
          <Route path="/editevent/:id" component={EditEvent} />
          <Route path="/favorite" component={SavedEvents} />
          <Route path="/editprofile" component={(props) => <EditProfile {...props} /> } />
          <Route path="/addprofilepicture" component={ (props) => <AddProfilePicture {...props} resetPic={this.resetPic} /> } />
          <Route path="/addevent" component={AddEvent} />
          <Route path="/searchevent" component={SearchEvent} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}