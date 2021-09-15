import React,{useState,useEffect} from 'react';
import styles from './NavBar.module.css';
import { AppBar, Toolbar, IconButton, Avatar, Badge } from '@material-ui/core';
import { Notifications, Person, Settings } from '@material-ui/icons';
import {Link} from 'react-router-dom'
function NavBar({params}) {
    const [wrappers,setWrapper] = useState([])
    const [Menus,setMenus] = useState([
       
    ])
    const [Active,setActive] = useState([])

    const ActiveDashBoard = ()=>{
    if(!Active){
        Active.forEach(file=>{
            const ComponentActive = lazy(()=>import(`../../${file.path}`))
            return <ComponentActive/>
        })
    }
        
    }
    const MenusList = ()=>{
        if(!wrappers){
            return(
                <div className="menu__wrapper">
                {
                    wrappers.map((w,i)=>
                    <div className="wrappers_class" key={i}>
                    <p className={`lsb-${w.name} wrapperName`}>{w.name}</p>
                    {
                        Menus.filter(file=>file.slug === w.slug).map((file,i)=>
                        <div className="sbm_container" key={i}>
                        <Link onClick={()=>setActive(file)} className={`lsb-sbm-${file.name} sbm__container__item`} to={`/admin/${file.slug}`}>{file.name}</Link>
                        </div>
                        
                    )
                    }
                    </div>
                    )
                }
                </div>
            )
        }else{
            return "Loading Your Data,Please Wait"
        }
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
                <MenusList />
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
