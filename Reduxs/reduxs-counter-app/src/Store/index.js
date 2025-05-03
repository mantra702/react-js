import { createStore } from "redux";
import rootReducers from "../Reduxs/Reducers";

const store = createStore(rootReducers);

export default store;