import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ToonsReducer from './reducer_toons';

const rootReducer = combineReducers({
    toons: ToonsReducer,
    form: formReducer
});

export default rootReducer;
