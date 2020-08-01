import React, { useState, createContext } from 'react';

export const KitContext = createContext();

export const KitProvider = props => {
    const [kits, setKits] = useState([]);
    return(
        <KitContext.Provider value={[kits, setKits]}>
            {props.children}
        </KitContext.Provider>
    );
}