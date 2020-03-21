// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./score.css";

// const baseUrl = "globalwinescores/latest/?ordering=-score";
// const API_KEY = process.env.REACT_APP_API_KEY;

// function Scores() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(`${baseUrl}`, {
//         headers: {
//           Accept: "application/json",
//           Authorization: API_KEY
//         }
//       });

//       console.log(result.data.results);
//       setData(result.data.results);
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
// <br></br><br></br><br></br><br></br>
//         {isLoading ? <p>Loading...</p> : null}

//       <ul>
//         {data.map(item => (
//           <li className="scoreList" key={item.score + item.wine_id}>
//             <p>{item.wine}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Scores;
