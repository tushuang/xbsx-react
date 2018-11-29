import { combineReducers } from 'redux'
import job from './job'
import discuss from './discuss'
import collection from './collection'
// import {
//     combineReducers
//   } from 'redux-immutable';
   
// export const initialState = Immutable.Map();
export default combineReducers({
    job,discuss,collection
})