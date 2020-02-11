import { Component } from 'react'
import PropTypes from 'prop-types'
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
            <div className="photo-list">
            {path}
                <img src={path}/>
            </div>
        )
    }
}

export default Photo