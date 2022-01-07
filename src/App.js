import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import JokesDashboard from './components/Dashboard/JokesDashboard'
import About from './components/layout/About'
import Contact from './components/layout/Contact'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path= '/' element= {<JokesDashboard />} />
            <Route path= '/about' element= {<About />} />
            <Route path= '/contact' element= {<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
