import "./card.css"

const Card = ({cart,handleRemoveFromCard}) => {
    return (
        <div>
            <h4>Card:{cart.length}</h4>
            <div className='cart-container'>
                {
                    cart.map((bottle,idx)=>
                    <div key={idx}>
                         <img  src={bottle.img}></img>
                         <button onClick={()=>handleRemoveFromCard(bottle.id)}>remove</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Card;