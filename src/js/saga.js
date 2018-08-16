import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './api/api'
import { push } from 'react-router-redux';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* createUser(input) {
   try {
      console.log('DATA');
      console.log('worker createUser is doing');
      const response = yield call(Api.createUser, input);
      console.log('RESPONSE');
      console.log(response);
      if(response.errors){
          yield put({type: "INPUT_CREATE_USER_HAS_ERRORED", hasErrored:response});
      }else{
           console.log('redirecting');
           // Report success to our store and redirect to another page
           input.data.history.push('/admin/user');
           //yield put(push('/admin/user'));
      }


   } catch (e) {
      console.log('worker createUser has failed '+e.message);
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
/*function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("INPUT_CREATE_USER_SUBMIT", createUser);
  console.log('mysaga start');
}

export default mySaga;
