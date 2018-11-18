import {ChangeSearchField, RequestRobotsFailure, RequestRobotsPending, RequestRobotsSuccess} from './constants';

export const setSearchField = (text) => ({
    type : ChangeSearchField,
    payload : text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type:RequestRobotsPending});
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    }).then(data => {
       dispatch({
           type: RequestRobotsSuccess,
           payload: data
       }) 
    }).catch(error => {
        dispatch({
            type: RequestRobotsFailure,
            payload: error
        })
    })
}