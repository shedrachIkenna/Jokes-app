import React, { Component } from 'react'
import Ratings from './Ratings'
import JokesList from '../jokes/JokesList'
import { connect } from 'react-redux'

class JokesDashboard extends Component {
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
    return {
        jokes: state.jokes.jokes
    }
}

export default connect(mapStateToProps)(JokesDashboard);