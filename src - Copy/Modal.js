import React, { useState } from 'react';

function Modal() {
    const [open, setOpen] = useState(false);

    const modalStyle = {
        display: open ? 'block' : 'none',
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    };

    const modalContentStyle = {
        backgroundColor: '#fefefe',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%',
        maxWidth: '600px'
    };

    const closeStyle = {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold'
    };

    return (
        <div>
            <button onClick={() => setOpen(true)}>Login</button>
            <div style={modalStyle}>
                <div style={modalContentStyle}>
                    <span style={closeStyle} onClick={() => setOpen(false)}>&times;</span>
                    <p>Content to display in the modal</p>
                </div>
            </div>
            <p>Hai, this is Logesh Kumar. It's my first project in React.js.</p>
        </div>
    );
}

export default Modal;
