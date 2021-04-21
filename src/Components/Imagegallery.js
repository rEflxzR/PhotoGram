import React, { Component } from 'react'

class Imagegallery extends Component {
    render() {
        const { imagesData } = this.props
        const rowsNum = Math.ceil(imagesData.length/4)
        return(
            <div className="image-grid">
                {
                    [...new Array(rowsNum)].map((row, index) => {
                        return <div className="row imagerow">
                            {
                                imagesData.slice(index*3, index*3+3).map((image) => {
                                    return <div key={image.id} className="imagediv col col-12 col-lg-3">
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