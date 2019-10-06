import React from 'react';
import './App.css';
import Airtable from 'airtable';

import Shifts from './components/Shifts';
import BaseContext from './contexts/BaseContext';

var base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function App() {
  return (
    <BaseContext.Provider value={base}>
        <div className="App">
          <header className="App-header">
            <Shifts />
          </header>
        </div>
    </BaseContext.Provider>
  );
}

export default App;
