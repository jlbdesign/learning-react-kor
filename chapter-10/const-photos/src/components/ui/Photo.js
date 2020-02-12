import { Component } from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Photo.scss'
/*
const Photo = ({path}) => 
    <div className="photo-list">
        {path}
        <img src={path}/>
    </div>
*/
class Photo extends Component {
    render() {
        const { path } = this.props
        return (
            <div className="photo">
                <a href="#"><img src={path}/></a>
            </div>
        )
    }
}

export default Photo