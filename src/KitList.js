import React, { useContext } from 'react';
import { KitContext } from './KitContext';

const KitList = () => {
    const [kits, setKits] = useContext(KitContext);

    return(
        <div>
            {
                kits.map((kit) => {
                    return(
                     <div>
                         <h1>{kit.name}</h1>
                         <ul>
                            <li>{kit.links}</li>
                         </ul>
                        
                    </div>
                    );

                })
            }
        </div>
    );
}

export default KitList;