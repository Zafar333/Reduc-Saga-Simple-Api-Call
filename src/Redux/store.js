import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers/rootReducer";
import mysaga from "./saga";
const middleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(middleware));
middleware.run(mysaga);
export default store;
