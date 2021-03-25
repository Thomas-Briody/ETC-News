// ? Libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// ? Components

// ? Routes

import NavBar from './components/Navbar'
import Home from './components/Home'
import Article from './components/Article'
import Weather from './components/Weather'
import Business from './components/Business'
import Entertainment from './components/Entertainment'
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'

// ? style

import './styles/style.scss'
import 'bulma'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/ETC-News/" component={Home}/>
      <Route exact path="/ETC-News/business/" component={Business}/>
      <Route exact path="/ETC-News/entertainment/" component={Entertainment}/>
      <Route exact path="/ETC-News/health/" component={Health}/>
      <Route exact path="/ETC-News/science/" component={Science}/>
      <Route exact path="/ETC-News/sports/" component={Sports}/>
      <Route exact path="/ETC-News/technology/" component={Technology}/>
      <Route exact path="/ETC-News/article" component={Article}/>
      <Route exact path="/ETC-News/weather" component={Weather}/>
      <Route exact path="/ETC-News/:id/article" component={Article}/>
    </Switch>
  </BrowserRouter>

)

export default App