require('es6-promise');
require('isomorphic-fetch');

import APIC from 'constants/ApiConstants';

export const api = (payload) => {
    return {
        type: APIC.API_CALL,
        payload: payload
    }
}
