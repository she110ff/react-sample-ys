import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import storeFactory from './store'
import registerServiceWorker from './registerServiceWorker'

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  About, Events, Contact
} from './pages'

import { Home } from './pages/home'
import { Sermons } from './pages/sermons'


window.React = React


const store = storeFactory()

const render = () => 
	ReactDOM.render(
		  <Router>
		    <div className='main'>
		        <Route exact path="/" component={Home} />
		        <Route path="/sermons" component={Sermons} />
		        <Route path="/contact" component={Contact} />
		    </div>
		  </Router>
		,
		document.getElementById('root')
	)

store.subscribe(render)
render()

registerServiceWorker()