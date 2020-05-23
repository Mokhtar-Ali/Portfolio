import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Main from './components/main'


function App() {
  return (
    <div className='app'>
      <NavBar />
      <main style={{marginTop: '64px'}}>
        <Main />
      </main>
    </div>
  );
}

export default App;
