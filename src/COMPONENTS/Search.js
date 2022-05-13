import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const Search = () => {

    const [term, setTerm] = useState(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (term != null) {
                Axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        origin: "*",
                        format: "json",
                        action: "query",
                        list: 'search',
                        srsearch: term
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        if (response.data.query != null) {
                            setResults(response.data.query.search)
                        }
                    }
                })
            }
        }, 400);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [term]);

    const onType = (event) => {
        // console.log(event.target.value)
        setTerm(event.target.value)
    }

    const resultRender = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className='ui button' href={`https://en.wikipedia.org/wiki/${result.title}`} target="_blank" >Go</a>
                </div>
                <div className="content">
                    <div className="header"><h3>{result.title}</h3></div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={onType} />
                </div>
            </div>
            <div className='ui celled list'>
                {resultRender}
            </div>
        </div>
    )
}

export default Search;
