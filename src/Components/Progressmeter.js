import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

class LinearProgressWithLabel extends Component {
    render() {
        return (
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress variant="determinate" {...this.props} />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${Math.round(this.props.value,)}%`}</Typography>
                </Box>
            </Box>
        )
    }
}

export default LinearProgressWithLabel