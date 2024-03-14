import { Outlet } from 'react-router-dom';
import ProfileFunctionalComponet from './Profile';
import UserContext from '../utils/UserContext.js';
import Profile from './ProfileClass';
import { Component } from 'react';

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
        <h1 className="font-bold p-10 text-xl">About Us Page</h1>

        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}{' '}
            </h4>
          )}
        </UserContext.Consumer>

        <p>This is Food Ordering App</p>
        <Profile />
      </div>
    );
  }
}

export default About;
