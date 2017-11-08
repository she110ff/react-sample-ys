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

import { Home } from './pages/home'
import { Events } from './pages/events'
import { Sermons } from './pages/sermons'
import { Galleries } from './pages/gallery'
import { Contacts } from './pages/contacts'


window.React = React

const store = storeFactory()

const render = () => 
	ReactDOM.render(
		  <Router>
		    <div className='main'>
		        <Route exact path="/" component={Home} />
		        <Route path="/events" component={Events} />
		        <Route path="/sermons" component={Sermons} />
		        <Route path="/gallery" component={Galleries} />
		        <Route path="/contacts" component={Contacts} />
		    </div>
		  </Router>
		,
		document.getElementById('root')
	)

store.subscribe(render)
render()

registerServiceWorker()