import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import KitForm from './KitForm'
import KitList from './KitList';
import { KitProvider, KitContext } from './KitContext';
import Kit from './Kit';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [kits, setKits] = useContext(KitContext);

  const showKitForm = () => {

  };

  if (kits.length == 0 && !isFormVisible) {
    return(
      <div>
        <h1>
          You don't currently have any Kits!
        </h1>
        <br/>
        <button onClick={() => setIsFormVisible(true)}>Create Kit</button>
      </div>
    );
  } else {
    return (
      <KitProvider>
        <div className="App">
          <KitForm/>
          <KitList/>
        </div>
      </KitProvider>
    );
  }
}

export default App;
