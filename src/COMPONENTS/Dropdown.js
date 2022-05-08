import React, { useState, useEffect } from 'react';
import './DropdownStyle.css'

const Dropdown = ({ options, selected, onSetSelected, visible, setVisible }) => {

    const [active, setActive] = useState(null);

    useEffect(() => {
        visible === "visible" ? setActive("active") : setActive(null);
    });

    const displayMethod = options.map((option) => {

        if (option != selected) {
            console.log(option)
            console.log(selected)
            return (
                <div className='item' onClick={() => { onSetSelected(option) }} >{option.label}</div>
                // <div key={option.value} className="item" onClick={() => { onSetSelected(option) }}>{option.label} </div>
            )
        }
    })

    const onListClick = () => {

        if (visible === "visible") {
            console.log("hey")
            setActive(null)
        } else {
            setVisible("visible");
            console.log("hey yo")
            setActive("active")
        }
    }

    return (
        <div className="">
            <div className='ui form'>
                <div className="field">
                    <div className="label">Select a language</div>
                    <div className={"ui selection dropdown visible " + active} onClick={onListClick} >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div id='listItem' className={"menu " + visible + " transition"}>
                            {displayMethod}
                        </div>
                    </div>
                </div>
            </div>
            {/* <button id='btn' className={'ui button ' + selected.value}>{selected.value}</button> */}
        </div>
    );
}

export default Dropdown;
