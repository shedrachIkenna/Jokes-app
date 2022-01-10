import { FETCHED_JOKE, FETCHED_JOKE_FAILED} from '../actions/JokesAction'

const initState = {
    jokes: [ ]
}

const JokesReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCHED_JOKE:
        console.log('Joke Fetched')
        return{
          jokes: action.payload
        }

      case FETCHED_JOKE_FAILED:
        console.log('Fetch joke error', action.err);
        return state;

      default:
        return state;
    }
}

export default JokesReducer