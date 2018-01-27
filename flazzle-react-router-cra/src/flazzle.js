const actionTypes = {
    UPDATE_FLAGS : 'SUPER_SECRET_ACTION_TO_UPDATE_FLAGS_FOR_FLIZZLE_PLEASE_BE_UNIQUE'
}

export const flazzleReducer = flags => (state = flags, action) => {
    const {type, payload } = action;
    switch(type) {
        case actionTypes.UPDATE_FLAGS:
            return {...payload};
        default:
            return state;
    }
}

export const actions = {
    updateFlags: flags => ({type:actionTypes.UPDATE_FLAGS, payload:flags})
}

export const Flag = ({flag, experimental, stable}) => (flag ? experimental() : !!stable && stable());
