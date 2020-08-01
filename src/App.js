import React from 'react';
import logo from './logo.svg';
import './App.css';

import KitForm from './KitForm'
import KitList from './KitList';
import { KitProvider } from './KitContext';
import Kit from './Kit';

function App() {
  return (
    <KitProvider>
      <div className="App">

        {/* If no kits have been create show empty message */}

        {/* Else Default State */}
        <KitForm/>
        <KitList/>
      </div>
    </KitProvider>
  );
}

export default App;
