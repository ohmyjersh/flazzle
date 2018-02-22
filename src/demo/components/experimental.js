import React from 'react';
import "./main.css";

export default ({content}) => {
    return(<div className="item experimental">{content || 'experimental'}</div>)
}