import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import { imageStorage, firestore } from '../firebase/config'
import { ThemeContext } from '../Context/Themecontext'
import Modal from './Modal'

class Imagegallery extends Component {
    static contextType = ThemeContext

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            selectedImage: null
        }

        this.closeModal = this.closeModal.bind(this)
        this.handleImageClick = this.handleImageClick.bind(this)
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
    }

    handleImageClick(evt) {
        const imageUrl = evt.currentTarget.getAttribute("src")
        this.setState({ showModal: true, selectedImage: imageUrl })
    }

    closeModal() {
        this.setState({ selectedImage: null, showModal: false })
    }

    handleDeleteButtonClick(evt) {
        const name = evt.currentTarget.getAttribute("imageName")
        console.log(name)
        const document = evt.currentTarget.getAttribute("imageId")

        const storageRef = imageStorage.ref(name)

        const collectionName = this.props.userEmail && this.props.userId ? `${this.props.userId}` : 'anonnymous'
        firestore.collection(`users/${collectionName}/images`).doc(`${document}`).delete();

        storageRef.delete()
    }

    render() {
        const { showModal, selectedImage } = this.state
        const { imagesData } = this.props
        const rowsNum = Math.ceil(imagesData.length/3)
        const { darkMode } = this.context

        return(
            <div className="image-grid">
                {
                    [...new Array(rowsNum)].map((row, index) => {
                        return <div className="row imagerow">
                            {
                                imagesData.slice(index*3, index*3+3).map((image) => {
                                    return <div key={image.id} className={"col col-12 col-lg-3 " + (darkMode ? "imagediv-dark":"imagediv")}>
                                        <img onClick={this.handleImageClick} src={image.url} alt="User Uploaded Pic" />
                                        <div className="image-delete">
                                            <Button onClick={this.handleDeleteButtonClick} imageId={image.id} imageName={image.imageName} variant="contained" color="secondary"><CloseIcon fontSize="large" color="default"></CloseIcon></Button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
                {showModal ? (<Modal imgSrc={selectedImage} closeModal={this.closeModal} />) : (null)}
            </div>
        )
    }
}

export default Imagegallery