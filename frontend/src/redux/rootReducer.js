import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import user from './User/reducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user,
});

export default createRootReducer;
