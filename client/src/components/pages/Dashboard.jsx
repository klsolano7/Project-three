import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

export default class Dashboard extends Component {
  state = {
    user: {
      imageUrl: '', 
      username:''


    }
  };

  componentDidMount() {
    //let user = api.getLocalStorageUser();
    let user = this.props.user
    console.log(user);
    this.setState({ user });
  }


  
  resetPic = url => {
    this.setState({
      user: { ...this.state.user, imageUrl: url }
    });
  };



  render() {
    console.log(this.state)
    return (












      <div >
        <h2 style={{color: "black"}}>Welcome to your dashboard </h2>
        <h2>{this.props.user.name}</h2>
        <img style={{height: '30vh'}} src={this.props.user.imageUrl} />

        
        <div className="containerDashboard" style={{ height: "50vh", marginTop: "2%" }}>
          <div className={"top-left"}>
            <div>
              <Link to={`/editprofile`}>
                <img
                  src="./img/pencil.svg"
                  style={{
                    height: "12vh",
                    marginBottom: "10%",
                    padding: "8%",
                    backgroundColor: "#ff3547",
                    borderRadius: "20px"
                  }}
                />
              </Link>
            </div>
          </div>
          <div className={"top-right"}>
            <div>
              <Link to={`/favorite`}>
                <img
                  src="./img/blackbookmark.svg"
                  style={{
                    height: "12vh",
                    marginBottom: "10%",
                    padding: "10%",
                    backgroundColor: "#ff3547",
                    borderRadius: "20px"
                  }}
                />
              </Link>
            </div>
          </div>
          <div className={"bottom-left"}>
            <Link to={`/searchevent`}>
              <img
                src="./img/magnifier.svg"
                style={{
                  height: "12vh",
                  marginBottom: "10%",
                  padding: "5%",
                  backgroundColor: "#ff3547",
                  borderRadius: "20px"
                }}
              />{" "}
            </Link>
          </div>
          <div className={"bottom-right"}>
            <div>
              <Link to={`/addevent`}>
                <img
                  src="./img/add.svg"
                  style={{
                    height: "12vh",
                    marginBottom: "10%",
                    padding: "5%",
                    backgroundColor: "#ff3547",
                    borderRadius: "20px"
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>













    );
  }
}


