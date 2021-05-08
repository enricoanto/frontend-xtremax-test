import {SET_SINGLE_DATA, SET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_RESPONSE } from './type'

export const getDataRequest = () => ({
    type: GET_DATA_REQUEST
})

export const getDataResponse = (data) => ({
    type: GET_DATA_RESPONSE,
    data
})

export const getDataError = (error) => ({
    type: GET_DATA_ERROR,
    error
})


export const setData = (payload) => dispatch => ({
    type: SET_DATA,
    payload
})

export const setSingleData = (result) => dispatch => ({
    type: SET_SINGLE_DATA,
    result
})


export const GET_DATA = () => {
    return dispatch => {
        dispatch(getDataRequest())
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then((data) => {
                dispatch(getDataResponse(data))
            })
            .catch(err => {
                console.log(err.response)
                dispatch(getDataError(err))
            })
    }
}