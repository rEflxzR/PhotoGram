import React, { Component } from 'react'
import Title from './Title'
import Imageform from './Imageform'
import Imagegallery from './Imagegallery'
import { firestore } from '../firebase/config'

class Photogallerydashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userPhotos: []
        }
    }

    componentDidMount() {
        const result = []
        firestore.collection('images').orderBy('uploadedAt').onSnapshot((snap) => {
            snap.forEach((image) => {
                result.push({...image.data(), id: image.id})
            })

            this.setState({ userPhotos: result })
        })
    }

    render() {
        return (
            <div>
                <Title />
                <Imageform />
                <Imagegallery imagesData={this.state.userPhotos} />
            </div>
        )
    }
}

export default Photogallerydashboard