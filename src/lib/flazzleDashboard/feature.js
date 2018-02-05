import React from 'react';
import './feature.css';

export default ({ feature, enabled }) => {
    return (<div className="featureContainer">
        <span className="feature">{unCamelCase(`${feature}`)}</span><div>  	
            <div className="checkbox">
                <input defaultChecked={enabled} type="checkbox" id={`${feature}`} />
                <label htmlFor={`${feature}`}></label></div>
            </div>
</div>)
}

const unCamelCase = str => str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
    .replace(/^./, str => str.toUpperCase());
