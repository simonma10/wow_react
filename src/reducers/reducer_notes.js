import { FETCH_NOTES, FETCH_NOTE, DELETE_NOTE, UPDATE_NOTE, CREATE_NOTE } from '../actions';
import _ from 'lodash';

const initialState = {
    id: 0,
    details: 'a test note'
}


export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_NOTES:
            console.log('reducer > fetch notes');
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_NOTE:
            /*const post = action.payload.data;
             const newState = { ...state };
             newState[post.id] = post;
             return newState;*/

            //square braces = variable interpolation.
            return { ...state, [action.payload.data.id]: action.payload.data };

        case DELETE_NOTE:
            return;

        case UPDATE_NOTE:
            return;

        case CREATE_NOTE:
            return Object.assign({}, state, {
                notes: [
                    ...state.notes,
                    {
                        id: action.payload.data.id,
                        details: action.payload.data.details
                    }
                ]
            });


        default:
            return state;
    }
}
