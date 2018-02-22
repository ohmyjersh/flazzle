import React from 'react';
import {Flag} from '../../lib';
import Experimental from './experimental';
import Stable from './stable';
import "./main.css";

export default ({flags, state}) => {
    return (
        <div className="container">
            <div className="row">
            <Flag className="item" flag={flags.ReplaceStableComponent} experimental={() => <Experimental content={"this component was swapped with the stable one you previously saw."} />} stable={() => <Stable content={state.content} />} />
            <br />
            <Flag className="item" flag={flags.AddExperimentalComponent} experimental={() => <Experimental content={"this is a new component that is not backed by anything to fallback on."} />} />
            </div>
        </div>
        )
}