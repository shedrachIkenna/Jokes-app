import axios from 'axios'
export const FETCHED_JOKE = 'FETCHED_JOKE';
export const FETCHED_JOKE_FAILED = 'FETCHED_JOKE_FAILED';

export const fetchJokes = () => {
    return (dispatch) => {
        axios.get('https://karljoke.herokuapp.com/jokes/random')
        .then((res) => {
            console.log(res);
            dispatch(showJoke(res.data))
        }).catch((err) => {
            dispatch(errorJoke(err))
        })
    }
}

const showJoke = (data) => {
    return {
        type: 'FETCHED_JOKE',
        payload: data
    }
}

const errorJoke = (err) => {
    return {
        type: 'FETCHED_JOKE_FAILED',
        payload: err
    }
}


