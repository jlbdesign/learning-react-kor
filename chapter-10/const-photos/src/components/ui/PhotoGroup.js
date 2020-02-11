import PropTypes from 'prop-types'
import Photo from './Photo'

const PhotoGroup = ({photos=[]}) =>
    <div className="photo-list">
        {(photos.length === 0) ?
            <p>색이 없습니다. (색을 추가해 주세요)</p> :
            photos.map(photo =>
                <Photo key={photo.id} {...photo} path={photo.path}/>
            )
        }
    </div>

PhotoGroup.propTypes = {
    photos: PropTypes.array,
}

export default PhotoGroup