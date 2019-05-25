import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Welcome to your dashboard</h1>
        <div className="containerDashboard" style={{height: '65vh'}}>
        <div className={'top-left'}>
        <div><Link to={`/editprofile`}><img src="./img/pencil.svg" style={{height: '12vh', marginBottom: '10%', padding: '8%', backgroundColor: '#ff3547', borderRadius:'20px'}}/></Link></div>
        </div>
        <div className={'top-right'}>
        <div><Link to={`/favorite`}><img src="./img/blackbookmark.svg" style={{height: '12vh', marginBottom: '10%', padding: '1%', backgroundColor: '#ff3547', borderRadius:'20px'}}/></Link></div>
        </div>
        <div className={'bottom-left'}>
        <Link to={`/searchevent`}><img src="./img/magnifier.svg" style={{height: '12vh', marginBottom: '10%', padding: '5%', backgroundColor: '#ff3547', borderRadius:'20px'}}/> </Link>
        </div>
        <div className={'bottom-right'}>
        <div><Link to={`/addevent`}><img src="./img/add.svg" 
        style={{height: '12vh', marginBottom: '10%', padding: '5%', backgroundColor: '#ff3547', borderRadius:'20px'}}/></Link></div>
        </div>
      </div>
      </div>
    )
  }
}


{/* <i className="fa fa-search text-dark mr-3"></i> */}