import React,{useState,useEffect} from 'react';
import {Menus} from './Menus';
import Left from './Left';
import Right from './Right';
function Dashboard() {
    const [menus,setMenus] = useState([]);
    const [slug,setSlug] = useState();
    const [component,setComponent] = useState();
    useEffect(()=>{
        setMenus(Menus);
    },[]);
   const handleMenuChange= (slug,component)=>{
       setSlug(slug);
       setComponent(component);
    }
    return (
        <div>
            <Left handleMenuChange={handleMenuChange} menus={menus}/>
            <Right menu_slug={menu_slug} component={component} />
        </div>
    )
}

export default Dashboard;
