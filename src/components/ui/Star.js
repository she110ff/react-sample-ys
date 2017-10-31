import '../../stylesheets/Star.css'
import React from 'react'
import Proptypes from 'prop-types'

const Star = ({selected=false, onClick=f=>f}) =>
	<div className={selected ? 'star selected' : 'star'}
		onClick={onClick} >
	</div>

Star.proptypes = {
	selected: Proptypes.boolean,
	onClick: Proptypes.func
}

export default Star