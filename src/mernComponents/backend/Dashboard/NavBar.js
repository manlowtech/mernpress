import React from 'react'
import {AppBar,Toolbar } from '@material-ui/core';
function NavBar() {
    return (
        <div>
          <AppBar position="static" color="secondary">
              <Toolbar>
                  Hello
              </Toolbar>
            </AppBar>  
        </div>
    )
}

export default NavBar
