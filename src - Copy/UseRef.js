import React, { useRef } from 'react'

function UseRef() {

    var data3 = useRef (0);
    function handle(){
        data3.current = data3.current + 1
        console.log(data3);
    }


  return (
    <div>UseRef
        <p>{data3.current}</p>
        <button onClick={handle}>useref update</button>

    </div>
  )
}

export default UseRef