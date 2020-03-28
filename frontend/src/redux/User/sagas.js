import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as api from "../../api";


function* signUp(action) {
    try {
        yield call(api.signUp, action.payload);
        yield put(actions.signIn(action.payload));
    } catch (e) {
        debugger
    }
}

function* signIn(action) {
    try {
        const tokens = yield call(api.getTokens, action.payload);
        localStorage.setItem("refresh", tokens.refresh);
        localStorage.setItem("access", tokens.access);
        yield put(actions.signUserIn());
    } catch (e) {
        debugger
    }
}

function* refreshToken() {
    try {
        const refresh = localStorage.getItem("refresh");
        if (!refresh) return;
        const res = yield call(api.refreshToken, { refresh });
        localStorage.setItem("access", res.access);
        yield put(actions.signUserIn());
    } catch (e) {
        localStorage.removeItem("access"); // TODO - what to do about expired tokens
        localStorage.removeItem("refresh"); // TODO - what to do about expired tokens
    }
}

function* signOut() {
    try {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        yield put(actions.signUserOut());
    } catch (e) {
        debugger
    }
}

function* mySaga() {
    yield takeLatest(actions.SIGN_UP, signUp);
    yield takeLatest(actions.SIGN_IN, signIn);
    yield takeLatest(actions.SIGN_OUT, signOut);
    yield takeLatest(actions.REFRESH_TOKEN, refreshToken);
}

export default mySaga;
