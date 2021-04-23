import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import { imageStorage, firestore } from '../firebase/config'
import { ThemeContext } from '../Context/Themecontext'

class Imagegallery extends Component {
    static contextType = ThemeContext

    constructor(props) {
        super(props)

        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
    }

    handleDeleteButtonClick(evt) {
        const name = evt.currentTarget.getAttribute("imageName")
        console.log(name)
        const document = evt.currentTarget.getAttribute("imageId")

        const storageRef = imageStorage.ref(name)

        const collectionName = this.props.userEmail && this.props.userId ? `${this.props.userId}` : 'anonnymous'
        firestore.collection(`users/${collectionName}/images`).doc(`${document}`).delete();

        storageRef.delete()
        .then(() => {
            console.log("SUCCESS")
        })
        .catch((err) => {
            console.log("FAILED")
            console.log(err)
        })

    }

    render() {
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
                                        <img src={image.url} alt="User Uploaded Pic" />
                                        <div className="image-delete">
                                            <Button onClick={this.handleDeleteButtonClick} imageId={image.id} imageName={image.imageName} variant="contained" color="secondary"><CloseIcon fontSize="large" color="default"></CloseIcon></Button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Imagegallery