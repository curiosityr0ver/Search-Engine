import React, { useState } from 'react';
import Accordion from './Accordion';
import './AppStyle.css';
import Dropdown from './Dropdown';
import Header from './Header';
import Search from './Search';
import Translate from './Translate';
import VideoCarousalHook from './VideoCarousalHook';

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
    const [showDropdown, setShowDropdown] = useState("");
    const [showColorPicker, setShowColorPicker] = useState(true);

    const onBodyClick = () => {
        if (showDropdown === "visible") {
            setShowDropdown("")
        }
    }

    const displayMethod = () => {

        switch (window.location.pathname) {
            case "/translate":
                return <Translate visible={showDropdown} setVisible={setShowDropdown} />
            case "/dropdown":
                return <Dropdown options={options} selected={selected} onSetSelected={setSelected} visible={showDropdown} setVisible={setShowDropdown} />
            case "/list":
                return <Search />
            case "/youtube":
                return <VideoCarousalHook />
            default:
                return <Accordion items={items} />
        }
    }

    return (
        <div id='home' style={{ height: "900px" }} onClick={onBodyClick} >
            <Header />
            {displayMethod()}
        </div>
    );
}

export default App;
