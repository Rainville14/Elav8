const initialState = {
  'isAuthenticated': false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'GET_SESSION':
      return { 
        ...state, 
        ...payload
      }

    default:
      return state
  }
}
