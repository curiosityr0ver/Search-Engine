import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const VideoCarousalHook = () => {
    const [term, setTerm] = useState(null);
    const [results, setResults] = useState(null);

    useEffect(() => {
        console.log(term);

        const timerID = setTimeout(() => {
            Axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    key: "AIzaSyAMX6T47cBcaVYJNxetqD1WLMC7N3GAlPo",
                    q: term
                }
            })
                .then(res => {
                    console.log(res)
                    setResults(res.data.items);
                    // console.log(results); 
                })
        }, 900);

        return () => {
            clearTimeout(timerID);
        }
    });

    const displayMethod = () => {
        if (results) {
            return results.map((result) => {
                console.log(result.snippet.title)
                return <div>{result.snippet.title}</div>
            })
        }
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </div>
            <div>
                {displayMethod()}
            </div>
        </div>
    );
}

export default VideoCarousalHook;
