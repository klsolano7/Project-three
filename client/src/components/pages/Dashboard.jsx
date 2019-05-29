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
      // <div>
      //   <div className="theCenter">
      // <h1>hi</h1>
      // <div>
      //      <Link to={`/editprofile`}>
      //          <img
      //           src="./img/pencil.svg"
      //             style={{
      //               height: "12vh",
      //               marginBottom: "10%",
      //               padding: "8%",
      //               backgroundColor: "#ff3547",
      //               borderRadius: "20px"
      //             }}
      //           />
      //         </Link>
      //         <Link to={`/favorite`}>
      //      <img
      //             src="./img/blackbookmark.svg"
      //             style={{
      //               height: "12vh",
      //               marginBottom: "10%",
      //               padding: "10%",
      //               backgroundColor: "#ff3547",
      //               borderRadius: "20px"
      //             }}
      //           />
      //         </Link>
      //               <Link to={`/searchevent`}>
      //         <img
      //           src="./img/magnifier.svg"
      //           style={{
      //             height: "12vh",
      //             marginBottom: "10%",
      //             padding: "5%",
      //             backgroundColor: "#ff3547",
      //             borderRadius: "20px"
      //           }}
      //         />{" "}
      //       </Link>
      //       <Link to={`/addevent`}>
      //       <img
      //             src="./img/add.svg"
      //             style={{
      //               height: "12vh",
      //               marginBottom: "10%",
      //               padding: "5%",
      //               backgroundColor: "#ff3547",
      //               borderRadius: "20px"
      //             }}
      //           />
      //         </Link>



      // </div>
      //   </div>
      // </div>











      <div >
        <h1 style={{color: "black"}}>Welcome to your dashboard {this.props.user.username}</h1>
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
          {/* <div><h1>center</h1></div> */}
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












      // <div class="container emp-profile">
      //       <form method="post">
      //           <div class="row">
      //               <div class="col-sm-4">
      //                   <div class="profile-img">
      //                       <img width={"100%"} height={"100%"} src={this.props.user.imageUrl} />

      //                   </div>
      //               </div>
      //               <div class="col-md-6">
      //                   <div class="profile-head">
      //                               <h5>
      //                               {this.props.user.username}
      //                               </h5>
      //                               <h6>
      //                                   Web Developer and Designer
      //                               </h6>
      //                               <p class="proile-rating">RANKINGS : <span>8/10</span></p>
      //                       <ul class="nav nav-tabs" id="myTab" role="tablist">
      //                           <li class="nav-item">
      //                               <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
      //                           </li>
      //                           <li class="nav-item">
      //                               <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
      //                           </li>
      //                       </ul>
      //                   </div>
      //               </div>
      //               <div class="col-md-2">
      //                   <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
      //               </div>
      //           </div>
      //           <div class="row">
      //               <div class="col-md-4">
      //                   <div class="profile-work">
      //                       <p>WORK LINK</p>
      //                       <a href="">Website Link</a><br/>
      //                       <a href="">Bootsnipp Profile</a><br/>
      //                       <a href="">Bootply Profile</a>
      //                       <p>SKILLS</p>

      //                   </div>
      //               </div>
      //               <div class="col-md-8">
      //                   <div >
      //                       <div >
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>User Id</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>Kshiti123</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Name</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>Kshiti Ghelani</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Email</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>kshitighelani@gmail.com</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Phone</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>123 456 7890</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Profession</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>Web Developer and Designer</p>
      //                                       </div>
      //                                   </div>
      //                       </div>
      //                       <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Experience</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>Expert</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Hourly Rate</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>10$/hr</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Total Projects</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>230</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>English Level</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>Expert</p>
      //                                       </div>
      //                                   </div>
      //                                   <div class="row">
      //                                       <div class="col-md-6">
      //                                           <label>Availability</label>
      //                                       </div>
      //                                       <div class="col-md-6">
      //                                           <p>6 months</p>
      //                                       </div>
      //                                   </div>
      //                           <div class="row">
      //                               <div class="col-md-12">
      //                                   <label>Your Bio</label><br/>
      //                                   <p>Your detail description</p>
      //                               </div>
      //                           </div>
      //                       </div>
      //                   </div>
      //               </div>
      //           </div>
      //       </form>           
      //   </div>
    );
  }
}


