import React from 'react'


const JokesList = ({jokes}) => {
    let joke = jokes[Math.floor(Math.random()*jokes.length)];
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{joke.setup}</span>
                    <p>{joke.punchline}</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by SheddFx</div>
                    <div>20th September, 2021</div>
                </div>
            </div>
        </div>
    )
}

export default JokesList