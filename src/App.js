import React, { Component } from 'react';
import './App.css';

import { Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles"
import {Welcome, CheckStorage} from './Components/Welcome/Welcome';
import WineList from './Components/WineList/WineList';
import NavBar from "./Components/NavBar/NavBar";
// import NavBarbs from './Components/NavBar/NavBarbs';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
// constructor(props){
//   super(props)
//   this.state = {
//     scoreAscDes: '',
//     checkVisibility: this.props.checkVisibility
//   }
// }
  state = {
    visible: '',
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
    const userName = localStorage.getItem('userName');
    
    
    return (
      <div className="App">

      {/* NavBar */}
      {/* <NavBarbs/> */}
       {/* {this.state.visible ? <NavBar/> : null} */}

        {/* Initial Landing page */}
        {!userName ? <Welcome/> : null}
        
        
        {/* Welcome Screen */}
        {userName ? <div className="appWelcomeDiv"><h1>Welcome {userName}</h1>
          <h2>Here are the latest Wine Scores</h2></div>
        : null}
      

      {/* WineList/API Call */}
      {userName ? <WineList/> : null}
      

  {/* Enter Button */}
    {!userName ? <Button href="/" className="enterBtn" variant="contained" color="default" onClick={() => {
        this.checkRender()
      }}>Enter</Button> : null}

    </div>
  );
}
}

export default App;
