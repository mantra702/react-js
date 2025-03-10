import React, { useState } from 'react'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"

export default function State() {

    const [state, setState] = useState(true);
    return <>

        <button className='btn btn-info' onClick={(e) => setState(!state)}>Show</button>
        {state ? <App /> : ""}
    </>
}