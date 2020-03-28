import userSaga from "./User/sagas";


function* mySaga() {
    yield* userSaga();
}

export default mySaga;
