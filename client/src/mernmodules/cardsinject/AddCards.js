import React,{useState,useEffect, lazy} from 'react'
import axios from 'axios'

function AddCards({cardID,path,name}) {
    const [cards,setCards] = useState([])
    const getCards =()=>{
        vards ={
            cardid:cardID
        }
        const res = axios.get('/widgets/getcards');
        setCards(res.data.cards)
    }
    const addCards = ()=>{
        const vars ={
            cardid:cardID,
            path:path,
            name:name
        }
      const response = axios.post('/widgets/addcards',vars)
      console(response.data)

    }
    useEffect(() => {
        addCards();
        getCards();
        
    }, [])
    if(!cards){
     
    cards.forEach(file=>{
        const PathsComponent = lazy(()=>import(`../../${file.path}`))
        return (
            <div className={`cards-${cards.name ? cards.name : "hello"}`}>
                <PathsComponent/>
            </div>
        )
    })
    }
    
}

export default AddCards
