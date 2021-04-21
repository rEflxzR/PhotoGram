import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useMediaQuery } from "@material-ui/core";
import { imageStorage, firestore, timestamp } from '../firebase/config'
import LinearProgressWithLabel from './Progressmeter'


// const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));
// const buttonProps = {
//     variant: isSmallScreen ? "text" : "outlined",
//     size: isSmallScreen ? "small" : "large"
// };


class Imageform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFile: null,
            invalidFile: false,
            showProgressMeter: false,
            uploadPercent: null
        }

        this.handleImageUpload = this.handleImageUpload.bind(this)
    }

    handleImageUpload(evt) {
        const selectedImage = evt.currentTarget.files[0]
        const imageType = evt.currentTarget.files[0].type

        if(selectedImage && (imageType==="image/png" || imageType==="image/jpeg")) {
            this.setState({ imageFile: selectedImage, invalidFile: false, showProgressMeter: true })

            const storageRef = imageStorage.ref(selectedImage.name)
            const imagesURLCollection = firestore.collection('images')

            storageRef.put(selectedImage).on('state_changed', (snap) => {
                const percent = (snap.bytesTransferred/snap.totalBytes)*100
                this.setState({ uploadPercent: percent })
            }, (err) => {
                console.log(err)
            }, async() => {
                const imageURL = await storageRef.getDownloadURL()
                imagesURLCollection.add({ url: imageURL, uploadedAt: timestamp() })
                this.setState({ imageFile: null, showProgressMeter: false, uploadPercent: null })
            })
        }
        
        else {
            this.setState({ imageFile: null, invalidFile: true, showProgressMeter: false })
            setTimeout(() => {this.setState({ imageFile: null, invalidFile: false })}, 3000)
        }
    }

    render() {
        const {imageFile, invalidFile, uploadPercent, showProgressMeter} = this.state
        return (
            <div className="mx-auto" style={{ width: '80vw' }}>
                <form id="image-form">
                    <span className="mr-2">
                        <input accept="image/*" hidden id="image-upload-button" type="file" onChange={this.handleImageUpload}/>
                        <label htmlFor="image-upload-button">
                            <Button size="large" variant="contained" color="primary" component="span"><strong>Upload</strong></Button>
                        </label>
                    </span>
                    <span>
                        <TextField style={{ width: '80%' }} error={invalidFile ? true : false} helperText={invalidFile ? "Please Choose a PNG or JPEG File" : ""} value={imageFile ? imageFile.name : ""}></TextField>
                    </span>
                </form>
                <div className="progressmeter my-3" style={{ display: showProgressMeter ? 'block' : 'none' }}>
                    <LinearProgressWithLabel value={uploadPercent} />
                </div>
            </div>
        )
    }
}

export default Imageform