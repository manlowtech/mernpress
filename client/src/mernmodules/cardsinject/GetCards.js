import React,{useEffect,useState} from 'react'
import axios from "axios";
function GetCards() {
    const [cards,setCards] = useState([])
    
    useEffect(() => {
        const getCards =async()=>{
            vards ={
                cardid:cardID
            }
            const res = await axios.get('/widgets/getcards');
            setCards(res.data.cards)
        }
        getCards();
        
    }, [])
    if (!cards) {
       
        cards.forEach(file=>{
            file.filter(file=>file.slug == file.parent)
         const PathsComponent = lazy(()=>import(`../../${file.path}`))
            return (
                <div className={`dash-cards-${file.name}`}>
                    <h4 className="header">{file.name}</h4>
                    <hr className="headerul"/>
                    <PathsComponent/>
                </div>
            )

        })
    }
    
}

export default GetCards
