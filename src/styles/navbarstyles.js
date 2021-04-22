const styles = (theme) => ({
    root: {
        width: "100%"
    },
    title: {
        width: "100%",
        display: "inline",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
        [theme.breakpoints.up('xs')]: {
            fontSize: 20,
            fontWeight: "bold"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 60,
            fontWeight: "bold"
        }
    },
    normalMenu: {
        [theme.breakpoints.up('xs')]: {
            display: "none"
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
        }
    },
    hamburgerMenu: {
        [theme.breakpoints.up('lg')]: {
            display: "none"
        }
    },
    menuItem: {
        display: "flex",
        justifyContent: "center"
    },
    switchIcon: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: "auto",
        marginBottom: "auto"
    },
    tabs: {
        display: "flex",
        marginLeft: "auto",
    }
})

export default styles