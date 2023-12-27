import React from 'react';
import './App.css';

// import files
// import homepage from './component/HeaderPage';
import SideBar from './component/sideBar';
import Details from './component/About';

function App() {
  return (
    <div>
      <SideBar />
      <Details />
    </div>
  );
}

export default App;
