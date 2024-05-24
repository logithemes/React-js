import React, { useState } from 'react';
import Class from './Class';

function Functional(props) {
    const [val, setData] = useState({ data: 0 });

    const updateData = () => {
        setData({ data: val.data + 1 });
    };

    return (
        <div>
            <h1>{props.data1}</h1>
            <p>{val.data}</p>
            <button onClick={updateData}>function page updat values</button>
            <h4>{val.data >5?<Class/>:null}</h4>
        </div>
    );
}

export default Functional;
