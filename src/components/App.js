import React from 'react'
import { hot } from "react-hot-loader"
import { Switch, Route } from 'react-router-dom'
import Header from './organisms/Header'
import Home from './pages/Home'
import About from './pages/About'

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  </div>
)

export default hot(module)(App)