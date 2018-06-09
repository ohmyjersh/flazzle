import PropTypes from 'prop-types';

export const Flag = ({flag, experimental, stable}) =>  (evaluateFlag(flag) ? experimental() : !!stable && stable());

const evaluateFlag = flag => (typeof flag === 'function') ? flag() : flag;

Flag.prototype = {
    flag: PropTypes.bool.isRequired,
    experimental: PropTypes.func.isRequired,
    stable: PropTypes.func
}