import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {RETRIEVE_ADDONS} from './constants'
function AdInit() {
    const [Addons,setAddons] = useState([]);
    useEffect(() => {
        const getAllAddons = async()=>{
          const response =  await axios.get(`${RETRIEVE_ADDONS}`)
          setAddons(response.data.addons)
        }
        getAllAddons();
        
    }, [])
    if(Addons){
       Addons.forEach(file=>{
           const Addon = lazy(()=>import(`../${file.path}`));
           return <Addon/>
       })
    }
    
}

export default AdInit
