import React, { useState, useEffect } from "react";
import axios from "axios";
import "./score.css";

var sortAscDesc = localStorage.getItem('scoreLocalStorage');
var baseUrl = `globalwinescores/latest/?ordering=${sortAscDesc}&limit=20`;
const API_KEY = process.env.REACT_APP_API_KEY;

// `asdfas${baseurel}dfasdf`


function Scores(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${baseUrl}`, {
        headers: {
          Accept: "application/json",
          Authorization: API_KEY
        }
      });

      console.log(baseUrl);
      console.log(result.data.results);
      setData(result.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isLoading ? <p>Loading...</p> : null}

      {/* Props test */}
      <div>
        <button>{props.title}</button>
      </div>
      {/* End of test */}

      <div className="scoreWrapper">
        {data.map(item => (
          <li className="scoreList" key={item.score + item.wine_id}>
            <span>
              <p>{item.wine}</p>
              <p>{item.score} </p>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Scores;
