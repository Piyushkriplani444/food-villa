// import React from 'react'
// import Profile from './Profile';
// import ProfileClass from './ProfileClass';

// class About extends React.Component {
//   constructor(props){
//     super(props);
//     // console.log("pp contructor");

//   }

//   componentDidMount(){
//     // console.log("pp componentDidMount");
//   }

//   render () {
//     // sconsole.log("pp render");

//     return (
//       <div>
//         <h1>About us page</h1>
//         <p>This is a food searching app</p>
//         <p>Created By Piyush</p>
//         <Profile  name="Piyush"/>
//         <ProfileClass name="Piyush Kriplani" />
//       </div>
//     )
//   }
// }



// export default About



import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>


        <p>
          This is Food Ordering App 
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;