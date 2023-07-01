import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

/* 
Creates a redux store that holds the complete state tree of your app.
There should only be a single store in your app

Arguments
    - reducer (func): a reducing function that returns the next state tree, given the current state tree and an action to handle
    - [preloadedState] (any): the initial state
    - [enhancer] (func): the store enhancer
*/
export const store = createStore(reducers, {}, applyMiddleware(thunk));
