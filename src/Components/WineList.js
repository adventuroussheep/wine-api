import React, { useState, useEffect, memo, Component } from "react";
import axios from "axios";

export const baseUrl = "globalwinescores/latest/";

const API_KEY = process.env.REACT_APP_API_KEY;

class WineList extends Component {
    state = {
        wines: [],
        wineArray: [],
    };
    
    //   Initial API Call
    componentDidMount = async () => {
    const result = await axios
      .get(`${baseUrl}`, {
        headers: {
          Accept: "application/json",
          Authorization: API_KEY
        }
      })
    //   Gets API results, sets wines state to result object
      .then(res => {
        console.log(res.data.results);
        this.setState({ wines: res.data.results });
      })
    //   Takes wines state and turns into Array
      .then(() => { 
          const winesToArray = Array.from(this.state.wines);
          this.setState({wineArray: winesToArray});
          console.log(this.state.wineArray[0].wine + this.state.wineArray[0].wine_id);
        })
  };

  render() {
    return (
      <div>
          {/* Maps over the wineArray to display results */}
        {this.state.wineArray.map(wine => 
        <div key={wine.score + wine.wine_id}>
            <li>{wine.wine}</li>
        </div>
        )}
      </div>
    );
  }
}

export default WineList;
