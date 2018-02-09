import { flazzleReducer, flazzleActions } from './index';

let initialFlags = {
    flag: true,
    flag1: false
}

let actionType = 'SUPER_SECRET_ACTION_TO_UPDATE_FLAGS_FOR_FLIZZLE_PLEASE_BE_UNIQUE_SO_NO_OTHER_REDUCER_USES_IT_69';

test('flags are set at initialState', () => {
    let state = flazzleReducer(initialFlags)(undefined, {type:'lol'})
    expect(state).toEqual(initialFlags);
});

test('sets new flags', () => {
    let payload = {flag:false, flag1: true};
    let state = flazzleReducer(initialFlags)(undefined, {type:actionType, payload:payload});
    expect(state).toEqual(payload);
});


test('should create action', () => {
    let action = flazzleActions.updateFlags({ flag: true });
    expect(action).toEqual({
        type: actionType,
        payload: { flag: true }
    });
});

