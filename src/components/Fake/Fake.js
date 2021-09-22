import React from 'react';
import { LocalStroge, RemoveDb } from '../Fakedb/Fakedb';
import "./Fake.css"

const Fake = (props) => {
    const {name, company, _id} = props.cosmetic;
    
    return (
        <div className="fake">
            <h1>Name:{name}</h1>
            <h2>Company:{company}</h2>
            <button onClick={()=>LocalStroge(_id)}>Purchese</button>
            <button onClick={()=> RemoveDb(_id)}>Remove</button>
        </div>
    );
};

export default Fake;