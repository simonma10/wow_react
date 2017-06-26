/**
 * Created by Simon Martin on 6/20/2017.
 */
import { FETCH_TOONS, FETCH_TOON, DELETE_TOON } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_TOON:
            //return new state object with deleted post omitted
            return _.omit(state, action.payload);
        case FETCH_TOONS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_TOON:
            /*const post = action.payload.data;
             const newState = { ...state };
             newState[post.id] = post;
             return newState;*/

            //square braces = variable interpolation.
            return { ...state, [action.payload.data.id]: action.payload.data };


        default:
            return state;
    }
}