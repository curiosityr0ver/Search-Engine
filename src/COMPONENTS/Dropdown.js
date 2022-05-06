import React from 'react';

const Dropdown = ({ options, selected, onSetSelected }) => {

    const displayMethod = options.map((option) => {
        if (option != selected) {
            return (
                <div key={option.value} className="item" onClick={() => { onSetSelected(option) }}>
                    {option.label}
                </div>
            )
        }
    })

    return (
        <div className='ui form'>
            <div className="field">
                <div className="label">Select a color</div>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.value}</div>
                    <div className="menu visible transition">
                        {displayMethod}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dropdown;
