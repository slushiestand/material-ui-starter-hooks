import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import AppBarMUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@material-ui/core/Button';
//import AccountCircle from '@mui/icons-material/AccountCircle';
//import Badge from '@material-ui/core/Badge';
//import NotificationsIcon from '@mui/icons-material/Notifications';


import { Link } from "react-router-dom";


import TemporaryDrawer from "./TemporaryDrawer";

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {

        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },


});
const useStyles = makeStyles(styles)

const AppBar = () => {
    const classes = useStyles()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open)
    };

    return (
        <div className={classes.root}>
            <AppBarMUI position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Link to={"/"} style={{ all: "unset" }}>{"Material-UI Starter"}</Link>
                    </Typography>
                </Toolbar>
            </AppBarMUI>
            <TemporaryDrawer
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
        </div>
    )
}

export default AppBar