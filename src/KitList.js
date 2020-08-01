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