import React, { Component } from 'react'
import { ThemeContext } from '../Context/Themecontext'

class Pagecontent extends Component {
    static contextType = ThemeContext

    render() {
        const { darkMode } = this.context
        const styles = {
            minHeight: '100vh',
            backgroundColor: darkMode ? "#2d3436" : "#b8c6db",
            backgroundImage: darkMode ? "linear-gradient(315deg, #2d3436 0%, #000000 74%)" : "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
        }

        return <div style={styles}>{this.props.children}</div>
    }
}

export default Pagecontent