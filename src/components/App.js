import '../stylesheets/APP.scss'
import React from 'react'
import AddColorForm from './AddColorForm'

const App = ({store}) =>
	<div className='app'>
		<AddColorForm store={store} />
	</div>

export default App