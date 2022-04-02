import React from 'react';

import { makeStyles } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import { NavLink } from 'react-router-dom';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

const useStyles = makeStyles(styles)

const TemporaryDrawer = (props) => {
    const classes = useStyles()
    const style_unset = { all: "unset" };
    const sideList = (
        <div className={classes.list}>
            <List>

                <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/" style={style_unset}>
                    <ListItem button key={'Home'}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </NavLink>



                <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/test" style={style_unset}>
                    <ListItem button key={'TestPage'}>
                        <ListItemIcon><SearchIcon /></ListItemIcon>
                        <ListItemText primary={'TestPage'} />
                    </ListItem>
                </NavLink>

            </List>
            <Divider />
            <List>


                <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/settings" style={style_unset}>
                    <ListItem button key={'Settings'}>
                        <ListItemIcon><Settings /></ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItem>
                </NavLink>


                <ListItem button key={'Version'}>
                    <ListItemIcon><CloudIcon /></ListItemIcon>
                    <ListItemText primary={'Version'} secondary={"v0.1"} />
                </ListItem>


            </List>
        </div>
    );
    return (
        <div>

            <SwipeableDrawer open={props.isDrawerOpen} onClose={props.toggleDrawer(false)} onOpen={props.toggleDrawer(true)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={props.toggleDrawer(false)}
                    onKeyDown={props.toggleDrawer(false)}
                >
                    {sideList}
                </div>
            </SwipeableDrawer>
        </div>

    )
}


export default TemporaryDrawer