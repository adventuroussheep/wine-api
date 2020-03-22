import React from 'react';
import "./welcome.css"


export const Welcome = () => {

  const [value, setValue] = React.useState(localStorage.getItem('userName') || '');
 
  React.useEffect(() => {
    localStorage.setItem('userName', value);
  }, [value]);
      
  const onChange = event => setValue(event.target.value);
  
  return (
    <div className="welcomeDiv">
      <h1>Please input a name to start</h1>
      <input type="text" onChange={onChange} />
    </div>
  );
};
