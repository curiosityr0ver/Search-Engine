import React, { useState } from 'react';
import './AppStyle.css'
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
const items = [
    {
        title: "What is React ?",
        content: "Frontend javascript framework"
    },
    {
        title: "Why use React ?",
        content: "Favorite among engineers"
    },
    {
        title: "How to use React ?",
        content: "Creating components"
    }
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]

const App = () => {

    // const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState("");
    const [showColorPicker, setShowColorPicker] = useState(true);

    const onBodyClick = () => {

        if (showDropdown === "visible") {
            setShowDropdown("")
        }
    }

    return (
        <div style={{ height: "900px" }} onClick={onBodyClick} >
            <button className='ui button black' onClick={() => setShowColorPicker(!showColorPicker)}>Toggle Dropdown</button>
            {showColorPicker === true ? <Translate visible={showDropdown} setShowDropdown={setShowDropdown} /> : null}
        </div>
    );
}

export default App;
