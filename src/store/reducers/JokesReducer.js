const initState = {
    jokes: [
        {
        "id": 1,
        "type": "general",
        "setup": "What did the fish say when it hit the wall?",
        "punchline": "Dam."
      },
      
      {
        "id": 5,
        "type": "general",
        "setup": "Why can't bicycles stand on their own?",
        "punchline": "They are two tired"
      },
    
      {
        "id": 6,
        "type": "general",
        "setup": "How does a train eat?",
        "punchline": "It goes chew, chew"
      }
    
    ]
}

const JokesReducer = (state = initState, action) => {
    return state
}

export default JokesReducer