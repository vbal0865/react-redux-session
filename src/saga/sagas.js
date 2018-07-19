import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* mockSaga() {
   try {
      const notes = yield call(Api.mockAPI);
      yield put({type: "MOCK_FETCH_SUCCEEDED", payload: notes});
   } catch (e) {
      yield put({type: "MOCK_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("MOCK_FETCH_REQUESTED", mockSaga);
}

export default mySaga