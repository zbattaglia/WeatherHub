import { combineReducers } from "redux";

import stateReducer from './stateReducer';

const rootReducer = combineReducers({
    testState: stateReducer,
})

export default rootReducer;