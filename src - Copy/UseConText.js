import React, { useState, createContext, useContext } from 'react';

// Creating a context
const MyContext = createContext();

function UseConText() {
    var [data2] = useState("Usecontext");

    return (
        <MyContext.Provider value={data2}>
            UseconText
            <Component1 />
        </MyContext.Provider>
    );
}

function Component1() {
    // Consuming the context
    var dataFromContext = useContext(MyContext);

    return (
        <div>
            Component1
            <Component2 data={dataFromContext} />
        </div>
    );
}

function Component2({ data }) {
    return (
        <div>
            Component2
            <p>{data}</p>
        </div>
    );
}

export default UseConText;
