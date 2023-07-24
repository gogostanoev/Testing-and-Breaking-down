import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { movieReducer } from "./reducers/movieReducer";

// const store = createStore(counterReducer) // => vnatre vo samiot createStore() se stava reducerot

const rootReducer = combineReducers({
    counterReducer,
    movieReducer,
});

const store = createStore(rootReducer);

export default store;