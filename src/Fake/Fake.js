import React from 'react';
import { LocalStroge } from '../components/Fakedb/Fakedb';

const Fake = (props) => {
    const {name, company, _id} = props.cosmetic;
    
    return (
        <div>
            <button onClick={()=>LocalStroge(_id)}>add localStorage</button>
            <h1>Name:{name}</h1>
            <h2>Company:{company}</h2>
        </div>
    );
};

export default Fake;