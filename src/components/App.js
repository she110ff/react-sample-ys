import '../stylesheets/APP.css'
import React from 'react'
import { Menu, NewColor, Colors } from './containers'

const App = ({store}) =>
	<div className='app'>
		<NewColor store={store} /> 
		<Colors store={store} />
	</div>

export default App 