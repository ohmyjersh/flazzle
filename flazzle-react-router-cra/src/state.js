const initialState = {
    content:'hi'
}

export const reducer = (state = initialState, action) => {
    const {type} = action;
    switch(type) {
        default:
            return state;
    }
}