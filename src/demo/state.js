const initialState = {
    content:'this is the content for the stable component'
}

export const reducer = (state = initialState, action) => {
    const {type} = action;
    switch(type) {
        default:
            return state;
    }
}