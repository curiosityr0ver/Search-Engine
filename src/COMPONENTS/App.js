import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
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

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown options={options} selected={selected} onSetSelected={setSelected} />
        </div>
    );
}

export default App;
