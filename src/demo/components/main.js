import React from 'react';
import {Flag} from '../../lib';
import Experimental from './experimental';
import Stable from './stable';
import "./main.css";

export default ({flags, state}) => {
    return (
        <div className="container">
            <div className="row">
            <Flag className="item" flag={flags.feature1} experimental={() => <Experimental />} stable={() => <Stable content={state.content} />} />
            <br />
            <Flag className="item" flag={flags.feature2} experimental={() => <Experimental />} />
            </div>
        </div>
        )
}