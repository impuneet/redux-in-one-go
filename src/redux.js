/* This file contains the store, actions, and reducers  */
import { combineReducers, createStore } from "redux";

//action.js
export const activateGeod = geod => ({
  type: "ACTIVATE_GEOD",
  geod
});

export const closeGeod = () => ({
  type: "CLOSE_GEOD"
});

// reducers.js

export const geod = (state = {}, action) => {
  switch (action.type) {
    case "ACTIVATE_GEOD":
      return action.geod;
    case "CLOSE_GEOD":
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod
});

// store.js
export function configureStore(intialState = []) {
  const store = createStore(reducers, intialState);
  return store;
}

export const store = configureStore();
