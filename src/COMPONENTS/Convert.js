import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Convert = ({ input, language }) => {

    const [output, setOutput] = useState(null);

    useEffect(() => {
        const timerID = setTimeout(() => {
            Axios.get("https://translation.googleapis.com/language/translate/v2", {
                params: {
                    q: input,
                    target: language,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            }).then((response) => {
                setOutput(response.data.data.translations[0].translatedText);
                console.log(response);
            })
        }, 1000);

        return () => {
            clearTimeout(timerID);
        };
    });


    return (

        <div >
            <h3 className='convertOutput'>Output</h3>
            <div className=' ui items'>
                <div className="item">
                    <div className="content">
                        <div className="description">
                            {output}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Convert;
