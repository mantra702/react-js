import { createStore } from "redux";
import rootReducers from "../Reducers/Index";

const store = createStore(rootReducers);

export default store;