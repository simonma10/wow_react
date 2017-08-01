import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ToonsReducer from './reducer_toons';
import NotesReducer from './reducer_notes';

const rootReducer = combineReducers({
    toons: ToonsReducer,
    notes: NotesReducer,
    form: formReducer
});

export default rootReducer;
