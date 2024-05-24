import React, { useId } from 'react'

function UseId() {
    var id1 = useId();
    var id2 = useId();

    var style = {
        color: 'red',
        border: '2px',
        
    }

  return (
    <div>UseId
<p id={id1}>this is 1 id</p>
<p id={id2}>this is 2 id</p>
<h2 style={style}>Adding inlie objects style</h2>

    </div>
  )
}

export default UseId