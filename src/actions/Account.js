import { api } from 'utils/Ajax';

export const getSession = () => (dispatch, getState) => {
    return dispatch(api({
        method: 'GET',
        url: '/api/v1/users/session',
        success: (resData) => {
            dispatch({
                type: 'GET_SESSION',
                payload: resData
            })
            dispatch({
                type: 'SESSION_FETCHED',
                payload: {
                    fetched: true
                }
            })
        }
    }))
};
