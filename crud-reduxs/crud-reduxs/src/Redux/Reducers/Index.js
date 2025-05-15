import { combineReducers } from "redux";
import crudReducer from "./CrudRedux";
import counterReducer from "./CounterReducer";

const rootReducers = combineReducers({
    'crud': crudReducer,
    'counter': counterReducer,
});

export default rootReducers;