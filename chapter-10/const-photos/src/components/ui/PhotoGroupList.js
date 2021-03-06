import PropTypes from 'prop-types'
//import PhotoGroup from './Photo'
import { Photos } from '../containers'

const PhotoGroupList = ({photos=[]}) =>
    <div className="photo-list">
        {(photos.length === 0) ?
            <p>색이 없습니다. (색을 추가해 주세요)</p> :
            photos.map(photo =>
                <Photos key={photo.id} {...photo}/>
            )
        }
    </div>

PhotoGroupList.propTypes = {
    photos: PropTypes.array,
}

export default PhotoGroupList
