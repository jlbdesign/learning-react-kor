//import { Component } from 'react'
import { Groups } from './containers'
import '../stylesheets/APP.scss'
//import PhotoGroup from './ui/PhotoGroup'

const App = () =>
    <div className="app">
        <Groups/>
    </div>

export default App

/*
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [
                {
                  "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036"
                },
                {
                  "id": "f9005b4e-975e-433d-a646-79df172e1dbb"
                },
                {
                  "id": "58d9caee-6ea6-4d7b-9984-65b145031979"
                },
                {
                  "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95"
                }
            ],
            "sort": "SORTED_BY_DATE"
        }
    }

    render() {
        //const { addColor, rateColor, removeColor } = this
        const { photos } = this.state
        return (
            <div className="app">
                <PhotoGroup photos={photos} />
            </div>
        )
    }

}
*/