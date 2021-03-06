import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)

        this.handleModalCloseClick = this.handleModalCloseClick.bind(this)
    }

    handleModalCloseClick(evt) {
        this.props.closeModal(evt)
    }

    render() {
        const {imgSrc} = this.props

        return(
            <div className="modal-display">
                <div onClick={this.handleModalCloseClick} className="main-modal row">
                    <div onClick={this.handleModalCloseClick} className="modal-box row">
                        <div onClick={this.handleModalCloseClick} className="finbox col col-12">
                            <img src={imgSrc} alt="Magnified Pic" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal