import axios from 'axios'; 
// import { selectFields } from '../Selectors/selectFields';
export const baseUrl = "globalwinescores/latest/";

const API_KEY = process.env.REACT_APP_API_KEY;


export const getWines = async () => {
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
        // this.setState({ wines: res.data.results });
    })
    //   Takes wines state and turns into Array
    return result;

  };