import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Main from './components/main' 


function App() {
  return (
    <div className='app'>
      <NavBar /> 
      <div className = 'div-main' >
        <Main />
        <div className = 'div-main-divider' >
        </div>
      </div>
      <div className = 'div-copyRight'>
        <p>&copy; 2020 MokhtarAli.dev</p>
        <div style={{ flex: '1' }}></div>
        <p>Created by: Mokhtar Ali</p>
      </div>
    </div>
  );
} 

export default App;
