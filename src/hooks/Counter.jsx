import React, { useState, Fragment } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    return (
        <Fragment>
            <input type="text" onChange={ e => setName(e.target.value)} />
            <div>{name} has clicked {count} time!</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </Fragment> 
    );
}

export default Counter; 