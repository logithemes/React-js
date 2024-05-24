import React, { createRef } from 'react';

function CreateRef() {
    const value1 = createRef();

    function clickme() {
        console.log(value1);
        value1.current.focus();
        console.log(value1.current.value);
    }
    
    return (
        <div>
            CreateRef
            <h1>CreateRef Input</h1>
            <input type='text' ref={value1} />
            <button onClick={clickme}>createRef btn</button>
        </div>
    );
}

export default CreateRef;
