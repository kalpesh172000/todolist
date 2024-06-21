import { useState } from 'react';
import Item from './Item';

function List() {
    let count = -1;
    const [inputText, setInputText] = useState(""); // Create a state variable to store the input text
    const [items, setItems] = useState([]);

    function addItems(event){
        event.preventDefault();
        const newItem = event.target.elements.itemInput.value;
        setItems(oldItems =>[ ...oldItems, newItem])
        setInputText("");
    }

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <form onSubmit={addItems} className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} name='itemInput' value={inputText}/>
                <button type='submit'>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {
                        items.map(item => { count++; return <Item key={count} item={item} />})
                    }
                </ul>
            </div>
        </form>
    );
}

export default List;
