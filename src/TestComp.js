import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';


const TestComp = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //         console.log(res);
    //         setUsers(res.data)
    //     })
    // }, []);

    const displayMethod = users.map((user) => {
        return (
            // <div> {user.name} </div>
            <h3>Lode Ka Baal</h3>
        )
    })


    return (
        <div>
            {displayMethod}
        </div>
    );
}

export default TestComp;
