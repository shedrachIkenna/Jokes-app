import React from 'react'


const JokesList = ({jokes}) => {
    console.log(jokes)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{jokes.setup}</span>
                    <p>{jokes.punchline}</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by SheddyFx</div>
                    <div>20th September, 2021</div>
                </div>
            </div>
        </div>
    )
}

export default JokesList