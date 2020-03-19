import React, { Component } from 'react';
import './App.css';

import { Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles"
import {Welcome, CheckStorage} from './Components/Welcome/Welcome';
import WineList from './Components/WineList/WineList';
import NavBar from "./Components/NavBar/NavBar";


class App extends Component {

  state = {
    visible: false,
    welcomeVis: true
  }

  checkRender = () =>{
    if (localStorage.getItem('myValueInLocalStorage'))
    this.setState({visible: true})
    else {
      alert('Please enter a Name');
    }
  }
  

  
  render(){
    const userName = localStorage.getItem('myValueInLocalStorage');
    
    
    return (
      <div className="App">

      {/* NavBar */}
       {this.state.visible ? <NavBar/> : null}

        {/* Initial Landing page */}
        {!this.state.visible ? <Welcome/> : null}
        
        
        {/* Welcome Screen */}
        {this.state.visible ? <div className="appWelcomeDiv"><h1>Welcome {userName}</h1>
          <h2>Here are the latest Wine Scores</h2></div>
        : null}
      

      {/* WineList/API Call */}
      {this.state.visible ? <WineList/> : null}
      

  {/* Enter Button */}
    {!this.state.visible ? <Button className="enterBtn" variant="contained" color="default" onClick={() => {
        this.checkRender()
      }}>Enter</Button> : null}

    </div>
  );
}
}

export default App;
