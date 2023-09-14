import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLs, getStoreCard,removeFromLS } from "../Utilities/localStorage";
import Card from "../Card/Card";


const Bottles = () => {
    const [bottles,setBottles]=useState([])
    const [card, setCard]=useState([])
    // console.log(bottles)
    // console.log(card)
   
    useEffect(()=>{
               fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
               .then(res=>res.json())
               .then(data=>setBottles(data))
    },[])

    useEffect(()=>{
            //  console.log("called the useeffect",bottles.length)
             if(bottles.length){
                const storeCard=getStoreCard();
                // console.log(storeCard,bottles);
                const saveCard=[]
                for (const id of storeCard) {
                    // console.log(id)
                   const bottle= bottles.find(bottle => bottle.id === id)

                        if(bottle){
                            saveCard.push(bottle)
                        }
                    
                }
                // console.log(saveCard);
                setCard(saveCard);
             }

    },[bottles])
 
    const handleAddToCard=(bottle)=>{
        const newCard=[...card,bottle]
        setCard(newCard)

        addToLs(bottle.id)
    }

    const handleRemoveFromCard=(id)=>{
           //visual card remove
           const remainingCard=card.filter(bottle=> bottle.id !== id)
           setCard(remainingCard)
           // remove from Local storage
           removeFromLS(id);
           console.log("remove")
    }

    return (
        <div>
            <h3>Bottles Available:{bottles.length} </h3>
            <Card cart={card} handleRemoveFromCard={handleRemoveFromCard}></Card>


            {/* <h4>Card:{card.length}</h4> */}
            <div className="bottles-container">
            {
                bottles.map(bottle=><Bottle 
                    key={bottle.id}  
                    bottle={bottle}
                    handleAddToCard={handleAddToCard}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;