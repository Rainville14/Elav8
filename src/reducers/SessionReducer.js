const initialState = {
    'fetched': false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SESSION_FETCHED':
            return {
                ...state,
                ...payload
            }

        default:
            return state
    }
}
