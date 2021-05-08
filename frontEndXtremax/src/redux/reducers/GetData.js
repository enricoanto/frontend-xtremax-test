import {SET_SINGLE_DATA, SET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_RESPONSE } from '../actions/type'

const initialState = {
    loading: false,
    data: [],
    error: null,
    single_data: {flag: false}
}

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case GET_DATA_RESPONSE:
            return Object.assign({}, state, {
                loading: false,
                data: action.data,
            });
        case GET_DATA_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        case SET_DATA:
            return { ...state, data: action.payload }
        case SET_SINGLE_DATA:
            return { ...state, single_data: action.result }
        default:
            return state
    }

}