import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import { auth } from "../firebase/config"
import firebase from "firebase"


const FreeButton = styled(Button)({
    background: 'linear-gradient(315deg, #00b712 0%, #5aff15 74%)',
    color: 'black'
})

const GoogleButton = styled(Button)({
    background: 'linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)',
    color: 'black'
})

const GithubButton = styled(Button)({
    background: 'linear-gradient(315deg, #000000 0%, #414141 74%)',
    color: 'white'
})



class Signupform extends Component {
    constructor(props) {
        super(props)

        this.googleSignIn = this.googleSignIn.bind(this)
        this.githubSignIn = this.githubSignIn.bind(this)
    }

    googleSignIn() {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    githubSignIn() {
        auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    }

    render() {
        return(
            <div className="signup-page">
                <div className="signupform-div">
                    <form className="signupform">
                        <h1 className="text-dark text-center my-3">Welcome to PHOTOGram</h1>
                        <div className="signupform-buttons my-2">
                            <FreeButton size="large" variant="contained" color="primary"><strong>Try it for Free</strong></FreeButton>
                        </div>
                        <div className="signupform-buttons my-2">
                            <GoogleButton onClick={this.googleSignIn} size="large" variant="contained" color="primary"><strong>Sign in with Google</strong></GoogleButton>
                        </div>
                        <div className="signupform-buttons my-2">
                            <GithubButton onClick={this.githubSignIn} size="large" variant="contained" color="primary">Sign in with Github</GithubButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signupform