const getStoreCard=()=>{
    const storeCardString=localStorage.getItem("card");
    if(storeCardString){
        return JSON.parse(storeCardString)
    }
    return [];
}

const saveCartToLS=(card)=>{
     const cardStrigified=JSON.stringify(card)
     localStorage.setItem("card",cardStrigified)
}

const addToLs=(id)=>{
    const card=getStoreCard();
    card.push(id);
    //save to Local storage
    saveCartToLS(card)
}
const removeFromLS=(id)=>{
    const card=getStoreCard()
    const remainig=card.filter(idx=>idx !== id)

    saveCartToLS(remainig)
}

export {addToLs,getStoreCard,removeFromLS}