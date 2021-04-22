import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

export class ThemeProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            darkMode: false
        }

        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme() {
        this.setState({ darkMode: !this.state.darkMode })
    }

    render() {
        return <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>{this.props.children}</ThemeContext.Provider>
    }
}