import React, { Component } from 'react'
import Ratings from './Ratings'
import JokesList from '../jokes/JokesList'
import { connect } from 'react-redux'
import { fetchJokes } from '../../store/actions/JokesAction'

class JokesDashboard extends Component {
    componentDidMount() {
        this.props.displayJoke();
    }
    render () {
        // console.log(this.props)
        const { jokes } = this.props
        return (
            <div className="Dashboard">
                <div className="row">
                    <div className="col s8 jokesDashboard">
                        <JokesList jokes= {jokes}/>
                    </div>
                    <div className="col s4">
                        <Ratings />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        jokes: state.jokes.jokes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayJoke: () => {dispatch(fetchJokes())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JokesDashboard);