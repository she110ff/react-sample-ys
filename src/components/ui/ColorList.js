import '../../stylesheets/ColorList.css'
import React from 'react'
import PropTypes from 'prop-types'
import Color from './Color'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>

		<div className='color-list'>
			{(colors.length === 0) ?
				<p>No SortedColors. (Add Color)</p> : 
				colors.map( color =>
					<Color key={color.id}
						{...color}
	                       onRate={(rating) => onRate(color.id, rating)}
	                       onRemove={() => onRemove(color.id)}
					/>
				)

			}
		</div>



ColorList.proptypes = {
	store: PropTypes.object
}

export default ColorList