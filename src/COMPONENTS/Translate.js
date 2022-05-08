import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]

const Translate = ({ visible, setShowDropdown }) => {

    const [selected, setSelected] = useState(options[2]);

    useEffect(() => {

        // console.log(selected)

    });

    return (
        <div>
            <Dropdown options={options} selected={selected} onSetSelected={setSelected} visible={visible} setShowDropdown={setShowDropdown} />


        </div>
    );
}

export default Translate;
