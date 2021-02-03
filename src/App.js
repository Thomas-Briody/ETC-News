// ? Libraries
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

// ? Components

// ? Routes

import NavBar from './components/Navbar'
import Home from './components/Home'
import Category from './components/category'

// ? style

import './styles/style.scss'
import 'bulma'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/category/:id" component={Category}/>
    </Switch>
  </BrowserRouter>

)

export default App