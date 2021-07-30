import React,{useState,useEffect} from 'react';
import styles from './NavBar.module.css';
import { AppBar, Toolbar, Grid, IconButton, Avatar, Badge } from '@material-ui/core';
import { Notifications, Person, Settings } from '@material-ui/icons';
import {Link} from 'react-router-dom'
function NavBar({params}) {
    const [Menus,setMenus] = useState([
        {
            wrapper:"settings",
            menus:[
                {
                    settings:"settings",
                }
            ]
        }
    ])
    const [Active,setActive] = useState([])

    if(!Active){
        Active.forEach(file=>{
            const ActiveDashBoard = lazy(()=>import(`../../${file.path}`))
        })
    }
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
                        
                        <IconButton><Settings /> </IconButton>
                        <Avatar><Person /></Avatar>
                    </div>
                    </div>
                </Toolbar>
            </AppBar>
            
            <div className={styles.Dashboard}>
            <div className="left__part">LEFT
                  { Menus &&
                      Menus.map((file,i)=>
                      <div key={i}>
                      <p className="wrapper">{file.wrapper}</p>
                      {
                          file.menus.map((m,i)=>
                          <div key={i}>
                          <Link to={`/admin/:menu_slug`}> <span className={`menu-${m.name}`}>{m.name}</span></Link>
                          
                          </div>
                        )
                      }
                      </div>
                    )
                  }



            </div>


            <div className="right__part">RIGHT
            {
                params.menu_slug == active.slug &&
                <ActiveDashBoard/>
            }
            </div>
            </div>
        </div>
    )
}

export default NavBar
