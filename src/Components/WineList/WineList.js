import React, { useState, useEffect, memo, Component } from "react";
import axios from "axios";
import "./winelist.css";

export const baseUrl = "globalwinescores/latest/?limit=21";

const API_KEY = process.env.REACT_APP_API_KEY;


class WineList extends Component {
  state = {
    wines: [],
    wineArray: [],
    visible: false,
    loading: true
  };


  //   Initial API Call
  componentDidMount = async () => {
    
    // checkLoading = () =>{
    //   if (this.state.wineArray && this.state.wineArray.length > 0)
    //   this.setState({loading: false})
    // }

    
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
      <div className="wineListWrapper">
          {/* Maps over the wineArray to display results */}
        {!this.state.wineArray.length ? <p>Loading...</p> : null}

        {this.state.wineArray.map(wine => 
        <div className="wineTile" key={wine.score + wine.wine_id}>
            {!this.state.visible ? <div>
              <h2 className="wineName">{wine.wine}</h2>
              <li className="wineVintage">{wine.vintage}</li>
              <li className="wineLocation">{wine.regions[0]}, {wine.country}</li>

              <div className="bottomContainer">
              <div className="reviewDiv">
                <li>Total Reviews: {wine.journalist_count}</li>
              </div>
              <div className="scoreDiv">
                <li>Score: {wine.score}</li>
              </div>
              </div>
              </div> : null}
        </div>

        )}
      </div>
    );
  }
}

export default WineList;
