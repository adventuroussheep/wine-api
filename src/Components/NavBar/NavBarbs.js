import React, { Component, useEffect } from "react";
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

  constructor(props){
    super(props);
    this.state = {
      // scoreAscDes: '',
      checkVisibility: this.props.checkVisibility
    }
  }

  // changeScore = () => {
  //   this.setState({scoreAscDes: "scoredes"})
  // }



  state = {
    // scoreAscDes: '',
    visible: false,
    title: 'scorePropsTest'
  }

  checkVisibility(){
    console.log("storage check")
  }

componentDidMount(){
  this.checkVisibility();
  window.addEventListener(this.userName, this.checkVisibility.bind(this));
}
    
  
  render(props) {
    const userName = localStorage.getItem('userName');
    console.log(userName);

    // function Something(){
    //   React.useEffect(()=>{
    //     function checkStorage(){
    //       this.setState({visible: true})
    //     }
    //     window.addEventListener(this.userName, Something)
    //   })
    // }

    

    return (
      <div className="BSNavWrapper">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">WineScoresAPI</Navbar.Brand>
           {userName ? <>
          <Nav className="mr-auto">
           <Nav  title="asdfasdf" className="searchByText">Search By: </Nav>
            <NavDropdown title="Score" id="basic-nav-dropdown">
           <NavDropdown.Item onClick={this.props.scoreStateDesc} href="scoredes">Descending{this.props.scoreAscDes}</NavDropdown.Item>
              <NavDropdown.Item onClick={this.props.scoreStateAsc} href="scoredes">
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
