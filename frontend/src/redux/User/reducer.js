import * as actions from "./actions";

const userState = {
    isAuthenticated: false,
};


function users(state = userState, action) {
    switch (action.type) {
        case actions.SIGN_USER_IN:
            return {
                isAuthenticated: true,
            };
        case actions.SIGN_USER_OUT:
            return {
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

export default users;
