import { combineReducers } from 'redux'
import job from './job'
import discuss from './discuss'
import collection from './collection'

export default combineReducers({
    job,discuss,collection
})