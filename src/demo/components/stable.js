import React from 'react';
import "./main.css";

export default props => {
    return(<div className="item stable">{props.content || 'Stable'}</div>)
}