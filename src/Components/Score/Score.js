import React, { useState, useEffect } from "react";
import axios from "axios";
import date from "date-and-time";
import {
  Button,
  Spinner,
  ToggleButtonGroup,
  ToggleButton,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";
import "./score.css";

var sortAscDesc = localStorage.getItem("scoreLocalStorage");
var baseUrl = `globalwinescores/latest/?ordering=${sortAscDesc}&limit=20`;

const API_KEY = process.env.REACT_APP_API_KEY;

function Scores(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  var [year, setYear] = useState("");
  var [something, scoreSelection] = useState("");
  var scoreSelection1 = "";
  var colorSelection = "";

  var userScore = localStorage.getItem('yearSelect');


  // Vars for year selection
  let minOffset = 0,
    maxOffset = 120;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }
  const yearList = allYears.map(x => {
    return <option key={x}>{x}</option>;
  });



  // API Hook
  useEffect(() => {
    localStorage.setItem("colorSelect", "");
    localStorage.setItem("scoreSelect", "");
    localStorage.setItem("yearSelect", "");
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



   // API filter
  const filterSearch = () => {
    console.log(baseUrl);
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
  }
  // }, []);

  // Submit button API Call and Validation

  const searchValidation = () => {
    // console.log(localStorage.getItem("colorSelect"));
    // console.log(localStorage.getItem("scoreSelect"));
    // console.log(localStorage.getItem("yearSelect"));

    // If no options, no valid year, all optons
    if (!localStorage.getItem("yearSelect") && !localStorage.getItem("scoreSelect") && !localStorage.getItem("colorSelect")) {
      alert("Please enter search options to continue");
    }
    if (
      localStorage.getItem("yearSelect").length !== 4 &&
      localStorage.getItem("yearSelect").length !== 0 &&
      !localStorage.getItem("scoreSelect") &&
      !localStorage.getItem("colorSelect")
    ) {
      alert("Please enter a Year");
    }
    if (localStorage.getItem("yearSelect").length === 4 && localStorage.getItem("scoreSelect") && localStorage.getItem("colorSelect")) {
      baseUrl = `globalwinescores/latest/?ordering=${localStorage.getItem("scoreSelect")}&limit=20&vintage=${localStorage.getItem("yearSelect")}&color=${localStorage.getItem("colorSelect")}`;
      console.log("all There");
      console.log(baseUrl);
      filterSearch();

      // if Year routes
    }
    if (localStorage.getItem("yearSelect").length === 4 && localStorage.getItem("scoreSelect") && !localStorage.getItem("colorSelect")) {
      baseUrl = `globalwinescores/latest/?ordering=${localStorage.getItem("scoreSelect")}&limit=20&vintage=${localStorage.getItem("yearSelect")}`;
      console.log("year and score");
      console.log(baseUrl);
      filterSearch();
    }
    if (localStorage.getItem("yearSelect").length === 4 && !localStorage.getItem("scoreSelect") && localStorage.getItem("colorSelect")) {
      baseUrl = `globalwinescores/latest/?color=${localStorage.getItem("colorSelect")}&limit=20&vintage=${localStorage.getItem("yearSelect")}`;
      console.log("year and color");
      console.log(baseUrl);
      filterSearch();
    }
    if (localStorage.getItem("yearSelect").length === 4 && !localStorage.getItem("scoreSelect") && !localStorage.getItem("colorSelect")) {
      baseUrl = `globalwinescores/latest/?limit=20&vintage=${localStorage.getItem("yearSelect")}`;
      console.log(localStorage.getItem("scoreSelect"));
      console.log("year only");
      console.log(baseUrl);
      filterSearch();
    }

    // if Score routes
    if (
      localStorage.getItem("scoreSelect") &&
      (localStorage.getItem("yearSelect").length !== 4 || localStorage.getItem("yearSelect").length <= 3) &&
      !localStorage.getItem("colorSelect")
    ) {
      baseUrl = `globalwinescores/latest/?ordering=${localStorage.getItem("scoreSelect")}`;
      console.log("score only");
      console.log(baseUrl);
      filterSearch();
    }
    if (
      localStorage.getItem("scoreSelect") &&
      (localStorage.getItem("yearSelect").length !== 4 || localStorage.getItem("yearSelect").length <= 3) &&
      localStorage.getItem("colorSelect")
    ) {
      baseUrl = `globalwinescores/latest/?ordering=${localStorage.getItem("scoreSelect")}&color=${localStorage.getItem("colorSelect")}`;
      console.log("score and color");
      console.log(baseUrl);
      filterSearch();
    }

    if (
      !localStorage.getItem("scoreSelect") &&
      (localStorage.getItem("yearSelect").length !== 4 || localStorage.getItem("yearSelect").length <= 3) &&
      localStorage.getItem("colorSelect")
    ) {
      baseUrl = `globalwinescores/latest/?color=${localStorage.getItem("colorSelect")}`;
      console.log("color only");
      console.log(baseUrl);
      filterSearch();
    }
  }

  



  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <Spinner animation="border" role="status"></Spinner>
          <p>Loading...</p>
        </div>
      ) : null}

      {!isLoading ? (
        <div className="sortMenuWrapper">

          {/* Score Sort */}
          <ToggleButtonGroup
            className="scoreSortWrapper"
            type="radio"
            name="options"
          >
            <InputGroup.Text
              type="number"
              className="dateInput"
              id="inputGroup-sizing-default"
            >
              Score:{" "}
            </InputGroup.Text>

            <ToggleButton
            onClick={() => localStorage.setItem("scoreSelect", "-score")}
              // onClick={() => (scoreSelection = something = "-score")}
              variant="outline-dark"
              value={1}
            >
              Descending
            </ToggleButton>

            {/* <ToggleButton onClick={() => scoreSelection = 'score'} variant='outline-dark' value={2}>Ascending</ToggleButton>
      </ToggleButtonGroup>     */}
            <ToggleButton
            onClick={() => localStorage.setItem("scoreSelect", "score")}
              // onClick={() => (scoreSelection = "score")}
              variant="outline-dark"
              value={2}
            >
              Ascending
            </ToggleButton>
          </ToggleButtonGroup>



          {/* Color Sort */}
          <ToggleButtonGroup
            className="colorSortWrapper"
            type="radio"
            name="options"
          >
      
            <InputGroup.Text
              type="number"
              className="dateInput"
              id="inputGroup-sizing-default"
            >
              Color:{" "}
            </InputGroup.Text>
            <ToggleButton
            onClick={() => localStorage.setItem('colorSelect', "red")}
              // onClick={() => (colorSelection = "red")}
              variant="outline-dark"
              value={1}
            >
              Red
            </ToggleButton>
            <ToggleButton
            onClick={() => localStorage.setItem('colorSelect', "white")}
              // onClick={() => (colorSelection = "white")}
              variant="outline-dark"
              value={2}
            >
              White
            </ToggleButton>
            <ToggleButton
            onClick={() => localStorage.setItem('colorSelect', "pink")}

              // onClick={() => (colorSelection = "pink")}
              variant="outline-dark"
              value={3}
            >
              Pink
            </ToggleButton>
          </ToggleButtonGroup>



          {/* Date Sort */}
          <InputGroup xs lg="2" className="dateSortWrapper">
            <InputGroup.Prepend>
              <InputGroup.Text
                type="number"
                className="dateInput"
                id="inputGroup-sizing-default"
              >
                Year:{" "}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              onChange={event => {
                localStorage.setItem("yearSelect", event.target.value)
                // setYear(event.target.value);
              }}
              placeholder="'eg: 1981'"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid year.
            </Form.Control.Feedback>
          </InputGroup>



          {/* Submit Search */}
          <Button
            onClick={searchValidation}
            className="sortSubmitBtn"
            variant="dark"
          >
            Submit
          </Button>
        </div>
      ) : null}

      <div className="scoreWrapper">
        {data.map(item => (
          <li className="scoreList" key={item.score + item.wine_id}>
            <span>
              <p>{item.wine}</p>
              <p>{item.score} </p>
              <p>{item.color}</p>
              <p>{item.vintage}</p>
              <Button
                className="addButton"
                onClick={() => {
                  alert(item.wine);
                  console.log(scoreSelection);
                  console.log(colorSelection);
                  // console.log(userYear);
                }}
                variant="success"
              >
                Add
              </Button>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Scores;
