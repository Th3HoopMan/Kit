import React, { useContext, useState } from 'react';
import {KitContext} from './KitContext';


// TODO LIST:



// https://www.amazon.com/Logitech-960-001084-Desktop-Widescreen-Recording/dp/B087V7TFNC/ref=sr_1_3?crid=2W3EDUP6FR4R6&dchild=1&keywords=logitech+webcam&qid=1596320251&sprefix=logitech+%2Caps%2C218&sr=8-3
// https://www.amazon.com/Dimmable-Ringlight-Photography-Compatible-UPGRADED/dp/B07W66QFPR/ref=sr_1_4?dchild=1&keywords=ring+light&qid=1596320272&sr=8-4
// https://www.amazon.com/Good-Smile-Hero-Academia-Shigaraki/dp/B07TTRSKWL/ref=sr_1_13?dchild=1&keywords=nendoroid&qid=1596320288&sr=8-13

class Kit {
    links;
    price;
    title;
}

const KitForm = () => {
    const [items, setItems] = useState([]);
    const [name, setName]= useState('');
    const [item, setItem] = useState('');
    const [kits, setKits] = useContext(KitContext);

    const updateName = e => {
        setName(e.target.value);
    }

    const updateItem = e => {
        setItem(e.target.value);
    }

    const addItem = e => {
        e.preventDefault();
        setItems(prevItems => [...prevItems, item]);
        setItem('');
    }

    const removeItem = (name) => {
        setItems(items.filter((item) => item !== name));
    }

    const createKit = () => {
        let kit = new Kit();
        kit.name = name;
        kit.links = items;
        setKits( prevKits => [...prevKits, kit]);
        console.log({kits});
        setItems([]);
    }

    return(
        <div>
            <label>Kit Name:</label>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <br/>

            <form onSubmit={addItem}>
                <label>Item:</label><br/>
                <input type="text" name="item" value={item} onChange={updateItem}/>
                <br/>
                <button type="submit">Add Item</button>
            </form>

            <br/>
            <br/>
            <br/>

            <div>
                {
                    items.map((item, key) => {
                        return (
                            <div>
                                <li key={key}>{item}</li>
                                <button onClick={() => removeItem(item)}> X </button>
                            </div>
                        );
                    })
                }
            </div>

            <br/>
            <br/>
            <br/>

            <button onClick={createKit}>
                CREATE KIT
            </button>

        </div>
    );
}

export default KitForm;