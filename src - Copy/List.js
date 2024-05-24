import React from 'react';

function List() {
    var nav = ["home", "about", "blog"];
    var nav1 = nav.map((val) => <p key={val}>{val}</p>); // Added key for React rendering optimization


    // how to pass array values in div elements two ways

    //way 1
    var items = [
        { name: "book", price: "150", img : <img style={{ width: "200px" }} src={require('../src/img/1.jpg')} alt="Description of the image" /> },
        { name: "jbl", price: "1200" },
        { name: "mouse", price: "200" },
    ];
    
    var items1 = items.map((val) => <p key={val.name}>{val.name}, {val.price}</p>); // Added key for React rendering optimization

    return (
        <div>
            List
            <div>
                <h1>{nav1}</h1>
                <h2>{items1}</h2>
                <img style={{ width: "200px" }} src={require('../src/img/1.jpg')} alt="Description of the image" />
             

                {/* <img src={require('../')} alt=''/> */}

            </div>

            <div>
                {/* way 2 */}
                {items.map((val, index) => (
                    <div key={index}> {/* Added key for React rendering optimization */}
                        <p>{val.name}</p>
                        <p>{val.price}</p>
                        <p>{val.img}</p>
                      
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
