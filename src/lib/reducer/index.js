const actionTypes = {
    UPDATE_FLAGS : 'SUPER_SECRET_ACTION_TO_UPDATE_FLAGS_FOR_FLIZZLE_PLEASE_BE_UNIQUE_SO_NO_OTHER_REDUCER_USES_IT_69'
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

export const flazzleActions = {
    updateFlags: flags => ({type:actionTypes.UPDATE_FLAGS, payload:flags})
}
