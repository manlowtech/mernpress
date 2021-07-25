import React from 'react';
import styles from './NavBar.module.css';
import { AppBar, Toolbar, Grid, IconButton, Avatar, Badge } from '@material-ui/core';
import { Notifications, Person, Settings } from '@material-ui/icons';
function NavBar() {
    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                <div  className={styles.NavContainer}> 
                    <div className={styles.leftNav} >
                    <Avatar  className={styles.mp}>MP</Avatar>
                    </div>
                    <div className={styles.rightNav}>

                        <IconButton><Badge >
                            <Notifications />
                        </Badge></IconButton>
                        <Avatar><Person /></Avatar>
                        <IconButton><Settings /> </IconButton>
                    </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
