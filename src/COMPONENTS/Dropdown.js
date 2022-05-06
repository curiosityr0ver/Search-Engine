import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';

const Dropdown = ({ options, selected, onSetSelected }) => {
    const [visible, setVisible] = useState(null);
    const [active, setActive] = useState(null);

    const displayMethod = options.map((option) => {
        if (option !== selected) {
            return (
                <div key={option.value} className="item" onClick={() => { onSetSelected(option) }}>
                    {option.label}
                </div>
            )
        }
    })

    const onListClick = () => {

        if (visible == "visible") {
            console.log("hey")
            setVisible(null)
            setActive(null)
        } else {
            console.log("hey yo")
            setVisible("visible")
            setActive("active")
        }
    }

    return (
        <div className='ui form'>
            <div className="field">
                <div className="label">Select a color</div>
                <div className={"ui selection dropdown visible " + active} onClick={onListClick} >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.value}</div>
                    <div className={"menu " + visible + " transition"}>
                        {displayMethod}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dropdown;
