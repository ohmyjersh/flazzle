import PropTypes from 'prop-types';

export const Flag = ({flag, experimental, stable}) =>  (flag ? experimental() : !!stable && stable());

Flag.prototype = {
    flag: PropTypes.bool.isRequired,
    experimental: PropTypes.func.isRequired,
    stable: PropTypes.func
}