import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spinner, ToggleButtonGroup, ToggleButton, InputGroup, FormControl, Form } from "react-bootstrap";
import "./score.css";

var sortAscDesc = localStorage.getItem('scoreLocalStorage');
var baseUrl = `globalwinescores/latest/?ordering=${sortAscDesc}&limit=20&color=red&color=white`;
const API_KEY = process.env.REACT_APP_API_KEY;





function Scores(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  
  // API Hook 
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

      {isLoading ? <div className="spinner"><Spinner animation="border" role="status">
        </Spinner><p>Loading...</p></div> : null}


    <div className="sortMenuWrapper">
{/* Score Sort */}
      <ToggleButtonGroup className="scoreSortWrapper" type="radio" name="options">
        {/* <h3 className="sortTitle">Score:</h3>
         */}
          <InputGroup.Text type="number" className="dateInput" id="inputGroup-sizing-default">Score: </InputGroup.Text>
        <ToggleButton  variant='outline-dark' value={1}>Descending</ToggleButton>
        <ToggleButton variant='outline-dark' value={2}>Ascending</ToggleButton>
      </ToggleButtonGroup>    

{/* Color Sort */}
  <ToggleButtonGroup className="colorSortWrapper" type="radio" name="options">
        {/* <h3 className="sortTitle">Color: </h3> */}
        <InputGroup.Text type="number" className="dateInput" id="inputGroup-sizing-default">Color: </InputGroup.Text>
        <ToggleButton size="" variant='outline-dark' value={1}>Red</ToggleButton>
        <ToggleButton size="" variant='outline-dark' value={2}>White</ToggleButton>
        <ToggleButton size="" variant='outline-dark' value={3}>Pink</ToggleButton>
      </ToggleButtonGroup>   


      {/* Date Sort */}
      <InputGroup xs lg="2" className="dateSortWrapper">
    <InputGroup.Prepend>
      <InputGroup.Text type="number" className="dateInput" id="inputGroup-sizing-default">Year: </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    placeholder="'eg: 1981'"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
    <Form.Control.Feedback type="invalid">
            Please provide a valid year.
          </Form.Control.Feedback>
  </InputGroup>




{/* Submit Search */}
  <Button className="sortSubmitBtn" variant="dark">Submit</Button>
</div>
  
      <div className="scoreWrapper">
        {data.map(item => (
          <li className="scoreList" key={item.score + item.wine_id}>
            <span>
              <p>{item.wine}</p>
              <p>{item.score} </p>
              <Button className="addButton" onClick={()=>{
                alert(item.wine)
              }} variant="success">Add</Button>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Scores;
