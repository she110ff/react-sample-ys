import React from 'react'
import { PropTypes } from 'prop-types'
import AddColorForm from './ui/AddColorForm'
import ColorList from './ui/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
//import { sortFunction } from '../lib/array-helpers'

export const NewColor = ({ store }) =>
    <AddColorForm onNewColor={(title, color) =>
                      store.dispatch(addColor(title,color))
                  } />

NewColor.contextTypes = {
    store: PropTypes.object
}


export const Colors = ({ store }) => {
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort()
    return (
        <ColorList colors={sortedColors}
                   onRemove={id =>
                       store.dispatch( removeColor(id) )
                   }
                   onRate={(id, rating) =>
                       store.dispatch( rateColor(id, rating) )
                   }/>
    )
}

Colors.contextTypes = {
    store: PropTypes.object
}