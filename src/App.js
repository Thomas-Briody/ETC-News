// ? Libraries
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

// ? Components

// ? Routes

import NavBar from './components/Navbar'
import Home from './components/Home'
import Category from './components/category'
import Article from './components/article'
import Weather from './components/weather'

// ? style

import './styles/style.scss'
import 'bulma'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/project-2/" component={Home}/>
      <Route exact path="/project-2/category/:id" component={Category}/>
      <Route exact path="/project-2/article" component={Article}/>
      <Route exact path="/project-2/weather" component={Weather}/>
      <Route exact path="/project-2/category/:id/article" component={Article}/>
    </Switch>
  </BrowserRouter>

)

export default App