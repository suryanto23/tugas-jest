import {useState} from 'react'
import DisplayList from './DisplayList';

function NewTodo() {

    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.length) {
        return;
        }

        const newItem = {
        text,
        id: Date.now(),
        };

        setText("");
        setItems(items.concat(newItem));
    };

    return (
        <div>
            <h1>TODOS</h1>
                <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <br />
                <input id="new-todo" value={text} onChange={handleChange} title="comInput"/>
                <button title="comButton">Add #{items.length + 1}</button>
            </form>

            <DisplayList items={items}/>

        </div>
    )
}

export default NewTodo
