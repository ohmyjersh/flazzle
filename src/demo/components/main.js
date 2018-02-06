import React from 'react';
import {Flag} from '../../lib';
import Experimental from './experimental';
import Stable from './stable';

export default ({flags, state}) => {
    return (
        <div>
            <Flag flag={flags.feature1} experimental={() => <Experimental />} stable={() => <Stable content={state.content} />} />
            <br />
            <Flag flag={flags.feature2} experimental={() => <Experimental />} />
        </div>
        )
}