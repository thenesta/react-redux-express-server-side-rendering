import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import mySaga from '../saga'
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
//const store = createStore(rootReducer);
//export default store;

const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

// then run the saga
sagaMiddleware.run(mySaga)

export default store;
