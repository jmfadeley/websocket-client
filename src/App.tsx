import React from 'react';
import './App.css';
import ControlPanel from './components/control-panel';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Behold my wonders...
      </header>
      <ControlPanel />
    </div>
  );
}

export default App;
