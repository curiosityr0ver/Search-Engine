import React, { useState, useEffect } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
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

const Translate = ({ visible, setVisible }) => {
    const [text, setText] = useState("");
    const [selected, setSelected] = useState(options[2]);

    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="">Enter text to be translated</label>
                    <input type="text" value={text} onChange={(event) => { setText(event.target.value) }} />
                </div>
            </form>
            <Dropdown options={options} selected={selected} onSetSelected={setSelected} visible={visible} setVisible={setVisible} />
            <Convert input={text} language={selected.value} />
        </div>
    );
}

export default Translate;
