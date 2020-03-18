import React from 'react';
import logo from './logo.svg';
import './App.css';

// import WineTile from './Components/WineTile';
import WineList from './Components/WineList';
// import WineContainer from './Containers/WineContainer';

function App() {
  return (
    <div className="App">
      {/* <WineContainer/> */}
      <WineList/>
    </div>
  );
}

export default App;
