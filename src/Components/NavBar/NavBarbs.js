import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./navbarbs.css";

class NavBarjs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // scoreAscDes: '',
      checkVisibility: this.props.checkVisibility,
      cartState: []
    };
  }

  checkVisibility() {
    console.log("storage check");
  }

  // Checks for username
  componentDidMount() {
    this.checkVisibility();
    window.addEventListener(this.userName, this.checkVisibility.bind(this));
  }

  render(props) {
    const userName = localStorage.getItem("userName");
    console.log(userName);

    // emptyArr stores cart items from filter
    var emptyArr = JSON.parse(localStorage.getItem("userCart")) || [];

    const cartMap = () => {
      this.setState({ cartState: emptyArr });
    };


    // Cart Popup Display
    const cartPopover = (
      <Popover>
        <Popover.Title as="h2">Cart</Popover.Title>
        <Popover.Content>
          {emptyArr.map((wine, index) => {
            return (
              <div key={index}>
                <div>
                  <h4>{wine.wine}</h4>
                  <li>{wine.vintage}</li>
                  <li>
                    {wine.regions[0]}, {wine.country}
                  </li>
                  <li>Score: {wine.score}</li>
                </div>
                <Button onClick={()=>{
                  var array = [...this.state.cartState];
                  array.splice(index, 1)
                  emptyArr = array;
                  cartMap();
                }
                } variant="danger">Delete</Button>
                <hr></hr>
              </div>
            );
          })}
        </Popover.Content>
      </Popover>
    );

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
          <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>WineScoresAPI</Navbar.Brand>
          {userName ? (
            <>

            {/* Score dropdown */}
              <Nav className="mr-auto">
                <NavDropdown title="Score" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    onClick={this.props.scoreStateDesc}
                    href={`${process.env.PUBLIC_URL}/scoredes`}
                  >
                    Descending
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={this.props.scoreStateAsc}
                    href={`${process.env.PUBLIC_URL}/scoredes`}
                  >
                    Ascending
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Filter route */}
                <Nav.Link href={`${process.env.PUBLIC_URL}/scoredes`}>Filter</Nav.Link>
              </Nav>

              {/* Search Field & Button */}
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>

              {/* Shopping cart button */}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={cartPopover}
              >
                <ShoppingCartOutlined
                  onClick={cartMap}
                  style={{
                    fontSize: "35px",
                    cursor: "pointer",
                    margin: "0 15px",
                    color: "rgba(255, 255, 255, 0.7)"
                  }}
                />
              </OverlayTrigger>
            </>
          ) : null}
        </Navbar>
      </div>
    );
  }
}

export default NavBarjs;
