import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../styles/navbarstyles'
import { Switch } from '@material-ui/core'
import {ThemeContext} from '../Context/Themecontext'

class Title extends Component {
    static contextType = ThemeContext

    constructor(props) {
        super(props)
        this.state = {
            anchorElement: null
        }

        this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this)
        this.handleMenuButtonClose = this.handleMenuButtonClose.bind(this)
    }

    handleMenuButtonClick(evt) {
        this.setState({ anchorElement: evt.currentTarget })
    }

    handleMenuButtonClose() {
        this.setState({ anchorElement: null })
    }

    render() {
        const {classes} = this.props
        const {anchorElement} = this.state
        const { darkMode, toggleTheme } = this.context

        return(
            <div className="title">
                <AppBar className={classes.root} color={darkMode ? "default" : "primary"} position="static">
                    <Toolbar className="toolbar">
                        <Typography className={classes.title} color="inherit"><em>JanzWE's PhotoGram</em></Typography>
                        <div className={classes.normalMenu}>
                            <FormControlLabel className={classes.switchIcon} value="bottom" control={<Switch onChange={toggleTheme} color="secondary" />} 
                                label="Theme" labelPlacement="bottom"
                            />
                            <Tabs className={classes.tabs} value={"logout"} aria-label="simple tabs example">
                                <Tab icon={<PersonPinIcon fontSize="large" />} label="logout" />
                            </Tabs>
                        </div>

                        {/* Hamburger Menu Only Upto Medium Width Devices */}
                        <div className={classes.hamburgerMenu}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleMenuButtonClick}>
                                <MenuIcon />
                            </Button>
                            <Menu id="simple-menu" open={Boolean(anchorElement)} onClose={this.handleMenuButtonClose} keepMounted anchorEl={anchorElement}>
                                <MenuItem className={classes.menuItem}>
                                    <FormControlLabel className={classes.switchIcon} value="bottom" control={<Switch onChange={toggleTheme} color="secondary" />} label="Toggle Theme" labelPlacement="bottom"/>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <Tabs className={classes.tabs} value={"logout"} aria-label="simple tabs example">
                                        <Tab icon={<PersonPinIcon fontSize="small" />} label="logout" />
                                    </Tabs>
                                </MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>

                <h2 className={"text-center my-5 " + (darkMode ? "text-light":"text-dark")}>Your PIXIEST Pics Collection</h2>
            </div>
        )
    }
}

export default withStyles(styles)(Title);