import React from 'react';
import "./welcome.css"


export const Welcome = () => {

  const [value, setValue] = React.useState(localStorage.getItem('myValueInLocalStorage') || '');
 
  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);
      
  const onChange = event => setValue(event.target.value);
  
  return (
    <div className="welcomeDiv">
      <h1>Please input a name to start</h1>
      <input type="text" onChange={onChange} />
    </div>
  );
};



export const CheckStorage = () =>{
    function checkStorage(){
        console.log("hello");
    }

    return(<button onClick={checkStorage}  type="submit">Submit</button>
    )
}