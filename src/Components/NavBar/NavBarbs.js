import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import "./navbarbs.css";

class NavBarjs extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     scoreAscDes: ''
  //   }
  // }

  // changeScore = () => {
  //   this.setState({scoreAscDes: "scoredes"})
  // }



  state = {
    visible: false,
  }

  

  componentDidMount(){
    // if(!this.state.visible){
    //   alert("no");
      window.addEventListener('storage', () =>
       {
         localStorage.getItem('myValueInLocalStorage')
       })
        // }
  }
  
//   componentWillUpdate(){
//     if (localStorage.getItem('myValueInLocalStorage')){
//       this.setState({visible: true})
//       // alert("there")
//     }
//     else{
//       this.setState({visible: false})
//     }  
// }


// UNSAFE_componentWillUpdate(){
//   if (localStorage.getItem('myValueInLocalStorage')){
//     this.setState({visible: true})
//     // alert("there")
//   }
//   else{
//     this.setState({visible: false})
//   }  
// }

  
  
  render() {

    window.onstorage = () => {
      alert("hello");
    }

    window.addEventListener('storage', () => {
      console.log("listening")
         localStorage.getItem('myValueInLocalStorage')
       })


    return (
      <div className="BSNavWrapper">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">WineScoresAPI</Navbar.Brand>
           {this.state.visible ? <>
          <Nav className="mr-auto">
           <Nav  title="asdfasdf" className="searchByText">Search By: </Nav>
            <NavDropdown title="Score" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.consoleLog} href="scoredes">Descending</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ascending
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
           </> : null } 
        </Navbar>
      </div>
    );
  }
}

export default NavBarjs;
