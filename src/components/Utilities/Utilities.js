import React from 'react';
import {Add as Added, Multiply} from '../Stroge/Stroge'

const Utilities = () => {
    const a=1;
    const b=2;
    const result = Added(a, b)
    const result2= Multiply(a, b)
    return (
        <div>
            <h1>Utilities Component:{result+result2}</h1>
        </div>
    );
};

export default Utilities;