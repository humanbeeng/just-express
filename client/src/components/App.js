import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";
import AnimatedCursor from "./AnimatedCursor";
import Navbar from "./Navbar";
import Bulma from 'bulma/css/bulma.min.css'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Landing = () => <div> HALLO</div>;
const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);
const ding = () => (
  <div>
    <h2>ding</h2>
  </div>
);

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  

  render(){
    return (
      <div>
        <Navbar />
        <AnimatedCursor />
        <div className="container">
          <BrowserRouter>
            <div>
              <Route exact={true} path="/" component={Landing}></Route>
              <Route exact path="/surveys" component={Dashboard}></Route>
              <Route exact path="/surveys/new" component={ding}></Route>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
  
}

export default connect(null, actions)(App);

/*

Notes:
* The Router takes the path as a string and checks whether the string is present(substring)
inside the address typed in the browser.
* We need to add 'exact' parameter inside the router tag in order to show the landing
component only when the path is / but not any other address containing '/'
* If exact isnt added, then when we go to the /surveys, obviously route path '/' is 
present inside the /surveys (a substring) and hence it shows Landing component too
which is undesirable
* We can just type only the exact keyword without having to mention = {true}, React
automatically sets the default value as true

#Connect function
* Connect function gives the component the power to call action creators

*/
