import React, { Component } from 'react'
import { ThemeContext } from '../Context/Themecontext'

class Imagegallery extends Component {
    static contextType = ThemeContext

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