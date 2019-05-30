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




      
      <div class="mainContainer" style={{
        backgroundImage: "url(./img/background7.jpg)",
        backgroundSize: "cover",
        height: "90vh",
        width: "100%",
        margin: "0px",
        padding: "3%",
        // marginBottom: "60px",
        overflowX: "hidden"
        
      }}>
      <div class="container1">
        <div class="miniContainer1">
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
{ <h4>Edit profile</h4> }
</div>

        </div>

        <div class="miniContainer2">
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
              { <h4>Save event</h4> }
              </div>
        </div>
      </div>

      <div class="container2">
		  	<div class="middleMiniContainer1">
          
        
        <h1 style={{color: "white", fontWeight: 'bold', fontSize: '28px'}}>Welcome to your dashboard {this.props.user.name}</h1>
        
			</div>
			<div class="middleMiniContainer2">
      <img style={{height: '20vh',     marginTop: '5%',     border: "white solid 2px"}} src={this.props.user.imageUrl} />
			</div>
			<div class="middleMiniContainer3">
					{/* <h1>hi</h1> */}
			</div>
	  </div>

      <div class="container3">
        <div class="miniContainer3">
          <div>
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
            <h4>Find event</h4>
            </div>
            </div>

        <div class="miniContainer4">
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
              
              { <h4>Add event</h4> }
              </div>
              
              </div>
      </div>
    </div>
















    );
  }
}


