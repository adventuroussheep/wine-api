import React, {Component} from 'react';
import "./404.css";

class NotFound extends Component {
    render() {
      return (
          <div className="notFoundWrapper">
            <h1>404</h1>
            <h3>Page Not Found :(</h3>
          </div>
      )
    }
}

export default NotFound;