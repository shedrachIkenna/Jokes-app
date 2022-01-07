import React, { Component } from 'react'
import Ratings from './Ratings'
import JokesList from '../jokes/JokesList'

class JokesDashboard extends Component {
    render () {
        return (
            <div className="Dashboard">
                <div className="row">
                    <div className="col s8 jokesDashboard">
                        <JokesList />
                    </div>
                    <div className="col s4">
                        <Ratings />
                    </div>
                </div>
            </div>
        )
    }
}

export default JokesDashboard;