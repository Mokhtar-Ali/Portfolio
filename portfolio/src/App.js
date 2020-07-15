import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Main from './components/main'


function App() {
  return (
    <div className='app'>
      <NavBar />
      <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column' }}>
        <Main />
        <div style={{ flex: '1', margin: '150px' }}>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <p style={{ color: 'white', padding: '10px', margin: '20px'}}>&copy; 2020 MokhtarAli.dev</p>
        <div style={{ flex: '1' }}></div>
        <p style={{ color: 'white', padding: '10px', margin: '20px'}}>Created by: Mokhtar Ali</p>
      </div>
    </div>
  );
}

export default App;
