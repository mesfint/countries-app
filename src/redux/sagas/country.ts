import { takeLatest, call, put, select } from 'redux-saga/effects'
import { FETCH_COUNTRIES_SAGA } from '../../types/types'
import fetchCountries from '../actions/country'
import fetchData from './Api'

//Generator function

function* saveToLocalStorage(): any {
  //To save the data to LS first you need initial state
  //Select is same as getState in thunk
  const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
}

function* fetchDataWithSaga(): any {
  const response = yield call(fetchData)
  yield put(fetchCountries(response)) //Dispatching
}

export default [
  takeLatest(FETCH_COUNTRIES_SAGA, fetchDataWithSaga),
  takeLatest('*', saveToLocalStorage),
]
