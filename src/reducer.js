import {
    ChangeSearchField,
    RequestRobotsFailure,
    RequestRobotsSuccess,
    RequestRobotsPending
} from './constants';

const initialStateSearch = {
    searchField : ''
}

export const SearchRobots = (state = initialStateSearch,action = {}) => {

    switch(action.type){

        case ChangeSearchField:
            return {...state, searchField:action.payload};  //return Object.assign({}, state, {searchField:action.payload}) --- we can use this also

        default:
            return state;
    }
}

const initialeStateRobots = {
    isPending : false,
    robots : [],
    error: ''
}

export const requestRobots = (state = initialeStateRobots, action = {}) => {

    switch(action.type){

        case RequestRobotsPending:
            return Object.assign( {}, state, {isPending:true});

        case RequestRobotsSuccess:
            return Object.assign( {}, state, {robots:action.payload}, {isPending:false});

        case RequestRobotsFailure:
            return Object.assign( {}, state, {error:action.payload, isPending:false});

        default:
            return state;
    }
}