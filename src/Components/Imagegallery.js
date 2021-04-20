import React, { Component } from 'react'

class Imagegallery extends Component {
    render() {
        const { imagesData } = this.props
        const rowsNum = Math.ceil(imagesData.length/3)
        return(
            <div className="image-grid">
                {
                    [...new Array(rowsNum)].map((row, index) => {
                        return <div className="row">
                            {
                                imagesData.map((image) => {
                                    return <div className="col col-4">
                                        <img src={image.url} alt="User Uploaded Pic" />
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