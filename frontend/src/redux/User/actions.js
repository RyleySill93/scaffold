export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const SIGN_USER_IN = 'SIGN_USER_IN';
export const SIGN_USER_OUT = 'SIGN_USER_OUT';

// REDUCER ACTIONS
export function signUserIn() {
    return {
        type: SIGN_USER_IN,
    }
}

export function signUserOut() {
    return {
        type: SIGN_USER_OUT,
    }
}


// SAGA ACTIONS
export function signUp(payload) {
    return {
        type: SIGN_UP,
        payload,
    }
}

export function signIn(payload) {
    return {
        type: SIGN_IN,
        payload,
    }
}

export function signOut() {
    return {
        type: SIGN_OUT,
    }
}

export function refreshToken() {
    return {
        type: REFRESH_TOKEN,
    }
}

