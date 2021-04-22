import React, { createContext, Component } from 'react'
import { auth } from '../firebase/config'

export const AuthContext = createContext()

export class AuthProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: auth.currentUser.uid,
            userEmail: auth.currentUser.email
        }
    }

    render() {
        return <AuthContext.Provider value={{...this.state}}>{this.props.children}</AuthContext.Provider>
    }
}