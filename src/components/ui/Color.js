import '../../stylesheets/Color.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import FaTrash from 'react-icons/lib/fa/trash-o'

class Color extends Component{
	
	render() {
		const {title, color, timestamp, rating, onRate, onRemove } = this.props
		return (
			<section className='color'>
				<h1 ref='title'>{title}</h1>
				<button onClick={onRemove}>
					<FaTrash />
				</button>
				<div className='color'
					style={{backgroundColor: color}} >
				</div>
				<StarRating starSelected={rating} onRate={onRate} />
			</section>
		)		
	}

}

Color.proptypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	rating: PropTypes.number,
	onRemove: PropTypes.func,
	onRate: PropTypes.func
}

Color.dafaultProps = {
	rating: 0,
	onRemove: f=>f,
	onRate: f=>f
}

export default Color