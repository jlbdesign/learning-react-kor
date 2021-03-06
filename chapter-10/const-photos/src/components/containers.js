import { connect } from 'react-redux'
//import AddColorForm from './ui/AddColorForm'
//import SortMenu from './ui/SortMenu'
//import ColorList from './ui/ColorList'
//import { addColor, rateColor, removeColor, sortColors } from '../actions'
//import { sortFunction } from '../lib/array-helpers'
import PhotoGroup from './ui/PhotoGroup'
import PhotoGroupList from './ui/PhotoGroupList'


export const Photos = connect(
    null,
    dispatch =>
    ({
        onRemove() {
            ;
        }
    })
)(PhotoGroup)

export const Groups = connect(
    state =>
    ({
        photos: [...state.photos]
    }),
    dispatch =>
    ({
        onRemove() {
            ;
        }
    })
)(PhotoGroupList)