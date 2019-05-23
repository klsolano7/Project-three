import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Welcome to your dashboard</h1>
        <div><Link to={`/editprofile`}>Edit profile</Link></div>
        <div><Link to={`/addevent`}>Add event</Link></div>
        <div><Link to={`/searchevent`}>Search for an event</Link></div>
        <div><Link to={`/favorite`}>Saved events</Link></div>
      </div>
    )
  }
}
