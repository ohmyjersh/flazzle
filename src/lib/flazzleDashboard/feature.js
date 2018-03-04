import React from 'react';
import PropTypes from 'prop-types';
import './feature.css';

const Feature = ({ feature, enabled }) => {
    return (<div className="featureContainer">
    <div>
        <div className="checkbox">
            <input defaultChecked={enabled} type="checkbox" id={`${feature}`} />
            <label htmlFor={`${feature}`}></label>
        </div>
        </div>
        <span className="feature">{unCamelCase(`${feature}`)}</span>
    </div>)
}

Feature.prototype = {
    feature: PropTypes.string.isRequired,
    enabled: PropTypes.bool.isRequired
}

export default Feature;

const unCamelCase = str => str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
    .replace(/^./, str => str.toUpperCase());
