import React from 'react';
import logo from './logo.svg';
import './App.css';

import client from './client';

type APIType = typeof import('./api/src/procedures/helloname');

const { welcomeUser, helloWorld, helloWorld2, helloWorld3, helloWorld4, helloWorld5, helloWorld17 }: APIType = client('http://localhost:8080/rpc');

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={async () => {
            console.log(await helloWorld2("testing"));
        }}>Click</button>
      </header>
    </div>
  );
}

export default App;
