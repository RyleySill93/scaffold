import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from './rootReducer';
import mySaga from './rootSaga'

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleWares = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
);

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(middleWares),
);

sagaMiddleware.run(mySaga);

export default store;
