import PropTypes from 'prop-types'
import Photo from './Photo'
import '../../stylesheets/PhotoGroup.scss'

const PhotoGroup = ({group=[]}) =>
    <div className="photo-group">
        <span>글씨</span>
        {(group.length === 0) ?
            <p>색이 없습니다. (색을 추가해 주세요)</p> :
            group.map(photo =>
                <Photo path={photo.path}/>
            )
        }
    </div>

PhotoGroup.propTypes = {
    group: PropTypes.array,
}

export default PhotoGroup