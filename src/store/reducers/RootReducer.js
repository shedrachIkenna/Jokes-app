import RatingsReducer from './RatingsReducer'
import JokesReducer from './JokesReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    jokes: JokesReducer,
    ratings: RatingsReducer
})


export default RootReducer;
