import React from 'react'
import Proptypes from 'prop-types'
import Star from './Star'

const StarRating = ({starSelected=0, totalStars=5, onRate=f=>f}) => 
	<div>
		{[...Array(totalStars)].map( (n, i) => 
			<Star key={i}
				selected={i<starSelected}
				onClick={() => onRate(i+1)} />
			)
		}
		<p>{starSelected} of {totalStars} stars</p>
	</div>

StarRating.proptypes = {
	starSelected: Proptypes.number,
	totalStars: Proptypes.number,
	onRate: Proptypes.func
}	

export default StarRating