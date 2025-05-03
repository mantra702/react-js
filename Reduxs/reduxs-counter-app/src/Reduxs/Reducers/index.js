import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducers = combineReducers({
    'counter': counterReducer,
});

export default rootReducers;