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
        const collectionName = this.props.userData.email && this.props.userData.uid ? this.props.userData.uid : 'anonnymous'
        firestore.collection(`users/${collectionName}/images`).orderBy('uploadedAt').onSnapshot((snap) => {
            const result = []
            snap.forEach((image) => {
                result.push({...image.data(), id: image.id})
            })

            this.setState({ userPhotos: result })
        })
    }

    render() {
        const { email, uid, displayName } = this.props.userData

        return (
            <div>
                <Title username={displayName} />
                <Imageform userEmail={email} userId={uid} />
                <Imagegallery userEmail={email} userId={uid} imagesData={this.state.userPhotos} />
            </div>
        )
    }
}

export default Photogallerydashboard