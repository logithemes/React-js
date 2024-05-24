import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Get() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
                setLoading(false);
            });
    }, []); // The empty array ensures this runs only once

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data fetched</h1>
            <div>
                {data.map((value) => (
                    <div key={value.id}>
                        <h2>Id: {value.id}</h2>
                        <h2>UserName: {value.UserName}</h2>
                        <h2>Email: {value.email}</h2>
                        <h2>ListOut: {value.listout}</h2>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Get;








// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Get() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:3000/user")
//             .then((response) => setData(response.data))
//             .catch((error) => console.error("Error fetching data: ", error));
//     }, []); // The empty array ensures this runs only once

//     return (
//         <div>
//             <h1>Data fetched</h1>
//             <div>
//                 {data.map((value) => (
//                     <div key={value.id}>
//                         <h2>Id: {value.id}</h2>
//                         <h2>Title: {value.title}</h2>
//                         <h2>Body: {value.body}</h2>
//                         <hr / > 
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Get;
